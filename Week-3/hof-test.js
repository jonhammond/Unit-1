var numbers = [1,2,3,4,5];

// print out every even numbers

// procedural
for (var i=0; i<numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// functional

numbers.forEach(function(number) {
  if (number % 2 === 0) {
    console.log(number);
  }
});

numbers.filter(function(number) {
  return number %2 === 0;
});

// combine both functional approach parts below:

numbers.filter(function(number) {
  return number %2 === 0;
}).forEach(function(number) {
  if (number %2 === 0) {
    console.log(number);
  }
});

// Using .reduce, get the total of every even number in the array

var isEven = function(val) {
  return val %2 === 0;
};

var addNumbers = function(runningTotal, val) {
  return runningTotal + val;
};

var total = numbers.filter(isEven).reduce(addNumbers, 0);
console.log(total);