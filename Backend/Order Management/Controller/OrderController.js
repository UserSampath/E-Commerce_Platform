const Order = require("../Model/OrderModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const axios = require('axios');
var nodemailer = require("nodemailer");

const getUserDetails = async (authorization) => {
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
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
            return null;
        }
        else {
            return userData;
        }
    } catch (error) {
        console.error("Error while fetching user details:", error);
        return null;
    }
}





const createOrder = async (req, res) => {
    const { Status, orderQuantity, productQuantity, ShippingAddress, name, price, description, image } = req.body;
    try {
        const { authorization } = req.headers;
        const userData = await getUserDetails(authorization);
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
                ShippingAddress
            })
            console.log(order);
            console.log(Quantity);
            if (order) {
                const response = await axios.put(`http://localhost:8080/api/item/${req.body.ProductId}`, { quantity: Quantity, name, price, description, image })

                console.log(response.data);
                sendMail(userData.email, "Your new order placed", "Your new order placed successfully , thank you for your order");
                res.status(200).json({
                    ProductId: order.ProductId,
                    CustomerId: order.CustomerId,
                    Status: order.Status,
                    quantity: order.Quantity,
                    ShippingAddress: ShippingAddress
                })
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
        const userData = await getUserDetails(authorization);
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
    const userData = await getUserDetails(authorization);
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
        const userData = await getUserDetails(authorization);
        if (userData.role != "Customer") {
            console.log("you're not a customer");
        }

        const orders = await Order.find().populate("_id"); // Assuming "items" is the field you want to populate

        return res.json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}
// Myorder part
// depend on the customer Id retrive customers order details
const getAllOrderForCustomer = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const userData = await getUserDetails(authorization);
        if (userData.role !== "Customer") {
            console.log("You're not a customer");
            return res.status(403).json({ error: "Forbidden" });
        }
        const orders = await Order.find({ CustomerId: userData._id });
        res.status(200).json({ customerOrder: orders });
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



