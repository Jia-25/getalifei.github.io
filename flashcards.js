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
            <p>${card.question}</p>
            <button class="remove-btn" onclick="removeFlashcard(${index})">✖</button>
        `;
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
    let userAnswer = document.getElementById("user-answer").value;
    let correctAnswer = flashcards[currentTestIndex].answer;
    let accuracy = compareAnswers(userAnswer, correctAnswer);

    let accuracyCircle = document.getElementById("accuracy-circle");
    accuracyCircle.innerText = Math.round(accuracy) + "%";
    accuracyCircle.style.background = `conic-gradient(red ${accuracy}%, white ${accuracy}%)`;

    currentTestIndex++;
    if (currentTestIndex < flashcards.length) {
        setTimeout(showQuestion, 1000);
    } else {
        setTimeout(() => alert("Test completed!"), 1000);
    }
}

function compareAnswers(user, correct) {
    let total = correct.length;
    let matched = 0;

    for (let i = 0; i < total; i++) {
        if (user[i] && user[i].toLowerCase() === correct[i].toLowerCase()) {
            matched++;
        }
    }
    return (matched / total) * 100;
}
