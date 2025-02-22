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
    // Update the displayed month and year
    currentMonthYear.textContent = `${getMonthName(month)} ${year}`;

    // Clear previous calendar content
    calendar.innerHTML = '';
    weekdays.innerHTML = ''; // Clear the weekdays row

    // Generate weekday labels (Sun, Mon, Tue, etc.)
    const weekdaysLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    weekdaysLabels.forEach(day => {
        const weekdayCell = document.createElement("div");
        weekdayCell.textContent = day;
        weekdays.appendChild(weekdayCell);
    });

    // Generate the days of the month
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Generate empty cells for the first few days of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement("div");
        emptyCell.classList.add("calendar-cell");
        calendar.appendChild(emptyCell);
    }

    // Generate the calendar days
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.classList.add("calendar-cell");
        cell.textContent = day;

        // Highlight days with events
        const dateKey = `${year}-${month + 1}-${day}`;
        if (events[dateKey]) {
            cell.style.backgroundColor = "#cfe2f3";
        }

        // Add click event to open the event panel
        cell.addEventListener("click", () => openEventPanel(dateKey));
        calendar.appendChild(cell);
    }
}

// Function to get the month name
function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}

// Open the event panel for the selected date
function openEventPanel(date) {
    const event = events[date] || { title: '', description: '' };
    eventTitleInput.value = event.title;
    eventDescriptionInput.value = event.description;
    selectedDateSpan.textContent = date;
    eventPanel.classList.add("open");

    saveEventButton.onclick = () => saveEvent(date);
    deleteEventButton.onclick = () => deleteEvent(date);
}

// Save or update the event
function saveEvent(date) {
    events[date] = {
        title: eventTitleInput.value,
        description: eventDescriptionInput.value
    };
    generateCalendar(currentMonth, currentYear);
    closeEventPanelFunction();
}

// Delete the event
function deleteEvent(date) {
    delete events[date];
    generateCalendar(currentMonth, currentYear);
    closeEventPanelFunction();
}

// Close the event panel
function closeEventPanelFunction() {
    eventPanel.classList.remove("open");
}

// Handle previous month button click
document.getElementById("prevMonthBtn").addEventListener("click", () => {
    if (currentMonth === 0) {
        currentMonth = 11; // Go to December
        currentYear--;
    } else {
        currentMonth--;
    }
    generateCalendar(currentMonth, currentYear);
});

// Handle next month button click
document.getElementById("nextMonthBtn").addEventListener("click", () => {
    if (currentMonth === 11) {
        currentMonth = 0; // Go to January
        currentYear++;
    } else {
        currentMonth++;
    }
    generateCalendar(currentMonth, currentYear);
});

// Handle previous year button click
document.getElementById("prevYearBtn").addEventListener("click", () => {
    currentYear--;
    generateCalendar(currentMonth, currentYear);
});

// Handle next year button click
document.getElementById("nextYearBtn").addEventListener("click", () => {
    currentYear++;
    generateCalendar(currentMonth, currentYear);
});

// Close the event panel when the cross button is clicked
closeEventPanel.addEventListener("click", closeEventPanelFunction);

// Initialize the calendar with the current month
generateCalendar(currentMonth, currentYear);

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

// The rest of your calendar JavaScript remains the same...

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

