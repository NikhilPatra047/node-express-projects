const os = require('os');

console.log(os);

//info about the current user
const user = os.userInfo();

console.log(user);

//system uptime 
const uptime = os.uptime();
console.log(uptime);

//operating system information 
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS);