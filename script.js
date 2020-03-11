//button elements
var startButton = document.querySelector("#start-button");
var highscoreButton = document.getElementById("highscore-button");
var backButton = document.getElementById("back-button");

//page elements
var homePage = document.getElementById("home-page");
var questionPage = document.getElementById("question-page");
var scorePage = document.getElementById("score-page");
var highscorePage = document.getElementById("highscore-page");

var score;

//button functions
function viewHighscores(event){
    homePage.classList.add("d-none");
    questionPage.classList.add("d-none");
    highscorePage.classList.remove("d-none");
}

function back(event){
    highscorePage.classList.add("d-none");
    homePage.classList.remove("d-none");
}

function testFunciton(event){
    console.log("test");
}

highscoreButton.addEventListener("click", viewHighscores);
startButton.addEventListener("click", testFunciton);
backButton.addEventListener("click", back);


//store high scores in local storage as JSON
// localStorage.setItem("user", JSON.stringify(user));
// var lastUser = JSON.parse(localStorage.getItem("user"));

