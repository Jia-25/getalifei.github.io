// Function to show motivation dialog
function showMotivation() {
    document.getElementById("motivation-dialog").style.display = "block";
}

// Function to close the dialog box
function closeDialog() {
    document.getElementById("motivation-dialog").style.display = "none";
}

// Optional: Fetch the name dynamically
// Example: Replace with your actual login logic
const userName = "John Doe"; // Fetch from login/signup JS
document.getElementById("user-name").textContent = userName;
