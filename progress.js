// Menu Toggle
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});
// Optional: Automatically close the menu when clicking outside
document.addEventListener("click", function(event) {
    const menu = document.getElementById("menu");
    const openBtn = document.getElementById("openBtn");

    if (!menu.contains(event.target) && !openBtn.contains(event.target)) {
        menu.classList.remove("open");  // Close menu if clicked outside
    }
});


// progress.js

document.getElementById("addCourseBtn").addEventListener("click", function() {
    // Get course details
    const courseName = document.getElementById("courseName").value;
    const creditHours = parseInt(document.getElementById("creditHours").value);
    const grade = document.getElementById("grade").value;

    // Check if input values are valid
    if (!courseName || isNaN(creditHours) || isNaN(grade)) {
        alert("Please fill in all fields correctly.");
        return;
    }

    // Add course to table
    const table = document.getElementById("coursesTable").getElementsByTagName('tbody')[0];
    const row = table.insertRow();

    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);

    cell1.textContent = courseName;
    cell2.textContent = creditHours;
    cell3.textContent = getGradeLetter(grade);

    // Clear input fields
    document.getElementById("courseName").value = "";
    document.getElementById("creditHours").value = "";
    document.getElementById("grade").value = "";

    // Recalculate SGPA
    calculateSGPA();
});

function calculateSGPA() {
    const table = document.getElementById("coursesTable").getElementsByTagName('tbody')[0];
    let totalCredits = 0;
    let weightedGradePoints = 0;

    for (let row of table.rows) {
        const creditHours = parseInt(row.cells[1].textContent);
        const grade = row.cells[2].textContent;
        const gradePoints = getGradePoints(grade);

        totalCredits += creditHours;
        weightedGradePoints += gradePoints * creditHours;
    }

    const sgpa = weightedGradePoints / totalCredits;
    document.getElementById("sgpaValue").textContent = sgpa.toFixed(2);
}

function getGradePoints(grade) {
    switch(grade) {
        case "A": return 4.0;
        case "A-": return 3.7;
        case "B+": return 3.3;
        case "B": return 3.0;
        case "B-": return 2.7;
        case "C+": return 2.3;
        case "C": return 2.0;
        case "C-": return 1.7;
        case "D": return 1.0;
        case "F": return 0.0;
        default: return 0.0;
    }
}

function getGradeLetter(gradePoints) {
    switch(gradePoints) {
        case 4.0: return "A";
        case 3.7: return "A-";
        case 3.3: return "B+";
        case 3.0: return "B";
        case 2.7: return "B-";
        case 2.3: return "C+";
        case 2.0: return "C";
        case 1.7: return "C-";
        case 1.0: return "D";
        case 0.0: return "F";
        default: return "";
    }
}
