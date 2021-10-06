// globat object ( a bit like the window object)

//console.log(global);

global.setTimeout(() => {
    console.log('in the timeout');
},3000);


const int = setInterval(() => {
    console.log('in the mood');
},2000);


console.log(__dirname);
console.log(__filename);