const { readFile } = require('fs');

const getText = (path) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf-8', (err, data) => {
            if(err) {
                reject(err);
            } else {
                resolve(data);
            }
        })
    })
}

const start = async() => {
    try {
        const result = await getText('./content/first.txt');
        console.log(result); 
    } catch(err) {
        console.log(err);
    }
}

start();