/**
 * Quiz Game
 *
 * This script manages the functionality of a quiz game, covering aspects such as question handling,
 * scoring, and user interactions.
 *
 * The initial concept and structure of the game are based on the tutorial by Dev Ed:
 * https://www.youtube.com/watch?v=riDzcEQbX6k
 *
 * Additional sources were consulted for specific functionalities:
 * - Timer functionality inspired by:
 *   https://balennouri.github.io/balennouri-project2/index.html
 *   and https://www.youtube.com/watch?v=pQr4O1OITJo&t=1687s
 *
 * - Shuffling answers adapted from:
 *   https://www.youtube.com/watch?v=shVEIHKhlZE
 *   and https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 *
 * - Points allocation for difficulty levels inspired by:
 *   https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/blob/master/04-multiplication-and-subtraction-questions/01-the-multiplication-game/assets/js/script.js
 *   https://github.com/mateuszniechwiej/MS-2-Quiz-game/blob/master/assets/js/game.js
 *
 * - Dropdown menu implementation referred to:
 *   https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_dropdown_navbar_click
 */

// The varibles
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let shuffleQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const gameContainer = document.getElementById("game-container");
let currentQuestionNumber = 1;
let score = 0;
let incorrect = 0;
let answeredQuestions = [];
let sec = 10;
let timer;
let currentQuestion;

// The questions
const questions = [
  {
    difficulty: "Easy",
    question: "Love, Love me ___?",
    answers: [
      { text: "do", correct: true },
      { text: "to", correct: false },
      { text: "more", correct: false },
      { text: "true", correct: false },
    ],
  },
  {
    difficulty: "Easy",
    question: "You say goodbye, and I say ___?",
    answers: [
      { text: "goodbye", correct: false },
      { text: "hello", correct: true },
      { text: "goodnight", correct: false },
      { text: "goodmorning", correct: false },
    ],
  },
  {
    difficulty: "Easy",
    question: "I get by with a little help from my ___?",
    answers: [
      { text: "friends", correct: true },
      { text: "family", correct: false },
      { text: "pets", correct: false },
      { text: "neighbors", correct: false },
    ],
  },
  {
    difficulty: "Easy",
    question: "I wanna hold your ___?",
    answers: [
      { text: "hand", correct: true },
      { text: "heart", correct: false },
      { text: "head", correct: false },
      { text: "hair", correct: false },
    ],
  },
  {
    difficulty: "Easy",
    question: "All you need is ___?",
    answers: [
      { text: "love", correct: true },
      { text: "money", correct: false },
      { text: "quiz", correct: false },
      { text: "friends", correct: false },
    ],
  },
  {
    difficulty: "Medium",
    question: 'Which album is the song "Can\'t Buy Me Love" on?',
    answers: [
      { text: "A Hard Day's Night", correct: true },
      { text: "Help!", correct: false },
      { text: "Beatles For Sale", correct: false },
      { text: "With The Beatles", correct: false },
    ],
  },
  {
    difficulty: "Medium",
    question: 'Which album is the song "I Want To Hold Your Hand" on?',
    answers: [
      { text: "Meet The Beatles", correct: true },
      { text: "Please Please Me", correct: false },
      { text: "With The Beatles", correct: false },
      { text: "A Hard Day's Night", correct: false },
    ],
  },
  {
    difficulty: "Medium",
    question: 'Which album is the song "I am the Walrus" on?',
    answers: [
      { text: "Magical Mystery Tour", correct: true },
      { text: "Yellow Submarine", correct: false },
      { text: "Abbey Road", correct: false },
      { text: "Let It Be", correct: false },
    ],
  },
  {
    difficulty: "Medium",
    question: 'Which album is the song "Let It Be" on?',
    answers: [
      { text: "Let It Be", correct: true },
      { text: "Abbey Road", correct: false },
      { text: "Magical Mystery Tour", correct: false },
      { text: "Yellow Submarine", correct: false },
    ],
  },
  {
    difficulty: "Medium",
    question: 'Which album is the song "I Feel Fine" on?',
    answers: [
      { text: "Beatles For Sale", correct: true },
      { text: "Help!", correct: false },
      { text: "A Hard Day's Night", correct: false },
      { text: "With The Beatles", correct: false },
    ],
  },
  {
    difficulty: "Hard",
    question: "Who was the Beatles original drummer?",
    answers: [
      { text: "Ringo Starr", correct: false },
      { text: "Pete Best", correct: true },
      { text: "Keith Moon", correct: false },
      { text: "Charlie Watts", correct: false },
    ],
  },
  {
    difficulty: "Hard",
    question: "Who was the oldest Beatle?",
    answers: [
      { text: "John Lennon", correct: false },
      { text: "Paul McCartney", correct: false },
      { text: "George Harrison", correct: false },
      { text: "Ringo Starr", correct: true },
    ],
  },
  {
    difficulty: "Hard",
    question: "Which Beatle was the first to get married?",
    answers: [
      { text: "John Lennon", correct: true },
      { text: "Paul McCartney", correct: false },
      { text: "George Harrison", correct: false },
      { text: "Ringo Starr", correct: false },
    ],
  },
  {
    difficulty: "Hard",
    question: "How many number one albums did the Beatles have in the UK?",
    answers: [
      { text: "15", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "25", correct: false },
    ],
  },
  {
    difficulty: "Hard",
    question: "What is Ringo Starr's real name?",
    answers: [
      { text: "Richard Starkey", correct: true },
      { text: "Richard Starr", correct: false },
      { text: "Ringo Starr", correct: false },
      { text: "Richard Starkey Jr.", correct: false },
    ],
  },
];

//  Open the dropdown menu
function openDropdown() {
  document.getElementById("diffDropdown").classList.toggle("show");
}

