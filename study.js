// Toggle menu visibility
document.getElementById("openMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
});

// Pomodoro Timer Logic
let timer;
let timeLeft = 25 * 60; // 25 minutes in seconds
let isRunning = false;

document.getElementById("startTimer").addEventListener("click", function () {
    if (!isRunning) {
        isRunning = true;
        startPomodoro();
    }
});

document.getElementById("resetTimer").addEventListener("click", function () {
    isRunning = false;
    clearInterval(timer);
    timeLeft = 25 * 60;
    document.getElementById("timerDisplay").textContent = formatTime(timeLeft);
});

function startPomodoro() {
    timer = setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timer);
            alert("Pomodoro Complete! Take a break.");
        } else {
            timeLeft--;
            document.getElementById("timerDisplay").textContent = formatTime(timeLeft);
        }
    }, 1000);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds}`;
}

// Example for displaying student-posted study materials
const materials = [
    "Course Notes: JavaScript",
    "Study Guide: Algorithms",
    "Lecture Slides: Web Development",
    "PDF Resource: React.js Tutorial"
];

const squaresContainer = document.querySelector(".squares");
materials.forEach(material => {
    const square = document.createElement("div");
    square.classList.add("square");
    square.textContent = material;
    squaresContainer.appendChild(square);
});
