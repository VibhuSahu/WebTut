let selectedColors = ['red', 'blue', 'black', 'green'];
console.log(selectedColors);

console.log(selectedColors[1]);

selectedColors[2] = 'white';
console.log(selectedColors);

console.log(typeof selectedColors);

selectedColors[3] = 1;
console.log(selectedColors);


console.log(selectedColors.length);

selectedColors.push('green');
console.log(selectedColors);



// Input arrays ()
let firstNameInitial = ['Jammin', 'Crazy', 'Goofy', 'Cuckoo', 'Cheesy', 'Wild'];
let middleNameInitial = ['Icy'];
let lastNameInitial = ['Jokers', 'Riders', 'Breakers', 'Queens', 'Warriors', 'Royals'];

// Concate firstNameInitial, middleNameInitial, lastNameInitial into CompleteNameInitial
let completeNameInitial = firstNameInitial.concat(middleNameInitial, lastNameInitial);

// Display output
console.log(completeNameInitial);


/**
Output :
[ 'red', 'blue', 'black', 'green' ]
blue
[ 'red', 'blue', 'white', 'green' ]
object
[ 'red', 'blue', 'white', 1 ]
4
[ 'red', 'blue', 'white', 1, 'green' ]
[
  'Jammin', 'Crazy',
  'Goofy',  'Cuckoo',
  'Cheesy', 'Wild',
  'Icy',    'Jokers',
  'Riders', 'Breakers',
  'Queens', 'Warriors',
  'Royals'
]
 */
