const express = require("express");
const router = express.Router()
const{getUser,acceptOrder,pickedUpOrder,orderDelivered,getOrderByDID,orderNotDelivered,combinedData} = require("../controllers/DeliveryController");

// router.post("/acceptOrder", getUser);
router.patch("/acceptOrder", acceptOrder);
router.patch("/markaspicked",pickedUpOrder)
router.patch("/markAsDelivered",orderDelivered);
router.patch("/markAsNotDelivered",orderNotDelivered);
router.get("/orderByDID", getOrderByDID)
router.get("/combinedOrders", combinedData)

module.exports=router