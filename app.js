// 1) Make an array of numbers that are doubles of the first array

var array = [3, 45, 76, 77, 54, 1, 2, 0];
var names = ["BOB", "ben", "JacOb", "miCHAEL"];
var nameObjects = [{ name: "Angelina Jolie", age: 80 }, { name: "Eric Jones", age: 2 }, { name: "Paris Hilton", age: 5 }, { name: "Kayne West", age: 16 }, { name: "Bob Ziroll", age: 100 }];
function doubleNumbers(num) {
  return num * 2
}
var dblArray = array.map(doubleNumbers);
console.log(dblArray);
console.log("<br>");

//2) Take an array of numbers and make them strings

function convertToString(num) {
  return num.toString();
}
var stringArray = array.map(convertToString);
console.log(stringArray);
console.log("<br>");


//3) Capitalize each of an array of names

function capitilize(str) {
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}
var stringArray = names.map(capitilize);
console.log(stringArray);
console.log("<br>");



//4) Make an array of strings of the names

function justNames(obj) {
  return obj.name;
}
var justNameString = nameObjects.map(justNames);
console.log(justNameString);
console.log("<br>");

//5) Make an array of strings of the names saying whether or not they can go to The Matrix

function canGo(obj) {
  if (obj.age >= 18) {
    return obj.name + " can go to see Matrix.";
  }
  else {
    return obj.name + " is underage.";
  }
  return obj.name;
}

var canGoToMovies = nameObjects.map(canGo);
console.log(canGoToMovies);
console.log("<br>");
//6) Make an array of the names in h1s, and the ages in h2

function domReady(obj) {
  return "<h1>" + obj.name + "</h1><h2>" + obj.age + "</h2>";
}
var domElements = nameObjects.map(domReady);
console.log(domElements);
console.log("<br>");