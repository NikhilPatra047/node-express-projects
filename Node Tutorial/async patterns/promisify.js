const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const start = async() => {
    try {
        const result = await readFilePromise('./content/first.txt', 'utf-8');
        await writeFilePromise('./content/result-async-await.txt', `THIS IS AWESOME: ${ result }`);
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

start();