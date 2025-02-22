document.addEventListener('DOMContentLoaded', function() {

    // Sliding Menu Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});
    
    // Fetch data from localStorage
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const age = localStorage.getItem('age') || '';  
    const address = localStorage.getItem('address') || '';  
    const profilePic = localStorage.getItem('profilePic') || 'studentpfp.jpg';

    // Display the fetched data
    document.getElementById('name-text').textContent = name || "Click to edit your name";
    document.getElementById('email').textContent = email || "Email not set";
    document.getElementById('age').textContent = age || "Age not set";
    document.getElementById('profile-pic').src = profilePic;

    // Editable Fields (Name, Email, Age, Address)
    document.getElementById('email').addEventListener('click', editEmail);
    document.getElementById('age').addEventListener('click', editAge);

    // Profile Picture Upload
    document.getElementById('file-input').addEventListener('change', uploadProfilePic);

    // Menu toggle functionality
    document.getElementById("openBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.add("open");
    });

    document.getElementById("closeBtn").addEventListener("click", function() {
        document.getElementById("menu").classList.remove("open");
    });

    // Logout functionality
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.clear();  // Clear all stored data
        alert('You have been logged out!');
        window.location.href = 'login.html';  // Redirect to login page
    });
});

// Editable Name Function
function editName() {
    const nameBox = document.getElementById('name-box');
    const currentName = document.getElementById('name-text').textContent;

    nameBox.innerHTML = `
        <input type="text" id="name-input" value="${currentName}" />
        <button onclick="saveName()">Save</button>
    `;
}

// Save Name Function
function saveName() {
    const newName = document.getElementById('name-input').value;
    if (newName) {
        localStorage.setItem('name', newName);
        document.getElementById('name-text').textContent = newName;
        document.getElementById('name-box').innerHTML = `
            <p id="name-text">${newName}</p>
        `;
    } else {
        alert("Name cannot be empty!");
    }
}

// Editable Fields Functions (Email, Age)
function editEmail() {
    const newEmail = prompt("Enter new email:", document.getElementById('email').textContent);
    if (newEmail) {
        localStorage.setItem('email', newEmail);
        document.getElementById('email').textContent = newEmail;
    }
}

function editAge() {
    const newAge = prompt("Enter new age:", document.getElementById('age').textContent);
    if (newAge && !isNaN(newAge)) {
        localStorage.setItem('age', newAge);
        document.getElementById('age').textContent = newAge;
    } else {
        alert('Please enter a valid age.');
    }
}

// Profile Picture Upload Function
function uploadProfilePic() {
    const fileInput = document.getElementById("file-input");
    const profilePic = document.getElementById("profile-pic");

    const reader = new FileReader();
    reader.onload = function(e) {
        profilePic.src = e.target.result;
        localStorage.setItem('profilePic', e.target.result);  // Save the uploaded picture in localStorage
    }

    if (fileInput.files[0]) {
        reader.readAsDataURL(fileInput.files[0]);
    }
}

// Subscription Plan Function
function selectPlan(plan) {
    alert('You have successfully bought the ' + plan + ' plan!');
    localStorage.setItem('subscription', plan);
}
