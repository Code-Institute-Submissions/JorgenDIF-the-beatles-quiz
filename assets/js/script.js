
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