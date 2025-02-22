// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

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
