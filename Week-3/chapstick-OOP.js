// CHAPSTICK!!!
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
  //

// DOMINGO!!!

  // var Beisbol = function(playerInfo) {
  //   this.firstName = playerInfo.firstName;
  //   this.preferredName = playerInfo.preferredName || playerInfo.firstName;
  //   this.lastName = playerInfo.lastName;
  //   this.fullName = playerInfo.firstName + ' ' + playerInfo.lastName;
  //   this.height = playerInfo.heightInInches;
  //   this.energy = 100;
  //   this.happiness = 100;

  //   this.say = function(phrase) {
  //     return phrase;
  //   };

  //   this.sayHeight = function() {
  //     var feet = Math.floor(this.height/12)
  //     var inches = this.height%12;
  //     return 'My name is ' + this.fullName + '. ' + 'People call me ' + this.preferredName + '. '+ 'I am ' + feet + ' ft ' + inches + ' inches tall.';
  //   };
  // };

  // var player = {
  //   firstName: 'Domingo',
  //   preferredName: 'The Homerun King',
  //   lastName: 'Ayala',
  //   heightInInches: 78
  // };

  // var Domingo = new Beisbol(player);

  // console.log(Domingo.say("Hello, how joo are doing?"));
  // console.log(Domingo.sayHeight());
  // console.log(Domingo.say("Today, I am going to teach you how to hit a home run."));

// MUPPET-MAKER!!!
   var MuppetMaker = function(choice) {
    this.muppetName = choice.muppetName;
    this.hair = choice.hair;
    this.hairColor = choice.hairColor || choice.hair;
    this.skinColor = choice.skinColor;
    this.numberOfFingers = choice.numberOfFingers;

   this.say = function(phrase) {
    return phrase;
   };

   this.sayAbout = function () {
    if (this.muppetName === 'Kermit') {
      return 'My name is ' + this.muppetName + '. ' + 'I am a ' + this.skinColor + ' frog and I am in a loving cross-species relationship with Miss Piggy.'
    }
    else if (this.muppetName === 'Beaker') {
      return 'Meep meep meep Meep meep meep Meep meep meep Meep meep meep Meep meep meep.'
    }
    else {
      return 'My name is ' + this.muppetName + '. ' + 'I have ' + this.skinColor + ' colored skin and I have ' + this.numberOfFingers + ' fingers. Because I am a muppet.';
    }
   };
 }

  var muppet1 = {
    muppetName: 'Kermit',
    hair: false,
    skinColor: 'green',
    numberOfFingers: 4,
   };

  var Kermit = new MuppetMaker(muppet1);
  console.log(Kermit.sayAbout());

  var muppet2 = {
    muppetName: 'Beaker',
    hair: true,
    hairColor: 'orange',
    skinColor: 'peach',
    numberOfFingers: 4,
  }

  var Beaker = new MuppetMaker(muppet2);
  console.log(Beaker.sayAbout());

  var muppet3 = {
    muppetName: 'Dr. Bunsen',
    hair: false,
    skinColor: 'green',
    numberOfFingers: 4
  }

  var Bunsen = new MuppetMaker(muppet3);
  console.log(Bunsen.sayAbout());