//Create an array called softwareEngineeringStudents and add 10 students from your class in the array. Then, print the softwareEngineeringStudents to the console using console.log.

//Solution 
let softwareEngineeringStudents = ['Kingsley', 'Tomiwa', 'Toki Tosin', 'Pere-ebi', 'Patrick', 'Oreos','Olu', 'Lanre', 'Romeo', 'Blossom'];
console.log(softwareEngineeringStudents);


//Create an array called crew to organize the Serenity’s crew and set it equal to the variables below . You don't need to type out the actual strings, just use the provided variables.

//Solution
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];
console.log(crew);

//Starting with this array of prices, change the prices of the 1st, 3rd, and 7th elements in the array.

const prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 2.33;
prices[2] = 70.20;
prices[6] = 87.00;
console.log(prices);

/*James was creating an array with the colors of the rainbow, and he forgot some colors. The standard rainbow colors are usually listed in this order:

const rainbow = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"];

but James had this:

const rainbow = ["Red", "Orange", "Blackberry", "Blue"];

Using only the splice() method, insert the missing colors into the array, and remove the color "Blackberry" by following these steps:

Remove "Blackberry"
Add "Yellow" and "Green"
Add "Purple"
/*
* Programming Quiz: Colors of the Rainbow
*
* Use only the splice() method to modify the rainbow variable:
*  - remove "Blackberry"
*  - add "Yellow" and "Green"
*  - add "Purple"
*/

// const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
// your code goes here

//Solution 
const rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
rainbow.splice(2, 1);
rainbow.splice(2, 0, 'Yellow', 'Green');
rainbow.splice(5, 0, 'Purple')
console.log(rainbow);

//Create a function called hasEnoughPlayers() that takes the team array as an argument and returns true or false depending on if the array has at least seven players.
/*
* QUIZ REQUIREMENTS
* - Your code should have a function `hasEnoughPlayers()`
* - Your function `hasEnoughPlayers()` should accept one parameter
* - Your function `hasEnoughPlayers()` should return the expected output - a Boolean value - true or false
* - Return true if the array size is atleast 7, otherwise false.
*/
// your code goes here

const team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(team) {
  if (team.length >= 7) {
     return true;
  }else {
    return false;
  }
}
console.log(hasEnoughPlayers(team));

/*In an earlier exercise, you created a crew array to represent Mal’s crew from the hit show Firefly.

let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

Later in the show, Mal takes on three new crew members named "Simon", "River", and "Book". Use the push() method to add the three new crew members to the crew array.

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";
/*
* Programming Quiz: Joining the Crew
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `crew`
* - Your `crew` array should contain the Serenity\'s original crew and the three new crew members
* - Your code should use the `push()` method to add new members to the `crew` array
* - Print the array on the console at the end
*/

//Solution
let captain = "Mal";
let second = "Zoe";
let pilot = "Wash";
let companion = "Inara";
let mercenary = "Jayne";
let mechanic = "Kaylee";

const crew = [captain, second, pilot, companion, mercenary, mechanic];

let doctor = "Simon";
let sister = "River";
let shepherd = "Book";

crew.push(doctor, sister, shepherd);
console.log(crew);

