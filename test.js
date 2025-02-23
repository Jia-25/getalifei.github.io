// Load stored flashcards
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
let currentIndex = 0;
let flashcard = document.getElementById("flashcard");
let frontText = document.getElementById("front-text");
let backText = document.getElementById("back-text");

// Function to display a flashcard
function displayFlashcard() {
    if (flashcards.length === 0) {
        frontText.textContent = "No questions added!";
        backText.textContent = "No answer available";
        return;
    }

    frontText.textContent = flashcards[currentIndex].question;
    backText.textContent = flashcards[currentIndex].answer;
}

// Flip the card with animation
function flipCard() {
    flashcard.classList.toggle("flip");
}

// Move to the previous card
function prevCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    flashcard.classList.remove("flip"); // Ensure it resets to front when changing
    displayFlashcard();
}

// Move to the next card
function nextCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    flashcard.classList.remove("flip"); // Ensure it resets to front when changing
    displayFlashcard();
}

// Go back to Study Page
function goBack() {
    window.location.href = "study.html";
}

// Show first flashcard on page load
displayFlashcard();
