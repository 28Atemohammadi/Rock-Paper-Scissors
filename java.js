function getComputerChoice(){
  const randomNum = Math.random();
    if (randomNum < 1/3 ) return "rock";
    else if (randomNum < 2/3 ) return "paper";
    else 
        return "scissors";
}
console.log("computer choice:" , getComputerChoice());

function getHumanChoice(){
    const answer = prompt("Please enter the Rock, Paper, or Scissors?").toLowerCase();
    return answer;
}
console.log("human choice : " , getHumanChoice());



function playGame(){
    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice,computerChoice){

    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();

    if (human === computer ) {
        console.log("It's a tie!");
    }else if (
        (human === "rock" && computer === "scissors")||
        (human === "paper" && computer === "rock")||
        (human === "scissors" && computer === "paper")
    ){
    console.log(`You win! ${human} beats ${computer}`);
    humanScore++ ;
    }else{
         
        console.log(`You lose! ${computer} beats ${human}`);
        computerScore++;
    }
}
    for ( let i = 0; i < 5 ; i++){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(`Round ${i + 1}: Human: ${humanScore}, Computer: ${computerScore}`);
    }

    if (humanScore > computerScore ){
        console.log("You won the game!");
    }else if (humanScore < computerScore ) {
        console.log("Computer won the game!");
    }else{
        console.log("The game is a tie!");
    }
}
playGame();