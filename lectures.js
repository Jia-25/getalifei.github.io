// Menu toggle functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

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

// Redirect on category box click
document.querySelectorAll('.category-box').forEach(function(box) {
    box.addEventListener('click', function() {
        alert('Category clicked!');
    });
});
