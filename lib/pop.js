module.exports = function(array) {
  var lastValue = array[array.length - 1];
  array.length = array.length - 1;
  return lastValue;
}
