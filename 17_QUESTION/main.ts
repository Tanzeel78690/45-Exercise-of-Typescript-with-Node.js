let guestList = ["Hamza","Taha","Areeba","Arsalan"];
let dontCome = guestList[0];

console.log(dontCome,"Nai ahh Sakta han");

guestList.splice(0,1,"Amirr")

console.log("Goodnews! We have find bigger table for dinner.");

//Starting index of array
guestList.unshift("Muhammad Ahmed");

//Ending index of array
guestList.push("Tanzeel");

//Middle index
let middleIndex:number =Math.floor(guestList.length/2);

guestList.splice(middleIndex, 0, "Faisal");

console.log("Updated List of our guests");

guestList.forEach(oneguest => console.log(`Salam ${oneguest}, Would you like to dinner with me`));

console.log("UNfortunately, The new dinner table wont arrive on time, So i can only invite two guest to dinner with me");

while(guestList.length>2){
    let removedGuest = guestList.pop();
    console.log(`Sorry,${removedGuest} I cant invite you for dinner`);
}
console.log("Invitation to the last 2 guest");

guestList.forEach(lasttwo => console.log(`Luckily ${lasttwo}, you are still invited to dinner`));

guestList.pop();
guestList.pop();
console.log("Empty list.",guestList);
