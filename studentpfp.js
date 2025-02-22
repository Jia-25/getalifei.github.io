document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age') || '';  // Use empty string if age is not saved
    const address = localStorage.getItem('address') || '';  // Use empty string if address is not saved
    const subscription = localStorage.getItem('subscription') || 'Free';  // Default subscription is Free

    // Display the fetched data
    document.getElementById('student-name').textContent = name || "Name not set";
    document.getElementById('student-email').textContent = email || "Email not set";
    document.getElementById('student-age').textContent = age || "Age not set";
    document.getElementById('student-address').textContent = address || "Address not set";
    document.getElementById('student-subscription').textContent = subscription || "Subscription not set";

    // Handle profile picture upload
    const profilePicInput = document.getElementById('file-input');
    const pfpImage = document.getElementById('profile-pic');

    profilePicInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                pfpImage.src = event.target.result; // Display uploaded image
            };
            reader.readAsDataURL(file);
        }
    });

    // Save the profile picture in localStorage (optional, if needed)
    profilePicInput.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                localStorage.setItem('profilePic', event.target.result);
            };
            reader.readAsDataURL(file);
        }
    });
    

    
    // Sliding Menu Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.clear();  // Clear all stored data
        alert('You have been logged out!');
        window.location.href = 'login.html';  // Redirect to login page
    });
});
