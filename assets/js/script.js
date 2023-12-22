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
let time;


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

//  Opens the dropdown menu
function openDropdown() {
  document.getElementById("diffDropdown").classList.toggle("show");
}
/**
 * 
 * @param {string} difficulty 
 */
function startGame(difficulty) {
  resetGame(); // Reset the game, including the score
  console.log(`Starting game with difficulty: ${difficulty}`);
  startButton.innerText = "Restart";
  nextButton.disabled = true;
  gameContainer.classList.remove("hide");
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

//  Function to reset the game
function resetGame() {
  score = 0;
  scoreElement.innerText = score;
  incorrect = 0;
  incorrectElement.innerText = incorrect;
  answeredQuestions = [];
}

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

// set next question
function setNextQuestion() {
  if(timer) {
    clearInterval(timer);
  }
  startTimer();
  resetState();
  nextButton.disabled = true;
  document.getElementById("question-number").innerText = currentQuestionNumber;
  showQuestion(shuffleQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
  if (shuffleQuestions.length > currentQuestionIndex) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }
}

// Show the question and answers
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

// Select the answer
function selectAnswer(answer) {
  console.log("Clicked answer:", answer);
  nextButton.disabled = false;

  if (answeredQuestions.includes(currentQuestionIndex)) {
    // User already answered this question
    console.log("User already answered this question");
    return;
  }

  const correct = answer.correct;
  answeredQuestions.push(currentQuestionIndex);

  Array.from(answerButtonsElement.children).forEach(function (button) {
    setStatusClass(button, button.dataset.correct);
  });

  if (correct) {
    incrementScore();
    console.log("Correct answer!");
  } else {
    incrementWrongAnswer();
    console.log("Wrong answer!");
  }

  // Check if all questions have been answered
  if (answeredQuestions.length === shuffleQuestions.length) {
    localStorage.setItem("mostRecentScore", score);
    //go to the end page
    return window.location.assign("end.html");
  }
  console.log("assign to end page");
}

// Set the status of the answer
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    stopTimer();
   
  } else {
    element.classList.add("wrong");
  }

  console.log("Correct answer:", question.correct);
  
}

// Clear the status of the answer
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// Scoreboard
let scoreElement = document.getElementById("score");
let incorrectElement = document.getElementById("incorrect");

function incrementScore() {
  score++;
  scoreElement.innerText = score;

  console.log("Score:", score);
}

function incrementWrongAnswer() {
  incorrect++;
  incorrectElement.innerText = incorrect;

  console.log("Incorrect:", incorrect);
}

// Start Timer
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

// Handle Time Up
function handleTimeUp() {
  alert("Time is up!");
  incrementWrongAnswer();
  showCorrectAnswer(); // Assuming you want to reveal the correct answer
  nextButton.disabled = false;
}

// Show Correct and Wrong Answer
function showCorrectAnswer() {
  const answers = shuffleQuestions[currentQuestionIndex].answers;

  answers.forEach((answer, index) => {
    const answerButton = answerButtonsElement.children[index];
    setStatusClass(answerButton, answer.correct);
  });
}

// Stop Timer
function stopTimer() {
  clearInterval(timer);
}


