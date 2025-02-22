// Sliding Menu functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Fetch username from session or another source
document.getElementById("username").textContent = "User"; // Replace "User" with dynamic username from signup or login process

// Motivation Dialog
function showMotivation() {
    document.getElementById("motivationBox").style.display = "block";
}

function closeMotivation() {
    document.getElementById("motivationBox").style.display = "none";
}
