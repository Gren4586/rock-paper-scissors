const getUserChoice = (userInput = '') => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log('Error: Invalid Choice')
  }
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'Player 1 and Computer Player tied!';
  }

if (userChoice === 'bomb') {
  return 'Player 1 blew up Computer Player, and won!'
}

if (userChoice === 'rock') {
  if (computerChoice === 'paper') {
    return 'Computer Player wins!';
  } else {
    return 'Player 1 wins!';
  }
}

if (userChoice === 'paper') {
  if (computerChoice === 'scissors') {
    return 'Computer Player wins!';
  } else {
    return 'Player 1 wins!';
  }
}

if (userChoice === 'scissors') {
  if (computerChoice === 'rock') {
    return 'Computer Player wins!';
  } else {
    return 'Player 1 Wins!';
  }
}
}


const playGame = () => {
  const userChoice = getUserChoice('bomb');
  const computerChoice = getComputerChoice();
  console.log('Player 1 chooses ' + userChoice + ', Computer Player chooses ' + computerChoice + '!');
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();
