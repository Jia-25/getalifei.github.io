// Load stored flashcards
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
let currentIndex = 0;
let isFlipped = false;

let frontText = document.getElementById("front-text");
let backText = document.getElementById("back-text");

// Function to display a flashcard
function displayFlashcard() {
    if (flashcards.length === 0) {
        frontText.textContent = "No questions added!";
        backText.textContent = "";
        return;
    }

    frontText.textContent = flashcards[currentIndex].question;
    backText.textContent = flashcards[currentIndex].answer;
}

// Flip the card
function flipCard() {
    isFlipped = !isFlipped;

    if (isFlipped) {
        frontText.style.display = "none";
        backText.style.display = "block";
    } else {
        frontText.style.display = "block";
        backText.style.display = "none";
    }
}

// Move to the previous card
function prevCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    isFlipped = false;
    displayFlashcard();
}

// Move to the next card
function nextCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    isFlipped = false;
    displayFlashcard();
}

// Go back to Study Page
function goBack() {
    window.location.href = "study.html";
}

// Show first flashcard on page load
displayFlashcard();
