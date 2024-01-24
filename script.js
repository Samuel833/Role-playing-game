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
let currentWeapon = 0;//Corresponds to an index in the weapons array. The player starts with a stick, since currentWeapon starts at 0 and weapons[0] is the stick weapon.
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
 
const button1 = document.querySelector("#button1");//since the button1 variable is not going to be reassigned we use the const keyword to decare it instead of the let keyword. This will tell JS to throw an error if we accidentally reassign it.
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector("#text");
const xpText = document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterStats = document.querySelector("#monsterStats");
const monsterName = document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");//Since I have already declared a variable with monsterHealth in line 20 I used another variable here to catch the element with the id #monsterHealth.
const weapons = [
  {
    name:"stick",
    power: 5
  },
  {
    name: "dagger",
    power: 30
  },
  {
    name: "claw hammer",
    power: 50
  },
  {
    name: "sword",
    power: 100
  }
];
const monsters = [
  {
  name: "slime",
  level: 2,
  health: 15
  },
  {
  name: "fanged beast",
  level: 8,
  health: 60
  },
  {
  name: "dragon",
  level: 20,
  health: 300
  }
];
let value

//An empty array called location since I just created an update funtion in line 130
//Then added an empty object to the array
//objects are denoted by curly braces{}
//They can be stored in an array with their keys used to access and modify data
/*
 Object properties are written as key: value pairs, where "key" is the name of the property(or the key), and "value" is the value that property holds.
*/
//Added a "name" property with a value of "town square"
//Object properties seperated by comma just like array values
//Added a "button text" property with the value of an empty array
//Because the "button text" which is the property name has more than one word I surrounded it in quotes
//Gave the empty button text array three strings which are the values assigned to the button innerText in the goTown function
/*
  Created another property called "button functions"
  Gave this property an array containing the three functions assigned the onclick properties in the goTown function
  These functions are the goStore goCave and fightDragon
  These functions are variables not strings so are not wrapped in quotes
*/
//Added the text property and gave it the value assigned to the text.innerText in the goTown function
const locations = [
  {
  name: "town square",
  "button text": ["Go to store", "Go to cave", "Fight dragon"],
  "button functions": [goStore, goCave, fightDragon],
  text: "You are in the town square. You see a sign that says \"Store\"."
  },
  //Added a second object seperated by a comma
  //Same pattern from above but this time using the values from the goStore function
  {
    name: "store",
    "button text": ["Buy 10 health (10 gold)", "Buy weapon (30 gold)", "Go to town square"],
    "button functions": [buyHealth, buyWeapon, goTown],
    text: "You enter the store."
  },
  {
    name: "cave",
    "button text": ["Fight slime", "Fight fanged beast", "Go to town square"],
    "button functions": [fightSlime, fightBeast, goTown],
    text: "You enter the cave. You see some monsters."

  },
  {
    name: "fight",
    "button text": ["Attack", "Dodge", "Run"],
    "button functions": [attack, dodge, goTown],
    text: "You are fighting a monster."
  }
];

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

//initialize buttons
button1.onclick = goStore;//Here I used the dot notation to set the onclick property of button1 to the function "goStore" 
button2.onclick = goCave;//Here I used the dot notation to set the onclick property of button2 to the function "goCave" 
button3.onclick = fightDragon;//Here I used the dot notation to set the onclick property of button3 to the function "fightDragon" 

//The "innerText" property controls the text that appears in an html element.
  // const info = document.querySelector("#info");
  // info.innerText = "Hello World";
//The code above would change the elemnt assigned to the info variable to have the text Hello World

