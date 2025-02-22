// Menu Toggle Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Motivation Circle Interaction
document.getElementById("motivationCircle").addEventListener("click", function() {
    document.getElementById("dialogBox").classList.add("active");

    // Close the dialog after 5 seconds
    setTimeout(function() {
        document.getElementById("dialogBox").classList.remove("active");
    }, 5000);
});
