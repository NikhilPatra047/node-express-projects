const User = require('../models/User');
const { StatusCodes } = require('http-status-codes');
const { UnauthenticatedError } = require('../errors');

const register = async(req, res) => {
    const user = await User.create({...req.body});
    const token = user.createJWT();
    res.status(StatusCodes.CREATED).send({ user: { name: user.getName() }, token });
}

const login = async(req, res) => {    
    const { email, password } = req.body;
    if(!email || !password) {
        throw new BadRequest('Please provide email and password');
    }

    const user = await User.findOne({ email });
    if(!user) {
        throw new UnauthenticatedError('Not a valid email');
    }

    const passwordMatch = await user.comparePassword(password);
    if(!passwordMatch) {
        throw new UnauthenticatedError("Not a valid password");
    }

    const token = user.createJWT(); 
    res.status(StatusCodes.OK).send({ user: { name: user.name }, token });
} 

module.exports = { login, register };