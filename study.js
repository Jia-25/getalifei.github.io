// Sliding Menu Functionality
const menu = document.getElementById("menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
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
    // Disable the start button to prevent multiple starts
    startButton.disabled = true;

    timerInterval = setInterval(function () {
        if (seconds === 0) {
            if (minutes === 0) {
                clearInterval(timerInterval); // Stop the timer when 00:00 is reached
                alert("Time's up! Take a break.");
                startButton.disabled = false; // Re-enable the start button
                return;
            }
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }

        // Update the timer display
        timerDisplay.textContent = formatTime(minutes, seconds);
    }, 1000);
});

// Reset the timer when the "Reset" button is clicked
resetButton.addEventListener("click", function () {
    clearInterval(timerInterval);
    minutes = 25;
    seconds = 0;
    timerDisplay.textContent = formatTime(minutes, seconds);
    startButton.disabled = false; // Re-enable the start button
});

// Helper function to format time as MM:SS
function formatTime(minutes, seconds) {
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}

// File upload functionality
const addMaterialButton = document.querySelector(".add-material");
const materialInput = document.querySelector(".material-input");

// Show the file input when the "+" sign is clicked
addMaterialButton.addEventListener("click", function () {
    materialInput.click();
});

// Handle file upload
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

// Ensure the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Study Music Menu Toggle
    const studyMusicBtn = document.getElementById("studyMusicBtn");
    const musicMenu = document.getElementById("musicMenu");
    const closeMusicBtn = document.getElementById("closeMusicBtn");

    studyMusicBtn.addEventListener("click", function () {
        musicMenu.style.right = "0"; // Slide menu in
    });

    closeMusicBtn.addEventListener("click", function () {
        musicMenu.style.right = "-500px"; // Slide menu out
    });

    // Simulated YouTube Audio Playback
    let audioPlaying = false;
    const playPauseBtn = document.getElementById("playPauseBtn");
    const progressBar = document.getElementById("progressBar");

    playPauseBtn.addEventListener("click", function () {
        if (!audioPlaying) {
            playPauseBtn.innerText = "Pause";
            audioPlaying = true;
            simulateAudioProgress();
        } else {
            playPauseBtn.innerText = "Play";
            audioPlaying = false;
        }
    });

    // Simulate Audio Progress Bar
    function simulateAudioProgress() {
        let progress = 0;
        let interval = setInterval(() => {
            if (!audioPlaying || progress >= 100) {
                clearInterval(interval);
            } else {
                progress += 1;
                progressBar.value = progress;
            }
        }, 1000);
    }
});


// Flashcards Button Click Event
document.getElementById("flashcardButton").addEventListener("click", function () {
    window.location.href = "flashcards.html";  // Redirect to the flashcards page
});
