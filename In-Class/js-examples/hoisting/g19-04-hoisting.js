/*
  There IS a difference between assigning an anonymous function to a variable and
  declaring a function.
*/

var april = "April";

sayHello(april); // sayHello is not a function (yet!)

// declaration is hoisted, assignment is not.
var sayHello = function(name) { 
    console.log("Hello " + name + "!");
};


