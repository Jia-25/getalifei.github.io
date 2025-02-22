// Sliding Menu Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Calendar Logic
const calendarGrid = document.getElementById("calendarGrid");
const monthYear = document.getElementById("monthYear");

let currentDate = new Date();
let selectedDate = null;
let events = {}; // Store events in a dictionary

// Function to render calendar
function renderCalendar() {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    monthYear.innerHTML = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

    calendarGrid.innerHTML = ''; // Clear the grid
    
    // Render empty spaces before the 1st day
    for (let i = 0; i < firstDay.getDay(); i++) {
        const emptyDiv = document.createElement("div");
        calendarGrid.appendChild(emptyDiv);
    }
    
    // Render the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dateDiv = document.createElement("div");
        dateDiv.textContent = day;
        dateDiv.dataset.date = `${year}-${month + 1}-${day}`;
        
        // Add event mark if there's an event on that day
        if (events[dateDiv.dataset.date]) {
            dateDiv.style.backgroundColor = '#aaf';
        }

        dateDiv.addEventListener("click", () => openEventSlide(dateDiv.dataset.date));
        calendarGrid.appendChild(dateDiv);
    }
}

// Function to open the event slide
function openEventSlide(date) {
    selectedDate = date;
    document.getElementById("eventSlide").classList.add("open");
    const event = events[date];
    
    if (event) {
        document.getElementById("eventTitle").value = event.title;
        document.getElementById("eventDesc").value = event.description;
    } else {
        document.getElementById("eventTitle").value = '';
        document.getElementById("eventDesc").value = '';
    }
}

// Close the event slide
document.getElementById("closeSlide").addEventListener("click", () => {
    document.getElementById("eventSlide").classList.remove("open");
});

// Handle event form submission
document.getElementById("eventForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const title = document.getElementById("eventTitle").value;
    const description = document.getElementById("eventDesc").value;
    
    if (selectedDate) {
        events[selectedDate] = { title, description };
        renderCalendar(); // Re-render the calendar with the new event
        document.getElementById("eventSlide").classList.remove("open");
    }
});

// Handle event deletion
document.getElementById("deleteEvent").addEventListener("click", () => {
    if (selectedDate) {
        delete events[selectedDate];
        renderCalendar(); // Re-render the calendar after deletion
        document.getElementById("eventSlide").classList.remove("open");
    }
});

// Navigate to previous/next month
document.querySelector('.prev').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.querySelector('.next').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Initialize the calendar
renderCalendar();
