function returnAFunction() {
    return function(){
        console.log("I'm an inner function!");
    }
}

var returnedFunction = returnAFunction();
returnedFunction();

// Similarly, you can do
returnAFunction()();
