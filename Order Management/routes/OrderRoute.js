const express = require("express");
const {
    SelectOrder,
}=require("../Controller/OrderController");
const router = express.Router();

router.post("/selectOrder",SelectOrder);

module.exports = router;