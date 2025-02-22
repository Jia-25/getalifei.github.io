// Function to get the number of days in a month
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

// Function to generate the calendar for the current month
function generateCalendar(month, year) {
    const calendarDaysContainer = document.getElementById("calendarDays");
    const currentMonth = document.getElementById("currentMonth");
    const currentYear = document.getElementById("currentYear");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    currentMonth.innerHTML = monthNames[month];
    currentYear.innerHTML = year;

    // Calculate the first day of the month
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = getDaysInMonth(month, year);

    // Clear previous calendar days
    calendarDaysContainer.innerHTML = "";

    // Add empty divs for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement("div");
        emptyDay.classList.add("calendar-day", "empty");
        calendarDaysContainer.appendChild(emptyDay);
    }

    // Add the actual days of the month
    for (let i = 1; i <= daysInMonth; i++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("calendar-day");
        dayElement.innerHTML = `<span>${i}</span>`;

        const dateKey = `${month + 1}/${i}/${year}`;
        const storedEvent = localStorage.getItem(dateKey);
        if (storedEvent) {
            const event = JSON.parse(storedEvent);
            const eventIndicator = document.createElement("div");
            eventIndicator.classList.add("event-indicator");
            eventIndicator.innerText = event.name;
            dayElement.appendChild(eventIndicator);
            dayElement.classList.add("has-event");
        }

        // Event listener to open modal for editing or adding events
        dayElement.addEventListener("click", () => openModal(dateKey));
        calendarDaysContainer.appendChild(dayElement);
    }

    // Event listeners for prev/next month buttons
    prevButton.onclick = function () {
        if (month === 0) {
            month = 11;
            year--;
        } else {
            month--;
        }
        generateCalendar(month, year);
    };

    nextButton.onclick = function () {
        if (month === 11) {
            month = 0;
            year++;
        } else {
            month++;
        }
        generateCalendar(month, year);
    };
}

// Open modal to add/edit event
function openModal(date) {
    const storedEvent = localStorage.getItem(date);
    if (storedEvent) {
        const event = JSON.parse(storedEvent);
        document.getElementById("modalTitle").innerText = "Edit Event";
        document.getElementById("eventName").value = event.name;
        document.getElementById("eventDescription").value = event.description;
        document.getElementById("deleteEventBtn").style.display = "inline-block";
    } else {
        document.getElementById("modalTitle").innerText = "Add Event";
        document.getElementById("eventName").value = "";
        document.getElementById("eventDescription").value = "";
        document.getElementById("deleteEventBtn").style.display = "none";
    }
    document.getElementById("selectedDate").innerText = date;
    document.getElementById("addEventModal").style.display = "block";
}

// Close modal
function closeModal() {
    document.getElementById("addEventModal").style.display = "none";
}

// Save event to calendar
function saveEvent() {
    const date = document.getElementById("selectedDate").innerText;
    const name = document.getElementById("eventName").value;
    const description = document.getElementById("eventDescription").value;

    if (name && description) {
        const event = { name, description };
        localStorage.setItem(date, JSON.stringify(event));
        generateCalendar(currentMonth, currentYear);
        closeModal();
    } else {
        alert("Please fill in all fields!");
    }
}

// Delete event from calendar
function deleteEvent() {
    const date = document.getElementById("selectedDate").innerText;
    localStorage.removeItem(date);
    generateCalendar(currentMonth, currentYear);
    closeModal();
}

// Load the calendar with the current month and year
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

generateCalendar(currentMonth, currentYear);
