const mongoose =  require("mongoose");
const { OngoingStatus } = require("../utils/Constant");


const Schema = mongoose.Schema;

const CartSchema = new Schema(

    {
        ProductId:{
            type: String,
            required : true,
        },
        CustomerId:{
            type: String,
            required : true,
        },        
    },
{timestamps:true}
);

module.exports = mongoose.model("Cart",CartSchema);