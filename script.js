document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulate successful sign-up (you can replace this with actual backend integration)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Show success message (optional)
    alert("Sign-up successful!");

    // Redirect to the dashboard page after sign-up
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
});
