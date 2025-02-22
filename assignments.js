document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });

    // Select all upload boxes
    document.querySelectorAll(".box").forEach(box => {
        const plusSign = box.querySelector(".plus-sign");
        const fileInput = box.querySelector(".fileInput");
        const buttonContainer = box.querySelector(".button-container");
        const previewBtn = box.querySelector(".preview-btn");
        const deleteBtn = box.querySelector(".delete-btn");

        // Handle file selection
        plusSign.addEventListener("click", function() {
            fileInput.click(); // Trigger file input when plus sign is clicked
        });

        // Listen for file input change (when user selects a file)
        fileInput.addEventListener("change", function() {
            const file = this.files[0]; // Get the selected file

            if (file) {
                // Hide plus sign and show buttons
                plusSign.style.display = "none";
                buttonContainer.style.display = "flex"; // Make the preview and delete buttons visible

                // Preview button functionality
                previewBtn.addEventListener("click", function() {
                    const url = URL.createObjectURL(file); // Create a URL for the selected file
                    window.open(url); // Open the file in a new window/tab for preview
                });

                // Delete button functionality
                deleteBtn.addEventListener("click", function() {
                    fileInput.value = ""; // Clear the file input
                    buttonContainer.style.display = "none"; // Hide the buttons
                    plusSign.style.display = "block"; // Show the plus sign again
                });
            }
        });
    });
});
