document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });

    // Load flashcards from localStorage
    const flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

    const testForm = document.getElementById("testForm");
    const flashcardsContainer = document.getElementById("flashcardsContainer");

    flashcards.forEach((flashcard, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.innerHTML = `
            <p><strong>${flashcard.question}</strong></p>
            <input type="text" id="answer-${index}" placeholder="Enter your answer">
        `;
        testForm.appendChild(questionDiv);
    });

    // Handle form submission
    document.getElementById("submitBtn").addEventListener("click", function(event) {
        event.preventDefault();

        // Clear previous flashcards
        flashcardsContainer.innerHTML = "";

        let correctAnswers = 0;

        flashcards.forEach((flashcard, index) => {
            const userAnswer = document.getElementById(`answer-${index}`).value.trim();
            const isCorrect = userAnswer.toLowerCase() === flashcard.answer.toLowerCase();

            if (isCorrect) correctAnswers++;

            // Create a flashcard
            const flashcardDiv = document.createElement("div");
            flashcardDiv.classList.add("flashcard");

            flashcardDiv.innerHTML = `
                <div class="flashcard-inner">
                    <div class="flashcard-front">
                        <p>${flashcard.question}</p>
                    </div>
                    <div class="flashcard-back">
                        <p>${isCorrect ? "✅ Correct!" : "❌ Correct Answer: " + flashcard.answer}</p>
                    </div>
                </div>
            `;

            // Flip functionality
            flashcardDiv.addEventListener("click", function() {
                flashcardDiv.classList.toggle("flipped");
            });

            flashcardsContainer.appendChild(flashcardDiv);
        });

        document.getElementById("score").innerHTML = `<h2>Score: ${correctAnswers} / ${flashcards.length}</h2>`;
    });
});
