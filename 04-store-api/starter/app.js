require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const productsRouter = require('./routes/products');

const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware 
app.use(express.json());

//routes 
//It would result in routes not found error if the below line of code is not placed first 
app.use('/api/v1/products', productsRouter);

//The error modules have to be placed later after placing the router for /api/v1/products
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//constants
const port = process.env.PORT || 8080;

//connect the DB 
const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Server is listening to the port ${ port }`));
    } catch(err) {
        console.log(err);
    }
};

start();