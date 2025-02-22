// Function to show motivation dialog
function showMotivation() {
    document.getElementById("motivation-dialog").style.display = "block";
}

// Function to close the dialog box
function closeDialog() {
    document.getElementById("motivation-dialog").style.display = "none";
}

// Function to toggle the left menu
function toggleMenu() {
    const menu = document.getElementById("leftMenu");
    const currentLeft = window.getComputedStyle(menu).left;

    if (currentLeft === "0px") {
        menu.style.left = "-250px"; // Hide menu by moving it off screen
    } else {
        menu.style.left = "0px"; // Show menu by bringing it back into view
    }
}

// Optional: Fetch the name dynamically
// Example: Replace with your actual login logic
const userName = "John Doe"; // Fetch from login/signup JS
document.getElementById("user-name").textContent = userName;
