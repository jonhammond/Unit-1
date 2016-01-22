var PhoneNumber = function (number) {
  PhoneNumber.prototype.number = function () {
    var newNumber = number.replace(/[^\d]/g,'');
    if (newNumber.length === 11 && newNumber.charAt(0) === '1') {
      return newNumber.substr(1,10);
    }
    else if (newNumber.length === 11 && newNumber.charAt(0) !== '1') {
      return '0000000000'
    }
    else if (newNumber.length === 9) {
      return '0000000000'
    }
    else {
      return newNumber.toString();
    };
  };
  PhoneNumber.prototype.areaCode = function () {
    var areacode = number.substr(0,3);
    return areacode;
  };
  PhoneNumber.prototype.toString = function () {
    var addParenth = '(' + number.slice(0,3) + ') ';
    var addDash = number.slice(3,6) + '-' + number.slice(6,10);
    var formattedNumber = addParenth + addDash;
    return formattedNumber;
  }
};

module.exports = PhoneNumber;