const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const { createCustomError } = require('../error/custom-error');

const getAllTasks = asyncWrapper(async(req, res) => {
    const task = await Task.find({});
    res.status(201).json({task: task});
});

const createTasks = asyncWrapper(async(req, res) => {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
});

const getTask = asyncWrapper(async(req, res, next) => {
    const { id: taskID } = req.params;
    const taskById = await Task.findOne({_id: taskID});
    if(!taskById) {
        return next(createCustomError(`No task with id: ${ taskID }`), 404);
    }
    res.status(201).json( taskById );
});

const updateTasks = asyncWrapper(async(req, res) => {
    const { id: taskID } = req.params; 
    const task = await Task.findOneAndUpdate({_id: taskID}, { name: "Nikhil" });
    if(!task) {
        res.status(201).json({ msg: `Task with id: ${ taskID } not found`});
    }
    res.status(201).json({ msg: `Task with id: ${ taskID } has been successfully updated`});
});

const deleteTasks = asyncWrapper(async (req, res) => {
    const { id: taskID } = req.params; 
    const task = await Task.deleteOne({_id: taskID});
    if(!task) {
        res.status(404).json({ msg: `Task with ID: ${ taskID } doesn't exist`});
    }
    res.status(200).json({ msg: `Successfully deleted task with ID: ${ taskID }` });
});

module.exports = {
    getAllTasks,
    updateTasks,
    createTasks,
    deleteTasks,
    getTask
};