//goTown function moved above goStore function
//Then copied and paste the content of goStore into goTown
//updated values of button innerText
function goTown(){
  update(locations[0]);
/*
//copied code here to the update function
  button1.innerText = "Go to store";//Changes the previous text to "Go to store" when button1 is clicked
  button2.innerText = "Go to cave";//Changes the previous text of button2 to "Go to cave" when button1 is clicked
  button3.innerText = "Fight dragon";//Changes the previous text of button3 to "Fight dragon" when button1 is clicked

  text.innerText = "You are in the town square. You see a sign that says \"Store\"."//Once button1 is clicked I change the display text to indicate that you are now in the store 
  //the backslash is to escape the double quotes

  //Now we update the functions that would run once the new updated text above on each button is clicked
  button1.onclick = goStore; //Runs the goStore function once button1 is clicked
  button2.onclick = goCave; //Runs the buyWeapon function once button2 is clicked
  button3.onclick = fightDragon; //Runs the goTown function once button2 is clicked
*/
/*
  Now instead of assigning the innerText and onclick properties to specific strings and functions, the update function will use data from the location that is passed into it. 
  Passing that data into it
  Calling the update function here.
  Then passing the locations argument which is an array into the update function.
*/
/*
  The locations array contains two locations: the twon square and the store.
  Currentlly I am passing in the whole array into the update function.
  To access the town square i used the "bracket notation" which is a way of accessing items in an array.
  This allows values in arrays to be accessed y index starting from 0(This is called zero based indexing)

*/
  

}

function goStore(){
//updated functiion to call the "update function"
//passed the second element of the locations array as an argument to the update function
  update(locations[1])//This will call the call the updaaate function taking the second element un the locations array as an argument
/*
  button1.innerText = "Buy 10 health (10 gold)";//Changes the previous text to "Buy 10 health (10 gold)" when button1 is clicked
  button2.innerText = "Buy weapon (30 gold)";//Changes the previous text of button2 to "Buy weapon (30 gold)" when button1 is clicked
  button3.innerText = "Go to town square";//Changes the previous text of button3 to "Go to town square" when button1 is clicked

  text.innerText = "You enter the store."//Once button1 is clicked I change the display text to indicate that you are now in the store 

  //Now we update the functions that would run once the new updated text above on each button is clicked
  button1.onclick = buyHealth; //Runs the buyHealth function once button1 is clicked
  button2.onclick = buyWeapon; //Runs the buyWeapon function once button2 is clicked
  button3.onclick = goTown; //Runs the goTown function once button2 is clicked
*/
}
function goCave(){
  update(locations[2]);
}

function buyHealth(){
  if(gold >= 10){//Checks if user has enough gold to buy health
    gold -= 10;//Using compouind assignment same as gold = gold - 10
    goldText.innerText = gold;//To display the gold value on the screen;
    health += 10;//Using compound assignment same as health = health + 10;
    healthText.innerText = health;//To display the health value on the screen;
  }else{//then if user dont have enough gold to buy health this runs
    text.innerText = "You do not have enough gold to buy health."
  }
  
}
function buyWeapon(){
  if(currentWeapon < weapons.length - 1){//Used the array length property to check if player has the best weapon i.e all the weapon in the inventory. Used the - 1 because array starts indexing at zero i.e the index of the last element in an array is one less that the lenght of the array.
    if(gold >= 30){
      gold -= 30;
      currentWeapon ++;//For the user to buy the next weapon
      goldText.innerText = gold;//To display the new value of gold
      let newWeapon = weapons[currentWeapon].name;//To tell the player the name of the new weapon they bought
      text.innerText = "You now have a " + newWeapon + "."//Displays weapon name
      inventory.push(newWeapon);//Adds every acquired weapon to the inventory array
      text.innerText += " In your inventory you have: " + inventory//Adds text to the end of text.innerText To avoid the old text from erasing then with string concatenation we display the inventory contents
  
    }else{
      text.innerText = "You do not have enough gold to buy a weapon."
    }
  }else{
    text.innnerText = "You already have the most powerful weapon!"
    button2.innerText = "Sell weapon for 15 gold"//Gives the uswr the option to sell their old weapons once they have the most powerful weapon
    button2.onclick = sellWeapon; //Calls the sellWeapon function
  }
 
}
function sellWeapon(){//Players should be not be able to sell their only weapon
  if(inventory.length > 1){
    gold += 15;//Adds 15 to the gold available everytime a weapon is sold
    goldText.innerText = gold;//Displays total amount of gold available after sale
    let currentWeapon = inventory.shift();//This is only scoped to the if statement, i.e it is not accessible outside of the if statement.The inventory array uses the shift method which removes the first element in the array and returns it, then the value is assigned to currentWeapon.
    text.innerText = "You sold a " + currentWeapon + "."
    text.innerText += " In your inventory you have: " + inventory
  }
  else{
    text.innerText = "Don't sell your only weapon!"
  }


}
//Now there is  repetition in the goTown and goStore functions.
//When there is repetition in code it is a sign that another function is needed 
//functions can take parameters which is the value given to the function each time it runs

