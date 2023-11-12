// Primitive and Objects in JavaScript

// Primitive data types
let a = null;           // Object
let b = 345;            // number
let c = true;           // boolean    // can also be false
let d = BigInt("567") + BigInt("3");  // bigint
let e = "Vibhu";        // string
let f = Symbol("I am nice guy"); // symbol
let g = undefined;      // undefined
let h;                  // undefined  // the default is also undefined

console.log(a, b, c, d, e, f, g, h);
console.log("The value in side a variable is : ", a, " and data type of variable is : ",typeof a);
console.log("The value in side a variable is : ", b, " and data type of variable is : ",typeof b);
console.log("The value in side a variable is : ", c, " and data type of variable is : ",typeof c);
console.log("The value in side a variable is : ", d, " and data type of variable is : ",typeof d);
console.log("The value in side a variable is : ", e, " and data type of variable is : ",typeof e);
console.log("The value in side a variable is : ", f, " and data type of variable is : ",typeof f);
console.log("The value in side a variable is : ", g, " and data type of variable is : ",typeof g);
console.log("The value in side a variable is : ", h, " and data type of variable is : ",typeof h);
console.log("\n\n");




// Object - it is also non primitive
const item = {   // object are used to mapping variables
    "harry" : true,
    "shubh" : false,
    "lovish" : 67,
    "rohan" : undefined

};

console.log(item["harry"]);



/*
Output :
null 345 true 570n Vibhu Symbol(I am nice guy) undefined undefined
The value in side a variable is :  null  and data type of variable is :  object
The value in side a variable is :  345  and data type of variable is :  number
The value in side a variable is :  true  and data type of variable is :  boolean
The value in side a variable is :  570n  and data type of variable is :  bigint
The value in side a variable is :  Vibhu  and data type of variable is :  string
The value in side a variable is :  Symbol(I am nice guy)  and data type of variable is :  symbol
The value in side a variable is :  undefined  and data type of variable is :  undefined
The value in side a variable is :  undefined  and data type of variable is :  undefined



true
*/