const express = require("express");
const router = express.Router()
const{getUser,acceptOrder} = require("../controllers/DeliveryController");

// router.post("/acceptOrder", getUser);
router.post("/acceptOrder", acceptOrder);

module.exports=router