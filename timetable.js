// Sliding Menu Functionality
const menu = document.getElementById("menu");
const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");

openBtn.addEventListener("click", () => {
    menu.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove("open");
});

// Initialize the calendar
const calendar = document.getElementById("calendar");
const eventPanel = document.getElementById("event-panel");
const closeEventPanel = document.getElementById("closeEventPanel");
const saveEventButton = document.getElementById("save-event");
const deleteEventButton = document.getElementById("delete-event");
const eventTitleInput = document.getElementById("event-title");
const eventDescriptionInput = document.getElementById("event-description");
const selectedDateSpan = document.getElementById("selected-date");
const weekdays = document.getElementById("weekdays");
const currentMonthYear = document.getElementById("currentMonthYear");

// Initialize current month and year
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Initialize some sample events
let events = {};

// Function to generate and display the calendar for a specific month and year
function generateCalendar(month, year) {
    currentMonthYear.textContent = `${getMonthName(month)} ${year}`;
    calendar.innerHTML = '';
    weekdays.innerHTML = '';
    
    const weekdaysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdaysLabels.forEach(day => {
        const weekdayCell = document.createElement("div");
        weekdayCell.textContent = day;
        weekdays.appendChild(weekdayCell);
    });
    
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-cell");
        calendar.appendChild(emptyCell);
    }
    
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.classList.add("calendar-cell");
        cell.textContent = day;
        
        const dateKey = `${year}-${month + 1}-${day}`;
        if (events[dateKey]) {
            cell.style.backgroundColor = "#cfe2f3";
        }
        
        cell.addEventListener("click", () => openEventPanel(dateKey));
        calendar.appendChild(cell);
    }
}

function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

function openEventPanel(date) {
    const event = events[date] || { title: '', description: '' };
    eventTitleInput.value = event.title;
    eventDescriptionInput.value = event.description;
    selectedDateSpan.textContent = date;
    eventPanel.classList.add("open");
    
    saveEventButton.onclick = () => saveEvent(date);
    deleteEventButton.onclick = () => deleteEvent(date);
}

function saveEvent(date) {
    events[date] = {
        title: eventTitleInput.value,
        description: eventDescriptionInput.value
    };
    generateCalendar(currentMonth, currentYear);
    closeEventPanelFunction();
}

function deleteEvent(date) {
    delete events[date];
    generateCalendar(currentMonth, currentYear);
    closeEventPanelFunction();
}

function closeEventPanelFunction() {
    eventPanel.classList.remove("open");
}

document.getElementById("prevMonthBtn").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("nextMonthBtn").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("prevYearBtn").addEventListener("click", () => {
    currentYear--;
    generateCalendar(currentMonth, currentYear);
});

document.getElementById("nextYearBtn").addEventListener("click", () => {
    currentYear++;
    generateCalendar(currentMonth, currentYear);
});

closeEventPanel.addEventListener("click", closeEventPanelFunction);

generateCalendar(currentMonth, currentYear);
