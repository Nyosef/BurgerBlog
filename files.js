// These methods is good for small files, but not for big ones. for that we use streams/buffers
//fs module built into node will allow us to do all of these
const fs = require('fs');

// reading files
// callback function will fire as soon as readFile is finished
// other code can run until this function returns

// fs.readFile('./docs/blog1.txt', (err, data) => {

//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());

// });


// writing files

// fs.writeFile('./docs/blog2.txt','hello world', ()=> {

//     console.log("were done!");

// });



//directories

if(!fs.existsSync('./assets')){

    fs.mkdir('./assets', (err)=>{
        if(err){
            console.log(err);
        }
        console.log('folder created');
        });
} else{

    fs.rmdir('./assets', (err)=>{
        if (err){
            console.log(err);
        }
        console.log('folder deleted');
    })
}



//deleting files

if (fs.existsSync('./docs/deleteme.txt')){

fs.unlink('./docs/deleteme.txt', (err)=>{

    if (err){
        console.log(err);
    }

    console.log('file deleted');
})

}