const express = require("express");
const router = express.Router();

const {
  getDeliveryDriverIdController,
  getDeliveryDriverDetailsController,
  updateDriverAvailabilityController,
  addDriverController,
} = require("../controllers/deliveryDriver/driverdetails.controller");

const {
  getAllOrdersForDayController,
  getOneOrderDetailsController,
  pendingOrderDetailsController,
  updateDeliveryStatusController,
  todayAssignmentController,
  todayCompleteController,
  todayPendingOrderController,
  monthlyCompletedOrderController,
} = require("../controllers/deliveryDriver/driverorders.controller");

//delivery driver details routes
router.post("/", addDriverController);
router.get("/login/:accID", getDeliveryDriverIdController);
router.get("/driverDetails/:driverID", getDeliveryDriverDetailsController);
router.put("/driverAvailability/:driverID", updateDriverAvailabilityController);

//delivery driver order and and change stats routes
router.get("/orders/:driverID", getAllOrdersForDayController);
router.get("/orders/moreDetails/:orderID", getOneOrderDetailsController);
router.get("/orders/pendingOrders/:driverID", pendingOrderDetailsController);
router.put(
  "/orders/changeStatus/:orderID/:driverID",
  updateDeliveryStatusController
);

//delivery driver dashboard required
router.get("/dashboard/todayAssignment/:driverID", todayAssignmentController);
router.get("/dashboard/todayCompleted/:driverID", todayCompleteController);
router.get("/dashboard/todayPending/:driverID", todayPendingOrderController);
router.get(
  "/dashboard/monthlyCompleted/:driverID",
  monthlyCompletedOrderController
);

module.exports = { deliveryDriverRouter: router };
