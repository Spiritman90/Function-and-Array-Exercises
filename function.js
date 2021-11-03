//1. Declare a function called laugh() that returns "hahahahahahahahahaha!". Print the value returned from the laugh() function to the console.
//Solution.

function laugh () {
  return 'hahahahahahha';
}
console.log(laugh());

//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.

//Solution
function laugh(num) {
  let message = '';
  for (let i = 0; i < num; i++){
    message += 'ha'
  }
  return message + '!';
}
console.log(laugh());

//For this quiz, you're going to create a function called buildTriangle() that will accept an input (the triangle at its widest width) and will return the string representation of a triangle.

//Solution 
function makeLine(length) {
  let line = "";
  for (let j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
 }
function buildTriangle (num) {
  let triangle = '';
  for (let i = 1; i <= num; i++) {
    triangle +=makeLine(i);
  }
  return triangle;
} 

//Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

let laugh = function (num) {
  let message = '';
  for (let i = 0; i < num; i++){
    message += 'ha'
  }
  return message + '!';
}
console.log(laugh());

//Write a named function expression that stores the function in a variable called cry and returns "boohoo!". Don't forget to call the function using the variable name, not the function name:

let cry = function justCry () {
  return "boohoo";
}
console.log(cry() + '!');

//Call the emotions() function so that it prints the output you see below, but instead of passing the laugh() function as an argument, pass an inline function expression instead.

function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
emotions("happy", function laugh(num) {
  let smile = "";
  for (let i = 0; i < num; i++) {
    smile += "ha";
  }
  return smile + "!";
});
