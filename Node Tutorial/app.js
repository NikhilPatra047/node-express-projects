const http = require('http');
const { readFileSync, createReadStream } = require('fs');

const server = http.createServer();

server.on('request', (req, res) => {
    const stream = createReadStream('./content/first.txt', { highWaterMark: 10000, encoding: 'utf-8' });

    stream.on('open', () => {
        stream.pipe(res);
    });

    stream.on('error', (err) => {
        res.end(err);
    })
});

server.listen(5001);