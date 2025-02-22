// Menu toggle functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// File Upload Handling
function openFileInput() {
    document.getElementById("fileInput").click();
}

function handleFileUpload() {
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];
    
    if (file) {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
            const assignmentContainer = document.getElementById("assignmentsContainer");
            
            // Create a new assignment square
            const square = document.createElement("div");
            square.classList.add("square");
            
            const fileName = document.createElement("p");
            fileName.textContent = file.name;
            
            const fileLink = document.createElement("a");
            fileLink.href = event.target.result;
            fileLink.textContent = "Access Assignment";
            fileLink.target = "_blank";  // Open file in a new tab
            
            square.appendChild(fileName);
            square.appendChild(fileLink);
            assignmentContainer.appendChild(square);
        };
        
        fileReader.readAsDataURL(file); // Read the file as a data URL (for accessing content)
    }
}
