//Define a function with a rest parameter that acccept items arguments representing our sandwich
function make_Sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(function (singleItem) { return console.log("" + singleItem); });
    console.log("Now Enjoy Sandwich");
}
//Call the function 3 times with 3 different number of arguments
make_Sandwich("Chicken", "Mayo", "Cheese", "Egg");
make_Sandwich("Bread", "Butter");
make_Sandwich("Bread", "Butter", "Mayo", "Egg", "Cheese", "Chicken", "Lettuce", "Tomato");
