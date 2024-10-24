//Define a function with a rest parameter that acccept items arguments representing our sandwich
function make_Sandwich (...items:string[]){
    console.log("\nMaking a sandwich with the following items:");
    items.forEach(singleItem=>console.log(""+singleItem));
    console.log("Now Enjoy Sandwich");
}
//Call the function 3 times with 3 different number of arguments
make_Sandwich("Chicken","Mayo","Cheese","Egg");
make_Sandwich("Bread","Butter");
make_Sandwich("Bread","Butter","Mayo","Egg","Cheese","Chicken","Lettuce","Tomato");

