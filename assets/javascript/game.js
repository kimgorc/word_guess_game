

    // sets initial global variables
    var letterChoices = ["f", "r", "e", "n", "c", "h", "y"];
    var userScore = 0;
    var guessesLeft= 12;
    var lettersGuessed= userGuess;
    

    // Gets the value from the html for the scores
    var userScoreView = document.getElementById("user-score");

    // This function is run whenever the user presses a key.
    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);


      if(userGuess == 'f'||userGuess =='r'||userGuess=="e"||userGuess == 'n'||userGuess =='c'||userGuess=="h"||userGuess=="h") {
        evaluator (userScore);
      }
      else {
        alert("You didn't choose correctly. Try again");
      }
    }

    // This function evaluates who wins
    function evaluator(player1, player2) {
        if(player1==player2) {
          alert("You tied!");
        }
        else if(player1=="p"&&player2=="r") {
          win(player1, player2);
        }
        else if(player1=="r"&&player2=="s") {
          win(player1, player2);
        }
        else if(player1=="s"&&player2=="p") {
          win(player1, player2);
        }
        else {
          lose(player1, player2);
      }
    }

    // This function is called to add a point to the user score
    function win(attempt1, attempt2) {
      userScore = userScore + 1;
      console.log(userScore);
      guessesLeft= guessesLeft - 1;
      alert("You win! User: " + attempt1 + " beats Computer: " + attempt2);
      userScoreView.textContent = userScore;
    }

    // This function is called to provide the lose message and change the number of guesses left
    function lose(attempt1) {
      guessesLeft  = guessesLeft - 1;
      console.log(guessesLeft );
    }

    // This function resets the score to zero
    function resetScore() {
      userScore = 0;
      userScoreView.textContent = userScore;
      guessesLeft = 0;
      guessesLeft.textContent = guessesLeft;
    }
  