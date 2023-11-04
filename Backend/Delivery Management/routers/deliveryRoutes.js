const express = require("express");
const router = express.Router()
const{getUser,acceptOrder,pickedUpOrder,orderDelivered,getOrderByDID} = require("../controllers/DeliveryController");

// router.post("/acceptOrder", getUser);
router.patch("/acceptOrder", acceptOrder);
router.patch("/markaspicked",pickedUpOrder)
router.patch("/markAsDelivered",orderDelivered);
router.get("/orderByDID", getOrderByDID)

module.exports=router