function getComputerChoice () {
    if ((Math.random()) < (1/3)) {return "rock"}
    else if ((Math.random()) < (2/3)) {return "paper"}
    else {return "scissors"}
}

function getHumanChoice () {
    let choice = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'")
    return choice.toLowerCase()
}

function playGame () {
    let computerScore = 0
    let humanScore = 0
    let tieScore = 0

    function playRound () {
        let computerChoice = getComputerChoice()

        console.log("Computer choice: " + computerChoice)

        let humanChoice = getHumanChoice()

        console.log("Human Choice: " + humanChoice)

        switch(true) {
            case (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissors" ):
                computerScore++
                console.log("You lose. Your choice '" + humanChoice + "' is an invalid option! Choices carry consequences.")
                break;
            case (humanChoice == "rock" && computerChoice == "scissors"):
                humanScore++
                console.log("You win, " + humanChoice + " beats " + computerChoice + "!")
                break;
            case (humanChoice == "rock" && computerChoice == "paper"):
                computerScore++
                console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
                break;
            case (humanChoice == "paper" && computerChoice == "rock"):
                humanScore++
                console.log("You win, " + humanChoice + " beats " + computerChoice + "!")
                break;
            case (humanChoice == "paper" && computerChoice == "scissors"):
                computerScore++
                console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
                break;
            case (humanChoice == "scissors" && computerChoice == "rock"):
                computerScore++
                console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
                break;
            case (humanChoice == "scissors" && computerChoice == "paper"):
                humanScore++
                console.log("You win, " + humanChoice + " beats " + computerChoice + "!")
                break;
            default:
                tieScore++
                console.log("A tie. Human choice: " + humanChoice + ". Computer choice: " + computerChoice + ". How disappointing.")
                break;
            }
        }
    
        for (let i = 1; i < 6; i++) {
            playRound()
            console.log("The current score is human " + humanScore + ", computer score " + computerScore + ", ties " + tieScore)
        }
        
        if (humanScore > computerScore) {return "Congratulations, you win!"}
        else if (computerScore > humanScore) {return "Sorry, you lose!"}
        else {return "A draw. How disappointing."}
    }

console.log(playGame())
