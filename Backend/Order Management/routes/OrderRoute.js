const express = require("express");
const {
    SelectOrder,
    deleteOrder,
    getOrder,
    getAllOrders
}=require("../Controller/OrderController");
const router = express.Router();

router.post("/selectOrder",SelectOrder);
router.delete("/deleteOrder/:id",deleteOrder);
router.get("/getOrder/:id",getOrder);
router.get("/getAllorders",getAllOrders);
module.exports = router;