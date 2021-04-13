const express = require("express");
const tourController = require("./../controllers/tourController");
//const {getAllTours,creatTour,getTour,updateTour,deleteTour} = require("./../controllers/tourController");
const router = express.Router();

router.param("id", tourController.checkID);

router.param("namePrice", tourController.checkBody);

router
  .route("/")
  .get(tourController.getAllTours)
  .post(tourController.checkBody, tourController.creatTour);

router
  .route("/:id")
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
