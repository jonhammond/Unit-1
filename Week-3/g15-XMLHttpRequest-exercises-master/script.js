console.log('You\'re ready to begin!')

var request = new XMLHttpRequest();

request.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    console.log(this.responseText);
  }
}

var request2 = new XMLHttpRequest();

request.onreadystatechange = function () {
  if ()
}

request.open('GET', '/');
request.send();