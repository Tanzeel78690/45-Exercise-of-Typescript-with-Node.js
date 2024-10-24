//Creating a Array
var userNames = ["Mahad", "Ali", "Zahid", "Adam", "Usman"];
//Using ForEach Loop Array
userNames.forEach(function (oneUser) {
    if (oneUser === "Adam") {
        console.log("Hello, ".concat(oneUser, " Would you like to see a status report?"));
    }
    else {
        console.log("Hello, ".concat(oneUser, " Thank you for Logging in Again?"));
    }
});
