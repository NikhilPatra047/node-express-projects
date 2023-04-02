const path = require('path');

console.log(path.sep);

const filename = path.join('/content', 'subfolder', 'test.txt');
console.log(filename);

const base = path.basename(filename);
console.log(base);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);

