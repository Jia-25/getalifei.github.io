// Menu toggle functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Upload button functionality
document.getElementById("uploadBtn").addEventListener("click", function() {
    document.getElementById("fileInput").click();
});

document.getElementById("fileInput").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
        const filePreviewContainer = document.getElementById("filePreviewContainer");
        const previewButton = document.createElement("button");
        previewButton.textContent = "Preview File";
        previewButton.classList.add("styled-btn");

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete File";
        deleteButton.classList.add("styled-btn");

        deleteButton.addEventListener("click", function() {
            document.getElementById("fileInput").value = '';
            filePreviewContainer.innerHTML = '';
        });

        previewButton.addEventListener("click", function() {
            const url = URL.createObjectURL(file);
            window.open(url);
        });

        filePreviewContainer.innerHTML = '';
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
            <button class="styled-btn uploadBtn">Upload Assignment</button>
            <div class="filePreviewContainer"></div>
        `;

        document.querySelector(".right").appendChild(newBox);

        newBox.querySelector(".uploadBtn").addEventListener("click", function() {
            newBox.querySelector(".fileInput").click();
        });

        newBox.querySelector(".fileInput").addEventListener("change", function() {
            const file = this.files[0];
            if (file) {
                const filePreviewContainer = newBox.querySelector(".filePreviewContainer");
                const previewButton = document.createElement("button");
                previewButton.textContent = "Preview File";
                previewButton.classList.add("styled-btn");

                const deleteButton = document.createElement("button");
                deleteButton.textContent = "Delete File";
                deleteButton.classList.add("styled-btn");

                deleteButton.addEventListener("click", function() {
                    fileInput.value = '';
                    filePreviewContainer.innerHTML = '';
                });

                previewButton.addEventListener("click", function() {
                    const url = URL.createObjectURL(file);
                    window.open(url);
                });

                filePreviewContainer.innerHTML = '';
                filePreviewContainer.appendChild(previewButton);
                filePreviewContainer.appendChild(deleteButton);
            }
        });

        document.getElementById("plusSignContainer").style.display = 'none';
    }
});
