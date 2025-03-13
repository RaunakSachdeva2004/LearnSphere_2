// const questions = [
//     {
//         question: "What is the SI unit of velocity?",
//         options: ["m/s", "km/h", "m/s²", "Newton"],
//         answer: "m/s"
//     },
//     {
//         question: "Which law states 'An object in motion stays in motion'?",
//         options: ["Newton's 1st Law", "Newton's 2nd Law", "Newton's 3rd Law", "Law of Conservation"],
//         answer: "Newton's 1st Law"
//     },
//     {
//         question: "What is the formula for acceleration?",
//         options: ["v = u + at", "F = ma", "a = (v-u)/t", "s = ut + 1/2at²"],
//         answer: "a = (v-u)/t"
//     },
//     {
//         question: "What does a speed-time graph's slope represent?",
//         options: ["Speed", "Acceleration", "Distance", "Force"],
//         answer: "Acceleration"
//     },
//     {
//         question: "Which of the following is NOT a type of motion?",
//         options: ["Rotational", "Linear", "Projectile", "Frictional"],
//         answer: "Frictional"
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;
// let selectedOption = null;

// function loadQuestion() {
//     const questionElement = document.getElementById("question");
//     const optionsElement = document.getElementById("options");
//     const progressBar = document.getElementById("progress-bar");
//     const nextButton = document.getElementById("next-btn");
//     const warningMessage = document.getElementById("warning");

//     // Load new question
//     questionElement.textContent = questions[currentQuestionIndex].question;

//     // Clear previous options
//     optionsElement.innerHTML = "";

//     // Create answer options as buttons
//     questions[currentQuestionIndex].options.forEach(option => {
//         const button = document.createElement("button");
//         button.classList.add("option-button");
//         button.textContent = option;
//         button.onclick = () => selectOption(button, option);
//         optionsElement.appendChild(button);
//     });

//     // Reset selection
//     selectedOption = null;
//     nextButton.disabled = true;
//     warningMessage.style.display = "none";

//     // Update progress bar
//     progressBar.style.width = `${(currentQuestionIndex / questions.length) * 100}%`;
// }

// function selectOption(button, option) {
//     const buttons = document.querySelectorAll(".option-button");
    
//     // Remove active state from all buttons
//     buttons.forEach(btn => btn.classList.remove("selected"));

//     // Set selected button
//     button.classList.add("selected");
//     selectedOption = option;

//     // Enable Next button
//     document.getElementById("next-btn").disabled = false;
// }

// function nextQuestion() {
//     const warningMessage = document.getElementById("warning");

//     if (!selectedOption) {
//         warningMessage.style.display = "block";
//         return;
//     }

//     warningMessage.style.display = "none";

//     // Check answer
//     if (selectedOption === questions[currentQuestionIndex].answer) {
//         score++;
//     }

//     // Move to next question
//     currentQuestionIndex++;

//     if (currentQuestionIndex < questions.length) {
//         loadQuestion();
//     } else {
//         showResults();
//     }
// }

// function showResults() {
//     document.getElementById("quiz-container").style.display = "none";
//     document.getElementById("result-container").style.display = "block";

//     document.getElementById("score").textContent = `You scored ${score} out of ${questions.length}! 🎯`;

//     // Update progress bar to full
//     document.getElementById("progress-bar").style.width = "100%";
// }

// function restartQuiz() {
//     currentQuestionIndex = 0;
//     score = 0;
//     document.getElementById("result-container").style.display = "none";
//     document.getElementById("quiz-container").style.display = "block";
//     loadQuestion();
// }

// // Load first question when page loads
// window.onload = loadQuestion;


const questions = [
    { question: "What is the SI unit of speed?", options: ["m/s", "km/h", "m/s²", "N"], answer: "m/s" },
    { question: "What causes an object to accelerate?", options: ["Mass", "Force", "Friction", "Temperature"], answer: "Force" },
    { question: "Which of these is a scalar quantity?", options: ["Velocity", "Acceleration", "Displacement", "Speed"], answer: "Speed" },
    { question: "What does Newton's First Law state?", options: ["F = ma", "Action = Reaction", "Objects stay in motion/rest unless acted on", "Momentum is conserved"], answer: "Objects stay in motion/rest unless acted on" },
    { question: "What is the formula for acceleration?", options: ["v/t", "d/t", "Δv/t", "F/m"], answer: "Δv/t" }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

function loadQuestion() {
    let questionData = questions[currentQuestionIndex];
    document.getElementById("question").textContent = questionData.question;

    let optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        let btn = document.createElement("button");
        btn.classList.add("option");
        btn.textContent = option;
        btn.onclick = () => selectOption(btn, option);
        optionsContainer.appendChild(btn);
    });

    selectedOption = null;
    document.getElementById("next-btn").disabled = true;
    document.getElementById("prev-btn").disabled = currentQuestionIndex === 0;
    document.getElementById("submit-btn").classList.toggle("hidden", currentQuestionIndex !== questions.length - 1);
    document.getElementById("next-btn").classList.toggle("hidden", currentQuestionIndex === questions.length - 1);

    updateProgressBar();
}

function selectOption(button, option) {
    document.querySelectorAll(".option").forEach(btn => btn.classList.remove("selected"));
    button.classList.add("selected");
    selectedOption = option;
    document.getElementById("next-btn").disabled = false;
}

function nextQuestion() {
    if (!selectedOption) {
        showPopup();
        return;
    }

    // Check answer **before moving to the next question**
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function prevQuestion() {
    currentQuestionIndex--;
    loadQuestion();
}

function confirmSubmit() {
    document.getElementById("confirm-popup").style.display = "block";
}

function submitQuiz() {
    if (!selectedOption) {
        showPopup();
        return;
    }

    // **Final question answer check before submitting**
    if (selectedOption === questions[currentQuestionIndex].answer) {
        score++;
    }

    document.getElementById("confirm-popup").style.display = "none";
    showResults();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    selectedOption = null;

    document.getElementById("quiz-box").classList.remove("hidden");
    document.getElementById("result-box").classList.add("hidden");

    // Reset progress bar to 0%
    document.getElementById("progress-bar").style.width = "0%";

    loadQuestion();
}

function showPopup() {
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

function closeConfirmPopup() {
    document.getElementById("confirm-popup").style.display = "none";
}

function showResults() {
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("score").innerHTML = `You scored <strong>${score}</strong> out of ${questions.length}! 🎉`;
}

function updateProgressBar() {
    let progress = ((currentQuestionIndex + 1) / questions.length) * 100;
    document.getElementById("progress-bar").style.width = progress + "%";
}

// Initialize progress bar at 0% on page load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("progress-bar").style.width = "0%";
    loadQuestion();
});
