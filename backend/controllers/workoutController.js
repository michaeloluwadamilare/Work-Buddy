const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

const getAllWorkout = async (req, res) => {
    const allWorkout =  await Workout.find({}).sort({createdAt: -1})
    res.status(200).json(allWorkout);
} 

const getSingleWorkout = async (req, res) => {
    const { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Not a valid Id' })
    }

    try {
        const singleWorkout =  await Workout.findById(id);
        res.status(200).json(singleWorkout);
    } catch(err){
        res.status(404).json({ error: err.message });
    }

} 

const deleteWorkout = async (req, res) => {
    const { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Not a valid Id' })
    }

    const singleWorkout =  await Workout.findOneAndDelete({ _id : id });

    if(!singleWorkout){
        return res.status(404).json({ error: 'Not a valid Id' })
    }

    res.status(200).json(singleWorkout);
    

} 

const updateWorkout = async (req, res) => {
    const { id }= req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({ error: 'Not a valid Id' })
    }
    const updateWorkout =  await Workout.findOneAndUpdate({ _id : id }, { ...req.body });
    if(!updateWorkout){
        return res.status(404).json({ error: 'Not a valid Id' })
    }

    res.status(200).json(updateWorkout);

} 

const createWorkout = async (req, res) => {
    const { title, reps, load } = req.body;
    try {
        const workout =  await Workout.create({title, reps, load})
        res.status(200).json(workout);
    } catch(err){
        res.status(400).json({ error: err.message });
    }
} 

module.exports = { createWorkout, getAllWorkout, getSingleWorkout, deleteWorkout, updateWorkout };