//Creating a Array
let userNames = ["Mahad","Ali","Zahid","Adam","Usman"];

//Using ForEach Loop Array
userNames.forEach(oneUser => {
if (oneUser === "Adam"){
    console.log(`Hello, ${oneUser} Would you like to see a status report?`);
}else{
    console.log(`Hello, ${oneUser} Thank you for Logging in Again?`);
}
})