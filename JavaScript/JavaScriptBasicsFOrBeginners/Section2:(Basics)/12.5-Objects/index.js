let person = {
    name: 'John',
    age: 30
};
console.log(person);            // Output : { name: 'John', age: 30 } 


// fetching out the value with the help of key
let personName1 = person.name;
let personName2 = person["name"];
console.log(personName1);       // Output : John
console.log(personName2);       // Output : John


// Changing the value of Element inside of object 
person.name = 'Vibhu Sahu';
person['age'] = 19;
console.log(person);            // Output : { name: 'Vibhu Sahu', age: 19 }


// Changing the value of Element inside of object with another value 
let selection = 'name';
person[selection] = 'Pranav';
console.log(person);            // Output : { name: 'Pranav', age: 19 }