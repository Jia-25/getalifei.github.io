// Function to get the number of days in a month
function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
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
    const daysInMonth = getDaysInMonth(month + 1, year);

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

// Initialize the calendar with the current month and year
const currentDate = new Date();
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
