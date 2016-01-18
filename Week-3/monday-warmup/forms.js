function randomNumber () {
  var userNum = document.getElementsByClassName('user_input')[0];
  var randomNum = Math.floor((Math.random()*10));
  console.log("The code generated: " + randomNum);
  console.log("You submitted: " + userNum.value);
  // console.log(
  // return randomNum;
  if (randomNum === userNum.value) {
    console.log("You Win!");
  }
  else {
    console.log("Try again!");
  }
}

// randomNumber();

// SOLUTION:

// document.querySelector('form').addEventListener('submit', function(event) {
//   event.preventDefault();
//   var num = document.getElementById('number').value;
//   console.log(num);
// });