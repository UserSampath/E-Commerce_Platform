const Order = require("../Model/OrderModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const axios = require('axios');
var nodemailer = require("nodemailer");

const getUserDetails = async (authorization) => {
    if (!authorization) {
        return { error: "Authorization token required" };
    }
    const token = authorization.split(" ")[1];

    try {
        const response = await axios.post("http://localhost:5000/api/auth/getUserDetails", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        const userData = response.data;
        if (!userData) {
            console.log("User not found");
            return { error: "User not found" };
        }
        else {
            return userData;
        }
    } catch (error) {
        return { error: "Error while fetching user details" };
    }
}





const createOrder = async (req, res) => {
    const { Status, orderQuantity, productQuantity, ShippingAddress, name, price, description, image, deliverId, preparedDate, deliveryAcceptedDate, PickedUpDate, orderDeliveredDate
    } = req.body;
    try {
        const { authorization } = req.headers;
        const result = await getUserDetails(authorization);

        if (result.error) {
            // Handle the error response
            console.log("Error:", result.error);
            return res.status(500).json({ error: result.error });
        }

        const userData = result;
        if (userData.role != "Customer") {
            console.log("your not customer")
        }
        if (productQuantity < orderQuantity) {
            return res.status(400).json({ error: ` product Quantity is less than order quantity` });
        }
        else {
            const Quantity = productQuantity - orderQuantity;
            const order = await Order.create({
                ProductId: req.body.ProductId,
                CustomerId: userData._id,
                Status,
                Quantity: orderQuantity,
                ShippingAddress,
                deliverId,
                orderedDate: Date.now(),
                preparedDate,
                deliveryAcceptedDate,
                PickedUpDate,
                orderDeliveredDate
            })
            console.log(order);
            console.log(Quantity);
            if (order) {
                const response = await axios.put(`http://localhost:8080/api/item/${req.body.ProductId}`, { quantity: Quantity, name, price, description, image })

                console.log(response.data);
                sendMail(userData.email, "Your new order placed", "Your new order placed successfully , thank you for your order");
                res.status(200).json(order)
            } else {
                return res.status(400).json({
                    message: "could not add order"
                })
            }
        }

        // check the inventory with quantity
        // pass itemId and quantity to check  inventory and quantity if avawalable that product reduce the quantity return item details

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteOrder = async (req, res) => {
    const { id } = req.params;

    try {
        const { authorization } = req.headers;
        const result = await getUserDetails(authorization);

        if (result.error) {
            // Handle the error response
            console.log("Error:", result.error);
            return res.status(500).json({ error: result.error });
        }

        const userData = result;
        if (userData.role != "Customer") {
            console.log("your not customer")
        }
        const order = await Order.findOneAndDelete({ _id: id });
        if (!order) {
            return res.status(404).json({ error: "order not found" });
        }

        return res.json({ order });
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Internal Server error" });

    }

};

const getOrder = async (req, res) => {
    const { id } = req.params;

    const { authorization } = req.headers;
    const result = await getUserDetails(authorization);

    if (result.error) {
        // Handle the error response
        console.log("Error:", result.error);
        return res.status(500).json({ error: result.error });
    }

    const userData = result;
    if (userData.role != "Customer") {
        console.log("your not customer")
    }
    try {
        const order = await Order.findOne({ id: id })
            .populate("OrderId");

        if (!order) {
            return res.status(404).json({ error: "order not found" });

        }
        return res.json({ order });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "internal server error" });
    }
}
const getAllOrders = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const result = await getUserDetails(authorization);

        if (result.error) {
            // Handle the error response
            console.log("Error:", result.error);
            return res.status(500).json({ error: result.error });
        }

        const userData = result;
        if (userData.role != "Customer") {
            console.log("you're not a customer");
        }

        const orders = await Order.find().populate("_id"); 

        return res.json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
// Myorder part

const getAllOrderForCustomer = async (req, res) => {
    
    try {
        const { authorization } = req.headers;
        const result = await getUserDetails(authorization);

        if (result.error) {
            console.log("Error:", result.error);
            return res.status(500).json({ error: result.error });
        }

        const userData = result;
        if (userData.role !== "Customer") {
            console.log("You're not a customer");
            return res.status(403).json({ error: "Forbidden" });
        }

        const orders = await Order.find({ CustomerId: userData._id });

        //get products

        try {
            const response = await axios.get("http://localhost:8080/api/item");
            const products = response.data;
            let ordersWithProductData = [];
            for (let i = 0; i < orders.length; i++) {
                let { _id, ProductId, CustomerId, Status, Quantity, ShippingAddress, createdAt, updatedAt, deliverId, orderedDate, deliveryAcceptedDate, PickedUpDate, orderDeliveredDate, preparedDate } = orders[i]._doc;
                let orderWithProduct = {
                    _id,
                    ProductId,
                    CustomerId,
                    Status,
                    Quantity,
                    ShippingAddress,
                    createdAt,
                    updatedAt,
                    deliverId, orderedDate, deliveryAcceptedDate, PickedUpDate, orderDeliveredDate, preparedDate
                }
                for (let j = 0; j < products.length; j++) {
                    if (products[j].id === parseInt(orderWithProduct.ProductId)) {
                        orderWithProduct.productData = { ...products[j] };
                        break;
                    }
                }
                ordersWithProductData.push(orderWithProduct);
            }
            res.status(200).json({ ordersWithProductData });
        } catch (err) {
            console.log(err);
            return res.status(500).json({ error: "Products not found" });
        }


    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "lenzzhasthiyit@gmail.com",
        pass: "mfmpeqgzbjbxkcja",
    },
});




const sendMail = async (mail, subject, text) => {
    const mailOptions = {
        from: "lenzzhasthiyit@gmail.com",
        to: mail,
        subject: subject,
        text: text,
    };
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("error", error);
                res.status(201).json({ status: 201, message: "Email not send" });
            } else {
                console.log("Email sent", info.response);
                res
                    .status(201)
                    .json({ status: 201, message: "Email sent successfully " });
            }
        });
    } catch (err) {

    }

}


module.exports = { getAllOrderForCustomer, createOrder, deleteOrder, getOrder, getAllOrders };



