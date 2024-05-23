function generateRandomNumber() {

    return Math.floor(Math.random() * 100 + 1);

}

//guessplayergame
function getPlayerGuess() {

    let guessNumber;
    let isValid = false;
  
    while (!isValid) {
      guessNumber = prompt("Guess a number between 1 and 100 ")
  
      if (guessNumber === null && guessNumber <= 0 && isNaN(guessNumber)) {
  
        alert("invalid value, please enter a number");
        continue;
      }
  
      else {
        isValid = true;
      }
  
    }
    return guessNumber
  }

  //checkguess


function checkGuess(playerGuess, correctNumber) {

    if (playerGuess > correctNumber) {
      return "too high"
    }
    else if (playerGuess < correctNumber) {
      return "too low"
    }
    else
      return "correct"
  
  }
  

function reward(count) {
    let message;
    switch (count) {
        case 1:
            message = 'Perfect!';
            break;
        case 2:
        case 3:
            message = 'Unbelievable!';
            break;
        case 4:
        case 5:
            message = 'Great!';
            break;
        case 6:
        case 7:
        case 8:
            message = 'Passable!';
            break;
        case 9:
        case 10:
            message = 'Just Barely!'
            break;
    }

    return message;
}