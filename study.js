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

// File Upload Functionality
const uploadBox = document.getElementById("uploadBox");
const materialInput = document.getElementById("materialInput");

uploadBox.addEventListener("click", function () {
    materialInput.click();
});

materialInput.addEventListener("change", function (event) {
    const file = event.target.files[0];
    if (file) {
        alert(`Uploaded: ${file.name}`);
    }
});
