// var array = [];
// var oneLess = [];

function randomNumberSep (number) {

  var num = Math.floor((Math.random()*10000));
  console.log("Random number = " + num);

  var numArray = num.toString().split('');
  var sum = 0;  
  
  for (var i=0; i < numArray.length; i++) {
    sum += Number(numArray[i]);
  }
  console.log("numArray = " + numArray);
  console.log("sum = " + sum);

  var newArray = numArray;
  console.log("New Array = " + newArray);

  while (newArray.length > 1) {
    newSum = 0;
    newArray.shift();
    for (var i=0; i < newArray.length; i++) {
      newSum += Number(newArray[i]);
    }
    console.log(newSum);
  }

  // while (1 < newArray.length) {
  //   for (var i=0; i < numArray.length; i++) {
  //   sum += Number(numArray[i]);
  // }
  //   console.log("numArray = " + numArray);
  //   console.log("sum = " + sum);)
    // numArray.shift();
  // }
  // console.log(numArray);
  // console.log(sum);
  // return sum;
};

// function addItUp (sepNums) {
//   for (var n=0; n < sepNums.length; n++) {
//     sum += Number(array[n]);
//   };
//   console.log(sum);
//   return sum;
// }

randomNumberSep();

// addItUp(randomNumberSep);


// var test = 90009;
// var testy = test.toString();
// console.log(testy.length);