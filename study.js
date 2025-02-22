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

// Start the timer when the "Start" button is clicked
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

// Reset the timer when the "Reset" button is clicked
resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    timerDisplay.textContent = formatTime(minutes, seconds);
    startButton.disabled = false;
});

// Helper function to format time as MM:SS
function formatTime(minutes, seconds) {
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// File upload functionality
const addMaterialButton = document.querySelector(".add-material");
const materialInput = document.querySelector(".material-input");

addMaterialButton.addEventListener("click", function () {
    materialInput.click();
});

function uploadMaterial(event) {
    const file = event.target.files[0];
    if (file) {
        const materialList = document.querySelector(".squares");
        const materialItem = document.createElement("div");
        materialItem.classList.add("material-item");
        const materialName = document.createElement("p");
        materialName.textContent = file.name;
        materialItem.appendChild(materialName);
        materialList.appendChild(materialItem);
    }
}

// Flashcards Button Click Event
document.getElementById("flashcardButton").addEventListener("click", function () {
    window.location.href = "flashcards.html";
});
