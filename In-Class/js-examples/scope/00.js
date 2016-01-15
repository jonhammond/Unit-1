var globalScope = "I'm outside of any function and can be accessed in any scope";

function myFunction() { // renamed this function - was localScope
    var localScope = "I'm inside of a function, so I'm in a local scope."
    console.log("This is a local scope, but I can still access globalScope");

    // This works here inside of local
    console.log(globalScope); 
}

// Works here as well
console.log(globalScope);

myFunction();

// ReferenceError: localScope is not defined
localScope

