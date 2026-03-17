
// excercise 1 

let thisIsANewVariable = 10;
if (thisIsANewVariable == 10){
    console.log("Excercise 1 Passed");
}

// excercise 2 

let myString = `Hello World`;
let myNumber = 52.25;
let myBoolean = true; 

// excercise 3 

let currentScore = 95; // keeps track of the current score of the user 

// excercise 4 

console.log("Excercise 4:");

if ('100' == 100) // == operator compares values based on loose equality of the values and not taking into account the types
{
    console.log("The values are equal!");
}
else{
    console.log("The values are not equal!");
}

if ('100' === 100) // === operator compares values based on strict equality where type is taken into account as well as the values
{
    console.log("The values are strictly equal!");
} else {
    console.log("The values are NOT strictly equal!");
}

// excercise 5 

console.log("Excercise 5:");

let isWeekend = false;
let schedule; 
schedule = isWeekend ? "Day Off"  : "Work Day"; // ternary operator which will asses the conditional before the ?; if the value assessed is true then it is the returning the value directly after the ?; if false, then value are : is returned; returned value is assigned since assignment operator present

console.log(schedule);

// excercise 6 

console.log("Excercise 6:");

let userAge = 16;

if (userAge >= 18){
    console.log("Access Granted");
}
else{
    console.log("Access Denied");
}

// excercise 7 

console.log("Excercise 7:");

let hasPermission = true;
let itemCount = 3;

if (hasPermission == true && itemCount <= 5){
    console.log("Ready to process");
}

// excercise 8 

console.log("Excercise 8:");

for(i = 0; i < 5; i++)
{
    console.log(`Iteration: ${i+1}`);
}

// excercise 9 

console.log("Excercise 9:");

for(i = 0; i < 10; i++)
{
    if (i == 7)
        break;
    
    console.log(`Iteration: ${i}`)
}

// excercise 10

console.log("Excercise 10:");

let counter = 10;

do{
    console.log("Running Once");
} while (counter != 10)

// excercise 11 

console.log("Excercise 11:");

function calculateArea(width, height){
    return width * height; // returns the width and height multiplied together which is the area
}

let resultArea = calculateArea(5,10); // variable is assigned and initalized with the return value from the calculateArea function call with the parameters 5 for width and 10 for height

console.log(`ResultArea: ${resultArea}`);

// excercise 12

console.log("Excercise 12:");

let fruitList = ['Apple', 'Banana']; // array with a couple of intialized values

fruitList.push('Grape'); // appends the element 'Grape' to the end of the array 

fruitList.shift(); // will remove the first element from the array which is 'Apple' and is effectively shifting all elements in the array one left 

console.log(fruitList.indexOf('Banana')); // returns the index number of  the array where the first element named 'Banana' is

console.log("FruitList: " + fruitList); // dispalys the current array after all operations

// excercise 13

let originalData = [5,2,6,7,89,1,12,86,45]
let clonedData = originalData.slice(2, 7) // will return a slice of the array within the specified indice; returns a shallow copy so the values still point to the original array values


// excercise 14

console.log("Excercise 14:");

function Animal(species, sound){
    this.species = species;
    this.sound = sound;
}

let myAnimal = new Animal("Lion", "Roar");

console.log("Species: " + myAnimal.species);
console.log("Sound: " + myAnimal.sound);

// excercise 15

console.log("Excercise 15:");

let dog = new Animal("Canine", "Woof");
let cat = new Animal("Felline", "Meow");

let animalArray = [dog, cat] // stores the animal objects in the array 

console.log(animalArray)