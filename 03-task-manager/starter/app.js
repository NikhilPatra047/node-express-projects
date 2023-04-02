const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const handleErrorMiddleware = require('./middleware/error-handler');

//middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/v1/tasks', tasks);
app.use(notFound);
app.use(handleErrorMiddleware);

//constants 
const port = process.env.PORT || 8080;

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(port, console.log(`Connected DB successfully. Server is listening to the port ${ port }`));
    } catch(err) {
        console.log(err);
    }
};

start();