/*
CHALLENGE : define and use a function in a new file
1. create a new file called notes.js
2. create getNotes function that return "your notes..."
3. export getNotes function
4. from app.js load in and call the function printing message to console 

*/

const getNotes = require("./notes");

console.log(getNotes());

