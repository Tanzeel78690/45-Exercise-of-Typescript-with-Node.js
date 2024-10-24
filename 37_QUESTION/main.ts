//Making a function
function make_shirt(size:string="Large", printMessage:string="I Love Karachi"){
    console.log(`Creating a ${size} shirt with the ${printMessage} prints on shirt.`);   
}

//Calling the function with default Values
make_shirt();

//Calling the function now with medium size and default message
make_shirt("Medium");

//Calling the function with small size and also different print message
make_shirt("Small","I love My City");