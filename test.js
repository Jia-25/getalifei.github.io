let qaData = JSON.parse(localStorage.getItem("qaList")) || [];
let index = 0;
const flashcard = document.querySelector(".flashcard");

function loadFlashcard() {
    if (qaData.length > 0) {
        flashcard.querySelector(".front").textContent = qaData[index].question;
        flashcard.querySelector(".back").textContent = qaData[index].answer;
    }
}

flashcard.addEventListener("click", () => {
    flashcard.classList.toggle("flipped");
});

document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + qaData.length) % qaData.length;
    loadFlashcard();
});

document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % qaData.length;
    loadFlashcard();
});

document.getElementById("backBtn").addEventListener("click", () => {
    window.location.href = "study.html";
});

loadFlashcard();

