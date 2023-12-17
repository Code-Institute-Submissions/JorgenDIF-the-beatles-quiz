const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
let shuffleQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const gameContainer = document.getElementById("game-container");
let score = 0;
// The questions for the game
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

// Start game button. Opens the dropdown menu
function openDropdown() {
  document.getElementById("diffDropdown").classList.toggle("show");
}

// Start game with selected difficulty
function startGame(difficulty) {
  console.log(`Starting game with difficulty: ${difficulty}`);
  startButton.innerText = "Restart";
  gameContainer.classList.remove("hide");
  shuffleQuestions = questions
    .filter((question) => question.difficulty === difficulty)
    .sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  setNextQuestion();
  
  console.log("Shuffled Questions:", shuffleQuestions);

  // Hide the dropdown
  document.getElementById("diffDropdown").classList.remove("show");
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
  resetState();
  showQuestion(shuffleQuestions[currentQuestionIndex]);
  currentQuestionIndex++;
  if (shuffleQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    startButton.innerText = "Restart";
    startButton.classList.remove("hide");
  }

  // Show the question and answers
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach((answer) => {
      const button = document.createElement("button");
      button.innerText = answer.text;
      button.classList.add("btn");
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener("click", selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
}

// Reset the state of the game
function resetState() {
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

// Select the answer
function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  Array.from(answerButtonsElement.children).forEach(function (button) {
    setStatusClass(button, button.dataset.correct);
  });
}

// Set the status of the answer
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
    
   
   
  } else {
    element.classList.add("wrong");
}
}

// Clear the status of the answer
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

