// Load stored flashcards (latest version from study.html)
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];
let currentIndex = 0;

// Get elements
let flashcard = document.getElementById("flashcard");
let frontText = document.getElementById("front-text");
let backText = document.getElementById("back-text");

// Function to display a flashcard
function displayFlashcard() {
    if (flashcards.length === 0) {
        frontText.textContent = "No questions added!";
        backText.textContent = "No answer available";
    } else {
        frontText.textContent = flashcards[currentIndex].question;
        backText.textContent = flashcards[currentIndex].answer;
    }

    // Reset flip state
    flashcard.classList.remove("flip");
    frontText.style.display = "block";
    backText.style.display = "none";
}

// Flip the card with animation
function flipCard() {
    flashcard.classList.toggle("flip");

    if (flashcard.classList.contains("flip")) {
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
    displayFlashcard();
}

// Move to the next card
function nextCard() {
    if (flashcards.length === 0) return;
    currentIndex = (currentIndex + 1) % flashcards.length;
    displayFlashcard();
}

// Go back to Study Page
function goBack() {
    window.location.href = "study.html";
}

// Load first flashcard on page load
displayFlashcard();
