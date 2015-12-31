var push = require(__dirname + '/push');

module.exports = function(array) {
  var newArray = [];
  var refObj = {};

  for (var i = 0; i < array.length; i++) {
    if(!refObj[array[i]]) {
      push(newArray, array[i]);
      refObj[array[i]] = 1;
    }
  }
  return newArray;
};
