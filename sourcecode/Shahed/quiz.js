  // startbutton

  let startButton = document.querySelector("#start-button");
  let questionForm = document.querySelector(".questions-form");
  let nextButton = document.querySelector(".next-button");
  let submitButton = document.querySelector(".submit-button");
  let radioButton = document.getElementsByName("Q");

  startButton.addEventListener("click", function () {
    questionForm.classList.remove("hidden");
    startButton.classList.add("hidden");
    logSubmit(event);
  });

  //send answer with id parameter from radio to script
  let questions = [
    {
      question:
        "Question  1 : what is the programing language used to handle web page actions ?",
      options: { a: "javascript", b: "C#", c: "Java" },
      correctAnswer: "a",
    },
    {
      question: "Question  2 : what is the UI markup language design ?",
      options: { a: "javascript", b: "CSS", c: "HTML" },
      correctAnswer: "c",
    },
    {
      question: "Question 3 : what is the programing language from below ?",
      options: { a: "HTML", b: "C#", c: "CSS" },
      correctAnswer: "b",
    },
    {
      question:
        "Question  4 : what is the programing language used to handle web page actions ?",
      options: { a: "javascript", b: "C#", c: "Java" },
      correctAnswer: "a",
    },
    {
      question:
        "Question  5 : what is the programing language used to handle web page actions ?",
      options: { a: "javascript", b: "C#", c: "Java" },
      correctAnswer: "a",
    },
  ];
  let answers = [];
  let chosenAnswers = [];

  let questionNumber = 0;
  async function logSubmit(event) {
    if (questionNumber === questions.length - 1) {
      nextButton.classList.add("hidden");
      submitButton.classList.remove("hidden");
    }

    questions.forEach((item, index) => {
      form.reset();
      if (questionNumber == index) {
        document.getElementById("Question").innerHTML = item.question;
        document.getElementById("one").innerHTML = item.options.a;
        document.getElementById("two").innerHTML = item.options.b;
        document.getElementById("three").innerHTML = item.options.c;

        radioButton[0].value = item.options.a;
        radioButton[1].value = item.options.b;
        radioButton[2].value = item.options.c;
        radioButton.forEach((item) => {
          if (item.checked) {
            answers.push(item.value);
          }
        });
        console.log(answers);
      }
    });
    questionNumber++;
    event.preventDefault();
  }

  submitButton.addEventListener("click", function () {
    radioButton.forEach((item) => {
      if (item.checked) {
        window.location.href = "result.html";
      }
    });
  });

  const form = document.getElementById("form");
  // const log = document.getElementById("log");
  form.addEventListener("submit", () => {
    logSubmit(event);
  });