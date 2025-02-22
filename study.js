// Toggle menu visibility
document.getElementById("openMenu").addEventListener("click", function () {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function () {
    document.getElementById("menu").classList.remove("open");
});

// Optional: Automatically close the menu when clicking outside
document.addEventListener("click", function (event) {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("openMenu");

    if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.remove("open");  // Close menu if clicked outside
    }
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

        // Optionally, you can add the file to the list, upload to a server, etc.
        // For this example, we're just showing the file name in the UI.
    }
}
