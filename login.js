document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simulating user authentication (you can replace this with actual login logic)
    if (username && password) {
        console.log("Username:", username);
        console.log("Password:", password);

        // Redirecting to dashboard page
        window.location.href = 'dashboard.html'; // This is where you will send the user
    } else {
        alert("Please enter both username and password.");
    }
});
