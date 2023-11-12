// Question 4. Try to add a new key to the const object in problem 3 were you able to do it?


const objKey = {
    Vibhu : "Sahu",
    Rahul : "Dewangan"
};

// Adding Three in objKey
objKey.Harsh = "Chohan";        // Inserting value Using dot notation.
objKey.Ashi = "Sao";

objKey["Himashu"] = "Thakur";   // Inserting value using square bracket notation.


console.log(objKey);

/*
Output :
{
  Vibhu: 'Sahu',
  Rahul: 'Dewangan',
  Harsh: 'Chohan',
  Ashi: 'Sao',
  Himashu: 'Thakur'
}
*/