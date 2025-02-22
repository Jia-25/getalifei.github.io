// Updated timetable.js
const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let currentDate = new Date();

function renderCalendar() {
    calendar.innerHTML = "";
    
    // Create header for days of the week
    daysOfWeek.forEach(day => {
        let dayHeader = document.createElement("div");
        dayHeader.textContent = day;
        dayHeader.classList.add("day-header");
        calendar.appendChild(dayHeader);
    });
    
    let firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    let totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        let emptyCell = document.createElement("div");
        emptyCell.classList.add("empty-cell");
        calendar.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= totalDays; day++) {
        let dayCell = document.createElement("div");
        dayCell.textContent = day;
        dayCell.classList.add("day-cell");
        calendar.appendChild(dayCell);
    }
    
    monthYear.textContent = currentDate.toLocaleString("default", { month: "long", year: "numeric" });
}

prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();
