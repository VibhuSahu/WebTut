// HomeWork - Explore switch statement and write a basic program program in the comments.


const prompt = require("prompt-sync")({ sigint: true });


// Switch
// The switch statement is used to perform different actions based on different conditions.
let day = parseInt(prompt("Enter number 1 to 7 : "));

switch (day) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('\n    Invalid INput    \n');
}

/*
Output :
Enter number 1 to 7 : 4     // User Input
Thursday
*/