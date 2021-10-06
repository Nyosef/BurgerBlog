const people = ['yoshi','ryu','chun-li','mario'];
const ages = [20, 25, 30, 35];

console.log(people);


//So.. wherever the require is for this people file, it will return the people array.
// exporting object with two different objects 
module.exports = {
    
    people,ages
    
};