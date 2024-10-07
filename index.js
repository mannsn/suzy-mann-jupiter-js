









//--------------- IMPORTANT!!! ---------------

// IF YOU HAVE NOT READ THE README.md FILE YET, double click on that file in the "Files" panel to the left now and read it before you begin your assignment!  








//---------- OVERVIEW AND INSTRUCTIONS ----------

//# JavaScript Basics
// This is the coding assigment for the first week of the Intro to Programming course from Code the Dream. The concepts touched on in this assignment include:
//   - The basic syntax of the JavaScript 
//     programming language
//   - Basic programming concepts like variables, 
//     data types, and conditional statements
//   - How to troubleshoot programming problems

// In this assignment you will write your own code. Your instructions are listed as "comments", meaning the instructions are grayed out and start with '//' at the beginning of the line of code. Put your answers immediately below the instructions for each question. As mentioned in the README.md file, the first few questions have console logs provided. The third question you'll need to complete the console log that was started for you. Use console logs for all the remaining questions to check your code output.  To ensure you get comfortable with and learn the syntax well, be sure your AI code completion options are off!  You can find instructions on how to do this in your README.md file under "Instructions".


// ---------- QUESTION 1. ----------
// Declaring and giving string values to variables.
// Create three variables.  First let's make sure we're using "camel case" where all letters are lowercase except for the first letter of words that are in the middle.  So, your first variable should be titled "firstName" with the value of your first name as a string.  Your second variable should be titled "lastName" with the value of your last name as a string.  The last variable should be titled "country" with the value of the name of the country where you were born as a string.

//PUT YOUR CODE HERE
console.log ("*** Question 1");

const firstName = "Suzy";
const lastName = "Mann";
const country = "United States";

console.log("My first name is: ", firstName);
console.log("My last name is: ", lastName);
console.log("I was born in the country: ", country);


// ---------- QUESTION 2. ----------
// Declaring and giving numerical values to variables.
// Create four variables.  One titled "floatingPoint" with the value of any floating point number you choose.  One titled "integer" with the value of any integer number you choose.  One titled "negative" with the value of any negative number you choose.  One titled "notANumber" with the value of 4 multipled by a string of your choice.
//NOTE: Remember from your lessons that JavaScript can treat large numbers differently than you might expect.  
//STRETCH GOAL: You'll see "Stretch Goal"s throughout the course. Stretch Goals are optional, but are encouraged as they help you try your hand at something a little more advanced for the week/assignment/question. Create a fifth variable titled "bigNumber" that is 16 or more numbers long. Then write your console.log and see what happens as you play and practice working with large numbers.

// PUT YOUR CODE HERE
console.log ("*** Question 2");
const floatingPoint = 1.22;
const integer = 3;
const negative = -5;
const notANumber = "a";
const bigNumber = 12345678901234567;

console.log("This is a decimal, also called a floating point number: ", floatingPoint);
console.log("This is a whole number, also called an integer: ", integer);
console.log("This is a negative number: ", negative);
console.log("You can't mulitply 4 by a word! ", notANumber *4);
console.log ("This is a big Number: ", bigNumber);


// ---------- Question 3. ----------
// Declaring and giving boolean values to variables.
// Create two variables.  Name the first variable anything you want and give it the value of true.  Name the second variable a different name than the first and give it the value of false.  

// PUT YOUR CODE HERE
console.log ("*** Question 3");

const test1 = true;
const test2 = false;

console.log("The variable I made true is: ", test1 );
//The output of the above should be true.
console.log("The variable I made false is: ", test2);
//The output of the above should be false.


// ---------- QUESTION 4. ----------
// String Concatenation
// Create a variable that makes a concatenated string out of the variables you made in Question 1. Be sure you're using your Q1 variables and not making new ones.
// Suggested text: Hello! My name is (your first name variable and last name variable concatenated here) and I was born in (your country variable here)
// You can also choose to make the text between the variables strings and concatenate all of them together.
// STRETCH GOAL: For this stretch goal, make a second variable that still concatenates your variable from Q1, but uses template literals.

// PUT YOUR CODE HERE
console.log ("*** Question 4");

let text1 = "Hello! My name is " + firstName + " " + lastName +  " and I was born in the " + country;
console.log (text1);

let text2 = `Hello! My name is ${firstName} ${lastName} and I was born in the ${country}`;
console.log (text2);




// Don't forget your console.logs!


// ---------- QUESTION 5. ----------
// Numerical "concatenation" also known as Addition
// Make two variables.  One will hold the addition of your your floating point and integer variables from Q2, the other should hold the addition of your integer and negative number from Q2.
//STRETCH GOAL Use an augmented assignment (also called compound assignment) operator to change the value of your floating point and integer numbers by the amount of your integer and/or negative number


