const questionContainerElement = document.getElementById("question-container");

// Start game function. Opens the dropdown and starts the game with the selected difficulty
function openDropdown() {
  document.getElementById("diffDropdown").classList.toggle("show");
}

function startGame(difficulty) {
  console.log(`Starting game with difficulty: ${difficulty}`);

  // Hide the dropdown
  document.getElementById("diffDropdown").classList.remove("show");
}

function hideRules() {
  let rules = document.getElementById("rules-container");
  if (rules.style.display === "none") {
    rules.style.display = "block";
  } else {
    rules.style.display = "none";
  }
}

const easyQuestions = [
  {
    question: "Love, Love me ___?",
    answer: "do",
    option1: "do",
    option2: "to",
    option3: "more",
    option4: "true",
  },

  {
    question: "You say goodbye, and I say ___?",
    answer: "hello",
    option1: "goodbye",
    option2: "hello",
    option3: "goodnight",
    option4: "goodmorning",
  },

  {
    question: "I get by with a little help from my ___?",
    answer: "friends",
    option1: "friends",
    option2: "family",
    option3: "pets",
    option4: "neighbors",
  },

  {
    question: "I wanna hold your ___?",
    answer: "hand",
    option1: "hand",
    option2: "heart",
    option3: "head",
    option4: "hair",
  },

  {
    question: "All you need is ___?",
    answer: "love",
    option1: "love",
    option2: "money",
    option3: "quiz",
    option4: "friends",
  },
];

const mediumQuestions = [
  {
    question: 'Which album is the song "Can\'t Buy Me Love" on?',
    answer: "A Hard Day's Night",
    option1: "A Hard Day's Night",
    option2: "Help!",
    option3: "Beatles For Sale",
    option4: "With The Beatles",
  },

  {
    question: 'Which album is the song "I Want To Hold Your Hand" on?',
    answer: "Meet The Beatles",
    option1: "Meet The Beatles",
    option2: "Please Please Me",
    option3: "With The Beatles",
    option4: "A Hard Day's Night",
  },

  {
    question: 'Which album is the song "I am the Walrus" on?',
    answer: "Magical Mystery Tour",
    option1: "Magical Mystery Tour",
    option2: "Yellow Submarine",
    option3: "Abbey Road",
    option4: "Let It Be",
  },

  {
    question: 'Which album is the song "Let It Be" on?',
    answer: "Let It Be",
    option1: "Let It Be",
    option2: "Abbey Road",
    option3: "Magical Mystery Tour",
    option4: "Yellow Submarine",
  },

  {
    question: 'Which album is the song "I Feel Fine" on?',
    answer: "Beatles For Sale",
    option1: "Beatles For Sale",
    option2: "Help!",
    option3: "A Hard Day's Night",
    option4: "With The Beatles",
  },
];

const hardQuestions = [
  {
    question: "Who was the Beatles original drummer?",
    answer: "Pete Best",
    option1: "Ringo Starr",
    option2: "Pete Best",
    option3: "Keith Moon",
    option4: "Charlie Watts",
  },

  {
    question: "Who was the oldest Beatle?",
    answer: "Ringo Starr",
    option1: "John Lennon",
    option2: "Paul McCartney",
    option3: "George Harrison",
    option4: "Ringo Starr",
  },

  {
    question: "Which Beatle was the first to get married?",
    answer: "John Lennon",
    option1: "John Lennon",
    option2: "Paul McCartney",
    option3: "George Harrison",
    option4: "Ringo Starr",
  },

  {
    question: "How many number one albums did the Beatles have in the UK?",
    answer: "15",
    option1: "15",
    option2: "10",
    option3: "20",
    option4: "25",
  },

  {

    question: 'What is Ringo Starr\'s real name?',
    answer: "Richard Starkey",
    option1: "Richard Starkey",
    option2: "Richard Starr",
    option3: "Ringo Starr",
    option4: "Richard Starkey Jr.",
  }
];
