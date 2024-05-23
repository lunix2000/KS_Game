function generateRandomNumber() {
  return Math.floor(Math.random() * 100 + 1);
}

//guessplayergame
function getPlayerGuess() {
  let guessNumber;
  let isValid = false;

  while (!isValid) {
    guessNumber = prompt("Guess a number between 1 and 100 ");

    if (guessNumber === null) {
      alert("You cancelled the game.");
      return null;
    } else if (guessNumber <= 0 || isNaN(guessNumber) || guessNumber > 100) {
      alert("invalid value, please enter a number");
      continue;
    } else {
      isValid = true;
    }
  }
  return parseInt(guessNumber); // Parse the guess to ensure it's treated as a number
}

//checkguess

function checkGuess(playerGuess, correctNumber) {
  if (playerGuess > correctNumber) {
    return `${playerGuess}, too high`;
  } else if (playerGuess < correctNumber) {
    return `${playerGuess}, too low`;
  } else return "correct";
}

function game() {
  const playerName = prompt("Enter your name:");

  if (!playerName) {
    alert("Name is required to play the game.");
    return;
  }

  const randomNumber = generateRandomNumber();

  let counter = 0;
  const maxAttempts = 10;

  console.log(`welcome to the Guessing  game, ${playerName}`);

  console.log("please can you guess a number between 1 and 100");

  while (counter < maxAttempts) {
    const playerGuess = getPlayerGuess();

    if (playerGuess === null) {
      console.log("Game cancelled by the player. ");
      return; //exit the game when cancelled
    }
    counter += 1;
    const result = checkGuess(playerGuess, randomNumber);

    console.log(result);

    if (result === "correct") {
      console.log(
        `congratulation! you've guessed the number ${randomNumber} in ${counter} attempts`
      );
      console.log(`RANK => ${reward(counter)}`);
      updateLeaderboard(playerName, counter, reward(counter));
      displayLeaderboard();

      return;
    }
  }

  console.log(`sorry you have used up ${maxAttempts} attempts`);

  function updateLeaderboard(playerName, attempts, rank) {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    leaderboard.push({
      name: playerName,
      attempts: attempts,
      playerRank: rank,
    });
    leaderboard.sort((a, b) => a.attempts - b.attempts);
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
  }

  function displayLeaderboard() {
    const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
    console.log("Leaderboard:");
    leaderboard.forEach((entry, index) => {
      console.log(
        `${index + 1}. ${entry.name} - ${entry.attempts} attempts - Rank => ${
          entry.playerRank
        }`
      );
    });
  }

  //Bonus
  function reward(count) {
    let message;
    switch (count) {
      case 1:
        message = "Perfect!";
        break;
      case 2:
      case 3:
        message = "Unbelievable!";
        break;
      case 4:
      case 5:
        message = "Great!";
        break;
      case 6:
      case 7:
      case 8:
        message = "Passable!";
        break;
      case 9:
      case 10:
        message = "Just Barely!";
        break;
    }

    return message;
  }

  const playAgain = confirm("Do you want to play again?");
  if (playAgain) {
    game();
  } else {
    console.log("Thanks for playing!");
  }
}

game();
