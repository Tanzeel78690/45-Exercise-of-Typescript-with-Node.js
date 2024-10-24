//Array of Current Users
var current_users = ["Hamza", "Taha", "Rubina", "Kamran", "Tanzeel"];
//Array of New Users
var new_users = ["Farah", "Kamran", "Saim", "Sara", "Kamal"];
//Loop through new_users to check for usernames availability
new_users.forEach(function (new_one_user) {
    //Making a Condition for username already exist and save in our_condition variable
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This username ".concat(new_one_user, " is available"));
    }
});
