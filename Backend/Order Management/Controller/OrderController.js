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

const  deleteOrder = async(req, res) => { 
    const {id}= req.params;

    try{
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
module.exports ={ SelectOrder,deleteOrder};