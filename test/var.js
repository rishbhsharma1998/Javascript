//How to define a variable
const accountID = 22232; // Assigned the ID number to the const accountID this will not change forever
let accountName = "Rocky" // Assigns the Name to the variable and its value can be changed later
//block scoping
var accountCity = "New York" // Assigns the City to the variable and its value can be changed later but it can be defined again and again 
//function scoping
accountState = "Holy" // it basically global scope assigning
console.table({accountID, accountName, accountCity, accountState});
//A way to print the variables at once.
let s;
console.table({accountID, accountName, accountCity, accountState, s});