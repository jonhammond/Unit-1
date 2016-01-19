# Crushing Candy Code, Testing

[Crushing Candy Code Repo](https://github.com/gSchool/ccf-data-structures)

### Objectives:

Practice writing tests by writing some functions to access data for the 
various stores in the Crushing Candy Code repo. This will allow us to:

* Practice setting up a file structure for testing
* Writing simple unit tests

I would suggest doing the following. At the bottom of your `data.js`, write the following:

```javascript
module.exports = {
  store1: store1,
  store2: store2,
  store3: store3,
  store4: store4
};
```

Create a new file, called `core.js` and include the following:

```javascript
var stores = require('./data');

// your functions go here

module.exports = {
  myFn1: myFn1,
  myFn2: myFn2,
  // etc...
}
```

Then, create a `core.spec.js` file that includes the following:

```javascript
var expect = require('chai').expect,
    core   = require('./core');

describe('Core', function() {
  describe('#methodName()', function () {
    it('description of what should happen', function() {
      expect(core.methodName()).to.equal("your value");
    });  
  });
});
```

And then replace the text and code inside of the test with your own tests!

### Write and test:

##### Store 1

* A function that returns all the dates where candy was sold.
  * e.g. `['2015-01-06', '2015-01-071' ...]`
* A function that returns an object where the name of the candy is the key
  and the price is the value.
  * e.g. `{ 'Dark Chocolate Crunchies': '4.39', ... }`

##### Store 2

* A function that returns only the names of those candies being sold.
  * e.g. `[ 'Dark Chocolate Crunchies', 'Mint Wafers' ...]`
* A function that returns all of the dates where candy was sold.
  Make sure to remove any duplicates!
  * e.g. `['2015-01-06', '2015-01-08' ...]`

##### Store 3

* A function that takes a parameter that is a date. If candies were
  sold on that date, return just the names of those candies sold as 
  an array. If no candies were sold on that date (or it is 
  otherwise invalid), return an empty array.
  * e.g. `myFn('2015-01-06') >> ['Dark Chocolate Crunchies', 'Mint Wafers' ...]`
* A function that takes a parameter that is a date. If candies were
  sold on that date, return the name of all those candies
  where none were sold (i.e. `'quantity': 0`). If every candy was 
  sold at least once, or the date is otherwise invalid, return an empty array.
  * e.g. `myFn('2015-01-06') >> ['Mint Wafers', 'Berry Bites' ...]`

##### Store 4

* A function that returns just the prices, but rounds them up
  to their nearest dollar.
  * e.g. `[5, 2, 3, 2, 8 ...]`
* A function that takes two parameters. If no parameters are entered,
  it returns all objects and their associated `price` and `sold on` information
  (i.e. in this case it returns the whole store). If the first parameter is entered
  and is greater than 0, it excludes all candies where the price is less than that
  number. (i.e. if `2.50` is entered, it will only return information for
  'Dark Chocolate Crunchies', 'Berry Bites', and 'Banana Bunches'). If a second
  paramter is entered __but no positive first parameter__ (i.e. the first parameter is
  set to `undefined` or `0`), it excludes all candies where the prices is greater than
  that number. (i.e. if `0, 1.50` is entered, it will only return information for
  'Mint Wafers' and 'Caramel Twists'). If both parameters are entered, it returns
  information for those candies that are between those prices (i.e. if `2` and `3`
  are entered, respectively, it will only return information for 'Peppermint Poppers').
  If the numbers entered are less than 0 or otherwise malformed, return an empty object.
  * e.g. `myFn(5) >> ['Berry Bites']`
  * e.g. `myFn(0, 1) >> ['Caramel Twists']`
  * e.g. `myFn(4, 5) >> ['Dark Chocolate Crunchies', 'Banana Bunches']`