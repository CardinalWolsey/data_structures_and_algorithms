var expect = require('chai').expect;

var pop = require(__dirname + '/../lib/pop');
var push = require(__dirname + '/../lib/push');
var shift = require(__dirname + '/../lib/shift');
var unshift = require(__dirname + '/../lib/unshift');
var unique = require(__dirname + '/../lib/unique');
var frequency2 = require(__dirname + '/../lib/frequency2');

describe('the pop method', function() {
  beforeEach('set the test array', function() {
    this.testArray = [2, 3, 4];
  });
  it('should return the last item in the array', function() {
    expect(pop(this.testArray)).to.eql(4);
  });
  it('should reduce the length of the array by 1', function() {
    pop(this.testArray);
    expect(this.testArray).to.have.length(2);
  });
});

describe('the push method', function() {
  beforeEach('set the test array', function() {
    this.testArray = [2, 3, 4];
    this.val = 5;
  });
  it('should add a value to the end of the array', function() {
    push(this.testArray, this.val);
    expect(this.testArray[this.testArray.length -1]).to.eql(this.val);
  });
  it('should increase the length of the array by 1', function() {
    push(this.testArray, this.val);
    expect(this.testArray).to.have.length(4);
  });
});


describe('the shift method', function() {
  beforeEach('set the test array', function() {
    this.testArray = [2, 3, 4];
    this.val = 5;
  });
  it('should add an item to the beginning of the array', function() {
    shift(this.testArray, this.val);
    expect(this.testArray[0]).to.eql(this.val)
  });
  it('should increase the lenght of the array by 1', function() {
    shift(this.testArray, this.val);
    expect(this.testArray).to.have.length(4);
  });
});

describe('the unshift method', function() {
  beforeEach('set the test array', function() {
    this.testArray = [2, 3, 4];
  });
  it('should remove the first item from an array and return it', function() {
    unshift(this.testArray);
    expect(this.testArray[0]).to.eql(3);
  });
  it('should reduce the length of the array by one', function() {
    unshift(this.testArray);
    expect(this.testArray).to.have.length(2);
  });
});

describe('the unique method', function() {
  it('should return an array with no repeating values');
})

describe('the frequency2 method', function() {
  it('shgould determine the most frequently used character in an array');
})