/**
 * Starts a new round of the quiz game with the specified difficulty.
 * Resets the game state, hides the rules container, shuffles and selects
 * questions based on the chosen difficulty, and initiates the timer.
 */
function startGame(difficulty) {
  resetGame();
  startButton.innerText = "Restart";
  nextButton.disabled = true;
  gameContainer.classList.remove("hide");
  document.getElementById("rules-container").style.display = "none";
  shuffleQuestions = questions
    .filter((question) => question.difficulty === difficulty)
    .sort(() => Math.random() - 0.5);
  shuffleQuestions = shuffleQuestions.slice(0, 5);
  currentQuestionIndex = 0;
  currentQuestionNumber = 1;
  setNextQuestion();
  startTimer();
  // Hide the dropdown
  document.getElementById("diffDropdown").classList.remove("show");
}
/**
 * Resets the game state by setting the score and incorrect counts to zero,
 * clearing the answered questions array, and updating the corresponding UI elements.
 */
function resetGame() {
  score = 0;
  scoreElement.innerText = score;
  incorrect = 0;
  incorrectElement.innerText = incorrect;
  answeredQuestions = [];
}

/**
 * Listens for a click event outside the start button and difficulty dropdown.
 * Closes the difficulty dropdown if the click is outside these elements.
 */
document.addEventListener("click", function (e) {
  const diffDropdown = document.getElementById("diffDropdown");
  const startBtn = document.getElementById("start-btn");

  // Check if the clicked element is not the start button or the dropdown
  if (!startBtn.contains(e.target) && !diffDropdown.contains(e.target)) {
    diffDropdown.classList.remove("show");
  }
});

// Hide or show the rules
function hideRules() {
  let rules = document.getElementById("rules-container");
  if (rules.style.display === "none") {
    rules.style.display = "block";
  } else {
    rules.style.display = "none";
  }
}

/**
 * Sets up and displays the next question in the quiz.
 * Clears the timer if active, resets the game state, and disables the next button.
 * Updates the current question, shuffles answers, and increments the question number.
 * Controls UI elements based on the availability of more questions.
 */
function setNextQuestion() {
  if (timer) {
    clearInterval(timer);
  }
  startTimer();
  resetState();
  nextButton.disabled = true;
  currentQuestion = shuffleQuestions[currentQuestionIndex]; // Update global currentQuestion variable
  document.getElementById("question-number").innerText = currentQuestionNumber;
  let shuffledAnswers = shuffleArray(currentQuestion.answers);
  currentQuestion.answers = shuffledAnswers;
  showQuestion(currentQuestion);
  currentQuestionIndex++;
  if (shuffleQuestions.length > currentQuestionIndex) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

// Shuffle the answers with fisher-yates algorithm
function shuffleArray(array) {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}

/**
 * Displays the current question and its answers in the quiz.
 * Increments the question number, creates buttons for each answer, and sets up event listeners.
 * Appends the buttons to the answer buttons element.
*/
function showQuestion(question) {
  questionElement.innerText = question.question;
  currentQuestionNumber++;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", () => selectAnswer(answer));
    answerButtonsElement.appendChild(button);
  });
}

// Reset the state of the game
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

/**
 * Handles the selection of an answer.
 * Enables the next button, checks if the question has already been answered,
 * updates the UI with the correctness status of the selected answer,
 * increments the score or wrong answer count accordingly.
 * Checks if all questions have been answered to redirect to the end page.
  */
function selectAnswer(answer) {
  nextButton.disabled = false;

  if (answeredQuestions.includes(currentQuestionIndex)) {
    // User already answered this question
    return;
  }
  const correct = answer.correct;
  answeredQuestions.push(currentQuestionIndex);
  Array.from(answerButtonsElement.children).forEach(function (button) {
    setStatusClass(button, button.dataset.correct);
  });
  if (correct) {
    incrementScore();
  } else {
    incrementWrongAnswer();
  }
// Check if all questions have been answered
  if (answeredQuestions.length === shuffleQuestions.length) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
}

// Set the visual status of the buttons based on the correctness of the answer
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    stopTimer();
  } else {
    element.classList.add("wrong");
  }
}

// Clear the status of the answer
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Update the score on the scoreboard based on the difficulty of the current question
let scoreElement = document.getElementById("score");
let incorrectElement = document.getElementById("incorrect");
function incrementScore() {
  if (currentQuestion.difficulty === "Easy") {
    score++;
  } else if (currentQuestion.difficulty === "Medium") {
    score += 2;
  } else if (currentQuestion.difficulty === "Hard") {
    score += 3;
  }
  scoreElement.innerText = score;
}

// Increment the count of incorrect answers and update the scoreboard
function incrementWrongAnswer() {
  incorrect++;
  incorrectElement.innerText = incorrect;
}

// Start the countdown timer for each question
function startTimer() {
  clearInterval(timer);
  sec = 10;
  timer = setInterval(() => {
    document.getElementById("timer").innerHTML = sec;
    sec--;
    if (sec < 0) {
      clearInterval(timer);
      handleTimeUp();
    }
  }, 1000);
}

// Handle Time Up event, triggered when the timer reaches zero
function handleTimeUp() {
  alert("Time is up!");
  showCorrectAnswer(); // Show the correct answer
  nextButton.disabled = false;
  answeredQuestions.push(currentQuestionIndex);
  incrementWrongAnswer();
}

// Show Correct and Wrong Answer for current question
function showCorrectAnswer() {
  const answers = shuffleQuestions[currentQuestionIndex].answers;
  answers.forEach((answer, index) => {
    const answerButton = answerButtonsElement.children[index];
    setStatusClass(answerButton, answer.correct);
  });
}

// Stop Timer function
function stopTimer() {
  clearInterval(timer);
}
