const Order = require("../Model/OrderModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const axios = require('axios');

const CheckCustomer = async (authorization) => {
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(" ")[1];
    await axios
        .post("http://localhost:5000/api/auth/authUser", {}, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(async response => {
            const userData = response.data;
            console.log("get ",userData);


            if (!userData) {
                console.log("User not found")
            }
            else if(userData.role != "Customer"){
                console.log("your not customer")
            }

})
         
}



const SelectOrder = async(req,res)=> {
    const {OrderId,ProductId,CustomerId,Status,Quantity} = req.body;
    try{
        const { authorization } = req.headers;
        CheckCustomer(authorization);
        const order = await Order.create({
            OrderId,
            ProductId,
            CustomerId,
            Status,
            Quantity,
        });
        res.status(200).json({
            OrderId:order.OrderId,
            ProductId:order.ProductId,
            CustomerId:order.CustomerId,
            Status:order.Status,
            Quantity:order.Quantity,
        });
        
    }catch(error){
        res.status(400).json({error:error.message});
    }
}

const  deleteOrder = async(req, res) => { 
    const {id}= req.params;

    try{
        const { authorization } = req.headers;
        CheckCustomer(authorization);

        const order = await Order.findOneAndDelete({_id:id});
        if(!order){
            return res.status(404).json({error:"order not found"});
        }

        return res.json({order});
    }catch(error){
        console.error(error);
        res.status(404).json({error:"Internal Server error"});
        
    }

};

const getOrder = async(req,res)=>{
    const {id}= req.params;

    const { authorization } = req.headers;
    CheckCustomer(authorization);

    try{
        const order = await Order.findOne({id:id})
        .populate("OrderId");

        if(!order){
            return res.status(404).json({error:"order not found"});

        }
        return res.json({order});

    }catch(error){
        console.error(error);
        res.status(500).json({error:"internal server error"});
    }
}
const getAllOrders = async (req, res) => {
    try {

        const { authorization } = req.headers;

        CheckCustomer(authorization);
        const orders = await Order.find().populate("OrderId"); // Assuming "items" is the field you want to populate

        return res.json({ orders });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
    }
}

module.exports ={ SelectOrder,deleteOrder,getOrder,getAllOrders};