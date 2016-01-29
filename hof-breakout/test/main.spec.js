var assert = require('assert'),
    main = require('../main');

describe('Main', function() {
  describe('.dogNames', function () {
    it('no idea', function () {
      var input = [
        { name: 'Fido'},
        { name: 'Snoopy'}
      ];
      var expected = ['Fido', 'Snoopy'];
      var actual = main.dogNames(input);
      assert.deepEqual(expected, actual);
      });

      it('returns an empty array if no input', function () {
        var expected = [];
        var actual = main.dogNames();
        assert.deepEqual(expected, actual);
        });
    });

  describe('.dogSize', function(input, size) {
    var input;

    beforeEach(function() {
      input = [
      { name: 'Fido', size: 'small'},
      { name: 'Snoopy', size: 'medium'},
      { name: 'Clifford', size: 'large'}
      ];
    });

    it('it returns only the first small dog', function() {
        var expected = { name: 'Fido', size: 'small'};
        var actual = main.dogSize(input, 'small');
        assert.deepEqual(expected, actual);
    });

    xit('it returns only the first medium dog', function(){
        var expected = { name: 'Snoopy', size: 'medium'};
        var actual = main.dogSize(input, 'medium');
        assert.deepEqual(expected, actual);
    });

    xit('it returns only the first large dog', function() {
        var expected = { name: 'Clifford', size: 'large'};
        var actual = main.dogSize(input, 'large');
        assert.deepEqual(expected, actual);
    });


  });
});