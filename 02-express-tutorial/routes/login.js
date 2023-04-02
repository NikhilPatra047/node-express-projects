const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { name } = req.body;

    console.log(name);
    if(name) {
        return res.status(200).send(`Welcome, ${ name }`);
    } 
    res.status(400).send(`Please provide name value`);
});

module.exports = router;