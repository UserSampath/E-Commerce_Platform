const Order = require("../Model/OrderModel");
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const SelectOrder = async(req,res)=> {
    const {OrderId,ProductId,CustomerId,Status,Quantity} = req.body;
    try{
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


module.exports ={ SelectOrder};