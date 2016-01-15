/*
  Hoisting

  Hoisting speaks to the evaluation of declaration as it differs from the evaluation of assignment.

*/

function sayHello(name) {
    console.log("Hello " + name + "!");
}

var april = "April";

sayHello(april); // prints "Hello April!"
