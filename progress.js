document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

function addCourse() {
    let courseName = document.getElementById("courseName").value;
    let creditHours = parseFloat(document.getElementById("creditHours").value);
    let gradePoint = parseFloat(document.getElementById("grade").value);

    if (courseName === "" || isNaN(creditHours) || creditHours <= 0) {
        alert("Please enter valid course details.");
        return;
    }

    let table = document.getElementById("courseTable");
    let row = table.insertRow();
    row.insertCell(0).textContent = courseName;
    row.insertCell(1).textContent = creditHours;
    row.insertCell(2).textContent = gradePoint.toFixed(2);
    
    let deleteCell = row.insertCell(3);
    let deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        row.remove();
        calculateSGPA();
    };
    deleteCell.appendChild(deleteButton);

    calculateSGPA();
}

function calculateSGPA() {
    let table = document.getElementById("courseTable");
    let rows = table.getElementsByTagName("tr");
    
    let totalGradePoints = 0;
    let totalCredits = 0;

    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td");
        if (cells.length >= 3) {
            let credit = parseFloat(cells[1].textContent);
            let grade = parseFloat(cells[2].textContent);

            totalGradePoints += credit * grade;
            totalCredits += credit;
        }
    }

    let sgpa = totalCredits === 0 ? 0 : totalGradePoints / totalCredits;
    document.getElementById("sgpa").textContent = sgpa.toFixed(2);
}
