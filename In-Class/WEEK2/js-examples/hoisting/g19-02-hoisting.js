/*
  After hoisting the declaration, assignments follow the regular order of operations.
*/

function sayHello(name) {
    console.log("Hello " + name + "!");
}

april = "June";

sayHello(april); // prints "Hello June!"

var april = "April"; // declaration hoisted to the 'top', assignment remains in place

sayHello(april); // prints "Hello April!"


