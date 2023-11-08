const express = require("express");
const {
    createOrder,
    deleteOrder,
    getOrder,
    getAllOrders,
    getAllOrderForCustomer
}=require("../Controller/OrderController");
const router = express.Router();

router.post("/createOrder",createOrder);
router.delete("/deleteOrder/:id",deleteOrder);
router.get("/getOrder/:id",getOrder);
router.get("/getAllOrders",getAllOrders);
router.get("/getAllCustomerOrder",getAllOrderForCustomer)
module.exports = router;