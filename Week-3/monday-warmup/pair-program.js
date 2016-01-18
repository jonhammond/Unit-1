function randomNumber (inputNum) {
  var randNum = Math.floor(Math.random()*100);
  // var userNum = getElementByIdName('input');
  console.log("Computer says: " + randNum);
  // console.log("User says: " + userNum);

  if (inputNum > randNum) {
    alert("Too high, sucka!");
  }
  else if (inputNum < randNum) {
    alert("Too low, sucka!");
  }
  else {
    alert("You win, boss.");
  }
}

document.querySelector('form').addEventListener('submit',function(event){
  event.preventDefault();
  var userNum = document.getElementById('input').value;
  randomNumber(userNum);
});