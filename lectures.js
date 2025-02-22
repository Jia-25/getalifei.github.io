// Menu Toggle
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});
// Optional: Automatically close the menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("openBtn");

    if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.remove("open");  // Close menu if clicked outside
    }
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

// Handle Add Button Click to Open File Input
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const topic = this.getAttribute('data-topic');
        const fileInput = document.getElementById(`${topic}-file`);
        fileInput.click();
    });
});

// Display File Info after Upload and Add Remove Button
const fileInputs = document.querySelectorAll('.file-input');
fileInputs.forEach(input => {
    input.addEventListener('change', function(event) {
        const topic = event.target.id.split('-')[0];
        const fileInfo = document.getElementById(`${topic}-file-info`);

        if (event.target.files.length > 0) {
            const fileName = event.target.files[0].name;
            fileInfo.innerHTML = `Uploaded: ${fileName} <button class="remove-button" data-topic="${topic}">Remove</button>`;
            addRemoveListener(topic);
        }
    });
});

// Function to Add Remove Button Listener
function addRemoveListener(topic) {
    document.querySelector(`[data-topic="${topic}"]`).addEventListener('click', function() {
        document.getElementById(`${topic}-file`).value = "";
        document.getElementById(`${topic}-file-info`).textContent = "No file uploaded";
    });
}
