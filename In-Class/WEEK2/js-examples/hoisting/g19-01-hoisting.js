/*

Variables are hoisted to the top of their local scope.
Only the declaration is hoisted though, not the assignment.

*/

function sayHello(name) {
    console.log("Hello " + name + "!");
}

sayHello(april); // prints "Hello undefined!"

var april = "April"; // declaration - not assignment - is hoisted to the top



