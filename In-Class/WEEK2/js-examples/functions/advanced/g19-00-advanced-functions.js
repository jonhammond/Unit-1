/*
  Now onto the fun stuff!
*/

var people = require('./people');

Array.prototype.filter = function(filterFunc) {
    result = [];
    for (item of this) {
	var filtered = filterFunc(item);
	if (filtered != null) {
	    result.push(filtered);
	}
    }
    return result;
};

Array.prototype.collect = function(mapFunc) {
    for (item of this) {
	mapFunc(item);
    }
};

var under21Filter = function(person) {
    if (person.age < 21) {
	return person
    }
    return null;
};

var printFullName = function(person) {
    console.log(person.firstName + " " + person.lastName);
};

people.filter(under21Filter).collect(printFullName);
