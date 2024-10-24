var guestList = ["Hamza", "Taha", "Areeba", "Arsalan"];
var dontCome = guestList[0];
console.log(dontCome, "Nai ahh Sakta han");
guestList.splice(0, 1, "Amirr");
console.log("Goodnews! We have find bigger table for dinner.");
//Starting index of array
guestList.unshift("Muhammad Ahmed");
//Ending index of array
guestList.push("Tanzeel");
//Middle index
var middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, "Faisal");
console.log("Updated List of our guests");
guestList.forEach(function (oneguest) { return console.log("Salam ".concat(oneguest, ", Would you like to dinner with me")); });
