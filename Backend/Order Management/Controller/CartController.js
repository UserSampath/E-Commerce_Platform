const Cart = require("../Model/CartModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const axios = require('axios');



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





const createCart = async (req, res) => {
    const { ProductId } = req.body;
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
        // console.log("sasas", userData)
        const cart = await Cart.create({
            ProductId,
            CustomerId: userData._id,

        });

        res.status(200).json(cart);

    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteCart = async (req, res) => {
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
        const cart = await Cart.findOneAndDelete({ _id: id });
        if (!cart) {
            return res.status(404).json({ error: "cart not found" });
        }


        return res.json(cart);
    } catch (error) {
        console.error(error);
        res.status(404).json({ error: "Internal Server error" });

    }

};

const getAllCartsForCustomer = async (req, res) => {
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
        const cartData = await Cart.find({ CustomerId: userData._id });
        res.status(200).json(cartData);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}


// const getOrder = async (req, res) => {
//     const { id } = req.params;

//     const { authorization } = req.headers;
//     const userData = await getUserDetails(authorization);

//     try {
//         const order = await Order.findOne({ id: id })
//             .populate("OrderId");

//         if (!order) {
//             return res.status(404).json({ error: "order not found" });

//         }
//         return res.json({ order });

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "internal server error" });
//     }
// }
// const getAllOrders = async (req, res) => {
//     try {

//         const { authorization } = req.headers;
//         const userData = await getUserDetails(authorization);
//         const orders = await Order.find().populate("OrderId"); // Assuming "items" is the field you want to populate

//         return res.json({ orders });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal server error" });
//     }
// }

module.exports = { createCart, deleteCart, getAllCartsForCustomer };
