//button elements
var startButton = document.querySelector("#start-button");
var highscoreButton = document.getElementById("highscore-button");
var backButton = document.getElementById("back-button");

//page elements
var homePage = document.getElementById("home-page");
var questionPage = document.getElementById("question-page");
var scorePage = document.getElementById("score-page");
var highscorePage = document.getElementById("highscore-page");

var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");

var score;
var questionArray = [];
var question1 = {
  question: "Is this a quesiton?",
  answer1: "filler1",
  answer2: "filler2",
  answer3: "filler3",
  rightAnswer: "Correct"
};
var question2 = {
  question: "Is this a quesiton?",
  answer1: "filler",
  answer2: "filler",
  answer3: "filler",
  rightAnswer: "Correct"
};
var question3 = {
  question: "Is this a quesiton?",
  answer1: "filler",
  answer2: "filler",
  answer3: "filler",
  rightAnswer: "Correct"
};
var question4 = {
  question: "Is this a quesiton?",
  answer1: "filler",
  answer2: "dtuff",
  answer3: "whatwhat",
  rightAnswer: "Correct"
};

//button functions
function viewHighscores(event) {
  homePage.classList.add("d-none");
  questionPage.classList.add("d-none");
  highscorePage.classList.remove("d-none");
}

function startQuiz() {
  homePage.classList.add("d-none");
  questionPage.classList.remove("d-none");

  renderQuestion();
}

function back(event) {
  highscorePage.classList.add("d-none");
  homePage.classList.remove("d-none");
}

function renderQuestion() {
  questionEl.textContent = question1.question;
  var answerArray = genererateAnswerArray(question1);
  for (var i = 0; i < answerArray.length; i++) {
    var answerButton = document.createElement("button");
    answerButton.textContent = answerArray[i];
    answerButton.classList.add("btn", "btn-primary");
    answersEl.appendChild(answerButton);
  }
}

function genererateAnswerArray(question) {
  var answerArray = [];
  answerArray.push(
    question.answer1,
    question.answer2,
    question.answer3,
    question.rightAnswer
  );
  shuffle(answerArray);
  return answerArray;
}
//Sourced from https://javascript.info/task/shuffle
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function startClock(){
    //set inertval and display on DOM (id = "timer")
}

function testFunciton(event) {
  console.log("test");
}

highscoreButton.addEventListener("click", viewHighscores);
startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", back);


//TODO: 
//Add timer
//Check for correct answer then move through to next question
    //notifies if correct or wrong
    //moves to next question
//Add highscore
//Clear highscore
//store high scores in local storage as JSON
    // localStorage.setItem("user", JSON.stringify(user));
    // var lastUser = JSON.parse(localStorage.getItem("user"));
