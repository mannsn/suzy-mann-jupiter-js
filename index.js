//---------- QUESTION 7 --- Write a construction function to create Pet objects------
//Write a JavaScript constructor function named Dog that defines a blueprint for creating Dog objects. Each Dog object should include the following properties: name, breed, and age. Using this constructor, create two distinct Dog instances (dog1 and dog2) with different values for each property. Finally, use console.log() to display both Dog instances in the console.

//EXAMPLE CALL:
// Creating new Dog instances
//let dog1 = new Dog("Kroger", "greyhound", 8);
//let dog2 = new Dog("Destiny","shepherd" , 14);

// Displaying the Dog instances
//console.log("Q7", dog1);
//console.log("Q7", dog2);

// EXAMPLE OUTPUT:
//Q7: Dog { name: 'Kroger', breed: 'greyhound', age: 8 }
//Q7: Dog { name: 'Destiny', breed: 'shepherd', age: 14 }


// PUT YOUR CODE HERE
function Dog (name, breed, age){
  this.name = name;
  this.breed = breed;
  this.age = age;
}

// Creating new Dog instances
let dog1 = new Dog("Kroger", "greyhound", 8);
let dog2 = new Dog("Destiny","shepherd" , 14);

// Displaying the Dog instances
console.log("Q7:", dog1);
console.log("Q7:", dog2);

//---------- QUESTION 8 --- Write a function that compares two objects-----
//Write a function that compares two Dog instances objects and checks if they have the same keys and values. Write a function called areObjectsEqual(obj1, obj2) that returns true if both objects have the same keys and values, and false otherwise. 
//Reuse:
// - dog1 from question 7
// - dog2 from question 7
// Then, create:
// - dog3: an object with the same keys and values as dog1.
// - dog4: an object based on dog1 but with one additional key.

// Use console.log() to test your function with various object comparisons.
//EXAMPLE CALL:
//console.log("Q8: Are objects equal - different values:", areObjectsEqual(dog1, dog2)); 
//console.log("Q8: Are objects equal? - same key and values:", areObjectsEqual(dog1, dog3)); 
//console.log("Q8: Are objects equal? - different keys:", areObjectsEqual(dog1, dog4)); 

// EXAMPLE OUTPUT:
//Q8: Are objects equal - different values: false
//Q8: Are objects equal? - same key and values: true
//Q8: Are objects equal? - different keys: false

// PUT YOUR CODE HERE
let dog3 = new Dog("Kroger", "greyhound", 8);
let dog4 = new Dog("Destiny","shepherd" , 14);
dog4.extraproperty = "extra";
let dog5 = new Dog("Destiny","shepherd" ,  14);
delete dog5.age;
dog5.newproperty = "color"
dog5.color = "red"

console.log("Q8:", dog1);
console.log("Q8:", dog2);
console.log("Q8:", dog3);
console.log("Q8:", dog4);
console.log("Q8:", dog5);

// Step 2: Function to compare objects
function areObjectsEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if number of keys is the same
  if (keys1.length !== keys2.length) {
    return false;
  }

  // Check the objects
  for (let key of keys1) {

    //Check if obj2 has all of the same keys
    if (!obj2.hasOwnProperty(key)) return false;

    //Check if the values are the same
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

// Step 3: Test the function
console.log("Q8: Are objects equal - different values:", areObjectsEqual(dog1, dog2)); 
console.log("Q8: Are objects equal? - same key and values:", areObjectsEqual(dog1, dog3)); 
console.log("Q8: Are objects equal? - different number of keys:", areObjectsEqual(dog1, dog4)); 
console.log("Q8: Are objects equal? - same number of keys with different keys:", areObjectsEqual(dog1, dog4)); 

