function highOrderFunction(someNumber, callbackFunction) {
    someNumber += 10;
    callbackFunction(someNumber);
};

var printHello = function(){
    console.log('Hello');
};

var printANumber = function(input) {
    console.log("printing a number");
    console.log(input);
};

var someNumber = 10;
highOrderFunction(someNumber, printHello);
highOrderFunction(someNumber, printANumber);
