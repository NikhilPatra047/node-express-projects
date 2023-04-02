const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors/index');
const Job = require('../models/Job');

const getAllJobs = async(req, res) => {
    const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
    res.status(StatusCodes.OK).json({ jobs, count: jobs.length });
}

const getJob = async(req, res) => {
    const {user:{ userId }, params: { id: jobId }} = req;
    const job = await Job.findOne({ _id: jobId, createdBy: userId });
    if(!job) {
        throw new NotFoundError(`No job with id: ${ jobId }`);
    }
    res.status(StatusCodes.OK).json({ job }); 
}

const createJob = async(req, res) => {
    req.body.createdBy = req.user.userId;
    const job = await Job.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: "Job created", job });
}

const deleteJob = async(req, res) => {
    const { 
        user: {userId}, 
        params: { id: jobId }
    } = req;

    const job = await Job.findByIdAndRemove({ _id: jobId, createdBy: userId });
    if(!job) {
        throw new NotFoundError(`No job found with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ msg: "Job deleted successfully"}); 
}

const updateJob = async(req, res) => {
    const { user: { userId }, body: { company, position }, params: { id: jobId }} = req; 
    if(company === '' || position === '') {
        throw new BadRequestError('Company or Position fields cannot be empty', StatusCodes.BAD_REQUEST);
    }

    const job = await Job.findByIdAndUpdate({_id:jobId, createdBy:userId}, req.body, {new: true, runValidators: true});
    if(!job) {
        throw new NotFoundError(`Job not found with id ${jobId}`);
    }
    res.status(StatusCodes.OK).json({ job });
}

module.exports = {
    getAllJobs, 
    getJob, 
    deleteJob, 
    updateJob,
    createJob,
};