// List of Variables

const buttons = document.querySelectorAll('.playBtn');
const score = document.querySelector('.score');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const result = document.querySelector('.result');
const roundNum = document.querySelector('.roundNum');
const selections = document.querySelector('.selections');
const nextRound = document.querySelector('.nextRound');
const instructions = document.querySelectorAll('.instructions');
const endGame = document.querySelector('.endGame');
const endText = document.querySelector('.endText')
const restartBtn = document.querySelector('.restartBtn')

// ------------------------------------------------------

roundNum.textContent = 1;
playerScore.textContent = 0;
computerScore.textContent = 0;


//button-click Event Listener

buttons.forEach(playBtn => playBtn.addEventListener('click', playRound));


// -------  main function ---------

function playRound(e) {
  selections.style.display = "block";
  result.style.display = "block";
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  showSelections(playerSelection, computerSelection);
  getResult(playerSelection, computerSelection);
  nextRound.style.display = "block";
  instructions.forEach(instructions => instructions.style.display = "none");
  score.style.display = "none";
  buttons.forEach(playBtn => playBtn.style.display = "none");

}
// continue to next round
nextRound.addEventListener('click', (e) => {
  roundNum.textContent++;
  selections.style.display = "none";
  result.style.display = "none";
  nextRound.style.display = "none";
  instructions.forEach(instructions => instructions.style.display = "block");
  buttons.forEach(playBtn => playBtn.style.display = "flex");
  score.style.display = "block";

// ------  Winning Condition ------
  const p = playerScore.textContent;
  const c = computerScore.textContent;
  getWinner(p, c);

});



// --------------   auxiliary functions    -------------

function getWinner(p, c) {
  if (p == 5) {
    endText.textContent = "You won the game! Well done!";
    endGame.style.display = "block";
    return;
  } else if (c == 5) {
    endText.textContent = "Computer Wins! Better luck next time.";
    endGame.style.display = "block";
    return;
  } else {
    return;
  }
}

function refresh() {  //restart button reloads the page
  window.location.reload("refresh");
}

function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  
  switch(computerChoice) {
    case 1:
      return "rock";
    case 2:
      return "paper";
    case 3:
      return "scissors";
  }
} 

function showSelections(playerSelection, computerSelection) {
  selections.textContent = `You chose ${playerSelection}. Computer chose ${computerSelection}.`;
}

function getResult(playerSelection, computerSelection) {
  
  if (playerSelection == computerSelection) {
    return result.textContent = "Draw!";
  } else if (playerSelection == "rock") {
      switch (computerSelection) {
      case "paper":
        result.textContent = "You lost! Paper beats rock";
        return computerScore.textContent++;
      case "scissors":
        result.textContent = "You win! Rock beats scissors!";
        return playerScore.textContent++;
    } 
  } else if (playerSelection == "paper") {
      switch (computerSelection) {
      case "rock":
        result.textContent = "You win! Paper beats Rock!";
        return playerScore.textContent++;
      case "scissors":
        result.textContent = "You lost! Scissors beat Paper!";
        return computerScore.textContent++;
      }
  } else if (playerSelection == "scissors") {
      switch (computerSelection) {
      case "rock":
        result.textContent = "You lost! Rock beats Scissors!";
        return computerScore.textContent++;
      case "paper":
        result.textContent = "You win! Scissors beat Paper!";
        return playerScore.textContent++;
      }
  } else {
    return alert("error");
  }

}


