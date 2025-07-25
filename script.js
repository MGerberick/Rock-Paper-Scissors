
function getComputerChoice () {
    if (Math.floor(Math.random() * 3) + 1 === 3) {return "rock"}
    else if (Math.floor(Math.random() * 3) + 1 === 2) {return "paper"}
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

    function getCurrentScores() {
        return "The current score is; Human: " + humanScore + ", Computer: " + computerScore + ", Ties: " + tieScore + "."
    }

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
            case (humanChoice == "paper" && computerChoice == "rock"):
            case (humanChoice == "scissors" && computerChoice == "paper"):
                humanScore++
                console.log("You win, " + humanChoice + " beats " + computerChoice + "!")
                break;
            case (humanChoice == "rock" && computerChoice == "paper"):
            case (humanChoice == "paper" && computerChoice == "scissors"):
            case (humanChoice == "scissors" && computerChoice == "rock"):
                computerScore++
                console.log("You lose, " + computerChoice + " beats " + humanChoice + "!")
                break;
            default:
                tieScore++
                console.log("A tie. Human choice: " + humanChoice + ". Computer choice: " + computerChoice + ". How disappointing.")
            }
        }
    
        for (let i = 1; i < 6; i++) {
            playRound()
            console.log(getCurrentScores())
        }
        
        if (humanScore > computerScore) {return "Congratulations, you win the game! " + getCurrentScores().replace("current","")}
        else if (computerScore > humanScore) {return "Sorry, you lose the game! " + getCurrentScores().replace("current","")}
        else {return "A tie game, how disappointing. " + getCurrentScores().replace("current","")}
    }

const playGameBtn = document.getElementById("playGameID");

playGameBtn.addEventListener ("click", function() {
    const outcome = playGame();

    console.log(outcome);
    const result = document.getElementById("gameResult");
    result.textContent = "Game Result: " + outcome;
});



