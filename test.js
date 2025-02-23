window.onload = function() {
    let qaData = JSON.parse(localStorage.getItem("qaList")) || [];
    let index = 0;
    const flashcard = document.querySelector(".flashcard");
    const front = flashcard.querySelector(".front");
    const back = flashcard.querySelector(".back");
    const prevBtn = document.querySelector(".prev-btn");
    const nextBtn = document.querySelector(".next-btn");
    const backBtn = document.getElementById("backBtn");

    console.log("Loaded QA Data:", qaData); // Debugging check

    function loadFlashcard() {
        if (qaData.length > 0) {
            front.textContent = qaData[index]?.question || "No Question";
            back.textContent = qaData[index]?.answer || "No Answer";
        } else {
            front.textContent = "No Questions Added";
            back.textContent = "";
        }
    }

    flashcard.addEventListener("click", () => {
        flashcard.classList.toggle("flipped");
    });

    prevBtn.addEventListener("click", () => {
        if (qaData.length > 0) {
            index = (index - 1 + qaData.length) % qaData.length;
            loadFlashcard();
        }
    });

    nextBtn.addEventListener("click", () => {
        if (qaData.length > 0) {
            index = (index + 1) % qaData.length;
            loadFlashcard();
        }
    });

    backBtn.addEventListener("click", () => {
        window.location.href = "study.html";
    });

    loadFlashcard(); // Ensure first flashcard loads correctly
};
