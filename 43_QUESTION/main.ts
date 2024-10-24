//Define the function to show magicians names
function show_magicians(magicians:string[]){
    magicians.forEach(name=>console.log(name));
}
//Function to amke magicians great through .map() it will make modify array
function make_great(magicians:string[]){
    return magicians.map(name=>`The Great ${name}`);
}
//Define an array of magicians name
let magicians_names=["Harry Poter","Bat Man","Spider Man"];
//Making a copy of original array through .slice() function
let copy_magicians_names=magicians_names.slice();
//Modify the copied array to include "The Great" with their names
let copy_great_magicians=make_great(copy_magicians_names);
//Show both array Original and Copied
//Original
console.log(" Original Array \n")
show_magicians(magicians_names);
//Copied
console.log("\n Copied Array \n")
show_magicians(copy_great_magicians);