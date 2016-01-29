// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');

  $('#rock').on('click', function() {
  userStr = 'Rock';
  computerChoice();
  rockPaperScissors(compStr, userStr);
});

$('#paper').on('click', function() {
  userStr = 'Paper';
  computerChoice();
  rockPaperScissors(compStr, userStr);
});

$('#scissors').on('click', function () {
  userStr = 'Scissors';
  computerChoice();
  rockPaperScissors(compStr, userStr);
});

compStr = '';
userStr = '';

var computerChoice = function () {
  var compNum = Math.random();
  if (compNum <= 0.33) {
    compStr = 'Rock';
  }
  else if (compNum > 0.33 && compNum <= 0.66 ) {
    compStr = 'Paper';
  }
  else {
    compStr = 'Scissors';
  }
  return compStr;
};

var player = "Player Wins!";
var computer = "Computer Wins!";
var tie = "It's a tie!";
var tieCounter = 0;
var playerCounter = 0;
var computerCounter = 0;

var rockPaperScissors = function (comp, user) {
    $('#result').empty();
    if (comp === user) {
      console.log("It's a tie!");
      $('#result').append(tie);
      tieCounter += 1;
      $('#t-counter').empty();
      $('#t-counter').append(tieCounter);
    }
    else if (user === 'Rock' && comp === 'Scissors') {
      console.log("User wins!");
      $('#result').append(player);
      playerCounter += 1;
      $('#p-counter').empty();
      $('#p-counter').append(playerCounter);

    }
    else if (user === 'Scissors' && comp === 'Rock') {
      console.log("Computer wins!");
      $('#result').append(computer);
      computerCounter += 1;
      $('#c-counter').empty();
      $('#c-counter').append(computerCounter);

    }
    else if (user.length < comp.length) {
      console.log("Computer wins!");
      $('#result').append(computer);
      computerCounter += 1;
      $('#c-counter').empty();
      $('#c-counter').append(computerCounter);

    }
    else {
      console.log("User wins!");
      $('#result').append(player);
      playerCounter += 1;
      $('#p-counter').empty();
      $('#p-counter').append(playerCounter);
    }

};

});