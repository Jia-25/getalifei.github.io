document.addEventListener('DOMContentLoaded', function() {
    // Fetch data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age') || '';  // Use empty string if age is not saved

    // Display the fetched data
    document.getElementById('student-name').textContent = name || "Name not set";
    document.getElementById('student-email').textContent = email || "Email not set";

    // Set the age input value
    document.getElementById('student-age').textContent = age || "Age not set";

    // Handle profile picture upload
    const profilePicInput = document.getElementById('file-input');
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
        const newAge = prompt("Enter new age:", document.getElementById('student-age').textContent);
        if (newAge && !isNaN(newAge)) {
            localStorage.setItem('age', newAge); // Save the age in localStorage
            document.getElementById('student-age').textContent = newAge; // Update displayed age
            alert('Profile updated successfully!');
        } else {
            alert('Please enter a valid age.');
        }
    });
});

// Menu toggle functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Editable Age functionality
function editAge() {
    const currentAge = document.getElementById("student-age").textContent;
    const newAge = prompt("Enter new age:", currentAge);
    if (newAge) {
        document.getElementById("student-age").textContent = newAge;
    }
}

// Profile picture upload functionality
function uploadProfilePic() {
    const fileInput = document.getElementById("file-input");
    const profilePic = document.getElementById("pfp");

    const reader = new FileReader();

    reader.onload = function(e) {
        profilePic.src = e.target.result;
    }

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    }
}
