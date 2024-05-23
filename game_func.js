    function game() {
  
    const randomNumber = generateRandomNumber();
  
    let counter = 0;
    const maxAttempts = 10;
  
    console.log("welcome to the Guessing game");
  
    console.log("please can you guess a number between 1 and 100");
  
  
    while (counter < maxAttempts) {
      const playerGuess = getPlayerGuess();
      counter += 1;
  
      const result = checkGuess(playerGuess, randomNumber);
  
      console.log(result);
  
      if (result === "correct") {
        console.log(`congratulation! you've guessed the number ${randomNumber} in ${counter} attempts`);
        console.log(`RANK => ${reward(counter)}`)
        updateLeaderboard('Curt', counter, reward(counter));
        displayLeaderboard();
      }
    }
  
    console.log(`sorry you have used up ${maxAttempts} attempts`);
  
    function updateLeaderboard(playerName, attempts, rank) {
      let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      leaderboard.push({ name: playerName, attempts: attempts, playerRank: rank });
      leaderboard.sort((a, b) => a.attempts - b.attempts);
      localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
    }
  
    function displayLeaderboard() {
      const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
      console.log("Leaderboard:");
      leaderboard.forEach((entry, index) => {
        console.log(`${index + 1}. ${entry.name} - ${entry.attempts} attempts - Rank => ${entry.rank}`);
      });
    }
  
  //Bonus
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


}
  
  game()