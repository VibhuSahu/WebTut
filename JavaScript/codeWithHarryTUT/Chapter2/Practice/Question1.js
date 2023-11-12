// Question 1. Use logical operators to find whether the age of a person lies between 10 and 20?

const prompt = require("prompt-sync")({sigint: true});


while (true) {
    let a = parseInt(prompt(" ENter your age : "));

    if (10 <= a && a <= 20) {
        console.log('\n    Your Age is Between 10 - 20.\n');
        } else {
            if (10 > a) {
                console.log('\n    Your Age is lower the range.\n');
            } else {
                console.log('\n    Your Age is above the range.\n');
            }
        }
}