const express = require("express");

const {
    createCart,
    // deleteCart,
    // getAllCarts
}=require("../Controller/CartController");
const router = express.Router();

router.post("/createCart",createCart);
// router.delete("/deleteCart/:id",deleteCart);
// router.get("/getAllCarts",getAllCarts);
module.exports = router;
