//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!

//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Objects
// This is the coding assigment for the fourth week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - Object Basics
//   - Primitive vs Object Types
//   - Object Destructuring
//   - Manipulating Objects

// NOTE: Arrays are a kind of Object in JavaScript (which is why you can reference an element by number and see what string/number/etc. is in that position of the array).  JavaScript Objects also support a different type of array referred to as an associative array.  Rather than an item in the array being addressed by an integer, it is addressed by a string, and allows you to associate a string name with any type of javascript value.  It stores a set of key:value pairs, where the key is a string.

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, you'll need to use console logs for all the questions to check your code output. Using a function in a console.log is very similar to how you were using them with variables last week. To invoke/call the function use the syntax:

//  console.log("Q#: ", functionName(anyInput))

// As always, click the green Run button at the top of the screen to see the output of your called functions in the Console tab to the right of this screen. Check to make sure that the output you get in your Console is the expected output.

// ---------- QUESTION 1 ----------
// Objects are a way to store property:value pairs of data in a variable.  First, create an object called 'myPet'.  Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values.  Use your console.log to print the object.  Use your console.log's to print the values of each property to the console.

// EXAMPLE LOG:
//    console.log("Q1 object: ", myPet);
//    console.log("Q1 name: ", myPet.name);
//    console.log("Q1 species: ", myPet.species);
//    console.log("Q1 color: ", myPet.color);
// EXAMPLE OUTPUT:
//    Q1 object:  {"name":"Teddy","species":"ferret","color":"brown"}
//    Q1 name: Teddy
//    Q1 species: ferret
//    Q1 color: brown

// PUT YOUR CODE HERE
const myPet = { name: "Teddy", species: "ferret", color: "brown" };
console.log("Q1 object: ", myPet);
console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 Modifying properties ---------
// Now let's see how we can modify the properties. Modify the 'name' property of the 'myPet' object. This name should be different than the value used in Question 1 (e.g. Henry ). Use your console.log's to print the myPet console. Verify the 'name' property is different than the value in Question 1.

// EXAMPLE LOG:
//    console.log("Q2 updated object", myPet);
// EXAMPLE OUTPUT:
//    Q2 updated object:  {"name":"Henry","species":"ferret","color":"brown"}

// PUT YOUR CODE HERE
myPet.name = "Henry";
console.log("Q2 updated object", myPet);

// ---------- QUESTION 3 Looping thru properties ---------
// Now let's see how we can loop thru the properties - this is a common task in JavaScript. Use a for...in loop, a special type of loop in JavasScript designed specifically for iterating over the properties of an object.  See https://www.w3schools.com/js/js_loop_forin.asp for reference.
//  Write a for...in loop that iterates through each property in the myPet object and prints the property name and its value to the console in the following format:
//Q4: propertyName: propertyValue
//Use console.log() inside the loop to display each key-value pair.

// EXAMPLE LOG in the loop - replace <..>  :
//    console.log("Q3: "+ <Supply key here> + ":",  <Supply value here> );
// EXAMPLE OUTPUT:
//    Q3: name: Henry
//    Q3: species: ferret
//    Q3: color: brown

// PUT YOUR CODE HERE
for (let key in myPet) {
  console.log("Q3: " + key + ":", myPet[key]);
}

// ---------- QUESTION 4 ----------
//Let’s explore how to work with object data inside a function. Your task is to define a method called describe on the myPet object. This method should take no parameters and return a sentence using a template literal that describes your pet using its properties.

//Add a method named describe to the myPet object.
//Inside the method, use a template literal to construct a sentence using the name, color, and species properties.
//Use console.log() to display the result in the format shown below.

// EXAMPLE LOG:
//    console.log("Q4: ", myPet.describe());
// EXAMPLE OUTPUT:
//Q4: Teddy is a brown ferret.

//Stretch goal: Use "this" keyword.  Instead of referencing the object name directly (e.g., myPet.name), update your method to use the this keyword to access the object's properties. This makes your method more flexible and reusable.

// PUT YOUR CODE HERE
myPet.describe = function () {
  return `${myPet.name} is a ${myPet.color} ${myPet.species}. `;
};
console.log("Q4: ", myPet.describe());

myPet.describev1 = function () {
  return `${this.name} is a ${this.color} ${this.species}. `;
};
console.log("Q4 v1: ", myPet.describev1());

//---------- QUESTION 5 ----deleting a property------
//Using myPet, remove the property color.  Verify the deletion by checking whether the myPet object still has a property named color.  It returns true if the property exists and false otherwise

// EXAMPLE LOG:
//     console.log("Q5", "Color property deleted:", !myPet.hasOwnProperty('color'));
// EXAMPLE OUTPUT:
//Q5 Color property deleted: true

delete myPet.color;
console.log("Q5", "Color property deleted:", !myPet.hasOwnProperty('color'));


//---------- QUESTION 6 ----array of objects, for each------
//Create a variable named pets and assign it an array containing three pet objects. Each object should include three properties: name, species, and color with appropriate values. Then, define a function called printPets that uses the forEach method to loop through the array and log each pet’s details to the console. Note: console.log is called within the function

//EXAMPLE CALL:
//   const pets = [
//     { name: "WillBe", species: "bird", color:"gray"},
//     { name: "Oshie", species: "cat", color: "multi" },
//     { name: "Sunny", species: "dog", color: "black" } ]
//
//  Call the function with the pets array
//        console.log ("Q6:");
//        printPets(pets);

// EXAMPLE OUTPUT:
//Q6:
//Name: WillBe, Species: bird, Color: gray
//Name: Oshie, Species: cat, Color: multi
//Name: Sunny, Species: dog, Color: black

// PUT YOUR CODE HERE

function printPets(pets) {
  //Iterating over the array and printing each pet's details
  pets.forEach((pet) => {
    console.log(
      `Name: ${pet.name}, Species: ${pet.species}, Color: ${pet.color}`
    );
  });
}
const pets = [
  { name: "WillBe", species: "bird", color: "gray" },
  { name: "Oshie", species: "cat", color: "multi" },
  { name: "Sunny", species: "dog", color: "black" },
];
console.log("Q6:");
printPets(pets);


