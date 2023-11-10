const express = require("express");
const router = express.Router()
const{acceptOrder,
    pickedUpOrder,
    orderDelivered,
    getOrderByDID,
    orderNotDelivered,
    combinedData,
    inventoryStatusUpdate} = require("../controllers/DeliveryController");

// router.post("/acceptOrder", getUser);
router.patch("/acceptOrder", acceptOrder);
router.patch("/markaspicked",pickedUpOrder);
router.patch("/markAsDelivered",orderDelivered);
router.patch("/markAsNotDelivered",orderNotDelivered);
router.get("/orderByDID", getOrderByDID)
router.get("/combinedOrders", combinedData)
router.patch("/markasready",inventoryStatusUpdate)

module.exports=router