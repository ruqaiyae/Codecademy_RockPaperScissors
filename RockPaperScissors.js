const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" || 
    userInput === "paper" || 
    userInput === "scissors" ||
    userInput === "bomb") {
  return userInput;
  } else {
    console.log("Error, try again!");
  }
};

const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);

switch (randomNumber) {
    case 0: return 'rock';
    break;

    case 1: return 'paper';
    break;

    case 2: return 'scissors';
    break;
    }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
  return 'It\'s a tie!';
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'paper') {
      return 'Sorry, computer won.';
    } else {
      return 'Congratulations, you won!';
    }
  }

  if (userChoice === 'paper') {
    if (computerChoice === 'rock') {
      return  'Congratulations, you won!';
    } else {
      return 'Sorry, computer won.';
    }
   }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'Congratulations, you won!';
    } else {
      return 'Sorry, computer won.';
    }
   }

   if (userChoice === 'bomb') {
    return 'Congratulations, you won!'
   }
  }

function playGame() {
  const userChoice = getUserChoice('paper');
    console.log(userChoice);
  const computerChoice = getComputerChoice();
    console.log(computerChoice);
    
  console.log(determineWinner(userChoice, computerChoice))
}

playGame();
