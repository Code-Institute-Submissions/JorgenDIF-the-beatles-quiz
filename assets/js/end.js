/*
  High Score Saving and Redirection Script

  This file is used to save the high score and redirect to the highscores page.
  Implementation inspired by James Q Quick's tutorial on YouTube.
  Tutorial Link: https://www.youtube.com/watch?v=DFhmNLKwwGw&list=PLDlWc9AfQBfZIkdVaOQXi1tizJeNJipEx&index=9
*/

const username = document.getElementById("username");
const saveScoresBtn = document.getElementById("saveScoresBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
console.log("Most recent score: " + mostRecentScore);
const highScoresString = localStorage.getItem("highScores");
const highScores = highScoresString ? JSON.parse(highScoresString) : [];

finalScore.innerText = "You scored " + mostRecentScore + " points!";
username.addEventListener("keyup", () => {
  saveScoresBtn.disabled = !username.value;
});

const saveHighScore = (e) => {
 e.preventDefault();
 

  const score = {
    score: mostRecentScore,
    name: username.value,
  };
  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("highscores.html");
};
document.getElementById("saveScoresBtn").addEventListener("click", saveHighScore);
