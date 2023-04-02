// MIDDLEWARE
const logger = (req, res, next) => {
    const url = req.url;
    const method = req.method;
    const time = new Date().getFullYear();
    console.log(url, method, time);
    next();
}; //middleware

module.exports = logger;