const { createReadStream } = require('fs');

const stream = createReadStream('./content/first.txt', { highWaterMark: 2, encoding: 'utf-8'});

stream.on('data', (result) => {
    console.log(result);
})