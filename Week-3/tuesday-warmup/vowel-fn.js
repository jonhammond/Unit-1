// global variables

var vowels = ['a', 'e', 'i', 'o', 'u'];
var letterMatch = [];
var noDuplicates = [];

//helper functions

function vowelCheck (inputWord) {
  var wordArray = inputWord.toLowerCase().split('');
  // console.log(wordArray);
  for (var i=0; i<inputWord.length; i++) {
    for (var n=0; n<vowels.length; n++) {
      if (inputWord[i] === vowels[n])
        letterMatch.push(vowels[n]);
        letterMatch.sort();
      }
    }
  console.log(letterMatch);
}

function checkDuplicates (letterArray1, letterArray2) {
  if (!letterMatch1.length) {
    return false
  }
  else {
    for (var i=1;i<letterArray1.length; i++) {}
  }
    for (var i=0; i<letterMatch.length; i++) {
      if (letterMatch[i]!==letterMatch[i+1])
        console.log('Nope');
      else {
        console.log('Yep');
      }
    }
  }
}

// Function Calls

vowelCheck('Kablaom');
checkDuplicates(vowelCheck);