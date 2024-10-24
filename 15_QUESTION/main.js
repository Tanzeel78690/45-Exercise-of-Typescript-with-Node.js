var guestList = ["Kamran", "Rubina", "Tanzeel", "Taha"];
var dontCome = guestList[0];
console.log(dontCome, "Nahi ahh Sakta");
guestList.splice(0, 1, "Amirr");
guestList.forEach(function (guest) { return console.log("Salam ".concat(guest, ", Would you like to dinner with me?")); });
