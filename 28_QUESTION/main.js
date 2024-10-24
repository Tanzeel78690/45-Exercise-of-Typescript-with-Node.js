//Creating a Variable
var age = 22;
//Creating a program  for determining the stage of life using If-Else chain
if (age < 2) {
    console.log("You are a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("You are a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("You are a Kid.");
}
else if (age >= 13 && age < 20) {
    console.log("You are a Teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("You are an Adult.");
}
else if (age >= 65) {
    console.log("You are an Elder.");
}
