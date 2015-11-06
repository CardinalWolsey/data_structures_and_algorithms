module.exports = function(array) {
  array.sort();
  for (var i = 1; i < array.length; i++) {
    if(array[i - 1] === array[i]) {
      array.splice(i, 1);
    }
  }
  return array;
}
