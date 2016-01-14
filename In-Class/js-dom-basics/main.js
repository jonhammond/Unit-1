console.log("sanity check!");

// Get Element By ID

var firstParagraph = document.getElementById('main');
console.log(firstParagraph);

// Get Elements By Tag Name

var getAllElements = document.getElementsByTagName('ul');
console.log(getAllElements);

var getSingleElement = document.getElementsByTagName('ul')[0];
console.log(getSingleElement);

allListItems = document.getElementsByTagName('li');

for (var i = 0; i < allListItems.length; i++); 
console.log(allListItems);

// Get Elements By Class Name

var evenElements = document.getElementsByClassName('even');
console.log(evenElements);

var oddElements = document.getElementsByClassName('odd');
console.log(oddElements);

var firstEvenElement = document.getElementsByClassName('even')[0];
console.log(firstEvenElement);

var firstOddElement = document.getElementsByClassName('odd')[0];
console.log(firstOddElement);

// querySelector

var main = document.querySelector('#main');
console.log(main);

var firstOddElement = document.querySelector('.odd');
console.log(firstOddElement);

// querySelectorAll

var oddAndEvenElements = document.querySelectorAll('.odd, .even');
console.log(oddAndEvenElements);

// Altering the Content -- innerText

for (var i = 0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText);
};

for (var i=0; i < allListItems.length; i++) {
  console.log(allListItems[i].innerText = i);
}
console.log(allListItems);

// Manipulation

document.getElementById('main').style.backgroundColor= "goldenrod";

var li = document.createElement('li');
console.log(li);

var newElement = li.innerText = "another list item";
console.log(newElement);
console.log(allListItems);

var anotherListElement = document.createElement('li');
anotherListElement.innerText = "prepend";
console.log(anotherListElement);
getSingleElement.insertBefore(anotherListElement, getSingleElement.firstChild);
console.log(allListItems);
