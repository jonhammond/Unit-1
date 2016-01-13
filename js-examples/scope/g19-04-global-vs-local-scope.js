/*

The same rules apply for assigning values to variables as resolving them.

                  root/global
		  var name = 'Bob'
                      |
    ------------------------------------
    |                                  |
sayHello()                        sayGoodbye()
name = 'June'                 
name is June                      name is Bob or June

*/

var name = 'Bob';

function sayHello() {
    name = 'June'; // assigns to the global scope "name"
    console.log('Hello ' + name + '!');
}

function sayGoodbye() {
    console.log('Goodbye ' + name + '!');
}

sayGoodbye();             // prints 'Goodbye Bob!'
sayHello();               // prints 'Hello June!'
sayGoodbye();             // prints 'Goodbye June!'
