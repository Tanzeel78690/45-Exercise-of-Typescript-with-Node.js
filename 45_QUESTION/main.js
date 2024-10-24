//Define a function to create a car object with optional options...
function createCar(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model,
    };
    //Add aditional options to the car object
    options.forEach(function (options) {
        var _a = options.split(":"), key = _a[0], value = _a[1];
        car[key.trim()] = value.trim();
    });
    return car;
}
//Call the function to create a car object 
var my_car = createCar("Tayota", "Corolla", "Color:Black", "Sunroof:True", "Year:2024");
//Print the variable to ensure all the information is s stored correctly in the car object
console.log(my_car);
