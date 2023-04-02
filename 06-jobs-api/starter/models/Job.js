const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    company: {
        type: String, 
        required: [true, "Please provide company name"],
        maxlength: 50, 
        minlength: 3, 
    },
    position: {
        type: String, 
        required: [true, "Please provide position"],
        maxlength: 100, 
        minlength: 3, 
    }, 
    status: {
        type: String,
        enum: ['interview', 'client', 'pending'],
        default: 'pending',
    },
    createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        require: [true, 'Please provide an user'],
    }
}, {timestamps: true});

module.export = mongoose.model('job-schema', JobSchema);