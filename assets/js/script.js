const params = new URLSearchParams(window.location.search);
const quizId = Number(params.get("id"));
const quiz = quizData.find(category => category.id === quizId); 

let currentQuestion = 0;
let selectAnswer = [];
let attempt = 0;
let rightOption = 0;
let wrongAnswer = 0;

// if (!quiz) {
//     alert("Quiz not found!");
//     window.location.href = "index.html";
// }

const totalQuestions = quiz.questions.length;
let timeLeft = 120;
let timerInterval;


// 3. go back to Landing Page  (logo's click)
function goLandingPage() {
    window.location.href = "index.html";
}

//show question function
function showQuestion() {

    // collect the current question
    const questionData = quiz.questions[currentQuestion];

    // number of Question
    document.getElementById("questionCount").innerText =
        `${currentQuestion + 1} / ${totalQuestions}`;

    // Quiz Title
    document.getElementById("quizTitle").innerText = quiz.title;

    // Timer
    // document.getElementById("timer").innerText = quiz.time;

    // Progress Bar
    let progress = ((currentQuestion + 1) / totalQuestions) * 100;

    document.getElementById("progressPercent").innerText =
        `${Math.round(progress)}%`;

    document.getElementById("progressBar").style.width =
        `${progress}%`;



    // showing Question
    document.getElementById("questionText").innerText =
        questionData.question;


    // showing Option
    document.getElementById("options").innerHTML =
        questionData.options.map(option => `
        <button class="option-btn ${selectAnswer[currentQuestion] === option ? "selected" : ""
            }">${option}</button>
    `).join("");


    document.getElementById("prevBtn").disabled = currentQuestion === 0;

    // Change Next button to Submit on last question
    if (currentQuestion === totalQuestions - 1) {
        document.getElementById("nextBtn").innerText = "Submit";
        // document.getElementById("nextBtn")
    } else {
        document.getElementById("nextBtn").innerText = "Next";
    }
}
showQuestion();
startTimer();

// Timer Function
function startTimer() {

    clearInterval(timerInterval);

    timeLeft = 120;

    updateTimer();

    timerInterval = setInterval(function () {

        timeLeft--;

        updateTimer();

        if (timeLeft === 0) {

            clearInterval(timerInterval);

            showResult();

        }

    }, 1000);
}

// Update Timer Display
function updateTimer() {

    let minutes = Math.floor(timeLeft / 60);

    let seconds = timeLeft % 60;

    document.getElementById("timer").innerText =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

//back button
document.getElementById("prevBtn").addEventListener("click", function () {

    if (currentQuestion > 0) {

        currentQuestion--;
        showQuestion();
    }

});

// Store the chosen option
document.getElementById("options").addEventListener("click", function (event) {

    if (event.target.classList.contains("option-btn")) {

        selectAnswer[currentQuestion] = event.target.innerText;

        // Remove previous selection
        document.querySelectorAll(".option-btn").forEach(button => {
            button.classList.remove("selected");
        });

        // Add selected class
        event.target.classList.add("selected");

    }
});

//result show
function showResult() {

    clearInterval(timerInterval);

    rightOption = 0;
    wrongAnswer = 0;

    quiz.questions.forEach((question, index) => {

        if (selectAnswer[index] === question.answer) {
            rightOption++;
        } else {
            wrongAnswer++;
        }
    });

    document.getElementById("quiz-page").classList.add("d-none");
    document.getElementById("resultPage").classList.remove("d-none");

    document.getElementById("finalScore").innerText =
        `${rightOption}/${totalQuestions}`;

    document.getElementById("resultTotal").innerText = `${totalQuestions}`;
    document.getElementById("resultAttempt").innerText = `${attempt}`;

    document.getElementById("resultCorrect").innerText = `${rightOption}`;
    document.getElementById("resultWrong").innerText = `${wrongAnswer}`;
}

// Next Button
document.getElementById("nextBtn").addEventListener("click", function () {

    // Count Attempt
    if (selectAnswer[currentQuestion] !== undefined) {
        attempt = selectAnswer.filter(answer => answer !== undefined).length;
    }

    document.getElementById("attemptCount").innerText =
        `${attempt}/${totalQuestions}`;

    // Next Question
    if (currentQuestion < totalQuestions - 1) {

        currentQuestion++;
        showQuestion();

    } else {
        showResult();
    }

});

//View answer   
document.getElementById("viewAnswersBtn").addEventListener("click", showAnswers);

function showAnswers() {

    document.getElementById("resultPage").classList.add("d-none");

    document.getElementById("answerReviewPage").classList.remove("d-none");

    let reviewContent = document.getElementById("answerReviewContent");

    reviewContent.innerHTML = "";

    quiz.questions.forEach((question, index) => {

        let userAnswer = selectAnswer[index];

        if (userAnswer) {

            reviewContent.innerHTML += `

            <div class="review-card">
                <h4>${question.question}</h4>

                <p>Your Answer</p>

                <h5>${userAnswer}</h5>

                <p>Correct Answer: ${question.answer}</p>
            </div>

        `;
        }

    });
}

document.getElementById("backToResultBtn").addEventListener("click", function () {

    document.getElementById("answerReviewPage").classList.add("d-none");

    document.getElementById("resultPage").classList.remove("d-none");

});

//restart the quiz
document.getElementById("restartQuizBtn").addEventListener("click", function () {

    // Reset quiz values
    currentQuestion = 0;
    selectAnswer = [];
    attempt = 0;

    document.getElementById("attemptCount").innerText =
        `${attempt}/${totalQuestions}`;

    // Hide Result Page
    document.getElementById("resultPage").classList.add("d-none");

    // Show Quiz Page
    document.getElementById("quiz-page").classList.remove("d-none");

    // Load first question again
    showQuestion();
    startTimer();
});

//Exit btn, result page to category page  
// document.getElementById("exitQuizBtn").addEventListener("click", function () {
//     showCategories();
// });


document.getElementById("exitQuizBtn").addEventListener("click", function () {
    window.location.href = "index.html";
});