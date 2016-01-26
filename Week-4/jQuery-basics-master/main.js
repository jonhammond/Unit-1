$(document).on('ready', function() {

  console.log('sanity check')

  $('#myButton').on('click', function() {
    $('body').css('background-color', 'red');
  });

});
