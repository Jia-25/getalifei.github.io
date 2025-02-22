// Sign-up form validation and storage of data
document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    let valid = true;

    // Clear previous error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('password-error').textContent = '';
    document.getElementById('confirm-password-error').textContent = '';

    // Validate name
    if (name.trim() === '') {
        document.getElementById('name-error').textContent = 'Name is required.';
        valid = false;
    }

    // Validate email (basic check)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('email-error').textContent = 'Invalid email address.';
        valid = false;
    }

    // Validate password strength (basic check)
    if (password.length < 8) {
        document.getElementById('password-error').textContent = 'Password must be at least 8 characters long.';
        valid = false;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
        document.getElementById('confirm-password-error').textContent = 'Passwords do not match.';
        valid = false;
    }

    // If form is valid, store the data in localStorage and proceed with submission
    if (valid) {
        // Store the user data in localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);

        // Show success message (optional)
        alert("Sign-up successful!");

        // Redirect to the profile page after sign-up
        window.location.href = 'studentProfile.html'; // Redirect to the profile page
    } else {
        alert("Please fix the errors in the form.");
    }
});

// Enable submit button only when all fields are filled correctly
document.getElementById('signup-form').addEventListener('input', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const submitBtn = document.getElementById('submit-btn');

    // Enable submit button only if all fields are filled correctly
    if (name && email && password && confirmPassword) {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
});
