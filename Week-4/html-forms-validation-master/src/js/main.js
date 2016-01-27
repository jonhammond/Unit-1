// add scripts

$(document).on('ready', function() {

  // forEach function for warning border
  ['preferredName', 'lastName', 'email'].forEach(function(inputName) {
    var $input = $('input[name="' + inputName + '"]');
    $input.on('blur', function() {
      var val = $input.val();
      if (!val) {
        $input.addClass('warning');
      }
      else {
        $input.removeClass('warning');
        $input.addClass('allGood');
      }

    });
  });
  // End of forEach for warning border

  // Declare function validateEmail
  function validateEmail (email) {
    var emailArray = email;
    var emailArraySplit = email.split('@');
    console.log(emailArray);

    if (emailArray === "") {
      console.log("No email provided, returns false");
      return false;
    }
    else if (emailArraySplit[1].indexOf('.') === -1) {
      console.log("Missing a '.' after the '@', returns false");
      return false;
    }
    else {
      console.log("Email is valid, returns true");
      return true;
    }
  }
  // End of function validateEmail


  // Helper function alertUser
  function alertUser(isValid) {
    if (isValid) {
      console.log('true');
    }
    else {
      alert("Your email format is incorrect. Please ensure that you are including the '@' and the '.'. For example, myemail@domain.com");
      console.log("false");
    }
  }
  // End of helper function

  //Declare preventDefault for form on submit
  $('form').on('submit', function(event) {
    event.preventDefault();
      // console.log("preventDefault event is running");
    }
  );
  //End of preventDefault



  // Event listener for clicking submit button, call validateEmail
  $('.submit').on('click', function() {
    var userEmail = $('.email').val();
    var isValid = validateEmail(userEmail);
    alertUser(isValid);
  });
  // End event listener for clicking submit button

});
  // End document.ready