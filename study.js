// Sliding Menu Functionality
const menu = document.getElementById("menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", function() {
    menu.classList.add("open");
});

closeBtn.addEventListener("click", function() {
    menu.classList.remove("open");
});

// Pomodoro Timer Logic
let timerInterval;
let minutes = 25;
let seconds = 0;

const timerDisplay = document.getElementById("timerDisplay");
const startButton = document.getElementById("startTimer");
const resetButton = document.getElementById("resetTimer");

startButton.addEventListener("click", function () {
    startButton.disabled = true;
    timerInterval = setInterval(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval);
                alert("Time's up! Take a break.");
                startButton.disabled = false;
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        timerDisplay.textContent = formatTime(minutes, seconds);
    }, 1000);
});

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    timerDisplay.textContent = formatTime(minutes, seconds);
    startButton.disabled = false;
});

function formatTime(minutes, seconds) {
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// Get stored flashcards or initialize empty array
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

// Function to add a flashcard
function addFlashcard() {
    let question = document.getElementById("questionInput").value.trim();
    let answer = document.getElementById("answerInput").value.trim();

    if (question && answer) {
        flashcards.push({ question, answer });
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        
        // Clear inputs
        document.getElementById("questionInput").value = "";
        document.getElementById("answerInput").value = "";

        // Refresh displayed list
        displayFlashcards();
    }
}

// Function to display flashcards list
function displayFlashcards() {
    let list = document.getElementById("flashcardList");
    list.innerHTML = "";

    flashcards.forEach((flashcard, index) => {
        let item = document.createElement("li");
        item.textContent = flashcard.question;
        
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "❌";
        deleteBtn.onclick = function () { removeFlashcard(index); };

        item.appendChild(deleteBtn);
        list.appendChild(item);
    });
}

// Function to remove a flashcard
function removeFlashcard(index) {
    flashcards.splice(index, 1);
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    displayFlashcards();
}

// Show existing flashcards on page load
displayFlashcards();
