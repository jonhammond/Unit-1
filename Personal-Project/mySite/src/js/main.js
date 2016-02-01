// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var userInput = $('#userInput');
  $('form').on('submit', function(el) {
    el.preventDefault();
    console.log(userInput.val());
    submitLetters(userInput.val());
  });
});

function submitLetters(input){
    for (var i=0; i<input.length; i++) {
      if (input[i] === 'a') {
        console.log(input);
        $('#slide').append('<img src = "../whitegifs/alligator.gif">');
      }
      else {
        console.log(input);
      }
    }
  }

// $('form').on('submit', function(event){
//     event.preventDefault();
//     console.log(userInput);
//     submitLetters(userInput);
//   });