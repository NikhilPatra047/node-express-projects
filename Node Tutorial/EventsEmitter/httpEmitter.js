//Event-driven programming 

const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end(`Welcome Page`);
}); //listening to the event

server.listen(5001);