const chalk = require('chalk');
const validator = require('validator');

const res = validator.isEmail('sahsi@d.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));

// Validate the mobile number
const res1 = validator.isMobilePhone('sdsdf');
console.log(res1 ? chalk.green.inverse(res1) : chalk.red.inverse(res1));