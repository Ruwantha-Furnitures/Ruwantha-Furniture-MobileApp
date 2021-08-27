const express = require("express");
const router = express.Router();

const {
  getDeliveryDriverIdController,
  getDeliveryDriverDetailsController,
  updateDriverAvailabilityController,
  getDriverDashboardInfoController,
} = require("../controllers/deliveryDriver/driverdetails.controller");

const {
  getAllOrdersForDayController,
  getOneOrderDetailsController,
  pendingOrderDetailsController,
  updateDeliveryStatusController,
} = require("../controllers/deliveryDriver/driverorders.controller");

//delivery driver details routes
router.get("/login/:accID", getDeliveryDriverIdController);
router.get("/info/:driverID", getDriverDashboardInfoController);
router.get("/driverDetails/:driverID", getDeliveryDriverDetailsController);
router.put("/driverAvailability/:driverID", updateDriverAvailabilityController);

//delivery driver order and and change stats routes
router.get("/orders/:driverID", getAllOrdersForDayController);
router.get("/orders/moreDetails/:orderID", getOneOrderDetailsController);
router.get("/orders/pendingOrders/:orderID", pendingOrderDetailsController);
router.put(
  "/ordes/changeStatus/:orderID/:driverID",
  updateDeliveryStatusController
);

module.exports = { deliveryDriverRouter: router };
