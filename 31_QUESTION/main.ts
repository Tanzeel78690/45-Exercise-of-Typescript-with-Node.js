let userNames = ["Mahad","Ali","Zahid","Adam","Usman"];

userNames = []
if(userNames.length === 0){
    console.log("Your Array is empty We need to find some users!");
}else{
//Using ForEach Loop Array
userNames.forEach(oneUser => {
if (oneUser === "Adam"){
    console.log(`Hello, ${oneUser} Would you like to see a status report?`);
}else{
    console.log(`Hello, ${oneUser} Thank you for Logging in Again?`);
}
})
}