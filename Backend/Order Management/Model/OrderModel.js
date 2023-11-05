const mongoose =  require("mongoose");
const { OngoingStatus } = require("../utils/Constant");


const Schema = mongoose.Schema;

const OrderSchema = new Schema(

    {
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
                OngoingStatus.DeliveredOrder,
                OngoingStatus.Ordered
            ]
        },
        Quantity:{
            type:String,
            required : true,
        },
        ShippingAddress: {
            type: String,
            required: true,
        },
        deliverId:{
            type:String,
        },
        orderedDate: {
            type: Date,
        },
        deliveryAcceptedDate: {
            type: Date,
        },
        PickedUpDate: {
            type: Date,
        },
        orderDeliveredDate: {
            type: Date,
        }

    },
{timestamps:true}
);

module.exports = mongoose.model("Order",OrderSchema);