const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();

const products = require('./products.json');
const Product = require('./models/product');

//constants
const port = process.env.PORT || 3000;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        await Product.create(products);
        app.listen(port, console.log(`Server is listening to the port ${ port }`));
    } catch(err) {
        console.log(err);
    }
};

start();