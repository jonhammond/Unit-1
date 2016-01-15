/*

Global scope is the 'Top Level' scope.  You can think of scope like a tree structure.

                  root/global
                      |
    ------------------------------------
    |                                  |
 sayHello()                       sayGoodbye() 

*/

var name = 'Bob'; // this variable lives in the GLOBAL SCOPE

function sayHello() {
  console.log('Hello ' + name + '!');
}

function sayGoodbye() {
  console.log('Goodbye ' + name + '!');
}

sayHello();               // prints 'Hello Bob!'
sayGoodbye();             // prints 'Goodbye Bob!'
