let countriesTovisit:string[] = ["Dubai","Denmark","China","India","Tazakistan"];

console.log("Original Order:",countriesTovisit);
console.log("Alphabetical Order:",[...countriesTovisit].sort());
console.log("Still in Original Order:",countriesTovisit);
console.log("Reverse Order:",[...countriesTovisit].reverse());
console.log("Still in Original Order:",countriesTovisit);
console.log("Original Array Reversed:",countriesTovisit.reverse());
console.log("Back to Original Order:",countriesTovisit.reverse());
console.log("Sorted in Alphabetical Order:",countriesTovisit.sort());
console.log("Original Array Reversed Again:",countriesTovisit.reverse());
