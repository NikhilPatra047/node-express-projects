// MIDDLEWARE

const authorize = (req, res, next) => {
    const { user } = req.query;
    if(user === 'john') {
        res.status(200).send(user);
        next();
    }

    next();
}
module.exports = authorize;