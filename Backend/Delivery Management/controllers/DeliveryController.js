const Order= require("../models/OrderModel")
const axios= require("axios")

const getUser = async(authorization) =>{
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(" ")[1];
try{
    const response = await axios.post('http://localhost:5000/api/auth/getUserDetails',{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return response.data;
}
catch(err){
    res.status(500).json({err: err});
    console.log(err)
}
}

const acceptOrder =async(req, res) =>{
    const authorization = req.headers.authorization;
    const{id} = req.body;
    try{
        const date = new Date();
        const user= await getUser(authorization);
        console.log(user);
        if(!user){
            res.status(403).json({err:"User authentication failed"})
        }else{

             const update= await Order.findByIdAndUpdate(id,{deliverId:user._id ,deliveryAcceptedDate:date})
             if(!update){
                console.log(err);
                res.status(400).json({err:"update failed"})
            }else{
                console.log(update);
                res.status(200).json({update})
            }
            
        }
       
    }catch(err){
        console.log(err);
        res.status(500).json({err})
    }

}



module.exports = {getUser,acceptOrder}

