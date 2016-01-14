var num = Math.floor((Math.random()*10000));
// var array = [];
var numArray = num.toString().split('');
var sum = 0;

function randomNumberSep (number) {
  for (var i=0; i < numArray.length; i++) {
    sum += Number(numArray[i]);
    numArray.shift();
  };
  console.log(numArray);
  console.log(sum);
  // return sum;
};

// function addItUp (sepNums) {
//   for (var n=0; n < sepNums.length; n++) {
//     sum += Number(array[n]);
//   };
//   console.log(sum);
//   return sum;
// }

randomNumberSep(num);

// addItUp(randomNumberSep);


// var test = 90009;
// var testy = test.toString();
// console.log(testy.length);