const mongoose =  require("mongoose");


const Schema = mongoose.Schema;

const CartSchema = new Schema({
    ProductId: {
        type: String,
        required: true,
    },
    CustomerId: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Cart",CartSchema);