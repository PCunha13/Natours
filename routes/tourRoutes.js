const express = require('express');
const tourController = require('./../controllers/tourController');
//const {getAllTours,creatTour,getTour,updateTour,deleteTour} = require("./../controllers/tourController");
const router = express.Router();

//router.param('namePrice', tourController);

router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.creatTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
