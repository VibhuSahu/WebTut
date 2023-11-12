// While Loops in JavaScript 
/**
 * WHILE LOOP
 * DO WHILE LOOP
 */

const prompt = require("prompt-sync")({sigint: true});

let n = prompt("Enter the value of n : ");
n = Number.parseInt(n);


// WHILE LOOP
let i = 0;
while (i < n) {
    console.log(i);
    ++i;
}


// spacing
console.log("\n");


// DO WHILE LOOP
let j = 0;
do {
    console.log(j);
    ++j;

} while (j < n);


