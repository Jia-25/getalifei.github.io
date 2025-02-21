document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    // Simulate successful form submission (e.g., print data to console or send to backend)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
    alert("Sign up successful!");
});
