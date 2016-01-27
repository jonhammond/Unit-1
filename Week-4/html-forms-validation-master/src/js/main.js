// add scripts

$(document).on('ready', function() {


  var userEmail = document.getElementById('email');

  function validateEmail (email) {
    if (email.indexOf === -1) {
      return false;
    }
    var emailArray = email.split('@');
    emailArray.filter(function(val) {
      if(emailArray[1].indexOf('.') === -1) {
        // console.log(val);
        // console.log(emailArray);
        console.log("false");
        return false;
      }
      else {
        console.log("true");
        return true;
      }
    });
  }

  validateEmail(userEmail);

  // wes
  // $email = $('input[type="email"]');
  // $email.on('blur', function() {
  //   var val = $email.val();
  //   toggleClass;
  //   })

  //"hello" --> false
  //"hello@" --> false
  //"hello@ok" --> false
  //"hello@ok." --> false
  //hello@ok.com" --> true

//   console.log('sanity check!');
//   $('form').on('submit', function(event) {
//     event.preventDefault();
//     // console.log("AAAAHHHH!!!!");
//   }
// );


  ['preferredName', 'lastName'].forEach(function(inputName) {
    var $input = $('input[name="' + inputName + '"]');
  $input.on('blur', function() {
    // console.log("WOOOOOOOOO!!!!");
    var val = $input.val();
    if (!val) {
      $input.addClass('warning');
    }
    else {
      $input.removeClass('warning');
    }
  });
});
});