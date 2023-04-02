// const sayHi = require('./sayHi'); importing the module

// sayHi('Nikhil');

// The path module

// const path = require('path');
// console.log(path.sep);

// const filename = path.join('/content', 'subfolder', 'test.txt');
// console.log(filename); // /content/subfolder/test.txt

// const basename = path.basename(filename);
// console.log(basename); //test.txt

// const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
// console.log(absolute);

// __dirname - provides the directory name of the folder

// The HTTP module

// const http = require('http');

// const server = http.createServer((req, res) => {
//     if(req.url === '/') {
//         return res.end(`Home page`);
//     }

//     res.end(`Error!`);
// });

// server.listen(5005);

// The File System Module - Synchronous

// const { readFileSync, writeFileSync } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt',  
//     'Here is the result: 10 / 100',
//     { flag: 'a' }
// );

// The File System Module - Asynchronous 

// const { readFile, writeFile } = require('fs');

// console.log("Starting the first task");
// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("Finished the first task");
//     const first = result;
//     readFile('./content/second.txt', 'utf-8', (err, result) => {
//         if (err) {
//             console.log(err);
//             return;
//         }

//         const second = result;

//         console.log(first, second);
//         writeFile('./content/result-async.txt', `Here is the result: ${first} and ${second}`, (err, result) => {
//             if (err) {
//                 console.log(err);
//                 return;
//             }

//             console.log(result);
//         });
//     });
// });
// console.log("Starting the next task");

// The OS module 

// const os = require('os');

// const userInfo = os.userInfo();

// const upTime = os.uptime();

// console.log(userInfo);
// console.log(upTime);

// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMem: os.totalmem(),
//     freeMem: os.freemem()
// }

// console.log(currentOS);

// Exporting patterns

// require('./mind-grenade'); // Since I am not exporting anything from 'mind-grenade' so it will show an empty object. 

// const modules = require('./alternative-flavor');

// console.log(modules);

// Anything exported is a property in modules.exports 

// console.log(modules.items);
// console.log(modules.singlePerson);

// File system 

// synchronous

// const { readFileSync, writeFileSync, read } = require('fs');

// const first = readFileSync('./content/first.txt', 'utf-8');
// const second = readFileSync('./content/second.txt', 'utf-8');

// console.log(first, second);

// writeFileSync(
//     './content/result-sync.txt',
//     'Here is the result: Awesome!',
//     { flag: 'a' }
// );

// Asynchronous 

// const { readFile, writeFile } = require('fs');

// readFile('./content/first.txt', 'utf-8', (err, result) => {
//     if(err) {
//         console.log(err);
//         return;
//     }

//     const first = result;
//     readFile('./content/second.txt', 'utf-8', (err, result) => {
//         if(err) {
//             console.log(err);
//             return;
//         }

//         const second = result;
//         writeFile('./content/result-async.txt', 'Here is the result: Awesome!', (err, result) => {
//             if(err) {
//                 console.log(err);
//                 return;
//             }

//             console.log(result);
//         });
//     });
// });

// ASYNC-AWAIT PATTERNS .then() - .catch()
// const { readFile } = require('fs');

// const getText = () => {
//     return new Promise((resolve, reject) => {
//         readFile(path, 'utf-8', (err, result) => {
//             if(err) {
//                 reject(err);
//             } else {
//                 resolve(result);
//             }
//         });
//     });
// }; 

// getText('./content/first.txt')
//     .then(result => console.log(result))
//     .catch(err => console.log(err)); 

// try - catch 
// const start = async () => {
//     try {
//         const result = await getText('./content/first.txt');
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// };

// start();

//promisify
// const { readFile, writeFile } = require('fs');
// const util = require('util');

// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//     try {
//         const result = await readFilePromise('./content/first.txt', 'utf-8');
//         console.log(result);
//         writeFilePromise('./content/revise-async.txt', 'Hello World!!!', { flag: 'a' });
//     } catch(err) {
//         console.log(err);
//     }
// };  

// start();

//promise 
// const { readFile } = require('fs').promises;

// const start = async () => {
//     try {
//         const result = await readFile('./content/first.txt', 'utf-8');
//         console.log(result);
//     } catch(err) {
//         console.log(err);
//     }
// }; 

// start();

// EVENT-DRIVEN PROGRAMMING 

// const http = require('http');

// const server = http.createServer();

// server.on('request', (req, res) => {
//     console.log("Successfully responded to request");
//     res.end(`Hello World!`);
// }); 

// server.listen(5001);

// EXPRESS.JS 

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log("Hello world!");
    res.send("Working fine!");
}); 

app.listen(5004, () => {
    console.log("Server is listening to the port 5004");
});