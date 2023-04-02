const User = require('../models/User');
const UnauthenticatedError = require('../errors/unauthenticated');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const authentication = async (req, res, next) => {
    //check header
    const authHeader = req.headers.authorization; 
    if(!authHeader || !authHeader.startsWith("Bearer")) {
        throw new UnauthenticatedError(`Authentication Invalid`);
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const { userId, name } = decoded;
        req.user = { userId, name };
    } catch(err) {
        console.log(err);
    }
}

module.exports = authentication; 
