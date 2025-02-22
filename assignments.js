// Menu toggle functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Trigger file input click when upload button is clicked
document.getElementById("uploadBtn").addEventListener("click", function() {
    const fileInput = document.getElementById("fileInput");
    fileInput.click(); // Trigger the file explorer
});

// Handle file selection
document.getElementById("fileInput").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const filePreviewContainer = document.getElementById("filePreviewContainer");
        const previewButton = document.createElement("button");
        previewButton.textContent = "Preview File";
        previewButton.classList.add("preview");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete File";
        deleteButton.classList.add("delete");

        deleteButton.addEventListener("click", function() {
            // Reset file input and remove preview and delete buttons
            document.getElementById("fileInput").value = '';
            filePreviewContainer.innerHTML = '';
        });

        previewButton.addEventListener("click", function() {
            const url = URL.createObjectURL(file);
            window.open(url); // Open file in a new tab
        });

        filePreviewContainer.innerHTML = ''; // Clear previous previews
        filePreviewContainer.appendChild(previewButton);
        filePreviewContainer.appendChild(deleteButton);
    }
});

// Handle Plus Sign click to create new boxes
let count = 0;
document.getElementById("plusSign").addEventListener("click", function() {
    if (count < 4) {
        count++;
        const newBox = document.createElement("div");
        newBox.classList.add("box");
        newBox.innerHTML = `
            <h3>Upload Assignment</h3>
            <input type="file" class="fileInput" accept=".pdf" style="display: none;" />
            <button class="uploadBtn">Upload Assignment</button>
            <div class="filePreviewContainer"></div>
        `;

        document.querySelector(".right").appendChild(newBox);

        // Open file explorer when button clicked
        newBox.querySelector(".uploadBtn").addEventListener("click", function() {
            const fileInput = newBox.querySelector(".fileInput");
            fileInput.click(); // Trigger file explorer
        });

        // Handle file selection for the new box
        newBox.querySelector(".fileInput").addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const filePreviewContainer = newBox.querySelector(".filePreviewContainer");
                const previewButton = document.createElement("button");
                previewButton.textContent = "Preview File";
                previewButton.classList.add("preview");

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete File";
                deleteButton.classList.add("delete");

                deleteButton.addEventListener("click", function() {
                    fileInput.value = ''; // Reset file input
                    filePreviewContainer.innerHTML = ''; // Clear preview and delete button
                });

                previewButton.addEventListener("click", function() {
                    const url = URL.createObjectURL(file);
                    window.open(url);
                });

                filePreviewContainer.innerHTML = ''; // Clear previous previews
                filePreviewContainer.appendChild(previewButton);
                filePreviewContainer.appendChild(deleteButton);
            }
        });

        // Replace plus sign container with upload assignment content
        document.getElementById("plusSignContainer").style.display = 'none';
    }
});
