// Menu Toggle Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Motivation Circle Interaction
document.getElementById("motivationCircle").addEventListener("click", function() {
    // Show the dialog box
    const dialogBox = document.getElementById("dialogBox");
    dialogBox.classList.add("active");

    // Array of motivational quotes
    const quotes = [
        "You're doing great! Keep up the hard work!",
        "Believe in yourself and all that you are.",
        "Success is the sum of small efforts, repeated day in and day out.",
        "The harder you work for something, the greater you'll feel when you achieve it.",
        "Push yourself, because no one else is going to do it for you.",
        "Dream it. Wish it. Do it.",
        "Success doesn't come from what you do occasionally, it comes from what you do consistently.",
        "The only limit to our realization of tomorrow is our doubts of today.",
        "You are stronger than you think.",
        "Do something today that your future self will thank you for."
    ];

    // Function to change the quote in the dialog box
    function showRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length); // Randomly select an index
        const quoteText = document.getElementById("quoteText");
        quoteText.textContent = quotes[randomIndex]; // Change the quote
    }

    // Show a random quote
    showRandomQuote();

    // Disable clicking the dialog box for 5 seconds to avoid multiple quote changes
    dialogBox.style.pointerEvents = 'none';

    // Close the dialog after 5 seconds
    setTimeout(function() {
        dialogBox.classList.remove("active");
        dialogBox.style.pointerEvents = 'auto'; // Re-enable clicking after 5 seconds
    }, 5000);
});
