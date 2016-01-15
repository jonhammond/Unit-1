/*

Each leaf has access to it's parent's scope.

                  root/global
		  var name = 'Bob'
                      |
    ------------------------------------
    |                                  |
sayHello()                        sayGoodbye()
name is Bob                       name is Bob

*/

var name = 'Bob';

function sayHello() {
  console.log('Hello ' + name + '!');
}

function sayGoodbye() {
  console.log('Goodbye ' + name + '!');
}

sayHello();               // prints 'Hello Bob!'
sayGoodbye();             // prints 'Goodbye Bob!'
