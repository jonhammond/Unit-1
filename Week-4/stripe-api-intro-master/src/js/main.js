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

function stripeResponseHandler(status, response) {
  if (response.error) {
    console.log(response.error.message);
  }
  else {
    console.log(response);
  }
}