// PUT YOUR CODE HERE
console.log ("*** Question 5");
let sum1 = floatingPoint + integer;
let sum2 = integer + negative;
console.log ("Sum1 = ", sum1);
console.log ("Sum2 = ", sum2);
sum1 += integer;
sum2 += negative;
console.log("Sum1 plus integer", sum1);
console.log("Sum2 plus negative", sum2);


// Don't forget your console.logs!


// ---------- QUESTION 6. ----------
// String Methods
// Create four variables named "length", "firstInitial", "lastInitial", and "capitalize".  Using string methods, assign the length of your first name (use your variable from Q1) to the "length" variable. Assign the first letter of your first name (use your variable from Q1) to the "firstInitial" variable.  Assign the LAST letter of your first name (use your variable from Q1) to the "lastInitial" variable.  Change your first name to all capital letters and assign it to the "capitalize" variable.
//STRETCH GOAL: Create a variable called "weirdInitials". Using string methods, have weirdInitials result in the value of the LAST letters of any first and last names and should be capitalized.  Example: "Sally Smith"'s weird initials should be "YH" and "Jose Rodriguez"'s inititals should be "EZ"

// PUT YOUR CODE HERE
console.log ("*** Question 6");

const length = firstName.length;
const firstInitial = firstName.charAt(0);
const lastInitial = firstName.charAt(length-1);
const capitalize = firstName.toUpperCase();
console.log("length of first name = ", length);
console.log ("first initial of first name = ", firstInitial);
console.log ("last initial of first name = ", lastInitial);
console.log ("first name capitalized = ", capitalize);

const length1 = lastName.length;
const lastInitial1 = lastName.charAt(length1-1);
const weirdInitials = lastInitial.toUpperCase() + lastInitial1.toUpperCase();
console.log ("weird initials = ", weirdInitials);



// Don't forget your console.logs!


// ---------- QUESTION 7. ----------
// Conditional Statements - part 1 of 3
// Declare a variable named "answer7".  Then create a conditional if else statement that will assign the value of true to the answer7 variable if your integer from Q2 is greater than 10 and assign it false if it is not.
// STRETCH GOAL: Make an if elseif else statement that assigns answer7 the value of "less than" if your integer from Q2 is less than 10, "equal to" if it's equal, and "greater than" if it's greater.

// PUT YOUR CODE HERE
console.log ("*** Question 7");

const answer7 = integer >10;


console.log ("answer7 = ", answer7);

let answer7a;
if (integer <10)
{answer7a = "less than";}
else if (integer === 10)
{answer7a = "equal to";}
else
{answer7a = "greather than"}
console.log ("answer7a = ", answer7a);

// Don't forget your console.logs!


// ---------- QUESTION 8. ----------
// Conditional Statements - part 2 of 3
// Declare a variable called "age" and assign it that value of your age in years.  Create a conditional statement that will console.log the phrase "Age is just a number!" if your age is less than or equal to 30 and "Young at heart!" if your age is greater than 30.
//STRETCH GOAL: Combine your skills!  Use template literals to console.log your name in the phrase as in "Sally, age is just a number!" or "Jose, you're young at heart!"

// PUT YOUR CODE HERE
console.log ("*** Question 8");

const age=61;
if(age <= 30)
{  console.log ("Age is just a number");}
else
{console.log ("Young at heart");}

const age1=61;
if(age1 <= 30)
{  console.log (`${firstName} Age is just a number`);}
else
{console.log (`${firstName} Young at heart`);}

// Don't forget your console.logs!


// ---------- QUESTION 9. ----------
// Conditional Statements part 3 of 3
// Create a variable "randomNum" to be a random number generator that randomly returns either the number 1, 2, or 3 (you can use this resource to help you solve how to do this part: https://www.w3schools.com/js/js_random.asp). Now let's make a "Magic 8 Ball" using if elseif else that returns a different phrase for each of the three possible numbers. 
// If your random number is 1, console.log the phrase "It is certain.".  
// If it is 2, console.log "Perhaps.".  
// If it is 3, console.log "Absolutely not.".
// STRETCH GOAL: Complete Q9 using a switch statement instead of if elseif else.

// PUT YOUR CODE HERE
console.log ("*** Question 9");

const randomNum = Math.floor(Math.random() * 3) + 1;
console.log ("random Num = ", randomNum);
if (randomNum === 1)
  {console.log("It is certain."); }
else if (randomNum === 2)
  {console.log("Perhaps."); }
else if (randomNum === 3)
  {console.log("Absolutely not."); }

console.log ("*** Question 9a");
switch (randomNum) {
  case 1:
    console.log("It is certain.");
    break;
  case 2:
    console.log("Perhaps.");
    break;
  case 3:
    console.log("Absolutely not.");
    break;
    
}

  
// Don't forget your console.logs!


