function getComputerChoice() {
  const computerChoice = Math.floor(Math.random() * 3 + 1);
  
  switch(computerChoice) {
    case 1:
      return "Rock";
    case 2:
      return "Paper";
    case 3:
      return "Scissors";
  }
} 


function playerSelection() {
  invalidInput = true;
  while (invalidInput = true) {
    const input = prompt("Choose your play!").toLowerCase();

    if (input === "rock" || input === "paper" || input === "scissors") {
      console.log(`you chose ${input}`);
      break;
    } else {
      console.log("Please choose a valid option");
    }
  }
  
}


console.log(playerSelection());

console.log(`Computer chose ${getComputerChoice()}`);