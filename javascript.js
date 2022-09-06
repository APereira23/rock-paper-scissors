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
  invalidInput = true;
  while (invalidInput = true) {
    const input = prompt("Choose your play!").toLowerCase();

    if (input === "rock" || input === "paper" || input === "scissors") {
      return input;
    } else {
      console.log("Please choose a valid option (rock/paper/scissors)");
    }
  }
  
}


function playRound() {

  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log (`You chose ${playerSelection}. Computer chose ${computerSelection}.`);

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

function game() {
  let w = 0; d = 0; l = 0;
  for (let i = 1; i < 6; i++) {
    console.log(`Win: ${w}. Draw: ${d}. Lose: ${l}`)
    
    playRound();
    
    if (result == "win") {
      w++;
    } else if (result == "draw") {
      d++;
    } else if (result == "lose") {
      l++;
    } else {
      console.log("error");
    }
  }

  console.log(`Final Score: Win: ${w}. Draw: ${d}. Lose: ${l}`);

  if (w > l) {
    console.log("YOU WON THE GAME! CONGRATULATIONS!");
  } else if (w < l) {
    console.log("YOU LOST THE GAME!");
  } else {
    console.log("IT'S A DRAW!");
  }

  confirm("end");
}

game();


