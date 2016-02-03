// add scripts

$(document).on('ready', function() {
  console.log('sanity check!');
  $('form').on('submit', function(event) {
    var userOneInput = $('#userInput');
    var userTwoInput = $('#userInputSecond');
    event.preventDefault();
    userOneSlides(userOneInput.val());
    userTwoSlides(userTwoInput.val());
    console.log(userTwoInput);
  });
  $('.addUser').on('click', function(event) {
    console.log('click');
    event.preventDefault();
    addPartner(carouselSkeleton);
    removeError();
  $('.solo').on('click', function(event) {
    console.log('click');
    event.preventDefault();
    removeError();
    goSolo();
  });
  });
});

function userOneSlides(input){
    var userOneLetters = input.replace(/\s+/g, '-').replace('/[^a-zA-Z-]/g', '').toLowerCase();
    $('#slides').empty();
    var keys=Object.keys(MyGifs);
    for (var i=0; i<userOneLetters.length; i++) {
      for (var n=0; n<keys.length; n++) {
        // console.log('MyGifs[keys[n]]=',MyGifs[keys[n]].name);
        if (userOneLetters[i] === keys[n]) {
          $('#slides').append(gifStr(MyGifs[keys[n]].name, MyGifs[keys[n]].caption));
          // console.log(($('#myCarousel')));
        }
        else {
          // console.log('gifstr', gifStr(MyGifs[keys[n]].name));
          // console.log("Error in submitLetters fn AHHHHHHHHHHHH!!!!!");
        }
    }
    $("#slides .item").first().addClass('active');
  }
}

var carouselSkeleton = '<div class="row carouselBank"><div id="myCarousel1" class="carousel slide" data-ride="carousel"><!-- CAROUSEL SLIDES USER TWO --><div class="carousel-inner" role="listbox" id="slides1"><div class="item active"><div class="item carousel-caption"><p class="col-xs-4 col-xs-offset-4">See your dancing stick here!</p></div></div></div><!-- Controls --><a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span><span class="sr-only">Previous</span></a><a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span><span class="sr-only">Next</span></a><!-- Indicators --><!-- <ol class="carousel-indicators"><li data-target="#myCarousel1" data-slide-to="0" class="active"></li><li data-target="#myCarousel1" data-slide-to="1"></li><li data-target="#myCarousel1" data-slide-to="2"></li></ol> --></div></div>';

var formSkeleton = '<!-- USER TWO INPUT BOX --><div class="row"><form id="secondUserForm"><input type="text" name="input" placeholder="User Two" id="userInputSecond"></form></div><!-- END USER TWO INPUT BOX -->';

// ('[id^="myCarousel"]')
// $('[id^="myCarousel"]');

function addPartner(carousel, secondForm) {
  if ($('#myCarousel1').length > 0) {
    alert("You can only have one partner at this time.");
  }
  else {
    $('.hero').append(carousel);
    $('.inputBoxes').append(formSkeleton);
  }
}

function goSolo () {
  if ($('#myCarousel1').length > 0 && $('#secondUserForm').length > 0) {
    $('#myCarousel1').remove();
    $('#secondUserForm').remove();
  }
  else {
    $('#options').append('' + '<p id="formError">You have already selected solo!</p>' + '');
  }
}

function userTwoSlides (input) {
  if ($('#myCarousel1').length > 0) {
    var userTwoLetters = input.replace(/\s+/g, '-').replace('/[^a-zA-Z-]/g', '').toLowerCase();
    $('#slides1').empty();
    var keys=Object.keys(MyGifs);
    for (var i=0; i<userTwoLetters.length; i++) {
      for (var n=0; n<keys.length; n++) {
        // console.log('MyGifs[keys[n]]=',MyGifs[keys[n]].name);
        if (userTwoLetters[i] === keys[n]) {
          $('#slides1').append(gifStr(MyGifs[keys[n]].name, MyGifs[keys[n]].caption));
          // console.log(($('#myCarousel')));
        }
      }
    $("#slides1 .item").first().addClass('active');
    }
  }
}

function removeError () {
  if ($('#formError').length > 0 ) {
    ($('#formError').remove());
  }
}