// HOISTING SECTION ONE: Function Declarations pulled all the way up
function myFirstFunction() {
    console.log("firstFunction");
}

// HOISTING SECTION TWO: Variable Declarations pulled below section one
var mySecondFunction;
var myFirstVariable

// Now the rest of the code, post transform
console.log(myFirstFunction);
myFirstFunction();

console.log(mySecondFunction);
console.log(myFirstVariable);
console.log("some filler statement");

mySecondFunction = function() {
    console.log("secondFunction");
}

mySecondFunction();

myFirstVariable = "50";
console.log(myFirstVariable);
console.log(unknownVariable);
