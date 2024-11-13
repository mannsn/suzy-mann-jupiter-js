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
// Objects are a way to store property:value pairs of data in a variable.  First, create an object called 'myPet'.  Add three properties called 'name', 'species', and 'color' to the 'myPet' object below and assign each of them values.  Use your console.log's to print the values of each property to the console.

// EXAMPLE LOG:
//    console.log("Q1 name: ", myPet.name);
//    console.log("Q1 species: ", myPet.species);
//    console.log("Q1 color: ", myPet.color);
// EXAMPLE OUTPUT:
//    Q1 name: Teddy
//    Q1 species: ferret
//    Q1 color: brown

// PUT YOUR CODE HERE
const myPet = { name: "Nicky", species: "greyhound", color: "black" };

console.log("Q1 name: ", myPet.name);
console.log("Q1 species: ", myPet.species);
console.log("Q1 color: ", myPet.color);

// ---------- QUESTION 2 ----------
// Now let's see how we can use the property:value pairs in template literals.  Create a variable called 'aboutPet' and assign it a template literal that uses the 'myPet' object to make a sentence sharing all the pet details.  The sentence should look something like this: "Teddy is a brown ferret."

// EXAMPLE LOG:
//    console.log("Q2: ", aboutPet);
// EXAMPLE OUTPUT:
//    Q2: Teddy is a brown ferret.

// PUT YOUR CODE HERE
const aboutPet = `${myPet.name} is a ${myPet.color} ${myPet.species}. I miss her.`;
console.log("Q2: ", aboutPet);

// ---------- QUESTION 3 ----------
// Let's add a method to our object.  Create a method called 'age' that takes no parameters, and uses no outside variables (hint: use 'this').  The method should return the age of the pet in years.

// EXAMPLE LOG:
//    console.log("Q3: ", myPet.age());
// EXAMPLE OUTPUT:
//    Q3: 7

// PUT YOUR CODE HERE

myPet.ageProperty = 12;
myPet.age = function () {
  return this.ageProperty;
};
console.log("Q3: ", myPet.age());

// ---------- QUESTION 4 ----------
// Now, let's see how we can use data within objects in functions.  Write a function called 'isDog' that takes one object parameter.  In the function, create a variable called 'speciesChecker' and assign it the value 'dog'.  Then, still in the function, return true if the object's species value is equal to the variable 'speciesChecker', or false if not.

// EXAMPLE LOG:
//    console.log("Q4: ", isDog(myPet));
// EXAMPLE OUTPUT: (if your 'myPet' object from Question 1 is about any animal other than a dog)
//    false
// NOTE: if when you made 'myPet' in Question 1, you did put dog as species, you should get true as your output instead.

// PUT YOUR CODE HERE

function isDog(aPet) {
  const speciesChecker = "dog";
  if (aPet.species === speciesChecker) return true;
  else return false;
}

const myPet1 = {
  name: "Sunny",
  species: "dog",
  color: "black",
  ageProperty: 7,
  age: function () {
    return this.ageProperty;
  },
};
console.log("Q4: ", isDog(myPet));
console.log("Q4: ", isDog(myPet1));
// ---------- QUESTION 5 ----------
// Time to start building on our knowledge!  Create a variable called 'library' and assign it an array of 3 objects.  Each object in the array should have three properties: 'title', 'author', and 'libraryID'.  You can use any three books/movies/etc. you like, and make up any library ID for each item as long as your ID numbers are 4 characters long.  An example object could look something like this:

//   title: 'The Tech That Comes Next',
//   author: 'Amy Sample Ward and Afua Bruce',
//   libraryID: 9826

// You will use this array of objects for this and the next several questions.  For this question, create a function called 'sortArray' that takes one Array parameter (use the one you just made) and returns a NEW array sorted in ascending order (low to high) by libraryID. Remember to make a reference to your 'library' object within your function to create the new object you'll sort rather than making a new variable whose object is the same value as your 'library' object.

