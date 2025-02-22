/* script.js */
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

let flashcards = [];

function saveFlashcard() {
    let question = document.getElementById("question").value;
    let answer = document.getElementById("answer").value;
    if (question && answer) {
        flashcards.push({ question, answer });
        alert("Flashcard Saved!");
    }
}

function checkAnswer() {
    if (flashcards.length === 0) {
        alert("No flashcards saved yet!");
        return;
    }
    let userAnswer = document.getElementById("user-answer").value;
    let correctAnswer = flashcards[0].answer;
    let accuracy = compareAnswers(userAnswer, correctAnswer);
    document.getElementById("accuracy-circle").style.borderColor = `rgb(${255 - accuracy * 2.55}, 0, 0)`;
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
