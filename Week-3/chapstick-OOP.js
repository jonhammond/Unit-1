// var Chapstick = function () {
//   this.color = 'Yellow';
//   this.volume = 100;
//   this.capped = true;
//   this.cap = function () {
//     this.capped = true;
//   };
//   this.uncap = function () {
//     this.capped = false;
//   };
//   this.use = function() {
//     this.volume -= 1;
//   }
// }

// var myChapstick = new Chapstick();

// // myChapstick.uncap = function () {
// //   this.capped = false;
// // }

// // myChapstick.cap = function () {
// //   this.capped = true;
// // }

// console.log(myChapstick);

// myChapstick.use();

// console.log('myChapstick uncapped = ', myChapstick)

// var chapstick2 = new Chapstick();

// console.log(chapstick2);
//

var Beisbol = function(playerInfo) {
  this.firstName = playerInfo.firstName;
  this.preferredName = playerInfo.preferredName || playerInfo.firstName;
  this.lastName = playerInfo.lastName;
  this.fullName = playerInfo.firstName + ' ' + playerInfo.lastName;
  this.height = playerInfo.heightInInches;
  this.energy = 100;
  this.happiness = 100;

  this.say = function(phrase) {
    return phrase;
  };

  this.sayHeight = function() {
    var feet = Math.floor(this.height/12)
    var inches = this.height%12;
    return 'My name is ' + this.fullName + '. ' + 'People call me ' + this.preferredName + '. '+ 'I am ' + feet + ' ft ' + inches + ' inches tall.';
  };
};

var player = {
  firstName: 'Domingo',
  preferredName: 'The Homerun King',
  lastName: 'Ayala',
  heightInInches: 78
};

var Domingo = new Beisbol(player);

console.log(Domingo.sayHeight());