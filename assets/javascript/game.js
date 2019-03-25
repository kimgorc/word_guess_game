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

    // This function evaluates the letters chosen
    function evaluator(userGuess, letterChoices) {
        if(userGuess==letterChoices[0]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[1]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[2]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[3]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[4]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[5]) {
          alert("nice job!");
        }
        else if(userGuess==letterChoices[6]) {
          alert("nice job!");
        }
        else {
          alert("nope! Try again!");
      }
    }

    // This function is called to add a point to the user score
    function score(userGuess, letterChoices) {
      userScore = userScore + 1;
      console.log(userScore);
      guessesLeft= guessesLeft - 1;
      alert("Nice Job!" + userGuess + "is one of the letters");
      userScoreView.textContent = userScore;
    }

    // This function is called to provide the lose message and change the number of guesses left
    function lose(userGuess) {
      guessesLeft  = guessesLeft - 1;
      console.log(guessesLeft );
      alert ("try again" + userGuess + "isn't one of the letters")
    }

    // This function resets the score to zero
    function resetScore() {
      userScore = 0;
      userScoreView.textContent = userScore;
      guessesLeft = 0;
      guessesLeft.textContent = guessesLeft;
    }
  