////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
//'use strict';

function getInput() {
    message("<p>Please choose either 'rock', 'paper', or 'scissors'.</p>");
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

$( "#play" ).click(function( event ) {
    //event.preventDefault();
    //$( this ).hide( "slow" );
    playToFive(); 

});

function message(text) {
    $( '#table' ).html(text);
}

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    var move = getInput();

    if (move === null ) {
        getInput();
    } else {
        return move;
    }
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    var move = randomPlay();;   
    if (move === null ) {
        randomPlay();
        return move;
    } else {
        return move;
    }
}

function getWinner( playerMove, computerMove ) {
    var winner;

    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if ( playerMove === 'rock' && computerMove === 'scissors') {
        winner = 'player';
        message('You won that round!');
    } else if ( playerMove === 'scissors' && computerMove === 'paper' ) {
        winner = 'player';
        message('You won that round!');
    } else if ( playerMove === 'paper' && computerMove === 'rock' ) {
        winner = 'player';
        message('You won that round!');
    } else if ( playerMove === 'rock' && computerMove === 'rock') {
        winner = 'tie';
        message('That round was a tie.');
    } else if ( playerMove === 'scissors' && computerMove === 'scissors' ) {
        winner = 'tie';
        message('That round was a tie.');
    } else if ( playerMove === 'paper' && computerMove === 'paper' ) {
        winner = 'tie';
        message('That round was a tie.');
    } else if ( playerMove === 'rock' && computerMove === 'paper' ) {
        winner = 'computer';
        message('You lost that round.');
    } else if ( playerMove === 'scissors' && computerMove === 'rock' ) {
        winner = 'computer';
        message('You lost that round.');
    } else if ( playerMove === 'paper' && computerMove === 'scissors'  ) { 
        winner = 'computer';
        message('You lost that round.');
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    while ( true ) {
        if ( playerWins === 5 ) {
            message("You've Won!!!");
            break;
        } else if ( computerWins === 5 ) {
            message("You've lost");
            break;
        } else {
            var playerMove = getPlayerMove();
            var computerMove = getComputerMove();
            if (playerMove === 'q' ) {
                break;
            }
            message('You played ' + playerMove + ' and the computer played ' + computerMove);
            var winner = getWinner( playerMove, computerMove);
            if ( winner === 'player' ) {
                playerWins += 1;
            } else {
                computerWins += 1;
            }
            message('The score is: ' + playerWins + ' Player Wins to ' + computerWins + ' Computer Wins')
        }
    }
        
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    return [playerWins, computerWins];
}
