var Chapstick = function () {
  this.color = 'Yellow';
  this.volume = 100;
  this.capped = true;
  this.cap = function () {
    this.capped = true;
  };
  this.uncap = function () {
    this.capped = false;
  };
}

var myChapstick = new Chapstick();

// myChapstick.uncap = function () {
//   this.capped = false;
// }

// myChapstick.cap = function () {
//   this.capped = true;
// }

console.log(myChapstick);

myChapstick.uncap();

console.log('myChapstick uncapped = ', myChapstick)

var chapstick2 = new Chapstick();

console.log(chapstick2);