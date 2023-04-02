const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        return res.end(`Home Page`);
    } else if(req.url === '/about') {
        return res.end(`About Page`);
    }

    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page that you are looking for!</p>
        <a href='/'>Back home</a>
    `)
}); 

server.listen(5001);