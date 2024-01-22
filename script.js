let currentScore = 0;

function rollDice() {
  const diceValue = Math.floor(Math.random() * 6) + 1; // Random number between 1 and 6
  const diceElement = document.getElementById('dice');
  const scoreElement = document.getElementById('score');

  // Display the rolled dice value
  diceElement.textContent = `🎲 ${diceValue}`;

  // Check if the player rolled a 1
  if (diceValue === 1) {
    currentScore = 0;
    alert('You rolled a 1. You lose! Try again.');
  } else {
    // Add the dice value to the current score
    currentScore += diceValue;

    // Display the updated score                            
    scoreElement.textContent = `Score: ${currentScore}`;

    // Check if the player won
    if (currentScore >= 30) {
      alert('Congratulations! You won! Play again.');
      resetGame();
    }
  }
}

function resetGame() {
  currentScore = 0;
  document.getElementById('dice').textContent = '';
  document.getElementById('score').textContent = 'Score: 0';
}
