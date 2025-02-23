// Flashcards Data (Example Questions & Answers)
const flashcards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "Solve: 12 × 8", answer: "96" },
    { question: "What is the chemical symbol for water?", answer: "H₂O" },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "William Shakespeare" }
];

let currentCardIndex = 0;
let flipped = false;

const flashcard = document.getElementById("flashcard");
const questionText = document.getElementById("questionText");
const prevBtn = document.getElementById("prevBtn");
const flipBtn = document.getElementById("flipBtn");
const nextBtn = document.getElementById("nextBtn");

// Load the first flashcard with fade-in animation
function loadFlashcard() {
    questionText.textContent = flashcards[currentCardIndex].question;
    flashcard.classList.add("fade");
    flipped = false;
    setTimeout(() => {
        flashcard.classList.remove("fade");
    }, 500);
}

loadFlashcard();

// Flip Flashcard with animation
flipBtn.addEventListener("click", function () {
    flipped = !flipped;
    flashcard.classList.add("flip");

    setTimeout(() => {
        questionText.textContent = flipped ? flashcards[currentCardIndex].answer : flashcards[currentCardIndex].question;
        flashcard.classList.remove("flip");
    }, 250);
});

// Show Next Flashcard with fade-in animation
nextBtn.addEventListener("click", function () {
    if (currentCardIndex < flashcards.length - 1) {
        currentCardIndex++;
        loadFlashcard();
    }
});

// Show Previous Flashcard with fade-in animation
prevBtn.addEventListener("click", function () {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        loadFlashcard();
    }
});

// Go Back to Study Page
function goBack() {
    window.location.href = "study.html";
}
