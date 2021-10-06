const fs = require('fs');

// create stream to read from the big blog 3 file.

const readStream = fs.createReadStream('./docs/blog3.txt',{encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');


// listening to a data event. everytime we get a chunk of data
//streaming super cool and works

// readStream.on('data',(chunk) =>{
// console.log('---new chunk---');
// console.log(chunk);
// writeStream.write(chunk);
// writeStream.write('\nNEWCHUNK\n');
// writeStream.write(chunk);
// });


// now were gonna try out piping
//everytime we get a readstream piping it into writestream
readStream.pipe(writeStream);