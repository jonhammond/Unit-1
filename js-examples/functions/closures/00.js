function returnAFunction() {
    var closedOver = "This information is closed over";

    return function(){
        console.log(closedOver);
    }
}

var returnedFunction = returnAFunction();
returnedFunction();

// Similarly, you can do
returnAFunction()();

// This however, breaks
console.log(closedOver);
