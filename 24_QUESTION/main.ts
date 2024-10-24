//Defining Variable
let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits = ["apple", "banana", "graphes", "orange"];

//Test for equality and inequality with string
console.log("\nIs apple is equal to apple?");
console.log(apple == "apple");

console.log("\nIs apple is not equal to apple?");
console.log(apple != "apple");

//Test using lowercase Function
console.log("\nIs apple is equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nIs apple is not equal to apple after converting to lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

//Numerical Test

//Equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);

//Not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);

//Greater than
console.log("\nIs ten is greater than zero?");
console.log(ten > 0);

//less than
console.log("\nIs twenty is less than 10?");
console.log(twenty < 10);

//Greater than or equal to
console.log("\nIs ten is greater than or equal to 5?");
console.log(ten >= 5);

//Less than or equal to
console.log("\nIs twenty is less than or equal to 10?");
console.log(twenty <= 10);

//Test using "and" & "or" operators

//Using && (and)
console.log("\ntwenty is not equal to 10 and twenty is greater than 10?");
console.log(twenty != 10 && twenty > 10);

console.log("\ntwenty is not equal to 10 and twenty is greater than 30?");
console.log(twenty != 10 && twenty > 30);

//Using || (or)

console.log("\n20 is greater than 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n20 is greater than 50 or 20 is not equal to 20?");
console.log(20 > 50 || 20 != 20);

//Test whether an item is include in array
console.log("\nIs orange include in my fruirs array?");
console.log(fruits.includes("orange"));

console.log("\nIs banana is not include in my fruits array?");
console.log(!fruits.includes("banana"));
