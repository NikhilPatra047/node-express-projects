// const mongoose = require('mongoose');

// const TaskSchema = new mongoose.Schema({    
//     name: String,
//     completed: Boolean
// });

//Model is a wrapper for a schema 

const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        trim: true,
        maxlength: [20, "Characters can't be more than 20"],
        required: [true, "Name must be provided"]
    }, 
    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', TaskSchema);