const express = require('express');
const Workout = require('../models/workoutModel');
const { createWorkout, getAllWorkout, getSingleWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutController');
const router  = express.Router();

router.get('/', getAllWorkout)

router.get('/:id', getSingleWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router;