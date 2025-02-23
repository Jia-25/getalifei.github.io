window.onload = function() {
    let qaData = JSON.parse(localStorage.getItem("qaList")) || [];
    let index = 0;
    const flashcard = document.querySelector(".flashcard");
    const front = flashcard.querySelector(".front");
    const back = flashcard.querySelector(".back");

    console.log("Loaded QA Data:", qaData); // Debugging: Check if questions exist

    function loadFlashcard() {
        if (qaData.length > 0) {
            front.textContent = qaData[index].question || "No Question";
            back.textContent = qaData[index].answer || "No Answer";
        } else {
            front.textContent = "No Questions Added";
            back.textContent = "";
        }
    }

    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    document.querySelector(".prev-btn").addEventListener("click", () => {
        if (qaData.length > 0) {
            index = (index - 1 + qaData.length) % qaData.length;
            loadFlashcard();
        }
    });

    document.querySelector(".next-btn").addEventListener("click", () => {
        if (qaData.length > 0) {
            index = (index + 1) % qaData.length;
            loadFlashcard();
        }
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        window.location.href = "study.html";
    });

    loadFlashcard(); // Ensure first flashcard loads correctly
};
