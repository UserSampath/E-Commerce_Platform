const Order= require("../models/OrderModel")
const axios= require("axios")

// get user data from user management
const getUser = async(authorization) =>{
    if (!authorization) {
        return ({ error: "Authorization token required" });
    }
    const token = authorization.split(" ")[1];
try{
    const response = await axios.post('http://localhost:5000/api/auth/getUserDetails',{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    if(response.length==0){
        return({ error: "User not found" });
    } else{
        return response.data;
    }
    
}
catch(error){
    console.log(error)
    return error; 
    
}
}
//get all orders by  delivery person's ID
const getOrderByDID = async(req,res) =>{
    const{authorization} = req.headers;
    try{
        const user= await getUser(authorization);
        // console.log(user);
        if(user.error){
            const error = user.error;
            res.status(400).json({error:"User authentication failed",error});
        }else{
            
            const id = user._id;
           const orders = await Order.find({deliverId:{ $in: id }});
           console.log(orders);
           if(orders.length==0){
            res.status(400).json({error:"No orders found"})
           }else{
            res.status(200).json({orders})
           } 
        }
    }catch(err){
        console.log(err);
        res.status(500).json({error})
    }


}

// common function for updating delivery data
const deliveryUpdate =async(data, callback) =>{
    const {authorization} = data.authorization;
    const{id} = data.id;
    const update = data.update;
    try{
        const date = new Date();
        const user= await getUser(authorization);
        console.log(user);
        if(user.error){
            const userError= user.error;
            const error = {error:"User authentication failed",userError}
                return callback(error);
        }else{

             const newupdate= await Order.findByIdAndUpdate(id,update)
             if(!newupdate){
                console.log();
                const error = {error:"order not found"}
                return callback(error);
            }else{
                return callback(null, newupdate)
            }
            
        }
       
    }catch(err){
        console.log(err);
        return callback(err);
    }

}
//aceept order function
const acceptOrder = async(req, res) => {
    const date = new Date();
    const{authorization} = req.headers;
 
 try{
    const user= await getUser(authorization)
    const update = [{
        $set:{
        deliverId:user._id,
        deliveryAcceptedDate:date
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body,
        update: update
     }
     deliveryUpdate(data,(err,result)=>{
        if(err){
            res.status(500).json({err})
        }else{
            res.status(200).json({message:"updated successfully", result})
        }
     })
 }catch(err){
    console.log(err);
 }

}
//mark order as picked up
const pickedUpOrder = async(req, res) => {
    const date = new Date();
    const{authorization} = req.headers;
 try{
    const update = [{
        $set:{
            Status:"ORDER PICKUP",
            PickedUpDate:date
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body,
        update: update
     }
    
     deliveryUpdate(data,(err,result)=>{
        if(err){
            res.status(500).json({err})
        }else{
            res.status(200).json({message:"updated successfully",result})
        }
     })
 }catch(err){
    console.log(err);
 }

}

//mark orders as delivered
const orderDelivered = async(req, res) => {
    const date = new Date();
    const{authorization} = req.headers;
 try{
    const update = [{
        $set:{
            Status:"DELIVERED ORDER",
            orderDeliveredDate:date
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body,
        update: update
     }
    //  console.log(update)
     deliveryUpdate(data,(err,result)=>{
        if(err){
            res.status(500).json({err})
        }else{
            res.status(200).json({message:"updated successfully",result})
        }
     })
 }catch(err){
    console.log(err);
 }

}





module.exports = {acceptOrder,pickedUpOrder,orderDelivered,getOrderByDID}

