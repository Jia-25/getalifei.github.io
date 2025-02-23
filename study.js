// Sliding Menu Functionality
document.addEventListener('DOMContentLoaded', function() {

document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
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

// Load existing flashcards from localStorage
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

// Function to add a flashcard
function addFlashcard() {
    let questionInput = document.getElementById("question").value.trim();
    let answerInput = document.getElementById("answer").value.trim();

    if (questionInput === "" || answerInput === "") {
        alert("Please enter both a question and an answer!");
        return;
    }

    // Add new flashcard to array
    flashcards.push({ question: questionInput, answer: answerInput });

    // Save updated flashcards to localStorage
    localStorage.setItem("flashcards", JSON.stringify(flashcards));

    // Clear input fields
    document.getElementById("question").value = "";
    document.getElementById("answer").value = "";

    // Refresh flashcard display (if applicable)
    displayFlashcards();
}

// Function to remove a flashcard
function removeFlashcard(index) {
    flashcards.splice(index, 1);
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
    displayFlashcards();
}

// Display flashcards on study page
function displayFlashcards() {
    let flashcardList = document.getElementById("flashcard-list");
    flashcardList.innerHTML = "";

    flashcards.forEach((flashcard, index) => {
        let li = document.createElement("li");
        li.textContent = `Q: ${flashcard.question} | A: ${flashcard.answer}`;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => removeFlashcard(index);
        li.appendChild(deleteBtn);
        flashcardList.appendChild(li);
    });
}

// Load flashcards when the page loads
displayFlashcards();

function goBack() {
    window.history.back();
}
                      }
