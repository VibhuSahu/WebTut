// const, let and var in JavaScript


// var is global scope variable and let is block scope variable

// var is global scope example of it
var a = 45;
var b = "Hello, world!";
var b = "Bye, world!"; // var variable can be re-declared and updated.
var c = null;
var d = undefined;

 
console.log(a);
{
    var a = "variable";
    console.log(a);
}
console.log(a);



// let is block scope variable and here is example of it
console.log("\n");
let author = 5;
console.log(author);

{
    let author = "Hello, world!";
    console.log(author);
}
console.log(author);



// const nor be updated or modified and re-declared otherwise it will throw error
const fuck = "Ooops!";
console.log(fuck);









/*
Output : 
45
variable
variable



5
Hello, world!
5
Ooops!
*/