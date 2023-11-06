const os = require('os');

console.log(os.platform());
console.log(os.release());
console.log('free mem: ', os.freemem());
console.log('total mem: ', os.totalmem());
console.log(os.hostname());

