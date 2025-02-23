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

// File Upload and Preview Functionality
const uploadBox = document.getElementById("uploadBox");
const materialInput = document.getElementById("materialInput");
const materialList = document.getElementById("materialList");

uploadBox.addEventListener("click", function () {
    materialInput.click();
});

materialInput.addEventListener("change", function (event) {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
        displayFile(files[i]);
    }
});

// Function to Display Uploaded Files
function displayFile(file) {
    const materialItem = document.createElement("div");
    materialItem.classList.add("material-item");

    const materialName = document.createElement("span");
    materialName.classList.add("material-name");
    materialName.textContent = file.name;

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        materialItem.remove();
    });

    materialItem.appendChild(materialName);
    materialItem.appendChild(deleteButton);
    materialList.appendChild(materialItem);
}
