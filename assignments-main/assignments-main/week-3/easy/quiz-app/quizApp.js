import { quizData } from "./data.js";
const questionEl = document.getElementById("question");
const optionEl = document.getElementById("option");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;
let selectedAnswer = ""; 

const loadQuiz = () => {
    const currentQuestion = quizData[currentQuiz]
    questionEl.innerHTML = currentQuestion.question
    optionEl.innerHTML = ` <label><input type="radio" name="answer" value="a"> ${currentQuestion.a}</label><br>
    <label><input type="radio" name="answer" value="b"> ${currentQuestion.b}</label><br>
    <label><input type="radio" name="answer" value="c"> ${currentQuestion.c}</label><br>
    <label><input type="radio" name="answer" value="d"> ${currentQuestion.d}</label><br>
  `;

 const allOptions = document.getElementsByName("answer");
  allOptions.forEach((option) => {
    option.addEventListener("click", () => {
      selectedAnswer = option.value;
    });
  });
}

submitBtn.addEventListener("click",()=>{
    if(selectedAnswer == ""){
        alert("please select an answer")
        return
    }
    if(selectedAnswer == quizData[currentQuiz].correct){
        score++
    }
    currentQuiz++
    selectedAnswer=""
     if (currentQuiz < quizData.length) {
    loadQuiz();
  } else {
    document.getElementById("Main").innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correctly ✅</h2>
    `;
  }
})

loadQuiz()