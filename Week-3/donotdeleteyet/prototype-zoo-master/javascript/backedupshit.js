function Animal(kind, sound, name, age, awake){
  this.kind = kind;
  this.sound = sound;
  this.name = name;
  this.age = age;
  this.awake = false;
};

Animal.prototype.wakeUp = function () {
    this.awake = true;
};

Animal.prototype.speak = function () {
  return (this.name + ' says ' + this.sound);
  // this.sound = "Meow!";
}

Animal.prototype.feed = function () {
  if (this.awake === true) {
    return "NOM NOM NOM";
  }
  else {
    return "The cat is asleep.";
  }
}

Animal.prototype.growUp = function () {
  return this.age += 1;
}

Animal.prototype.sleep = function () {
  this.awake = false;
  if (this.awake === false) {
    return "The cat is asleep";
  }
  else {
    return "The cat won't go to sleep.";
  }
}

// var cat = new Animal('Siamese');
// console.log(cat);

// cat.wakeUp();

// console.log(cat);

// cat.color();

// console.log(cat);
// cat.wakeUp();
// console.log(cat.feed());

// module.exports = Animal;

// cat.wakeUp();
// console.log(cat);
// console.log(cat.sleep());


var cat = new Animal ('cat', 'Meow', 'Chester', 10, false);
var wolf = new Animal ('wolf', 'HOWL', 'Benicio', 10, false);
var bear = new Animal ('bear', 'GRRR', 'Smokey', 22, false);
var animals = [cat, wolf, bear];

function Zoo (location, name, status, animals) {
  this.location = location;
  this.name = name;
  this.status = 'closed';
  this.animals = animals;
}

var myZoo = new Zoo ('Denver', 'My Zoo', 'closed', animals);

Zoo.prototype.isOpen = function () {
  if (this.status === 'closed') {
    return false
  }
}

Zoo.prototype.open = function () {
  this.status = 'open';
}

Zoo.prototype.addAnimal = function () {
  var newAnimal = new Animal ("wolf", "RRRRR", "Tomas", 5, false);
  console.log('newAnimal', newAnimal.kind);
  for (var i=0; i<animals.length - 1; i++) {
    if ((this.status === 'open') && (animals[i].kind !== newAnimal.kind)) {
      animals.push(newAnimal);
      return animals;
    }
    else {
      return "No vacancy";
    }
  };
}

myZoo.open();
myZoo.addAnimal();

// console.log('animals.kind= ',animals[0].kind);

console.log(myZoo);