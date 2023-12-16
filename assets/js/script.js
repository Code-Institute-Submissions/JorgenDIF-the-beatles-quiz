const questionContainerElement = document.getElementById("question-container");
let shuffleQuestions, currentQuestionIndex;
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-container");


// Start game button. Opens the dropdown menu
function openDropdown() {
    document.getElementById("diffDropdown").classList.toggle("show");
}

 // Start game with selected difficulty
function startGame(difficulty) {
   console.log(`Starting game with difficulty: ${difficulty}`);
   shuffleQuestions = questions.filter(question => question.difficulty === difficulty);
    currentQuestionIndex = 0;
  setNextQuestion();
  console.log('Shuffled Questions:', shuffleQuestions);
    
 // Hide the dropdown
  document.getElementById("diffDropdown").classList.remove("show");
}
// Hide or show the rules
function hideRules() {
  let rules = document.getElementById("rules-container");
  if (rules.style.display === "none") {
    rules.style.display = "block";
  } else {
    rules.style.display = "none";
  }
}

function setNextQuestion() {
  console.log('Current Question Index:', currentQuestionIndex);
  showQuestion(shuffleQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  
  questionElement.innerText = question.question;
}

function selectAnswer() {

}


const questions = [
  {
    difficulty: 'easy',
    question: "Love, Love me ___?",
    answers: [
      { text: "do", correct: true },
      { text: "to", correct: false },
      { text: "more", correct: false },
      { text: "true", correct: false }
    ]
  },
  {
    difficulty: 'easy',
    question: "You say goodbye, and I say ___?",
    answers: [
      { text: "goodbye", correct: false },
      { text: "hello", correct: true },
      { text: "goodnight", correct: false },
      { text: "goodmorning", correct: false }
    ]
  },
    {
      difficulty: 'easy',
      question: "I get by with a little help from my ___?",
      answers: [
        { text: "friends", correct: true },
        { text: "family", correct: false },
        { text: "pets", correct: false },
        { text: "neighbors", correct: false }
      ]
    },
    {
      difficulty: 'easy',
      question: "I wanna hold your ___?",
      answers: [
        { text: "hand", correct: true },
        { text: "heart", correct: false },
        { text: "head", correct: false },
        { text: "hair", correct: false }
      ]
    },
    {
      difficulty: 'easy',
      question: "All you need is ___?",
      answers: [
        { text: "love", correct: true },
        { text: "money", correct: false },
        { text: "quiz", correct: false },
        { text: "friends", correct: false }
      ]
    },
  {
    difficulty: 'medium',
    question: 'Which album is the song "Can\'t Buy Me Love" on?',
    answers: [
      { text: "A Hard Day's Night", correct: true },
      { text: "Help!", correct: false },
      { text: "Beatles For Sale", correct: false },
      { text: "With The Beatles", correct: false }
    ]
  },
  {  difficulty: 'medium',
    question: 'Which album is the song "I Want To Hold Your Hand" on?',
    answers: [
      { text: "Meet The Beatles", correct: true },
      { text: "Please Please Me", correct: false },
      { text: "With The Beatles", correct: false },
      { text: "A Hard Day's Night", correct: false }
    ]
  },
  {  difficulty: 'medium',
    question: 'Which album is the song "I am the Walrus" on?',
    answers: [
      { text: "Magical Mystery Tour", correct: true },
      { text: "Yellow Submarine", correct: false },
      { text: "Abbey Road", correct: false },
      { text: "Let It Be", correct: false }
    ]
  },
  {   difficulty: 'medium',
    question: 'Which album is the song "Let It Be" on?',
    answers: [
      { text: "Let It Be", correct: true },
      { text: "Abbey Road", correct: false },
      { text: "Magical Mystery Tour", correct: false },
      { text: "Yellow Submarine", correct: false }
    ]
  },
  {    difficulty: 'medium',
    question: 'Which album is the song "I Feel Fine" on?',
    answers: [
      { text: "Beatles For Sale", correct: true },
      { text: "Help!", correct: false },
      { text: "A Hard Day's Night", correct: false },
      { text: "With The Beatles", correct: false }
    ]
  },

{   difficulty: 'hard',
    question: "Who was the Beatles original drummer?",
    answers: [
      { text: "Ringo Starr", correct: false },
      { text: "Pete Best", correct: true },
      { text: "Keith Moon", correct: false },
      { text: "Charlie Watts", correct: false }
    ]
  },
  {     difficulty: 'hard',
    question: "Who was the oldest Beatle?",
    answers: [
      { text: "John Lennon", correct: false },
      { text: "Paul McCartney", correct: false },
      { text: "George Harrison", correct: false },
      { text: "Ringo Starr", correct: true }
    ]
  },  
  {   difficulty: 'hard',
    question: "Which Beatle was the first to get married?",
    answers: [
      { text: "John Lennon", correct: true },
      { text: "Paul McCartney", correct: false },
      { text: "George Harrison", correct: false },
      { text: "Ringo Starr", correct: false }
    ]
  },
  {     difficulty: 'hard',
    question: "How many number one albums did the Beatles have in the UK?",
    answers: [
      { text: "15", correct: true },
      { text: "10", correct: false },
      { text: "20", correct: false },
      { text: "25", correct: false }
    ]
  },
  {      difficulty: 'hard',
    question: 'What is Ringo Starr\'s real name?',
    answers: [
      { text: "Richard Starkey", correct: true },
      { text: "Richard Starr", correct: false },
      { text: "Ringo Starr", correct: false },
      { text: "Richard Starkey Jr.", correct: false }
    ]
  }
];
