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
        if(user.error|| user.role != "Delivery Man"){
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
        Status:"DELIVERY ACCEPTED",
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

//mark orders as delivered
const orderNotDelivered = async(req, res) => {
    const{authorization} = req.headers;
 try{
    const update = [{
        $set:{
            Status:"NOT DELIVERED",
            orderDeliveredDate:null

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

//combines data from order and inventory databases
const combinedData = async (req, res) => {
    const{authorization} = req.headers
    try {
    
      const response1 = await Order.find().populate("_id");
      console.log("orderrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr")
      console.log(response1)
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
  





module.exports = {acceptOrder,pickedUpOrder,orderDelivered,getOrderByDID,orderNotDelivered,combinedData}