// ---------- QUESTION 10. ----------
// Math calculations part 1 of 5
// Declare a variable named "exampleNum".  Give it the value of a floating point number with 4 decimal places.  Using a Number method round it to the nearest two decimal place. Example if the number is 21.4572, exampleNum should become 21.46.
// STRETCH GOAL: Achieve the same results as Q10 using Math methods instead of Number methods. HINT: you may need to alter the variable over a series of calculations/method uses.

// PUT YOUR CODE HERE
console.log ("*** Question 10");

var exampleNum = 21.4567;
console.log ("example num initial value = ", exampleNum);


console.log ("example num two places = ",  Math.round(exampleNum * 100) / 100);


// Don't forget your console.logs!


// ---------- QUESTION 11. ----------
// Math calculations part 2 of 5
// Declare two variables named "stringNum" and "mathNum".  Assign stringNum a STRING of numbers and mathNUM numbers.  Create a third variable named "answer11" and have it multiply stringNum and mathNum.  Remember to convert your string in order for it to properly calculate!

// PUT YOUR CODE HERE
console.log ("*** Question 11");

var stringNum 
const mathNum = 5;

stringNum = "1" + mathNum;
const answer11 = stringNum * mathNum;
console.log("string num = ", stringNum);
console.log ("math num = ", mathNum);
console.log ("stringNum * mathNum = ", answer11);
// Don't forget your console.logs!


// ---------- QUESTION 12. ----------
// Math calculations part 3 of 5
// Declare a variable named "diameter" and assign it an integer value. Through a series of math calculations and variables, calculate the "radius" (which is half the diameter), the "circumference" (which is 2 multiplied by the Math value pi, multiplied by the radius) and the "area" (which is the Math value pi, multiplied by the radius squared).

// PUT YOUR CODE HERE
console.log ("*** Question 12");

const diameter = 3;
const radius = diameter/2;
const circumference = ( 2 * Math.PI) * radius;
const area = Math.PI * (radius **2); 
console.log ("diameter = ", diameter);
console.log ("radius = ", radius);
console.log ("circumference = ", circumference);
console.log ("area = ", area);


// Don't forget your console.logs!


// ---------- QUESTION 13. ----------
// Math calculations part 4 of 5
// Let's make a useful math problem - create a tip calculator! Declare two variables called "billTotal" and "tipPercentage". Assign billTotal a floating point number with two decimal places. Assign tipPercentage a floating point number between 0.1 and 0.9. Create a third variable called "tip" that will multiply tipPercentage and billTotal then use the addition assignment operator to add that amount back to billTotal. Example: if our bill 35.75 and we want to leave a 20% tip (0.2) our new billTotal should come out to 42.90.

// PUT YOUR CODE HERE
console.log ("*** Question 13");

let billTotal = 10.15;
console.log ("Original bill total", billTotal);
const tipPercentage = .2;
const tip = (billTotal * tipPercentage) ;
billTotal += tip;
console.log ("bill total = ", billTotal);
console.log ("tip percentage = ", tipPercentage);
console.log ("tip = ", tip);

// Don't forget your console.logs!


// ---------- QUESTION 14. ----------
// Math calculations part 5 of 5
// We don't always deal with measurements (like in question 12) or currency (like in the last question).  Let's work with time now.  Days are 24 hour increments, so we want to see how many hours beyond an even number of days it is until vacation!  Declare a variable called "totalHourstoWait" and assign it any integer number greater than 24 that you want. The declare a variable called "days" and divide totalHourstoWait by 24. Don't forget to round down or exclude any decimals from this total.  Next, declare a variable "extraHours" and use the modulo operator to find out how many hours beyond the number of days you'll still need to wait until vacation.  Finally, console.log a template literal phrase that lets you know how many days and hours you have to wait.  Example: if totalHourstoWait is 54, days should be 2, and extraHours should be 6 (because 2 days and 6 hours is 54 hours) so your console log should result in something like "2 days and 6 hours until vacation!".

// PUT YOUR CODE HERE
console.log ("*** Question 14");

const totalHourstoWait = 30;
const days = Math.floor(totalHourstoWait /24);
const extraHours = totalHourstoWait % 24;
console.log ("totalHourstoWait", totalHourstoWait);

console.log (`${days} days and ${extraHours} hours until vacation`)



// Don't forget your console.logs!


// ---------- QUESTION 15. ----------
// Student's choice! 
// Look back at the past 14 questions.  Which one did you have the hardest time with? Now create a question of your own based on the same principle. Include in your comments why you made this question for yourself and how you solved it.

// PUT YOUR CODE HERE


// Don't forget your console.logs!

console.log ("*** Question 15 - your choice");