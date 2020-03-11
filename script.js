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
var correctnessEl = document.getElementById("correctness");
var timerEL = document.getElementById("timer");

var score;

//Questions sourced from https://www.w3schools.com/quiztest/quiztest.asp?qtest=JS
var question1 = {
  question: "Inside which HTML element do we put the JavaScript?",
  answer1: "<javascript>",
  answer2: "<js>",
  answer3: "<scripting>",
  rightAnswer: "<script>"
};
var question2 = {
  question: "How do you write 'Hello World' in an alert box?",
  answer1: "msgBox('Hello World')",
  answer2: "alertBox('Hello World')",
  answer3: "console.log('Hello World')",
  rightAnswer: "alert('Hello World')"
};
var question3 = {
  question: "How do you create a function in JavaScript?",
  answer1: "function.myFunction()",
  answer2: "function:myFuction()",
  answer3: "function = myFunction()",
  rightAnswer: "function myFunction()"
};
var question4 = {
  question: "What special character are javascript arrays contained in?",
  answer1: "' '",
  answer2: "( )",
  answer3: "{ }",
  rightAnswer: "[ ]"
};
var questionArray = [question1, question2, question3, question4];
var questionIndex = 0;

//button functions
function viewHighscores(event) {
  homePage.classList.add("d-none");
  questionPage.classList.add("d-none");
  highscorePage.classList.remove("d-none");
}

function startQuiz() {
  homePage.classList.add("d-none");
  questionPage.classList.remove("d-none");
  questionIndex = 0;

  startClock();
  renderQuestion();
}

function startClock() {
  score = 75;
  timerEL.textContent = score;
  var timerInterval = setInterval(function() {
    score--;
    timerEL.textContent = score;

    if (score <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

function renderQuestion() {
  answersEl.innerHTML = "";
  questionEl.textContent = questionArray[questionIndex].question;
  var answerArray = genererateAnswerArray(questionArray[questionIndex]);
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

function checkAnswer(event) {
  if (event.target.matches("button")) {
    if (event.target.textContent === questionArray[questionIndex].rightAnswer) {
      correctnessEl.textContent = "CORRECT";
      setTimeout(function(){correctnessEl.textContent = ""}, 1200);
    } else {
      score -= 15;
      timerEL.textContent = score;
      correctnessEl.textContent = "WRONG";
      setTimeout(function(){correctnessEl.textContent = ""}, 1200);
    }
    if (questionIndex < questionArray.length -1) {
      questionIndex++;
      renderQuestion();
    } else{
      questionPage.classList.add("d-none");
      scorePage.classList.remove("d-none");
    }
  }
}

function back(event) {
  highscorePage.classList.add("d-none");
  homePage.classList.remove("d-none");
}

function testFunciton(event) {
  console.log("test");
}

highscoreButton.addEventListener("click", viewHighscores);
startButton.addEventListener("click", startQuiz);
backButton.addEventListener("click", back);
answersEl.addEventListener("click", checkAnswer);

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
