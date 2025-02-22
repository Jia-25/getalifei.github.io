document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

let assignmentCount = 1;
const maxAssignments = 5;

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
        const uploadBox = document.getElementById("uploadBox");
        uploadBox.innerHTML = `
            <p>Uploaded: ${file.name}</p>
            <button class="preview-btn" onclick="previewFile('${URL.createObjectURL(file)}')">Preview File</button>
            <button class="delete-btn" onclick="deleteFile()">Delete File</button>
        `;
    }
}

function previewFile(fileUrl) {
    window.open(fileUrl, "_blank");
}

function deleteFile() {
    const uploadBox = document.getElementById("uploadBox");
    uploadBox.innerHTML = `
        <input type="file" id="fileInput" accept=".pdf" style="display: none;" onchange="handleFileUpload(event)">
        <button class="upload-btn" onclick="document.getElementById('fileInput').click()">Upload Assignment</button>
    `;
}

function addNewBox() {
    if (assignmentCount >= maxAssignments) return;
    assignmentCount++;
    
    const container = document.getElementById("assignmentContainer");
    
    const newUploadBox = document.createElement("div");
    newUploadBox.className = "assignment-box upload-box";
    newUploadBox.innerHTML = `
        <input type="file" accept=".pdf" style="display: none;" onchange="handleFileUpload(event)">
        <button class="upload-btn" onclick="document.getElementById('fileInput').click()">Upload Assignment</button>
    `;
    
    const newPlusBox = document.createElement("div");
    newPlusBox.className = "assignment-box plus-box";
    newPlusBox.textContent = "+";
    newPlusBox.onclick = addNewBox;
    
    container.replaceChild(newUploadBox, container.lastChild);
    container.appendChild(newPlusBox);
}
