const mongoose =  require("mongoose");
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
            required : true,
        },
        Quantity:{
            type:String,
            required : true,
        },
    },
{timestamps:true}
);

module.exports = mongoose.model("Order",OrderSchema);