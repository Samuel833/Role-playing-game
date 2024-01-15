/*
    console.log("Hello World");
    var xp;//Declaring variables
    var xp = 0; //Declared variable is initialzed with a value assigned to it//
    var health = 100;
    var gold = 50;
    var currentWeapon = 0; //Use of camelCasing if a variable contains more than a word//
*/
//Above we've been declaring variables with var meanwhile in modern Js it is Best Practice to use the let Keyword
//so we would modify our code to fit thid practice

// let xp;
// let xp = 0;//This wont work as the let variable have already been declared and can't be redeclared with an assigned value on the same block scope

let xp = 0;
xp = 1;//This will work as the already declared xp variable can be reasigned another value withoht using the let keyword again
console.log(xp);
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting; //Declared a variable called fighting without initialising it with a value
let monsterHealth;
let inventory;

//I've been declaring variables that has the data type of number I am gong to use strings--They are used to store words or texts
//Strings are surrounded with either double quotes(""), single quotes('') or back ticks(``)
//inventory = "stick";

//Now I need my inventory variable to hold multiple items 
//And this would be possible with the data type called Array
//An array can hold multiple values seperated by commas
//inventory = ["stick", "dagger", "sword"];//Here the array contans three strings 

//I want the players to start with only a stick
inventory = ["stick"]

//Javascript interacts with HTML using the Document Object Model(DOM)
//The DOM is a tree of objects that represents the HTML
//The HTML can be accessed using the "document" object which represents the entire HTML document
//The "querySelcetor() is a method used in finding specific elements in the HTMl"
//This method takes a CSS selector as an argument and returns the first eleement that matches that selector
//To find the <h1> element in the HTML one would write
  //let h1 = document.querySelector("h1");
  //Note that h1 is a string(Explains why it is in double quotes) and matches the CSS selector to use.

//let button1 = document.querySelector("#button1");//Here we create "button1" variable and use "querySelctor()"" to assign it the button element which has an id of button1(id elements are prefixed by #)
 
const button1 = document.querySelector("#button1");//since the button1 variab;le is not going to be reassigned we use the const keyword to decare it instead of the let keyword. This will tell JS to throw an error if we accidentally reassign it.
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");//Since I have already declared a variable with monsterHealth in line 20 I used another variable here to catch the element with the id #monsterHealth.

//Functions allow to run specific sections of code at specific times
//functions are declared using the "function" keyword
//Here is an example of a function that outputs "Hello World"
function functionName(){
  console.log("Hello World");
  //Note the opening and closing curly braces. These indicate the section of code that is within the functiion
}

//button elements have a special property in JS called "onclick" which can be used to determine what happens when someone clicks that button
//Properties in JS can be accessed in a couple of different ways
//The first way is using the "dot notation"
//Using this in Accessing the onclick property of a button would look like "button.onclick"

button1.onclick = goStore;//Here I used the dot notation to set the onclick property of button1 to the function "goStore" 
button2.onclick = goCave;//Here I used the dot notation to set the onclick property of button1 to the function "goStore" 
button3.onclick = fightDragon;//Here I used the dot notation to set the onclick property of button1 to the function "goStore" 

//The "innerText" property controls the text that appears in an html element.
  // const info = document.querySelector("#info");
  // info.innerText = "Hello World";
//The code above would change the elemnt assigned to the info variable to have the text Hello World

//goTown function moved above goStore function
//Then copied and paste the content of goStore into goTown
//updated values of button innerText
function goTown(){
  button1.innerText = "Go to store";//Changes the previous text to "Go to store" when button1 is clicked
  button2.innerText = "Go to cave";//Changes the previous text of button2 to "Go to cave" when button1 is clicked
  button3.innerText = "Fight dragon";//Changes the previous text of button3 to "Fight dragon" when button1 is clicked

  text.innerText = "You are in the town square. You see a sign that says \"Store\"."//Once button1 is clicked I change the display text to indicate that you are now in the store 
  //the backslash is to escape the double quotes

  //Now we update the functions that would run once the new updated text above on each button is clicked
  button1.onclick = goStore; //Runs the goStore function once button1 is clicked
  button2.onclick = goCave; //Runs the buyWeapon function once button2 is clicked
  button3.onclick = fightDragon; //Runs the goTown function once button2 is clicked
}

function goStore(){
  button1.innerText = "Buy 10 health (10 gold)";//Changes the previous text to "Buy 10 health (10 gold)" when button1 is clicked
  button2.innerText = "Buy weapon (30 gold)";//Changes the previous text of button2 to "Buy weapon (30 gold)" when button1 is clicked
  button3.innerText = "Go to town square";//Changes the previous text of button3 to "Go to town square" when button1 is clicked

  text.innerText = "You enter the store."//Once button1 is clicked I change the display text to indicate that you are now in the store 

  //Now we update the functions that would run once the new updated text above on each button is clicked
  button1.onclick = buyHealth; //Runs the buyHealth function once button1 is clicked
  button2.onclick = buyWeapon; //Runs the buyWeapon function once button2 is clicked
  button3.onclick = goTown; //Runs the goTown function once button2 is clicked
}
function goCave(){
  console.log("Going to cave.");
}
function fightDragon(){
  console.log("Fighting dragon.");
}

function buyHealth(){

}
function buyWeapon(){

}

