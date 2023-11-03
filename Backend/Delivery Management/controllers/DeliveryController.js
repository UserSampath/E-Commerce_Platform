const Order= require("../models/OrderModel")
const axios= require("axios")

const acceptOrder = async(req,res) =>{
    const { authorization } = req.headers;
    const{orderid}= req.body
    coconsole.log(orderid)
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token required" });
    }
    const token = authorization.split(" ")[1];
try{
    await axios.post('http://localhost:5000/api/auth/getUserDetails',{},{
        headers: {
            Authorization: `Bearer ${token}`
        }
    }).then((response)=>{
        const Did = response.data._id;
        const update = Order.findByIdAndUpdate(orderid,{$set:{deliverId:Did, deliveryAcceptedDate: new Date()}},)

        res.status(200).json({response: update});
    })
}
catch(err){
    res.status(500).json({err: err});
    console.log(err)
}
}
module.exports = {acceptOrder}

