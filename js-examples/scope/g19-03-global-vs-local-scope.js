/*

When resolving variables, the immediate scope overrides the parent scope.

                  root/global
		  var name = 'Bob'
                      |
    ------------------------------------
    |                                  |
sayHello()                        sayGoodbye()
var name = 'June'                 
name is June                      name is Bob

*/

var name = 'Bob';

function sayHello() {
    var name = 'June';
    console.log('Hello ' + name + '!');
}

function sayGoodbye() {
    console.log('Goodbye ' + name + '!');
}

sayHello();               // prints 'Hello June!'
sayGoodbye();             // prints 'Goodbye Bob!'
