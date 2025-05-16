let secretNumber;
let attemptsLeft;

function initGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  document.getElementById("message").textContent = "";
  document.getElementById("attempts").textContent = "Attempts left: " + attemptsLeft;
  document.getElementById("guessInput").value = "";
}

function checkGuess() {
  const guess = parseInt(document.getElementById("guessInput").value);
  
  if (isNaN(guess) || guess < 1 || guess > 100) {
    document.getElementById("message").textContent = "Please enter a valid number between 1 and 100.";
    return;
  }

  attemptsLeft--;
  document.getElementById("attempts").textContent = "Attempts left: " + attemptsLeft;

  if (guess === secretNumber) {
    document.getElementById("message").textContent = "🎉 Congratulations! You guessed it right!";
  } else if (guess < secretNumber) {
    document.getElementById("message").textContent = "Too low! Try again.";
  } else {
    document.getElementById("message").textContent = "Too high! Try again.";
  }

  if (attemptsLeft <= 0 && guess !== secretNumber) {
    document.getElementById("message").textContent = "😞 Game Over! The number was " + secretNumber;
  }
}

function resetGame() {
  initGame();
}

initGame();
