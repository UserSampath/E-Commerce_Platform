const mongoose =  require("mongoose");


const Schema = mongoose.Schema;

const CartSchema = new Schema(

    {
        ProductIds:{
            type: [String],
            required : true,
        }     
    },
{timestamps:true}
);

module.exports = mongoose.model("Cart",CartSchema);