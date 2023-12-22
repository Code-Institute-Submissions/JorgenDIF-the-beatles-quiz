const username = document.getElementById("username");
const saveScoresBtn = document.getElementById("saveScoresBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
    console.log(username.value);
    saveScoresBtn.disabled = !username.value;
});

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.preventDefault();
};