//An empty function  callled "update" which takes a parameter called "location"
//Copied and pasted my goStore function code into the update function to consolidate my code
function update(location){
  button1.innerText = location["button text"][0];//uses the assignment(location) passed into the function to locate the button text and then the first text in the "button text" array.
  button2.innerText = location["button text"][1];//uses the assignment(location) passed into the function to locate the button text and then the second text in the "button text" array.
  button3.innerText = location["button text"][2];//uses the assignment(location) passed into the function to locate the button text and then the third text in the "button text" array.
  text.innerText = location.text;//Here i used the dot notation instead of the bracket notation to access the text property in the location object //Once button1 is clicked I change the display text to indicate that you are now in the store 
 

  //Now we update the functions that would run once the new updated text above on each button is clicked
  //Did the same thing i did with the button text here 
  button1.onclick = location["button functions"][0]; //Runs the goStore function once button1 is clicked
  button2.onclick = location["button functions"][1]; //Runs the buyWeapon function once button2 is clicked
  button3.onclick = location["button functions"][2]; //Runs the goTown function once button2 is clicked
}

//Would be used in the cave object
function fightSlime(){
  fighting = 0;//fighting set to the index of slime in the monsters array
  goFight();
}
function fightBeast(){
  fighting = 1;//fighting set to the index of beast in the monsters array
  goFight();
}

function fightDragon(){
  fighting = 2;//fighting set to the index of dragon in the monsters array
  goFight();
}
//Fighting each type of monster will use similar logic
//This goFight function will manage that logic
function goFight(){
  update(locations[3])//Calls the fight object in the locations array
  monsterHealth = monsters[fighting].health;//Sets the monsterhealth to be the health of the current monster.
  monsterStats.style.display = "block";//Displays the previously hidden(with CSS) HTML element.
  monsterName.innerText = monsters[fighting].name;//sets the innerText property of monsterName to be the name property of the current monster
  monsterHealthText.innerText = monsterHealth;//sets the innerText property of monsterhealth to be the health property of the current monster
  
}
function attack(){
  text.innerText = "The " + monsters[fighting].name + " attacks.";//To display the name of the monster attacking
  text.innerText += " You attack it with your " + weapons[currentWeapon].name + ".";//Displays player current weapon
  health -= monsters[fighting].level;//sets health to equal the monster's level
  monsterHealth -= weapons[currentWeapon].power + Math.floor(Math.random() * xp) + 1;//Set monsterHealth to monsterHealth minus the power of the player's current weapon
  //Then using the math object we added a random number between 1 and the value of xp.
/*
  The Math object in JavaScript contains static properties and methods for mathematical constants and functions. One of those is Math.random(), which generates a random number from 0 (inclusive) to 1 (exclusive). Another is Math.floor(), which rounds a given number down to the nearest integer.
  Using these, you can generate a random number within a range. For example, this generates a random number between 1 and 5: Math.floor(Math.random() * 5) + 1;
*/
healthText.innerText = health;//Update the healthText innerText to health
monsterHealthText.innerText = monsterHealth;//Update the innerText monsterHealth 

//Added an if statement to call the lose function if health is less than or equal to zero
if(health <= 0){
  lose();
  }else if(monsterHealth <= 0){
    defeatMonster();
  }
}
//
function dodge(){
  text.innerText = "You dodge the attack from the "+ monsters[fighting].name + "."
}
function defeatMonster(){

}
function lose(){
  
}