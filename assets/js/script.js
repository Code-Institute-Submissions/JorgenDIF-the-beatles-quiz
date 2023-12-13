const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

function startGame() {
  // Use prompt to get the user's choice of difficulty
  const difficulty = prompt(
    'Choose your difficulty:\n1. Easy\n2. Medium\n3. Hard'
  )

  // Validate the input and start the game based on difficulty
  if (difficulty === '1' || difficulty === '2' || difficulty === '3') {
    alert(`You chose difficulty ${difficulty}. Let the game begin!`)
    // Call a function to start the game based on the chosen difficulty
    startGameBasedOnDifficulty(difficulty)
  } else {
    alert('Invalid choice. Please choose a valid difficulty.')
  }

  // Hide the start button after starting the game
  startButton.classList.add('hide')
}

// Function to start the game based on difficulty
function startGameBasedOnDifficulty(difficulty) {
  // You can add your logic here to set up the game based on difficulty
  // For now, let's just log the difficulty to the console
  console.log(`Game started with difficulty: ${difficulty}`)
}