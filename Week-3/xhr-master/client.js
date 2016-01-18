var usersRequest = new XMLHttpRequest();

if (this.readyState == 4 && this.status == 200) {
  var usersRequest = JSON.parse(this.responseText);
  console.log(usersRequest);
  for (var i=0; i<usersRequest.data.children.length; i+=1) {
    var usersRequest=usersRequest.data.children[i];
    console.log(usersRequest.data.title);
  };
}
