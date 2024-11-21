function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber){
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
    return randomNumber;
}

function getHumanChoice(){
    let humanChoice = prompt('Enter your choice: rock, paper or scissors');
    if(humanChoice.toLowerCase() === 'rock' || humanChoice.toLowerCase() === 'paper' || humanChoice.toLowerCase() === 'scissors'){
        return humanChoice;
    }else{
        alert('You entered an invalid choice');
        getHumanChoice();
    }
    
    
}
let humanScore = 0, computerScore = 0;
function playground(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return 'It is a tie';
    }else if(humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        return 'You win';
    }else{
        computerScore++;
        return 'Computer wins';
    }

}
const humanSelection= getHumanchoice()
const computerSelection = getComputerChoice()

playgorund(humanSelection,computerSelecction)

