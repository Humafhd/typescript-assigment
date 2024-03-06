"use strict";
//Written by: huma fahad
// Date : 17-feb-2024
//lower case
let personName = "Huma Fahad";
console.log("lowercase: ", personName.toLowerCase());
//upper case
console.log("Uppercase: ", personName.toUpperCase());
//title casse
console.log("titlecase: ", personName.replace(/\bw/g, c => c.toUpperCase()));
