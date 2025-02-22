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
        const assignment = this.getAttribute('data-assignment');
        const fileInput = document.getElementById(`${assignment}-file`);
        fileInput.click();
    });
});

// Display File Info after Upload
const fileInputs = document.querySelectorAll('.file-input');
fileInputs.forEach(input => {
    input.addEventListener('change', function(event) {
        const assignment = event.target.id.split('-')[0];
        const fileInfo = document.getElementById(`${assignment}-file-info`);
        
        if (event.target.files.length > 0) {
            const fileName = event.target.files[0].name;
            fileInfo.textContent = `Uploaded: ${fileName}`;
            
            // Example: Add marks when file is uploaded (this can be updated later)
            const marksPanel = document.getElementById('marksPanel');
            if (assignment === 'assignment1') {
                document.getElementById('marks1').textContent = '85';  // Example marks
            } else if (assignment === 'assignment2') {
                document.getElementById('marks2').textContent = '92';  // Example marks
            } else if (assignment === 'assignment3') {
                document.getElementById('marks3').textContent = '78';  // Example marks
            }
        }
    });
});
