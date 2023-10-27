const mongoose =  require("mongoose");
const { OngoingStatus } = require("../utils/Constant");


const Schema = mongoose.Schema;

const OrderSchema = new Schema(

    {
        OrderId: {
            type: String,
            required : true,
        },
        ProductId:{
            type: String,
            required : true,
        },
        CustomerId:{
            type: String,
            required : true,
        },
        Status:{
            type: String,
            enum:[
                OngoingStatus.OrderReady,
                OngoingStatus.OrderPickup,
                OngoingStatus.DeliveredOrder
            ]
        },
        Quantity:{
            type:String,
            required : true,
        },
    },
{timestamps:true}
);

module.exports = mongoose.model("Order",OrderSchema);