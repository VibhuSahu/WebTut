// Conditional expression in JavaScript

// without this you cannot use prompt in terminal.
// if you are running prompt code in terminal just paste the line on top
const prompt = require("prompt-sync")({ sigint: true });

let a = parseInt(prompt('Enter your age : '));
let b = parseFloat(prompt('Enter your : '));


console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);



// Spaceing
console.log('\n');


// if statment
let c = prompt("Enter a number : ");
c = Number.parseInt(c);

if (c > 0) {
    console.log("\n   Fuck you!   \n");
}


// Spaceing
console.log('\n');



// if else statment
let d = prompt("Enter another number : ");
d = Number.parseFloat(d);       // TypeCasting(Changing data type one to another)

if (d > 10) {
    console.log("   NOt valid Number    ");
} else {
    console.log("   Valid Number    ");
}


// Spaceing
console.log('\n');


// if else-if else statment
let e = parseInt(prompt("Enter an integer value: "));

if (e > 0) {
    console.log('   A valid Age    ');
} else if (e > 10 && e < 15) {
    console.log('   But you are a kid   ');
} else if (e > 18) {
    console.log('   Not a kid   ');
} else {
    console.log('   Invalid Age ');
}


// Ternary Operator in javaScript
let f = prompt('Enter Boolean value : ');
console.log((f == 'true') ? 'Yes' : 'No');


/*
Ouput :
Enter your age : 18         // User INput
Enter your : 21             // User INput
18
number
21
number


Enter a number : 9          // User INput

   Fuck you!   



Enter another number : 88   // User INput
   NOt valid Number    


Enter an integer value: 17  // User INput
   A valid Age    
Enter Boolean value : true  // User INput
Yes
*/