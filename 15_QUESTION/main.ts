let guestList = ["Kamran", "Rubina", "Tanzeel", "Taha"];
let dontCome = guestList[0];
console.log(dontCome,"Nahi ahh Sakta");
guestList.splice(0,1,"Amirr");
guestList.forEach(guest => console.log(`Salam ${guest}, Would you like to dinner with me?`));