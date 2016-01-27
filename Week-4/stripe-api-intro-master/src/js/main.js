// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  Stripe.setPublishableKey('pk_test_ag8tmFNIwti0SOME2bwILOpq');
});

$('.order').on('click', function () {
  var cardInfo = {
  number: $('.card-number').val(),
  cvc: $('.card-cvc').val(),
  exp_month: $('.card-expiry').val().split('/')[0],
  exp_year: $('.card-expiry').val().split('/')[1]
  };

  Stripe.card.createToken(cardInfo, stripeResponseHandler);

});

$('.card-number').on('blur', function () {
  //do something
  var cardNum = $('.card-number');
  var cardNumVal = $('.card-number').val();
  if (Stripe.card.validateCardNumber(cardNumVal) === false) {
    cardNum.css('background-color', 'red');
  }
  else {
    cardNum.css('background-color', 'green');
  }
});

$('.card-cvc').on('blur', function () {
  var cvc = $('.card-cvc');
  var cvcVal = $('.card-cvc').val();
  if (Stripe.card.validateCVC(cvcVal) === false) {
    cvc.css('background-color', 'red');
  }
  else {
    cvc.css('background-color', 'green');
  }
});

$('.card-expiry').on('blur', function() {
  var exp = $('.card-expiry');
  var expMonth = exp.val().split('/')[0];
  var expYear = exp.val().split('/')[1];
  if (Stripe.card.validateExpiry(expMonth, expYear) === false) {
    exp.css('background-color', 'red');
  }
  else {
    exp.css('background-color', 'green');
  }
});

function stripeResponseHandler(status, response) {
  if (response.error) {
    console.log(response.error.message);
  }
  else {
    console.log(response);
  }
}