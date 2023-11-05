const express = require("express");

const {
    createCart,
     deleteCart,
     getAllCartsForCustomer
    // getAllCarts
}=require("../Controller/CartController");
const router = express.Router();

router.post("/createCart",createCart);
router.delete("/deleteCart/:id",deleteCart);
router.get("/getAllCustomerCart",getAllCartsForCustomer)
// router.delete("/deleteCart/:id",deleteCart);
// router.get("/getAllCarts",getAllCarts);
module.exports = router;
