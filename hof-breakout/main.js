function dogNames (array) {
  if (!array) {
    return [];
  }
  return array.map(function (dogObj) {
  return dogObj.name;
  });
}

function dogSize (array, size) {
  var arr = array.filter(function (dogObj) {
    console.log(dogObj);
    //console.log(array[0]);
    if (dogObj.size === size) {
      return true;
    }
    else {
      return false;
    }

  });
  return arr[0];
}

module.exports = {
    dogNames: dogNames,
    dogSize: dogSize
};