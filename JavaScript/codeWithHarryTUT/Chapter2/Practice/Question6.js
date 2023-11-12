// Question 6. Print "You can Drive" or "You cannot Drive" based on age being greater than 18 using ternary operator.

const prompt = require("prompt-sync")({ sigint: true });

let Age = parseInt(prompt(" Enter you Age : "));

console.log((Age > 18) ? "\n    You can Drive   \n" : "\n   You cannot Drive    \n");

/*
Output :
 Enter you Age : 15

   You cannot Drive    

*/