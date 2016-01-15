// pseudocode:

// ** add divs to the dom ** //

/*

1. create array of colors
2. loop through color array
 2a. create new div element
 2b. add background color, from the color array, to each element
 2c. append new element to dom
 2d. add click event so that the 'currentColor' is assigned the value of the background color of the div

*/



// color palette

var currentColor = "white";
var colorPalette = [
  {
    color: 'red',
    className: 'palette-red'
  },
  {
    color: 'orange',
    className: 'palette-orange'
  },
  {
    color: 'yellow',
    className: 'palette-yellow'
  },
  {
    color: 'green',
    className: 'palette-green'
  },
  {
    color: 'blue',
    className: 'palette-blue'
  },
  {
    color: 'indigo',
    className: 'palette-indigo'
  },
  {
    color: 'violet',
    className: 'palette-violet'
  }
];


// canvas
var allDivs = document.getElementsByClassName('canvas');

for (var i = 0; i < allDivs.length; i++) {
  allDivs[i].addEventListener('click', function() {
    this.style.backgroundColor = currentColor;
  });
};

  // var newDiv = document.createElement("div");
  // newDiv.style.backgroundColor = "yellow";
  // newDiv.className = ('palette-yellow');
  // document.getElementsByTagName("section")[0].appendChild(newDiv);

// add divs to the DOM

for (var i=0; i < colorPalette.length; i++) {
  newDiv = document.createElement('div');
  newDiv.style.backgroundColor = colorPalette[i].color;
  newDiv.className = colorPalette[i].className;
  newDiv.addEventListener('click', function() {
    currentColor = this.style.backgroundColor;
  });
  document.getElementsByTagName('section')[0].appendChild(newDiv);
}

// color palette

// var redDiv = document.getElementsByClassName("red")[0];
// redDiv.addEventListener('click', function() {
//   currentColor = 'red';
// });

// var purpleDiv = document.getElementsByClassName("purple")[0];
// purpleDiv.addEventListener('click', function() {
//   currentColor = 'purple';
// });