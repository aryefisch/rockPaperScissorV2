
// the number representing the computer's choice will be stored in the  global variable :theComputerChose   

let theComputerChose;
let getComputerChoice = () => {
    // this function randomly chooses a number for the computer which will latter be made to represent either a rock, a paper or a scissor
    theComputerChose = Math.floor(Math.random() * 3) + 1;

    return theComputerChose;
};
getComputerChoice();
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
getPlayerChoice();

// the :playGame function takes two function calls as arguments called :getPlayerChoice and :getComputerChoice
//- and computes the game result based on the following rules:
// rock number value 3) Rock > scissor:
//scissor number value 2) scissor > paper:
//paper number value 1) paper > rock:
// which returns and updates the score counter variables called :player and :computer

//TODO OPTIONS:
//This might be complicated for me but i would like to be able to do as follows...
//On the 5ht and final round a tie between players isn't acceptable, 
//So the counters won't increase and :playGame must be replayed as many times as needed, a
// message should display stating a tie isn't acceptable
//until a winner is found

let playerWinCount = 0;
let computerWinCount = 0;
//TODO LIST
// the winner variable will display a message of some kind...Somewhere
let winner;// grab an element by id to display a message 
let gamesPlayed = 0; // each game played updates :gamesPlayed 

//TODO LIST
// make the game run 5 times in a row updating variables along the way
let game = () => {


    //the gray parameters below are not interfering with the code. Research says it might be a linting error
    function playGame(getPlayerChoice, getComputerChoice) {
        

    if (
        (thePlayerChose === 1 || theComputerChose === 1) &&
        (thePlayerChose === 3 || theComputerChose === 3)
    ) {
        if (thePlayerChose === 1) {
            playerWinCount++;
        } else if (theComputerChose === 1) {
            computerWinCount++;
        }
    } else if (thePlayerChose === theComputerChose) {
        playerWinCount++;
        computerWinCount++;
    } else if (thePlayerChose > theComputerChose) {
        playerWinCount++;
    } else if (thePlayerChose < theComputerChose) {
        computerWinCount++;
    }
    

}


for (let i = 0; i < 5; i++) {

    playGame();
    gamesPlayed++;
    // activated by a  button i have yet to build  

}
//TODO LIST
// :declareWinner only runs after the 5 rounds of the game
let declareWinner = () => {
    // lets rewrite this winner value to include a tie option for the alert 
    //first an alert will be displayed to user about the winner
    // then, a popup will be displayed on till the game is reset, using the global :winner variable
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
declareWinner();

// I built this display to test weather the logic works properly
console.log('Total games played = ' + gamesPlayed);
console.log(
    "player total wins = " +
    playerWinCount + '. ' + "Player choice = " + thePlayerChose
);
console.log(
    "computer total wins = " +
    computerWinCount + '. ' + "Computer choice = " + theComputerChose
);

}

game();