// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Open menu functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

// Close menu functionality
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Display Motivation Dialog
function showMotivation() {
    const dialog = document.getElementById('motivation-dialog');
    dialog.style.display = 'block';
}

// Close Motivation Dialog
function closeDialog() {
    const dialog = document.getElementById('motivation-dialog');
    dialog.style.display = 'none';
}

// Update User Name
function setUserName(name) {
    document.getElementById('userName').textContent = name;
}

// Assume the username comes from some login/signup logic
setUserName("");

// Fetch user data from localStorage
const name = localStorage.getItem('name');
const email = localStorage.getItem('email');

// Display the account information
document.getElementById('account-name').textContent = name || "Name not set";
document.getElementById('account-email').textContent = email || "Email not set";

// Transfer Account Form
document.getElementById('transferForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const newEmail = document.getElementById('newEmail').value;
    if (newEmail && newEmail !== localStorage.getItem('email')) {
        localStorage.setItem('email', newEmail); // Update email in localStorage
        alert("Account transferred to new email successfully.");
        document.getElementById('account-email').textContent = newEmail; // Update UI with new email
    } else {
        alert("Invalid email address or the same as the current email.");
    }
});

// Edit email function
window.editEmail = function() {
    const newEmail = prompt("Enter your new email:", localStorage.getItem('email'));
    if (newEmail) {
        localStorage.setItem('email', newEmail);
        document.getElementById('account-email').textContent = newEmail; // Update UI with new email
        alert("Email updated successfully.");
    }
}

// Delete Account functionality
window.deleteAccount = function() {
    document.getElementById('deleteWarning').style.display = "block";
    document.getElementById('confirmDeleteBtn').style.display = "inline-block";
    document.getElementById('deleteAccountBtn').style.display = "none"; // Hide the delete button after click
}

window.confirmDeleteAccount = function() {
    // Clear all user data from localStorage (simulate account deletion)
    localStorage.clear();
    alert("Your account has been deleted.");
    window.location.href = 'index.html'; // Redirect to the home page after account deletion
}
