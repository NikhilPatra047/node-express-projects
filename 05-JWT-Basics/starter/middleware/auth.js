const jwt = require('jsonwebtoken');
const { UnauthenticatedError } = require('../errors');
const CustomAPIError = require('../errors/custom-error');

const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization; 

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthenticatedError('No Token Provided');
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //verifying the token received by the client with the private key to see if 
        // the sender of the token is the same as the one who signed it. 
        const { id, username } = decoded;
        req.user = { id, username };
        next();
    } catch(error) {
        throw new CustomAPIError('Not authorized to access this route', 401);
    }
};

module.exports = authMiddleware;
