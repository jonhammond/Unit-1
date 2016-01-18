console.log('You\'re ready to begin!');

// var request = new XMLHttpRequest();

// request.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     console.log(this.responseText);
//   }
// };

// request.open('GET', '/');
// request.send();

// var request2 = new XMLHttpRequest();

// request2.onreadystatechange = function () {
//   if (this.readyState === 4 && this.status === 200) {
//     var jsonFile = JSON.parse(this.responseText);
//     console.log(jsonFile);
//   }
// };

// request2.open('GET', '/data.json');
// request2.send();

var request3 = new XMLHttpRequest();

request3.onreadystatechange=function() {
  if (this.ready === 4 && this.status === 200) {
    var awwListings = JSON.parse(this.responseText);
    console.log(awwListings);
    for (var i=0; i<awwListings.data.children.length; i +=1) {
      var awwListing = awwListings.data.children[i];
      console.log(awwListing.data.title, awwListing.data.thumbnail);
    }
  }
};

request3.open('GET', 'https://www.reddit.com/r/aww.json');
request3.send();