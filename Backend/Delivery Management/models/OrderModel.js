const mongoose =  require("mongoose");



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
                "DELIVERY ACCEPTED",
                "ORDER READY",
                "ORDER PICKUP",
                "DELIVERED ORDER",
                "NOT DELIVERED"
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
const Orders =mongoose.model("Order",OrderSchema);

module.exports = Orders