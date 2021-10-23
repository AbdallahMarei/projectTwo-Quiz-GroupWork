let questionArray = [];
defineQuizJson();
function defineQuizJson() {
  var httpRequest = new XMLHttpRequest();
  httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState === 4) {
      if (httpRequest.status === 200) {
        let data = JSON.parse(httpRequest.responseText);
        questionArray = data;
      }
    }
  };
  httpRequest.open("GET", "quizQuestions.json");
  httpRequest.send();
}
myResults();
function myResults() {
  let answersArray = localStorage.getItem("answers");
  let answersfromJson = JSON.parse(answersArray);
  let correctAnswerCounter = 0;
  let wrongAnswerCounter = 0;

  for (let index = 0; index < answersfromJson.length; index++) {
    const element = answersfromJson[index];
    if (element.correctAnswer == element.userAnswer) {
      correctAnswerCounter++;
    } else {
      wrongAnswerCounter++;
    }
  }
  console.log(correctAnswerCounter);
  console.log(wrongAnswerCounter);
  let passExam = answersfromJson.length / 2;
  console.log(passExam);
  if (correctAnswerCounter >= passExam) {
    document.getElementById("resultContainer").style.backgroundColor = "green";
    document.getElementById("resultContainer").innerHTML = "You passed";
    document.getElementById("btnShowAnswer").style.display = "block";
  } else {
    document.getElementById("resultContainer").style.backgroundColor = "red";
    document.getElementById("resultContainer").innerHTML = "You Failed";
    document.getElementById("btnShowAnswer").style.display = "block";
  }
}
