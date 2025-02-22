function displayFlashcards() {
    flashcardContainer.innerHTML = "";
    flashcards.forEach((card, index) => {
        let cardElement = document.createElement("div");
        cardElement.classList.add("flashcard");
        
        cardElement.innerHTML = `
            <div class="flashcard-inner">
                <div class="front">${card.question}</div>
                <div class="back">${card.answer}</div>
            </div>
            <button class="remove-btn" onclick="removeFlashcard(${index})">✖</button>
        `;

        cardElement.addEventListener("click", function () {
            cardElement.classList.toggle("flipped");
        });

        flashcardContainer.appendChild(cardElement);
    });
}
