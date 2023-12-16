const questionContainerElement = document.getElementById('question-container')


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
}
else {
    rules.style.display = "none";
}
}

const easyQuestions = [
{ question : 'Love, Love me ___?', answer: 'do',
option1: 'do', option2 : 'to', option3: 'more', option4: 'true'},

{ question : 'You say goodbye, and I say ___?', answer: 'hello',
option1: 'goodbye', option2 : 'hello', option3: 'goodnight', option4: 'goodmorning'},

{ question : 'I get by with a little help from my ___?', answer: 'friends',
option1: 'friends', option2 : 'family', option3: 'pets', option4: 'neighbors'}

{ question : 'I wanna hold your ___?', answer: 'hand',
option1: 'hand', option2 : 'heart', option3: 'head', option4: 'hair'},

{ question : 'All you need is ___?', answer: 'love',
option1: 'love', option2 : 'money', option3: 'quiz', option4: 'friends'},

]


    
