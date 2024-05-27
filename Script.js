let humanScore = 0;
let computerScore = 0;
let round = 0;


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length)
    return choices[randomIndex];
}

// this will print a random number
//console.log("computer's choice", getComputerChoice());



function getHumanChoice(){
    const choices = ["rock", "paper", "scissors"];
    let choice = prompt("enter your rock, paper or scissors").toLowerCase();
    while (!choices.includes(choice)){
        choice = prompt("Please your choice is not in the selected choices. Please enter rock, paper or scissors: ").toLowerCase();
    }
    return choice;
}
//this will accept input from a user
//console.log("your choice is", getHumanChoice());




function playRound(humanChoice,computerChoice){
    round++;
    console.log(`ROUND ${round}:`);
    console.log(`Human chose :${humanChoice}`);
    console.log(`Computer chose :${computerChoice}`);
    if(humanChoice === computerChoice){
        console.log("it is a tie!");
    }
    else if ((humanChoice === "scessors" && computerChoice === "rock") ||
           (humanChoice === "scissors" && computerChoice === "paper" ) ||
           (humanChoice === "paper" && computerChoice ==="rock")){
            console.log ("Human wins this Round");
            humanScore ++;
    }
    else{
        console.log("Computer wins this Round");
        computerScore++;
    }

}


function playGame(){
    for (let i=0; i<5; i++){

        //assigning the user input to humanScore
        const humanChoice = getHumanChoice();
        //assigning the random number to computerScore
        const computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        console.log(`Score - Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!")
    if (humanScore > computerScore){
        console.log("Human wins the game!");
    }
    else if(humanScore < computerScore){
        console.log("Computer wins the game!")
    }
    else{
        console.log("The game is tie!");
    }
   getComputerChoice(); 
}

//start the game
playGame();