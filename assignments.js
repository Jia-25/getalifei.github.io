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

// Handle Add Button Click to Open File Input
const addButtons = document.querySelectorAll('.add-button');
addButtons.forEach(button => {
    button.addEventListener('click', function() {
        const assignment = this.getAttribute('data-assignment');
        const fileInput = document.getElementById(`${assignment}-file`);
        fileInput.click();
    });
});

// Display File Info after Upload and Add Remove Button
const fileInputs = document.querySelectorAll('.file-input');
fileInputs.forEach(input => {
    input.addEventListener('change', function(event) {
        const assignment = event.target.id.split('-')[0];
        const fileInfo = document.getElementById(`${assignment}-file-info`);

        if (event.target.files.length > 0) {
            const fileName = event.target.files[0].name;
            fileInfo.innerHTML = `Uploaded: ${fileName} <button class="remove-button" data-assignment="${assignment}">Remove</button>`;
        }
    });
});

// Delegate event listener for dynamically added remove buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('remove-button')) {
        const assignment = event.target.getAttribute('data-assignment');
        document.getElementById(`${assignment}-file`).value = "";
        document.getElementById(`${assignment}-file-info`).textContent = "No file uploaded";
    }
});
