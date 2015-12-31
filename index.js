var pop = require(__dirname + '/lib/pop');
var push = require(__dirname + '/lib/push');
var shift = require(__dirname + '/lib/shift');
var unshift = require(__dirname + '/lib/unshift');
var unique = require(__dirname + '/lib/unique');
var frequency2 = require(__dirname + '/lib/frequency2');

var testArray = [2, 3, 4, 5];

pop(testArray);
console.log(testArray);

push(testArray, 9);
console.log(testArray);

shift(testArray, 7);
console.log(testArray);

unshift(testArray);
console.log(testArray);

var testArray2 = [1, 1, 2, 3, 4, 4, 5, 9]
console.log(unique(testArray2));

var testArray3 = ['hi', 'hello', 'hey'];
console.log(frequency2(testArray3));
