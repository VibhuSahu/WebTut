// Question 3. Create a const object in javascript can you change it to hold a number later?

const objKey = {
    vibhu : "Sahu",
    Rahul : "Sahu"
};

const dic = {
    "React Native" : "JavaScript",
    "MagoDB" : "Python",
    "OpenGL" : "C++",
    "WEB" : "HTML"
};

objKey.Rahul = "Dewangan";    // Changing the value of key using dot notation.

dic["MagoDB"] = "Python3";    // Changing the value of key using square bracket notation.


// Getting out the value by using dot notation.
console.log(objKey.Rahul);

// Getting out the value by using square bracket notation.
console.log(dic["MagoDB"]);

/*
Ouput :
Dewangan
Python3
*/