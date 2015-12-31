module.exports = function(array) {
  var allCharacters = '';
  var total = [];
  var highestCount = 0;
  var highestLetter;

  for (var i = 0; i < array.length; i++) {
    allCharacters = allCharacters.concat(array[i]).toLowerCase();
  }

  for (var j = 0; j < allCharacters.length; j++) {
    character = allCharacters[j];

    if (total[character]) {
      total[character] += 1;
    } else {
      total[character] = 1;
    }

    if(total[character] > highestCount) {
      highestCount = total[character];
      highestLetter = character;
    }
  }

  return highestLetter;
};

//Major hits from Emily Landi
