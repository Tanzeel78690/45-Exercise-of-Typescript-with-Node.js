//Define a function to print each magician name from an array
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Define an array containing magicians names
var magicians_names = ["Harry Poter", "Spider Man", "Bat Man"];
//Call the function to print each magicians name
show_magicians(magicians_names);
