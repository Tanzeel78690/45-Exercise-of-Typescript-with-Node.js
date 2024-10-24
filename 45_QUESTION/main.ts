//Define a function to create a car object with optional options...
function createCar(manufacturer,model,...options){
    let car={
        manufacturer:manufacturer,
        model:model,
    }
//Add aditional options to the car object
options.forEach(options=>{
    let [key,value]=options.split(":");
    car[key.trim()]=value.trim();
});
return car;
}
//Call the function to create a car object 
let my_car=createCar("Tayota","Corolla","Color:Black","Sunroof:True","Year:2024");
//Print the variable to ensure all the information is s stored correctly in the car object
console.log(my_car);