const express = require('express');
const app = express();
const login = require('./routes/login'); //importing the middleware

app.use(express.static(`./methods-public`));
app.use(express.urlencoded({ extended: false })); // recognises incoming requests as strings and arrays.
app.use(express.json()); // recognises incoming requests as JSON object 
app.use('/login', login); //using the middleware for every url that starts with login

// const path = require('path');

//Serving up the application using node.
// app.use(express.static('./public'));

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'));    
//     resolve provides the absolute pathname
// });

// app.all('*', (req, res) => {
//     res.status(404).send(`<h1>Resources not found</h1>`);
// });

const { products } = require('./data');

app.get('/', (req, res) => {
    res.send(`
        <h1>Home page</h1>
        <a href="/api/products">Products</a>
    `)
});

app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, price } = product;
        return { id, name, price };
    });

    console.log(newProducts);
    res.json(newProducts); //sends the json file as a response to the request
});

app.listen(5003, () => {
    console.log("Server is listening to the port 5003");
});
//route parameters
// app.get('/api/products/:productId', (req, res) => {
//     const { productId } = req.params;

//     const singleProduct = products.filter((product) => product.id === Number(productId)).map((product) => {
//         const { id, name, price } = product;
//         return { id, name, price };
//     });

//     res.json(singleProduct);
// });

//URL parameters / query string parameters
// app.get('/api/v1/query', (req, res) => {
//     const { search, limit } = req.query;
//     let sortedProducts = [...products];

//     if(search) {
//         sortedProducts = sortedProducts.filter((product) => {
//             return product.name.startsWith(search);
//         });
//     }

//     if(limit) {
//         sortedProducts = sortedProducts.slice(0, Number(limit));
//     }

//     res.status(200).json(sortedProducts);
// });

//Providing multiple middlewares
// const logger = require('./logger');
// const authorize = require('./authorize');
// app.use([logger, authorize]); order is maintained

// app.get('/', (req, res) => {
//     console.log(req.user);
//     res.send(`Home Page`);
// });

// app.get('/about', (req, res) => {
//     console.log(req.user);
//     res.send('About Page');
// });

// app.get('/error', (req, res) => {
//     console.log(req.user);
//     res.send('Error Page');
// });

// app.listen(5003, () => {
//     console.log("Server is listening to the port 5003");
// });

//POSTING DATA 
// const { people } = require('./data');

// app.use(express.urlencoded({ extended: false }));
// app.use(express.static('./methods-public'));
// app.use(express.json());

// app.post('/login', (req, res) => {
//     const { name } = req.body;
//     if(name) {
//         res.status(201).json({ success: true, data: people });
//     } else {
//         res.status(401).send(`Please provide credentials`);
//     }
// });

// app.get('/login', (req, res) => {
//     res.status(200).json({ success: true, data: people });
// });

//PUT DATA - 

// const { people } = require("./data");

// app.use(express.static('./methods-public'));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.put('/api/products/:id', (req, res) => {
//     const { id } = req.params;
//     const { name } = req.body; get the data from the body of the form

//     const person = people.find((person) => person.id === Number(id));
//     if(!person) {
//         return res.status(404).json({ success: false, msg: `No person with id ${id}`});
//     }

//     const newPeople = people.map((person) => {
//         if(person.id === Number(id)) {
//             person.name = name;
//         }

//         return person;
//     });

//     res.status(200).json({ success: true, data: newPeople });
// });

//DELETE - deleting data

// app.use(express.static(`./methods-public`));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// const { people } = require('./data');

// app.delete('/api/products/:id', (req, res) => {
//     const { id } = req.params;
//     const person = people.find((person) => person.id === Number(id));
//     if(!person) {
//         return res.status(404).json({ success: false, msg: `No person with id: ${id}`});
//     }

//     const newPeople = people.filter((person) => person.id !== Number(id));
//     res.status(200).json({ success: true, data: newPeople });
// });

// app.delete('/api/products/:id', (req, res) => {
//     const { id } = req.params;

//     const person = people.find((person) => person.id === Number(id));
//     if(!person) {
//         return res.status(404).json({ success: false, msg: `No person with id: ${id}` });
//     }

//     const newPeople = people.filter((person) => person.id !== Number(id));
//     res.status(200).json({ success: true, data: newPeople });
// });

app.listen(5003, () => {
    console.log("Server is listening to port 5003...");
});

// NO - 80 is for HTTP 
//Similarly 