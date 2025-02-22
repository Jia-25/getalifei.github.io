document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

let flashcards = [];
let currentTestIndex = 0;

const flashcardContainer = document.getElementById("flashcard-container");

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
