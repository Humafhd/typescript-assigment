// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.//
// changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

// • Print a second set of invitation messages, one for each person who is still in your list.

//creat.a guestlist array
let guest_list : string []=[ "ammi" ,'abbu','daada mian','fareeha'];
//making var.for new guest
let absent_guest :string ='dada mian';
let new_guest:string = 'fahad ur rehman';

guest_list[0]=new_guest;

console.log(`Mr.${absent_guest} is not coming to our dinner`);
//removing first guest & adding new guest
guest_list.splice(0, 1, "ahad");
console.log("good news ! we have  found a bigger table for a dinner");
//add. new value at starting index of array
guest_list.unshift("ali");
//add.a new value at end. index of array
guest_list.push("Areeba");
//add. at middlea new guest//length fn. 
let middleindex : number =Math.floor(guest_list.length/2);
//math.floor round off value 
//add.new guest to middle index
guest_list.splice(middleindex, 0, "osama");// 0 ReportingObserver.dont remove any

console.log("updated list of our guest: ");
guest_list.forEach(oneguest => console.log(`salam ${oneguest},would you like to have dinner with me`));

