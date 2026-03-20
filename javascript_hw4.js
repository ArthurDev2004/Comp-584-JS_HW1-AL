
// excercise 1 

var thisIsANewVariable = 10; // variable is assigned value of number 10, and is in camelCase

if (thisIsANewVariable == 10) { // if condition checks if variable has value that is loosy equal to number 10; value can be string of 10 as well as long as JS can equate to a 10
    console.log("Excercise 1 Passed"); // executes if the condition is true in the if condition
}

console.log(); // provides newline chracter between differnet excerisses 

// excercise 2 

console.log("Excercise 2:"); 

let myString = `Hello World`;
let myNumber = 52.25;
let myBoolean = true; 


// prints out the value of each variable as well as the data type of that specific variable next to the value of the variable
console.log(`${myString} -> ${typeof(myString)}`); 
console.log(`${myNumber} -> ${typeof(myNumber)}`);
console.log(`${myBoolean} -> ${typeof(myBoolean)}`);



console.log(); // provides newline chracter between differnet excerisses 


// excercise 3 

console.log("Excercise 3:");

let currentScore = 95; // keeps track of the current score of the user 

console.log(`currentScore: ${currentScore}`); // dispalys the name of the variable with the value that we assigned to it

console.log(); // provides newline chracter between differnet excerisses 


// excercise 4 

console.log("Excercise 4:");

if ('100' == 100) // == operator compares values based on loose equality of the values and not taking into account the types
{
    console.log("The values are equal!"); // executes if condition is loosy true 
}
else{
    console.log("The values are not equal!"); // executes if condition is NOT loosy true 
}

if ('100' === 100) // === operator compares values based on strict equality where type is taken into account as well as the values
{
    console.log("The values are strictly equal!"); // executes if condition is strictly true with datatypes AND values being equal
} else {
    console.log("The values are NOT strictly equal!"); // executes if condition is NOT strictly true 
}


console.log(); // provides newline chracter between differnet excerisses 


// excercise 5 

console.log("Excercise 5:");

// assigns/declares different variables with their respective values
let isWeekend = false;
let schedule; 
schedule = isWeekend ? "Day Off"  : "Work Day"; // ternary operator which will asses the conditional before the ?; if the value assessed is true then it is the returning the value directly after the ?; if false, then value are : is returned; returned value is assigned since assignment operator present

console.log(schedule); // prints out the value that schedule was assigned based on the ternary operator


console.log(); // provides newline chracter between differnet excerisses 


// excercise 6 

console.log("Excercise 6:");

let userAge = 16; // assigns number 16 to variable 

// conditional to check if the variable userAge has a value that is greater than or equal to 18 or not
if (userAge >= 18){
    console.log("Access Granted"); // executes if userAge variable is greater than or equal to 18
}
else{
    console.log("Access Denied"); // executes if userAge variable is less than 18
}


console.log(); // provides newline chracter between differnet excerisses 


// excercise 7 

console.log("Excercise 7:");

// assigns the respective variables their respective values
let hasPermission = true;
let itemCount = 3;

// conditional to check whether the conditions are true 
if (hasPermission == true && itemCount <= 5){
    console.log("Ready to process"); // execites if both hasPermission is TRUE AND itemCount is less than or equal to number 5
}


console.log(); // provides newline chracter between differnet excerisses 


// excercise 8 

console.log("Excercise 8:");

for(i = 0; i < 5; i++) // for loop will oop for 5 times and stop whenever the conditonal in the for loop is no longer true
{
    console.log(`Iteration: ${i+1}`); // executes each time the loop iterates; i+1 is there to account for fact that index is starting at 0 but we want to print starting from 1-5
}


console.log(); // provides newline chracter between differnet excerisses 


// excercise 9 

console.log("Excercise 9:");

for(i = 0; i < 10; i++) // loop will execute 10 times based on the intialization and the condition that is given evaluating to true
{
    if (i == 7) // conditonal to check if i is equal to number 7
        break; // will get out of the execution of the loop and will continue with whatever is outside of the loop; conditional above will be checked only once since the break will take it out of the loop execution
    
    console.log(`Iteration: ${i}`) // will print out the iteration number, if the conditional above does not evaluate to true
}


console.log(); // provides newline chracter between differnet excerisses 


// excercise 10

console.log("Excercise 10:");

let counter = 10; // assigns number 10 to varibale named  counter 

do{
    console.log("Running Once"); // will execute at least this one time since it is in the do portion of the do while loop
} while (counter != 10) // condition to check if the loop should continune and should if counter does not equal 10


console.log(); // provides newline chracter between differnet excerisses 


// excercise 11 

console.log("Excercise 11:");

// function which takes in two parameters for height and width and returns the area from them
function calculateArea(width, height){
    return width * height; // returns the width and height multiplied together which is the area
}

let resultArea = calculateArea(5,10); // variable is assigned and initalized with the return value from the calculateArea function call with the parameters 5 for width and 10 for height

console.log(`ResultArea: ${resultArea}`); // outputs the area returned from the function


console.log(); // provides newline chracter between differnet excerisses 


// excercise 12

console.log("Excercise 12:");

let fruitList = ['Apple', 'Banana']; // array with a couple of intialized values

fruitList.push('Grape'); // appends the element 'Grape' to the end of the array 

fruitList.shift(); // will remove the first element from the array which is 'Apple' and is effectively shifting all elements in the array one left 

console.log(`Index of Banana: ${fruitList.indexOf('Banana')}`); // returns the index number of  the array where the first element named 'Banana' is

console.log("FruitList: " + fruitList); // dispalys the current array after all operations


console.log(); // provides newline chracter between differnet excerisses 


// excercise 13

console.log("Excercise 13:"); 

let originalData = [5,2,6,7,89,1,12,86,45] // variable originalData is assigned the array with the respective values
let clonedData = originalData.slice(2, 7) // will return a slice of the array within the specified indice; returns a shallow copy so the values still point to the original array values

console.log(`Original Data Array: ${originalData}`);// prints out the original data array
console.log(`Cloned Data Array: ${clonedData}`); // prints out the sliced data array


console.log(); // provides newline chracter between differnet excerisses 


// excercise 14

console.log("Excercise 14:");

// function which will act as a constructor for the Animal class and when called with new keyword will create objects of type Animal
function Animal(species, sound){
    // assigns the parameter values passed to the constructor to the specific Animal object being consturcted using the this keyword
    this.species = species;
    this.sound = sound;
}

let myAnimal = new Animal("Lion", "Roar"); // constructs and assigns a new Animal object with the parameters passed into the constructor; new keyword is used to create the object which is of an Animal type

console.log("Species: " + myAnimal.species);
console.log("Sound: " + myAnimal.sound);


console.log(); // provides newline chracter between differnet excerisses 


// excercise 15

console.log("Excercise 15:");

// creates two Animal objects with their respective parameters passed into their consturctors and each assigned to their respective variables
let dog = new Animal("Canine", "Woof");
let cat = new Animal("Felline", "Meow");

let animalArray = [dog, cat] // stores the animal objects in the array 

console.log(animalArray) // prints out the animal objects array