/*

Each leaf has it's own scope.

                  root/global
		  var name = 'Bob'
                      |
    ------------------------------------
    |                                  |
sayHello()                        sayGoodbye()
var name = 'June'                 var name = 'May'
name is June                      name is May

*/

var name = 'Bob';

function sayHello() {
    var name = 'June';
    console.log('Hello ' + name + '!');
}

function sayGoodbye() {
    var name = 'May'
    console.log('Goodbye ' + name + '!');
}

sayHello();               // prints 'Hello June!'
sayGoodbye();             // prints 'Goodbye May!'
