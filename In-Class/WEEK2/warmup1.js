var num1 = (Math.random()*(10)+1);
console.log(num1);

var num2 = (Math.random()*(10)+1);
console.log(num2);

var mean = ((num1 + num2)/2);

console.log("Mean: " + mean);

var variance1 = Math.pow((num1 - mean), 2);
var variance2 = Math.pow((num2 - mean), 2);

console.log("Variance 1 =" + variance1 + "\n" + "Variance 2 =" + variance2);

var stddev1 = (num1 - mean);
var stddev2 = (num2 - mean);

console.log("Standard Deviation 1: " + stddev1 + "\n" + "Standard Deviation 2: " + stddev2);

var newnum = ((Math.random()*100)+1);
console.log(newnum);

for (i = 0; i < newnum; i ++) {
  if (i%2 === 0) {
    console.log(i);
  }
  else {
  };
};

var newnum2 = ((Math.random()*100)+1);
console.log("New number = " + newnum2);

if (newnum2<40) {
  for (var i=0; i <= 39; i+=2) {
    if (i%2===0) {
      console.log(i+1);
    };
  };
};

if (newnum2>40) {
  for (var i=40; i<=99; i+=2) {
    if (i%2===0) {
      console.log(i+1);
    };
  };
};



