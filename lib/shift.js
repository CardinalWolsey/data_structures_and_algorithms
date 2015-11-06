module.exports = function(array, val) {
  for (var i = array.length; i >= 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = val;
  return array;
}
