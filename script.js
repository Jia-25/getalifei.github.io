document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    let isValid = true;

    // Reset error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match!';
        isValid = false;
    }

    // Check password strength
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!password.match(passwordRegex)) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long and contain a number.';
        isValid = false;
    }

    // Check if email is valid
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email.match(emailRegex)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    if (!isValid) {
        return;
    }

    // Simulate successful sign-up (you can replace this with actual backend integration)
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);

    // Show success message (optional)
    alert("Sign-up successful!");

    // Save "Remember me" for session if checked
    if (document.getElementById('remember').checked) {
        localStorage.setItem('rememberMe', 'true');
    }

    // Redirect to the dashboard page after sign-up
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
});

// Enable sign up button if form is valid
document.getElementById('signup-form').addEventListener('input', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    const isFormValid = name && email && password && confirmPassword;
    document.getElementById('submit-btn').disabled = !isFormValid;
});
