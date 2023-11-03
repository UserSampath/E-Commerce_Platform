const express = require("express");
const router = express.Router()
const{acceptOrder} = require("../controllers/DeliveryController");

router.post("/acceptOrder", acceptOrder);


module.exports=router