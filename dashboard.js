// Menu Toggle
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Setting User Name (from signup/login.js)
const userName = "John Doe"; // Replace with dynamic data from signup.js or login.js
document.getElementById("userName").textContent = userName;

// Motivation Button Functionality
const motivationBtn = document.getElementById("motivationBtn");
const motivationDialogue = document.getElementById("motivationDialogue");
const closeDialogueBtn = document.getElementById("closeDialogue");

motivationBtn.addEventListener("click", function() {
    motivationDialogue.style.display = "block";
});

closeDialogueBtn.addEventListener("click", function() {
    motivationDialogue.style.display = "none";
});

// Redirect on square click
document.getElementById("calendar").addEventListener("click", function() {
    window.location.href = "timetable.html";
});

document.getElementById("lectures").addEventListener("click", function() {
    window.location.href = "lectures.html";
});

document.getElementById("assignments").addEventListener("click", function() {
    window.location.href = "assignments.html";
});

document.getElementById("progress").addEventListener("click", function() {
    window.location.href = "progress.html";
});

document.getElementById("announcements").addEventListener("click", function() {
    window.location.href = "announcements.html";
});

document.getElementById("budget").addEventListener("click", function() {
    window.location.href = "budget.html";
});

document.getElementById("studyMode").addEventListener("click", function() {
    window.location.href = "study.html";
});
