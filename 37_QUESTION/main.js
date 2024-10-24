//Making a function
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "Large"; }
    if (printMessage === void 0) { printMessage = "I Love Karachi"; }
    console.log("Creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt."));
}
//Calling the function with default Values
make_shirt();
//Calling the function now with medium size and default message
make_shirt("Medium");
//Calling the function with small size and also different print message
make_shirt("Small", "I love My City");