// EXAMPLE LOG:
//    console.log("Q5: ", sortArray(library));
// EXAMPLE OUTPUT: (if your 'library' array contains books with libraryID numbers of 9826, 1234, and 5729)
//    Q5: [
//      { title: 'JavaScript: The Good Parts', author: 'Douglas
// Crockford', libraryID: 1234},
//      { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
// Bibeault, and Maras', libraryID: 5729},
//      { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
// and Afua Bruce', libraryID: 9826}
//    ]

// PUT YOUR library object CODE HERE

const book1 = {
  title: "Piranesi",
  author: "Susanna Clarke",
  libraryID: 1234,
};

const book2 = {
  title: "The Vaster Wild",
  author: "Lauren Goff",
  libraryID: 9101,
};

const book3 = {
  title: "The Sentence",
  author: "Louise Erdrich",
  libraryID: 8000,
};

const library = [book1, book2, book3];

// PUT YOUR function CODE HERE

function sortArray(libraryArray) {
  const sortedArray = [...libraryArray];
  sortedArray.sort(function (a, b) {
    return a.libraryID - b.libraryID;
  });

  return sortedArray;
}

console.log ("Q5 library before",library);
console.log("Q5: ", sortArray(library));
console.log ("Q5 library after",library);

// ---------- QUESTION 6 ----------
// Create a function called 'addTypeProperty' that takes one Array parameter and returns a NEW Array where each Object has a new property called 'type' with value 'book'.  Remember to make a reference to your 'library' object within your function to create the new object you'll add the type properties to rather than making a new variable whose object is the same value as your 'library' object. STRETCH GOAL: use the map() method to achieve this.

// EXAMPLE LOG:
//    console.log("Q6: ", addTypeProperty(library));
// EXAMPLE OUTPUT:
//    Q6: [
//      { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
// and Afua Bruce', libraryID: 9826, type: 'book'}
//      { title: 'JavaScript: The Good Parts', author: 'Douglas
// Crockford', libraryID: 1234, type: 'book'},
//      { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
// Bibeault, and Maras', libraryID: 5729, type: 'book'},
//    ]

// PUT YOUR CODE HERE
function addTypeProperty(anArray) {
  const newArray = [...anArray];
  for (let i = 0; i < newArray.length; i++) {
    newArray[i].type = "book";
  }
  return newArray;
}


/*function addTypeProperty(arr) {
  return arr.map((item) => ({ ...item, type: "book" }));
}*/

console.log("Q6 before map", library);
console.log("Q6 map: ", addTypeProperty(library));
console.log("Q6 after map", library);

// ---------- QUESTION 7 ----------
// Create a function called 'addNewObject' that takes one Array parameter and one Object parameter and returns a new Array with the new Object inserted at the end.  Remember to make a reference to your 'library' object within your function to create the new object you'll add the item too rather than making a new variable whose object is the same value as your 'library' object.

// HINT: The new object should have the following properties: 'title', 'author', and 'libraryID'

// EXAMPLE LOG:
//    console.log("Q7: ", addNewObject(library,{title:'JavaScript: The Definitive Guide',author:'David Flanagan',libraryID: 6248}));
// EXAMPLE OUTPUT:
//    Q7: [
//         { title: 'The Tech That Comes Next', author: 'Amy Sample Ward
//    and Afua Bruce', libraryID: 9826},
//         { title: 'JavaScript: The Good Parts', author: 'Douglas
//    Crockford', libraryID: 1234},
//         { title: 'Secrets of the JavaScript Ninja', author: 'Resig,
//    Bibeault, and Maras', libraryID: 5729},
//         { title: 'JavaScript: The Definitive Guide', author: 'David
//    Flanagan', libraryID: 6248}
//    ]

// PUT YOUR CODE HERE
function addNewObject(anArray, anObject) {
  /*const newArray = [...anArray];*/

  //If new Array needs to be a deep copy
   const newArray = anArray.map((item) => ({ ...item }));
   
   /*newArray.push(anObject);*/

  //If object also needs to be a copy
  newArray.push({ ...anObject });
  return newArray;
}


/*function addNewObject(array, newObject) { return [...array, newObject];*/

console.log(
  "Q7: ",
  addNewObject(library, {
    title: "JavaScript: The Definitive Guide",
    author: "David Flanagan",
    libraryID: 6248,
  })
);
