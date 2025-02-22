// Dummy data for student (This will come from localStorage)
let userData = {
    name: localStorage.getItem('name'),
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
    profilePic: "studentpfp.jpg", // Default profile picture name
};

// Display the student info on the profile page
document.getElementById("student-name").textContent = userData.name;
document.getElementById("student-email").textContent = userData.email;

// Default values for the profile picture
document.getElementById("profile-pic").src = userData.profilePic;

// Handle profile picture upload
function uploadProfilePic() {
    const fileInput = document.getElementById("file-upload");
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const fileExtension = file.name.split('.').pop(); // Get the file extension
            const newFileName = `studentpfp.${fileExtension}`; // Fixed file name
            
            // Update the profile pic URL with the newly named file
            userData.profilePic = newFileName;

            // Update the profile picture on the page
            document.getElementById("profile-pic").src = e.target.result;
        };

        reader.readAsDataURL(file); // Read the uploaded file and display it
    }
}

// Handle password change
document.getElementById("password-change-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const oldPassword = document.getElementById("old-password").value;
    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const errorMessage = document.getElementById("password-error");

    // Check if old password is correct
    if (oldPassword !== userData.password) {
        errorMessage.textContent = "Old password is incorrect!";
        errorMessage.style.display = "block";
        return;
    }

    // Check if new password and confirm password match
    if (newPassword !== confirmPassword) {
        errorMessage.textContent = "New passwords do not match!";
        errorMessage.style.display = "block";
        return;
    }

    // Update the password
    userData.password = newPassword;
    errorMessage.textContent = "Password changed successfully!";
    errorMessage.style.color = "green";
    errorMessage.style.display = "block";
});
