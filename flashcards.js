document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

let flashcards = [];
let currentTestIndex = 0;

const flashcardContainer = document.getElementById("flashcard-container");
const testContainer = document.getElementById("test-container");
const testQuestion = document.getElementById("test-question");

function saveFlashcard() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    
    if (question && answer) {
        flashcards.push({ question, answer });
        displayFlashcards();
        document.getElementById("question").value = "";
        document.getElementById("answer").value = "";
    }
}

function removeFlashcard(index) {
    flashcards.splice(index, 1);
    displayFlashcards();
}

function displayFlashcards() {
    flashcardContainer.innerHTML = "";
    flashcards.forEach((card, index) => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("flashcard");
        cardElement.innerHTML = `
            <div class="front">${card.question}</div>
            <div class="back">${card.answer}</div>
            <button class="remove-btn" onclick="removeFlashcard(${index})">✖</button>
        `;
        cardElement.addEventListener("click", function() {
            this.classList.toggle("flipped");
        });
        flashcardContainer.appendChild(cardElement);
    });
}

function startTest() {
    if (flashcards.length === 0) {
        alert("No flashcards available for testing!");
        return;
    }
    currentTestIndex = 0;
    testContainer.style.display = "block";
    showQuestion();
}

function showQuestion() {
    testQuestion.innerText = flashcards[currentTestIndex].question;
    document.getElementById("user-answer").value = "";
}

function checkAnswer() {
    let userAnswer = document.getElementById("user-answer").value.trim().toLowerCase();
    let correctAnswer = flashcards[currentTestIndex].answer.trim().toLowerCase();
    let accuracy = userAnswer === correctAnswer ? 100 : 0;

    document.getElementById("accuracy-circle").innerText = accuracy + "%";
}

