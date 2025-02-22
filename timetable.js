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
        const storedEvents = localStorage.getItem(dateKey);
        if (storedEvents) {
            const events = JSON.parse(storedEvents);
            events.forEach(event => {
                const eventIndicator = document.createElement("div");
                eventIndicator.classList.add("event-indicator");
                eventIndicator.innerText = event.name;
                dayElement.appendChild(eventIndicator);
                dayElement.classList.add("has-event");
            });
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
    const storedEvents = localStorage.getItem(date);
    const events = storedEvents ? JSON.parse(storedEvents) : [];
    document.getElementById("modalTitle").innerText = "Add Event";
    document.getElementById("eventName").value = "";
    document.getElementById("eventDescription").value = "";
    document.getElementById("deleteEventBtn").style.display = "none";
    document.getElementById("selectedDate").innerText = date;
    
    // Display the list of events in the modal (if any)
    const eventListContainer = document.getElementById("eventListContainer");
    eventListContainer.innerHTML = ""; // Clear previous events

    events.forEach((event, index) => {
        const eventItem = document.createElement("div");
        eventItem.classList.add("event-item");

        const eventName = document.createElement("div");
        eventName.innerText = event.name;
        eventItem.appendChild(eventName);

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-btn");
        deleteButton.onclick = function() {
            deleteEvent(date, index);
        };

        eventItem.appendChild(deleteButton);
        eventListContainer.appendChild(eventItem);
    });

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
        let events = JSON.parse(localStorage.getItem(date)) || [];
        events.push({ name, description });
        localStorage.setItem(date, JSON.stringify(events));

        generateCalendar(currentMonth, currentYear);
        closeModal();
    } else {
        alert("Please fill in all fields!");
    }
}

// Delete event from calendar
function deleteEvent(date, eventIndex) {
    const events = JSON.parse(localStorage.getItem(date));
    events.splice(eventIndex, 1); // Remove the event at the specified index
    localStorage.setItem(date, JSON.stringify(events));

    generateCalendar(currentMonth, currentYear);
    closeModal();
}

// Load the calendar with the current month and year
const currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

generateCalendar(currentMonth, currentYear);

// Function to get the number of days in a month (defined again for scope)
function getDaysInMonth(month, year) {
    return new Date(year, month + 1, 0).getDate();
}

// JavaScript for opening and closing the menu
function openMenu() {
    document.getElementById("myMenu").classList.remove("closed");
    document.getElementById("myMenu").classList.add("open");
}

function closeMenu() {
    document.getElementById("myMenu").classList.remove("open");
    document.getElementById("myMenu").classList.add("closed");
}

