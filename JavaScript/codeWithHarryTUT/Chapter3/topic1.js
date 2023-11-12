// For Loops in JavaScript
/**
 * FOR LOOP
 * FOR IN LOOP
 * FOR OF LOOP
 * FOR WITH VAR VALUE
 */

const prompt = require("prompt-sync")({sigint: true});


// THE NUMBER GETTING WITH USER
let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);

let sum = 0;

let obj = {
    harry: 90,
    shubh: 45,
    shivika: 56,
    ritika: 57,
    shiv: 23
}



// FOR LOOP
for (let index = 0; index <= n; index++) {
    sum += index;
}

console.log("Sum of first " + n + " natural numbers is " + sum);


// spacing
console.log("\n");


// FOR IN LOOP
for (let aa in obj) {
    console.log("Marks of " + aa + " is " + obj[aa]);
}


// spacing
console.log("\n");


// FOR OF LOOP
for (let b of "Vibhu Sahu") {
    console.log(b);
}


// spacing
console.log("\n");


// how to use var in for loop
for (var i = 0; i < n; i++) {
    console.log(" INcrement the value! ");
}
console.log("the last value of i : ", i);


/*
Output : 
Enter the value of n : 9
Sum of first 9 natural numbers is 45


Marks of harry is 90
Marks of shubh is 45
Marks of shivika is 56
Marks of ritika is 57
Marks of shiv is 23


V
i
b
h
u
 
S
a
h
u


 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
 INcrement the value! 
the last value of i :  9
 */