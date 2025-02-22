document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age') || '';  // Use empty string if age is not saved

    // Display the fetched data
    document.getElementById('nameDisplay').textContent = name || "Name not set";
    document.getElementById('emailDisplay').textContent = email || "Email not set";

    // Set the age input value
    document.getElementById('age').value = age;

    // Handle profile picture upload
    const profilePicInput = document.getElementById('profilePic');
    const pfpImage = document.getElementById('pfp');

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

    // Handle password change
    document.getElementById('changePasswordForm').addEventListener('submit', function(event) {
        event.preventDefault();

        const oldPassword = document.getElementById('oldPassword').value;
        const newPassword = document.getElementById('newPassword').value;
        const confirmNewPassword = document.getElementById('confirmNewPassword').value;

        const savedPassword = localStorage.getItem('password'); // Fetch the saved password from localStorage

        if (oldPassword === savedPassword) {
            if (newPassword === confirmNewPassword && newPassword.length >= 8) {
                // Save new password in localStorage
                localStorage.setItem('password', newPassword);
                alert('Password updated successfully!');
            } else {
                alert('New passwords do not match or are too short.');
            }
        } else {
            alert('Incorrect current password.');
        }
    });

    // Save the age
    document.getElementById('saveBtn').addEventListener('click', function() {
        const age = document.getElementById('age').value;
        localStorage.setItem('age', age); // Save the age in localStorage
        alert('Profile updated successfully!');
    });
});
