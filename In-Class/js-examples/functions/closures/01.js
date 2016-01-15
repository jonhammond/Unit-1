function closeMe() {
  var count = 0;

    return function() {
       return count++;
    }
}

var counter = closeMe();
var secondCounter = closeMe();

console.log(counter());                 // ?
console.log(counter());                 // ?
console.log(counter());                 // ?
console.log(counter());                 // ?
console.log("=========");
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
console.log(secondCounter());           // ?
console.log("=========");
console.log(closeMe()());               // ?
console.log(closeMe()());               // ?
console.log(closeMe()());               // ?
console.log(closeMe()());               // ?
