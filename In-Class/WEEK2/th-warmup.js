function randomNumberSep (number) {

  var num = Math.floor((Math.random()*10000));
  console.log("Random number = " + num);

  var numArray = num.toString().split('');
  var sum = 0;  
  
  for (var i=0; i < numArray.length; i++) {
    sum += Number(numArray[i]);
  }
  console.log("numArray = " + numArray);
  console.log("Sum of all digits = " + sum);

  var newArray = numArray;
  console.log("New Array = " + newArray);

  while (newArray.length > 1) {
    newSum = 0;
    newArray.shift();

    for (var i=0; i < newArray.length; i++) {
      newSum += Number(newArray[i]);
    }
    console.log("Sum of digits with one less digit= " + newSum);
  }
};

randomNumberSep();