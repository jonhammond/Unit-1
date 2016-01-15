/*
Reassignment changes the local variable only.  Modification affects the referenced variable.  This trips up MANY developers.  Pass by Value vs Pass by Reference - you will here more about this later.

                  root/global
		  var name = { firstName: 'Bob' };
                      |
    ------------------------------------
    |                                  |
sayHello(name)                     sayGoodbye(name)
name.firstName = 'June'                 
name.firstName is June             name.firstName is Bob or June

*/

var name = {
    firstName: 'Bob'
};

function sayHello(name) {
    name.firstName = 'June'; // modifies the global scope's name
    console.log('Hello ' + name.firstName + '!');
}

function sayGoodbye(name) {
    console.log('Goodbye ' + name.firstName + '!');
}

sayGoodbye(name);             // prints 'Goodbye Bob!'
sayHello(name);               // prints 'Hello June!'
sayGoodbye(name);             // prints 'Goodbye June!'
