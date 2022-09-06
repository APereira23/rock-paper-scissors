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


function playerSelection() {
  invalidInput = true;
  while (invalidInput = true) {
    const input = prompt("Choose your play!").toLowerCase();

    if (input === "rock" || input === "paper" || input === "scissors") {
      console.log(`You chose ${input}`);
      break;
    } else {
      console.log("Please choose a valid option: rock/paper/scissors");
    }
  }
  
}


console.log(playerSelection());

console.log(`Computer chose ${getComputerChoice()}`);