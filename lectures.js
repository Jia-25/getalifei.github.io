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
            fileInput.click();
        });

        // Listen for file input change
        fileInput.addEventListener("change", function() {
            const file = this.files[0];

            if (file) {
                // Hide plus sign and show buttons
                plusSign.style.display = "none";
                buttonContainer.style.display = "flex";

                // Preview button functionality
                previewBtn.addEventListener("click", function() {
                    const url = URL.createObjectURL(file);
                    window.open(url);
                });

                // Delete button functionality
                deleteBtn.addEventListener("click", function() {
                    fileInput.value = "";
                    buttonContainer.style.display = "none";
                    plusSign.style.display = "block";
                });
            }
        });
    });
});
