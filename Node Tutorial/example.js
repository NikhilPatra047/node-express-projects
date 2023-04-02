const sayHi = require('./sayHi');
const data = require('./alternative-flavor');
require('./mind-grenade'); //importing the module invokes the function.  

console.log(data);
console.log(data.items);
console.log(data.singlePerson);

sayHi("Susan");
sayHi("Riley");
sayHi("Ghost");