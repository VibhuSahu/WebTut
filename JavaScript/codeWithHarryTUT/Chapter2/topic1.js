// JavaScript Operators and Expressions

console.log("Operators in Js");

let a = 45, b = 4;

//      Arithmetic Operators
console.log("a + b  = ", a + b);
console.log("a - b  = ", a - b);
console.log("a * b  = ", a * b);
console.log("a ** b = ", a ** b);
console.log("a / b  = ", a / b);
console.log("a % b  = ", a % b);


// Spacing
console.log("\n");


// Increment and Decrement Operators
// In this it will print value first after that it will Increment or Decrement
console.log(" a++   = ", a++);   // Increment Operators
console.log(" a--   = ", a--);   // Decrement Operators

// In this will Increment or Decrement first after that it will print
console.log(" ++a   = ", ++a);
console.log(" --a   = ", --a);



// Spacing
console.log("\n");

//      Assignment Operators
var c = 99;
console.log(" ( a = a + b ) a += b  : ", a += b);
console.log(" ( a = a - b ) a -= b  : ", a -= b);
console.log(" ( a = a * b ) a *= b  : ", a *= b);
console.log(" ( a = a / b ) a /= b  : ", a /= b);
console.log(" ( a = a % b ) a %= b  : ", a %= b);
console.log(" ( a = a **b ) a **= b : ", a **= b);

// Spacing
console.log("\n");


let comp1 = 6;
let comp2 = "6";
let comp3  = 7;
// Comparison Operators
console.log(" comp1 == comp2  : ", comp1 == comp2);     // Equal to
console.log(" comp1 != comp2  : ", comp1 != comp2);     // Not equal
console.log(" comp1 === comp2 : ", comp1 === comp2);    // Equal value and type
console.log(" comp1 !== comp2 : ", comp1 !== comp2);    // Not equal value or not equal type

console.log(" comp1 > comp2   : ", comp1 > comp2);      // Greater than
console.log(" comp1 < comp2   : ", comp1 < comp2);      // Less than
console.log(" comp1 >= comp2  : ", comp1 >= comp2);     // Greater than or equal to
console.log(" comp1 <= comp2  : ", comp1 <= comp2);     // Less than or equal to


// Spacing
console.log("\n");


// Ternary Operator
let res = (comp1 > comp3) ? 'Yes' : 'No';
console.log(" (comp1 > comp3) ? 'Yes' : 'No' :- ", res);


// Spacing
console.log("\n");



// Logical Operators
let x = 5;
let y = 6;
console.log(" x<y && x==5 : ", x<y && x==5);       // Logical AND
console.log(" x>y || x==5 : ", x>y || x==5);       // Logical OR
console.log("   !false    : ", !false);            // Logical NOT


/*
Ouput :
Operators in Js
a + b  =  49
a - b  =  41
a * b  =  180
a ** b =  4100625
a / b  =  11.25
a % b  =  1


 a++   =  45
 a--   =  46
 ++a   =  46
 --a   =  45


 ( a = a + b ) a += b  :  49
 ( a = a - b ) a -= b  :  45
 ( a = a * b ) a *= b  :  180
 ( a = a / b ) a /= b  :  45
 ( a = a % b ) a %= b  :  1
 ( a = a **b ) a **= b :  1


 comp1 == comp2  :  true
 comp1 != comp2  :  false
 comp1 === comp2 :  false
 comp1 !== comp2 :  true
 comp1 > comp2   :  false
 comp1 < comp2   :  false
 comp1 >= comp2  :  true
 comp1 <= comp2  :  true


 (comp1 > comp3) ? 'Yes' : 'No' :-  No


 x<y && x==5 :  true
 x>y || x==5 :  true
   !false    :  true
*/