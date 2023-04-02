const { readFile, writeFile } = require('fs').promises;

const start = async() => {
    try {
        const result = await readFile('./content/first.txt', 'utf-8');
        await writeFile('./content/result-async-await.txt', `THIS IS AWESOME: ${ result }`, { flag: 'a' });
        console.log(result);
    } catch(err) {
        console.log(err);
    }
}

start();