document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });

    // Load flashcards from localStorage
    const flashcards = JSON.parse(localStorage.getItem("flashcards"));
    
    const testForm = document.getElementById("testForm");

    flashcards.forEach((flashcard, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p>${flashcard.question}</p>
            <input type="text" id="answer-${index}" placeholder="Enter your answer">
        `;
        testForm.appendChild(questionDiv);
    });

    // Handle form submission
    document.getElementById("submitBtn").addEventListener("click", function() {
        let correct = 0;
        let wrong = [];

        flashcards.forEach((flashcard, index) => {
            const userAnswer = document.getElementById(`answer-${index}`).value.trim();
            if (userAnswer.toLowerCase() === flashcard.answer.toLowerCase()) {
                correct++;
            } else {
                wrong.push({ question: flashcard.question, answer: flashcard.answer });
            }
        });

        // Display score
        const scoreDiv = document.getElementById("score");
        scoreDiv.innerHTML = `
            <p>You scored ${correct} out of ${flashcards.length}</p>
            ${wrong.length > 0 ? `<p>You got the following questions wrong:</p>` : ''}
            <ul>
                ${wrong.map(item => `<li><b>Q:</b> ${item.question} <b>A:</b> ${item.answer}</li>`).join('')}
            </ul>
        `;
    });
});
