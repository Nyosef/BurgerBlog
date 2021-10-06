// I can import the people js file into this modules file

const xyz = require('./people.js');

console.log("xyz value is "+ xyz);


// in order for xyz to have any value - which it does not if nothing has been done. We need to export something from the people js file.
console.log(xyz);


// os is built already into node. importing it into os
const os = require('os');

//we can get info about the operating systeom
console.log(os.platform(), os.homedir());

