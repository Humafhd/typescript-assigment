"use strict";
// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
let guestlist = ["Azlan", "huma", "asad", "anila", "fahad", "mayera"];
let absentguest = guestlist[0];
console.log(absentguest, "Will not come");
guestlist.splice(0, 1, "rabekah");
console.log('good news! we have found a big dinne table');
guestlist.unshift("ali"); //start index
guestlist.push("zain"); //end.index
//middle indewx . dont hv fnc. so
let middleindex = Math.floor(guestlist.length / 2);
guestlist.splice(middleindex, 0, "osama");
console.log("updated list of guest");
guestlist.forEach(oneguest => console.log(`salam ${oneguest} will like to dinner with me
`));
