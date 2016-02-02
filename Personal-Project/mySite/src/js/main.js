// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  var userInput = $('#userInput');
  $('form').on('submit', function(event) {
    event.preventDefault();
    submitLetters(userInput.val());
  });
});

function submitLetters(userInput){
    var inputToLettersOnly = userInput.replace(/\s+/g, '-').replace('/[^a-zA-Z-]/g', '').toLowerCase();
    $('#slides').empty();
    var keys=Object.keys(MyGifs);
    for (var i=0; i<inputToLettersOnly.length; i++) {
      for (var n=0; n<keys.length; n++) {
        // console.log('MyGifs[keys[n]]=',MyGifs[keys[n]].name);
        if (inputToLettersOnly[i] === keys[n]) {
          $('#slides').append(gifStr(MyGifs[keys[n]].name, MyGifs[keys[n]].caption));
        }
        else {
          // console.log('gifstr', gifStr(MyGifs[keys[n]].name));
          console.log("Error in submitLetters fn AHHHHHHHHHHHH!!!!!");
        }
    }
    $("#slides .item").first().addClass('active');
  }
}