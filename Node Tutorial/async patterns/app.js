const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        return res.end(`Home Page`);
    } else if(req.url === '/about') {
        return res.end(`About Page`);
    } 

    res.end(`Error page`);
});

server.listen(5001, () => {
    console.log('Server is listening on port 5001');
});