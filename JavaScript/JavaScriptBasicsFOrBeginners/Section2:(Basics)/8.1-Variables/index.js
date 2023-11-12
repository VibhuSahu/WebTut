// We use a variable to store data temporarily

var name = 'Vibhu Sahu';            // Output : Vibhu Sahu
console.log(name);

let collage = 'SRM vadaplani';      // using let is best practice for writing code

let value;
console.log(value);                 // Output : undefined


/** $ Rules for Creating variable
 * Cannot be a reserved keyword
 * Should be meaningful
 * Cannot start with a number (1name)
 * Cannot contain a space or hyphen (-)
 * Are case-sensitive
 */


// Both variable is different
let firstName;      // Camel Notation in JavaScript
let FirstName;


// it is not a Best practice
let firstStudent = 'Vibhu', secondStudent = 'Pranav', thirdStudent = 'Sai Deepak';
console.log(firstStudent);      // Output : Vibhu
console.log(secondStudent);     // Output : Pranav
console.log(thirdStudent);      // Output : Sai Deepak

console.log(firstStudent, secondStudent, thirdStudent);    // Output : Vibhu Pranav Sai Deepak