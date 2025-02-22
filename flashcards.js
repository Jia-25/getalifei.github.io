document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });

    // Add new flashcard input fields
    let flashcardCount = 1;
    document.getElementById("addFlashcardBtn").addEventListener("click", function() {
        flashcardCount++;
        const flashcardForm = document.querySelector('.flashcard-form');
        const newFlashcard = document.createElement('div');
        newFlashcard.classList.add('flashcard');
        newFlashcard.innerHTML = `
            <input type="text" id="question-${flashcardCount}" placeholder="Enter Question" />
            <input type="text" id="answer-${flashcardCount}" placeholder="Enter Answer" />
        `;
        flashcardForm.appendChild(newFlashcard);
    });

    // Store flashcards and navigate to test page
    document.getElementById("testYourselfBtn").addEventListener("click", function() {
        const flashcards = [];
        
        for (let i = 1; i <= flashcardCount; i++) {
            const question = document.getElementById(`question-${i}`).value;
            const answer = document.getElementById(`answer-${i}`).value;
            if (question && answer) {
                flashcards.push({ question, answer });
            }
        }

        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        window.location.href = "test.html";
    });
});
