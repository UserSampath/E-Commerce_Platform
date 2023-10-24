const express = require("express");
const {
    SelectOrder,
    deleteOrder,
}=require("../Controller/OrderController");
const router = express.Router();

router.post("/selectOrder",SelectOrder);
router.delete("/deleteOrder/:id",deleteOrder);

module.exports = router;