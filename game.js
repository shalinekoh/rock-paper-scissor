

function getComputerChoice() {
    choice = Math.round(Math.random()*100)
    if (choice <= 33) {
        return "Rock"
    }
    else if (choice > 33 && choice <= 66) {
        return "Paper"
    } else {
        return "Scissor"
    }
}

function getHumanChoice() {
    choice = prompt("Rock, Paper, or Scissor? Enter your choice: ")
    return choice.charAt(0).toUpperCase() + choice.slice(1)
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == "Rock" && computerChoice == "Scissor"){
            console.log("You win! Rock beats Scissor.")
            humanScore += 1
        }
        else if (humanChoice == "Rock" && computerChoice == "Paper"){
            console.log("You lose! Paper beats Rock.")
            computerScore += 1
        }
        else if (humanChoice == "Paper" && computerChoice == "Scissor"){
            console.log("You lose! Scissor beats Paper.")
            computerScore += 1
        }
        else if (humanChoice == "Paper" && computerChoice == "Rock"){
            console.log("You win! Paper beats Rock.")
            humanScore += 1
        }
        else if (humanChoice == "Scissor" && computerChoice == "Paper"){
            console.log("You win! Scissor beats Paper.")
            humanScore += 1
        }
        else if (humanChoice == "Scissor" && computerChoice == "Rock"){
            console.log("You lose! Rock beats scissor.")
            computerScore += 1
        }
        else {
            console.log("You tied!")
            computerScore += 1
            humanScore += 1
        }
    }
    while (humanScore < 5 && computerScore < 5){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    }
    (humanScore > computerScore) ? console.log("You win!") : console.log("You lose!")
    console.log(`The score is You: ${humanScore}   Computer: ${computerScore}`)
}


playGame()
