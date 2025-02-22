// Initialize the calendar
const calendar = document.getElementById("calendar");
const eventPanel = document.getElementById("event-panel");
const closeEventPanel = document.getElementById("closeEventPanel");
const saveEventButton = document.getElementById("save-event");
const deleteEventButton = document.getElementById("delete-event");
const eventTitleInput = document.getElementById("event-title");
const eventDescriptionInput = document.getElementById("event-description");
const selectedDateSpan = document.getElementById("selected-date");

// Initialize some sample events
let events = {};

// Create and display the calendar
function generateCalendar(month, year) {
    calendar.innerHTML = '';
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

        // Mark the day if there is an event
        const dateKey = `${year}-${month + 1}-${day}`;
        if (events[dateKey]) {
            cell.style.backgroundColor = "#cfe2f3";
        }

        cell.addEventListener("click", () => openEventPanel(dateKey));
        calendar.appendChild(cell);
    }
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

// Toggle menu visibility
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Initialize the calendar with the current month
const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
generateCalendar(currentMonth, currentYear);
