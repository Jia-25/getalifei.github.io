// Toggle Menu
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('open');
}

// Display Motivation Dialog
function showMotivation() {
    const dialog = document.getElementById('motivation-dialog');
    dialog.style.display = 'block';
}

// Close Motivation Dialog
function closeDialog() {
    const dialog = document.getElementById('motivation-dialog');
    dialog.style.display = 'none';
}

// Update User Name
function setUserName(name) {
    document.getElementById('userName').textContent = name;
}

// Generate Calendar for the current month
function generateCalendar() {
    const calendar = document.getElementById('calendar');
    const date = new Date();
    const month = date.getMonth();
    const year = date.getFullYear();

    // Set the month/year title
    const monthNames = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ];
    document.querySelector("header h1").textContent = `${monthNames[month]} ${year}`;

    // Get the first day of the month
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const totalDays = lastDay.getDate();
    const firstDayWeekday = firstDay.getDay();

    // Clear any previous calendar days
    calendar.innerHTML = '';

    // Add empty cells for days before the start of the month
    for (let i = 0; i < firstDayWeekday; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day', 'empty');
        calendar.appendChild(emptyCell);
    }

    // Add the days of the month
    for (let i = 1; i <= totalDays; i++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.innerHTML = `<a href="#">${i}</a>`;
        calendar.appendChild(dayCell);
    }
}

// Initialize the calendar
generateCalendar();
