

function randomNumber () {
  var userNum = document.getElementsByClassName('user_input')[0];
  var randomNum = Math.floor((Math.random()*10));
  console.log("The code generated: " + randomNum);
  console.log("You submitted: " + userNum.value);
  console.log(typeof(userNum))
  // return randomNum;
  if (randomNum === userNum.value) {
    console.log("You Win!");
  }
  else {
    console.log("Try again!");
  }
}

// randomNumber();

