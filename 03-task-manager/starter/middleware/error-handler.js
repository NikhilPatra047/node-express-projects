const CustomAPIError = require('../error/custom-error');

const handleErrorMiddleware = (err, req, res, next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({ msg: err.message });
    }

    return res.status(500).json({ msg: `Something went wrong! Please try` });
};  

module.exports = handleErrorMiddleware;  