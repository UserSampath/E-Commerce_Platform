const express = require("express");
const {
    createOrder,
    deleteOrder,
    getOrder,
    getAllOrders
}=require("../Controller/OrderController");
const router = express.Router();

router.post("/createOrder",createOrder);
router.delete("/deleteOrder/:id",deleteOrder);
router.get("/getOrder/:id",getOrder);
router.get("/getAllOrders",getAllOrders);

module.exports = router;