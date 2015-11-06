module.exports = function(array) {
  for (var i = 0; i < array.length; i++) {
    array[i] = array[i + 1];
  }
  array.length = array.length - 1;
  return array;
}
