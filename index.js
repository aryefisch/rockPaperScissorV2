
// the number representing the computer's choice will be stored in the  global variable :theComputerChose   

let theComputerChose;
let getComputerChoice = () => {
    // this function randomly chooses a number for the computer which will latter be made to represent either a rock, a paper or a scissor
    theComputerChose = Math.floor(Math.random() * 3) + 1;

    return theComputerChose;
};
// the function  :getPlayerChoice stores the following information and commands
// the variable :choice prompts the player to type a rock, a paper or a scissor
// the typed string will be converted to a lowercase string and stored in the variable  :selection
/// the player's choice will be converted to a number using an if else expression
// the player's choice will be case insensitive
// a wrong choice will prompt the player to choose again and the :getPlayerChoice variable will run again
// the number representing the player's choice will be stored in the  global variable :thePlayerChose 

let thePlayerChose;
const getPlayerChoice = () => {
    let choice = prompt(
        "Please make your selection by typing: rock, scissor or paper into the box below"
    );
    let selection = choice.toLowerCase();
    if (selection === "rock") {
        return thePlayerChose = 3;

    } else if (selection === "scissor") {
        return thePlayerChose = 2;

    } else if (selection === "paper") {
        return thePlayerChose = 1;

    } else {
        alert("Please try entering a selection again");
        getPlayerChoice();
    }
};

// the :playGame function takes two function calls as arguments called :getPlayerChoice and :getComputerChoice
//- and computes the game result based on the following rules:
// rock number value 3) Rock > scissor:
//scissor number value 2) scissor > paper:
//paper number value 1) paper > rock:
// which returns and updates the score counter variables called :player and :computer

let playerWinCount = 0;
let computerWinCount = 0;
let gamesPlayed = 0; 

let game = () => {
    
    for (let i = 0; i < 5; i++) {
        getPlayerChoice();
        getComputerChoice();
        gamesPlayed++;
        // activated by a  button i have yet to build  
        if (
            (thePlayerChose === 1 || theComputerChose === 1) &&
            (thePlayerChose === 3 || theComputerChose === 3)
        ) {
            if (thePlayerChose === 1) {
                playerWinCount++, alert('You have won this round');
            } else if (theComputerChose === 1) {
                computerWinCount++, alert('You lost this round');
            }
        } else if (thePlayerChose === theComputerChose) {
            playerWinCount++,computerWinCount++;
            alert('This round is a tie');
        } else if (thePlayerChose > theComputerChose) {
            playerWinCount++, alert('You have won this round');
        } else if (thePlayerChose < theComputerChose) {
            computerWinCount++, alert('You lost this round');
        }
    }

// the winner variable will display a message of some kind...Somewhere
    let _winner;// grab an element by id to display a message 

    //TODO LIST
    let declareGameWinner = () => {
        if (playerWinCount > computerWinCount) {
            alert('Game over! You won this game');
            //winner = 
        } else if (playerWinCount < computerWinCount) {
            alert('Game over! You lost the game');
            //winner =
        } else {
            alert('Game over! The game is a tie!');
            //winner =
        }

    }
    declareGameWinner();

    // I built this display to test weather the logic works properly
    console.log('Total games played = ' + gamesPlayed);
    console.log(
        "player total wins = " +
        playerWinCount + '. ' + "Player\'s last choice = " + thePlayerChose
    );
    console.log(
        "computer total wins = " +
        computerWinCount + '. ' + "Computer\'s last choice = " + theComputerChose
    );

}

game();