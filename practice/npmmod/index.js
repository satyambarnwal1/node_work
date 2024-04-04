// to work with npm we need to initialize npm so for this we run the command npm init
// and it creates the pakage.json file which store the all npm pakages name and version
// to install packages npm install <package name> pakage store in one created folder npm modules
// to install particular version npm install chalk@4.1.0
// import chalk from 'chalk'; only work with ES6
// to install package globally npm install <name> -g it will not show in package.json 

const chalk = require('chalk');
const validator = require('validator')
console.log(chalk.blue("hi npm"));

console.log(validator.isEmail("hi npm"));



// nodemon package