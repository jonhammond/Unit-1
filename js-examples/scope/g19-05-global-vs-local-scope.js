/*

Variables passed in as child objects are treated as local scope.
(With one exception... which is explained next)

                  root/global
		  var name = 'Bob'
                      |
    ------------------------------------
    |                                  |
sayHello(name)                     sayGoodbye(name)
name = 'June'                 
name is June                       name is Bob

*/

var name = 'Bob';

function sayHello(name) {
    name = 'June'; // assigns to the local scope "name"
    console.log('Hello ' + name + '!');
}

function sayGoodbye(name) {
    console.log('Goodbye ' + name + '!');
}

sayHello(name);               // prints 'Hello June!'
sayGoodbye(name);             // prints 'Goodbye Bob!'
