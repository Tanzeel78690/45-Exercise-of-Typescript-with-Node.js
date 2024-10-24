var userNames = ["Mahad", "Ali", "Zahid", "Adam", "Usman"];
userNames = [];
if (userNames.length === 0) {
    console.log("Your Array is empty We need to find some users!");
}
else {
    //Using ForEach Loop Array
    userNames.forEach(function (oneUser) {
        if (oneUser === "Adam") {
            console.log("Hello, ".concat(oneUser, " Would you like to see a status report?"));
        }
        else {
            console.log("Hello, ".concat(oneUser, " Thank you for Logging in Again?"));
        }
    });
}
