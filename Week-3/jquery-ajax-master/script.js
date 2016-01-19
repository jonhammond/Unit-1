$('#call').on('click', function() {
  var title = $('#title').val();
  var plot = $('#plot').val();
  var responseType = $('#res').val();
  var url = 'https://www.omdbapi.com/?t='+title+'&y=&plot='+plot+'&r='+responseType;

// shorthand for the AJAX code below
  // $.get(url, function(data) {
  //   console.log(data);
  // });

  $.ajax({
    method: "GET",
    success: function(data) {
      console.log(data);
    }
  });
});