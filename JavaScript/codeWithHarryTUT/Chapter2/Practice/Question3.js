// Question 3. Write a JavaScript program to find whether a number is Divisible by 2 and 3.

const prompt = require("prompt-sync")({sigint: true});


let num = parseInt(prompt(" Enter any Number : "));

if ((num%2===0) && (num%3===0)) {
    console.log("\n    ", num, "is Divisible by 2 and 3.    \n");
} else {
    console.log("\n    ", num, "is not Divisible by 2 and 3.    \n")
}