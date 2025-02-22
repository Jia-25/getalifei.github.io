// Function to toggle the sliding menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.getElementById('menuIcon');
    menu.classList.toggle('open');
    menu.classList.toggle('closed');
}

// Close the menu when the close button (arrow) is clicked
document.getElementById('closeBtn').onclick = function () {
    const menu = document.getElementById('menu');
    menu.classList.remove('open');
    menu.classList.add('closed');
}

// Handle Logout functionality
document.getElementById('logoutBtn').onclick = function () {
    // Perform logout logic, for example:
    // Clear session storage, local storage, or cookie if needed
    alert('You have logged out successfully!');
    
    // Redirect to login page (or you can handle the actual logout procedure)
    window.location.href = 'login.html'; // Redirect to login page
};
