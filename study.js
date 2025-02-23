// Pomodoro Timer
let timeLeft = 1500;
let timer;
document.getElementById("startBtn").addEventListener("click", () => {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
        } else {
            timeLeft--;
            let minutes = Math.floor(timeLeft / 60);
            let seconds = timeLeft % 60;
            document.getElementById("timer").textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        }
    }, 1000);
});

document.getElementById("resetBtn").addEventListener("click", () => {
    clearInterval(timer);
    timeLeft = 1500;
    document.getElementById("timer").textContent = "25:00";
});

// Question & Answer Local Storage
document.getElementById("addBtn").addEventListener("click", () => {
    let question = document.getElementById("questionInput").value;
    let answer = document.getElementById("answerInput").value;
    if (question && answer) {
        let storedData = JSON.parse(localStorage.getItem("qaList")) || [];
        storedData.push({ question, answer });
        localStorage.setItem("qaList", JSON.stringify(storedData));
        location.reload();
    }
});

window.onload = () => {
    let storedData = JSON.parse(localStorage.getItem("qaList")) || [];
    let qaList = document.getElementById("qaList");
    storedData.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = item.question;
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.onclick = () => {
            storedData.splice(index, 1);
            localStorage.setItem("qaList", JSON.stringify(storedData));
            location.reload();
        };
        li.appendChild(deleteBtn);
        qaList.appendChild(li);
    });
};


    // Sliding Menu Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});
