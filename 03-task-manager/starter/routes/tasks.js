// const express = require('express');
// const router = express.Router();
// const { getAllTasks, createTasks, updateTasks, deleteTasks } = require('../controllers/tasks');

// //routes 
// router.route('/').get(getAllTasks).post(createTasks);
// router.route('/:id').get(getAllTasks).patch(updateTasks).delete(deleteTasks);

// //patch only updates parts of the information 
// //put replaces the old information with a completely new information 

// module.exports = router;

const express = require('express');
const router = express.Router();
const { getAllTasks, getTask, createTasks, updateTasks, deleteTasks } = require('../controllers/tasks');

//routes
router.route('/').get(getAllTasks).post(createTasks);
router.route('/:id').get(getTask).patch(updateTasks).delete(deleteTasks);

module.exports = router;