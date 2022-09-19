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

function getPlayerChoice() {
  const buttons = document.querySelectorAll('.buttons');

  buttons.forEach(playBtn => playBtn.addEventListener('click', function(e) {
    if (e.target.className !== 'playBtn') return;
    if (e.target.id === 'rockBtn') playerSelection = "rock";
    if (e.target.id === 'paperBtn') playerSelection = "paper";
    if (e.target.id === 'scissorsBtn') playerSelection = "scissors";
  }));

}  

function compare(computerSelection, playerSelection) {

  if (playerSelection == "rock") {
    switch (computerSelection) {
    case "rock":
      console.log("Draw!");
      return result = "draw";
    case "paper":
      console.log("You lost! Paper beats rock");
      return result = "lose";
    case "scissors":
      console.log("You win! Rock beats scissors!");
      return result = "win";
    } 
  } else if (playerSelection == "paper") {
      switch (computerSelection) {
      case "rock":
        console.log("You win! Paper beats Rock!");
        return result = "win";
      case "paper":
        console.log("Draw!");
        return result = "draw";
      case "scissors":
        console.log("You lost! Scissors beat Paper!");
        return result = "lose";
      }
  } else if (playerSelection == "scissors") {
      switch (computerSelection) {
      case "rock":
        console.log("You lost! Rock beats Scissors!");
        return result = "lose";
      case "paper":
        console.log("You win! Scissors beat Paper!");
        return result = "win";
      case "scissors":
        console.log("Draw!");
        return result = "draw";
      }
  } else {
    console.log("error");
    return "error";
  }

}

function playRound() {
  getComputerChoice();
  getPlayerChoice();

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log (`You chose ${playerSelection}. Computer chose ${computerSelection}.`);
  compare();
}


window.addEventListener('click', playRound);



/*
function playGame() {
  let w = 0; d = 0; l = 0;
  let round = 1;
  for (let i = 1; i < 6; i++) {
    console.log(`Win: ${w}. Draw: ${d}. Lose: ${l}`)
    console.log(`Starting Round ${round}/5`)
    
    playRound();
    round++;
    
    if (result == "win") {
      w++;
    } else if (result == "draw") {
      d++;
    } else if (result == "lose") {
      l++;
    } else {
      console.log("error");
    }
  
  confirm("Round over. Press [enter] to continue.");
  console.clear();
  }

  console.log(`Final Score: Win: ${w}. Draw: ${d}. Lose: ${l}`);

  if (w > l) {
    confirm("You won the game! Congratulations!");
  } else if (w < l) {
    confirm("Computer wins!");
  } else {
    confirm("It's a draw!");
  }

}

playGame();
*/



