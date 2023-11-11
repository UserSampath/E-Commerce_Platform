const { date } = require("yup");
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
const getOrderByDID = async(req) =>{
    
    try{
            const id = req;
           const orders = await Order.findById(id).exec();
           console.log(orders);
           if(!orders){
            return ({error:"No orders found"})
           }else{
            return ({orders})
            
        }
    }catch(err){
        console.log(err);
        return ({err})
    }


}

// common function for updating delivery data
const deliveryUpdate =async(data, callback) =>{
    const {authorization} = data.authorization;
    const id = data.id;
    console.log("iddddddddddddddddddddddddddddddd")
    console.log(data.userCheck);
    const update = data.update;
    try{
        const date = new Date();
        const user= await getUser(authorization);
        const orderCheck = await getOrderByDID(id)

        if(data.userCheck && orderCheck.orders.deliverId != data.uid){
            const err ="Deliverer not matched"
            return callback(err)  
            }
        if(user.error|| user.role != "Delivery Man"){
            console.log("it works")
            const userError= user.error;
            const error = {error:"User authentication failed",userError}
                return callback(error);
        }else{

             const newupdate= await Order.findByIdAndUpdate(id,update)
             if(!newupdate){
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
        Status:"DELIVERY ACCEPTED",
        deliveryAcceptedDate:date,
        userCheck:false
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body.id,
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
 try{
    const update = [{
        $set:{
            Status:"ORDER PICKUP",
            PickedUpDate:date
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body.id,
        update: update,
        uid:req.body.uid,
        userCheck:true
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

 try{
    const update = [{
        $set:{
            Status:"DELIVERED ORDER",
            orderDeliveredDate:date
    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body.id,
        update: update,
        uid:req.body.uid,
        userCheck:true
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

//mark orders as delivered
const orderNotDelivered = async(req, res) => {
    
 try{
    const update = [{
        $set:{
            Status:"NOT DELIVERED",
            orderDeliveredDate:null

    }
     }]
    const data = {
        authorization:req.headers,
        id:req.body.id,
        update: update,
        uid:req.body.uid,
        userCheck:true
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
//-------------------------------------------------------------------------------------

//combines data from order and inventory databases
const combinedData = async (req, res) => {
    
    try {
    
      const response1 = await Order.find().populate("_id");
      
      const response2 = await axios.get('http://localhost:8080/api/item');
    
      const combinedData = matchAndCombineData(response1, response2.data);
  
      res.json(combinedData);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to retrieve and match data.' });
    }
  }
  
  
  
  
  
  

const matchAndCombineData = (dataFromDB1, dataFromDB2) => {
    const dataMap = new Map();
  
    dataFromDB2.forEach((item) => {
      dataMap.set(item.id, item);
    });
  console.log(dataMap);
    const combinedData = [];
  
    dataFromDB1.forEach((item) => {
       
        const id = parseInt(item.ProductId)
        console.log(id);
      const matchingItem = dataMap.get(id);
      console.log(matchingItem);
      
      console.log(matchingItem);
      if (matchingItem) {

        const combinedItem = {
           product:matchingItem,
           order:item,
        };
        combinedData.push(combinedItem);
        // console.log(combinedData)
      }
    });
  
    return combinedData;
  };
  
  const inventoryStatusUpdate =async(req, res) =>{
    const {authorization} = req.headers;
    const{id} = req.body; ;
    try{
        const date = new Date();
        const user= await getUser(authorization);
        console.log(user);
        if(user.error || user.role != "Inventory Keeper"){
            const userError= user.error;
            const error = {error:"User authentication failed",userError}
                return res.status(400).json({error});
        }else{

             const newupdate= await Order.findByIdAndUpdate(id,{Status:"ORDER READY",preparedDate:date})
             if(newupdate.length==0){
                console.log();
                const error = {error:"order not found"}
                return res.status(400).json({error});
            }else{
                return res.status(200).json({message:"Order updated successfully",newupdate});
            }
            
        }
       
    }catch(err){
        console.log(err);
        return res.status(500).json({err});
    }
  }



module.exports = {acceptOrder,pickedUpOrder,orderDelivered,getOrderByDID,orderNotDelivered,combinedData,inventoryStatusUpdate}

