document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

document.getElementById("closeEventMenu").addEventListener("click", function() {
    document.getElementById("eventMenu").classList.remove("open");
});

const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const prevMonth = document.getElementById("prevMonth");
const nextMonth = document.getElementById("nextMonth");

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
let events = JSON.parse(localStorage.getItem("calendarEvents")) || {};

function updateCalendar() {
    calendar.innerHTML = "";
    let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
    monthYear.textContent = new Date(currentYear, currentMonth).toLocaleString("default", { month: "long", year: "numeric" });

    for (let day = 1; day <= daysInMonth; day++) {
        let dayDiv = document.createElement("div");
        dayDiv.textContent = day;
        dayDiv.dataset.date = `${currentYear}-${currentMonth + 1}-${day}`;

        if (events[dayDiv.dataset.date]) {
            dayDiv.classList.add("has-event");
        }

        dayDiv.addEventListener("click", function() {
            openEventMenu(dayDiv.dataset.date);
        });

        calendar.appendChild(dayDiv);
    }
}

function openEventMenu(date) {
    document.getElementById("eventMenu").classList.add("open");
    document.getElementById("selectedDate").textContent = date;
    document.getElementById("eventList").innerHTML = "";

    if (events[date]) {
        events[date].forEach((eventText, index) => {
            let li = document.createElement("li");
            li.textContent = eventText;

            let deleteBtn = document.createElement("button");
            deleteBtn.textContent = "X";
            deleteBtn.style.marginLeft = "10px";
            deleteBtn.addEventListener("click", function() {
                events[date].splice(index, 1);
                if (events[date].length === 0) {
                    delete events[date];
                }
                localStorage.setItem("calendarEvents", JSON.stringify(events));
                updateCalendar();
                openEventMenu(date);
            });

            li.appendChild(deleteBtn);
            document.getElementById("eventList").appendChild(li);
        });
    }
}

document.getElementById("addEventBtn").addEventListener("click", function() {
    let selectedDate = document.getElementById("selectedDate").textContent;
    let eventText = document.getElementById("eventInput").value.trim();

    if (eventText) {
        if (!events[selectedDate]) {
            events[selectedDate] = [];
        }
        events[selectedDate].push(eventText);
        localStorage.setItem("calendarEvents", JSON.stringify(events));
        document.getElementById("eventInput").value = "";
        updateCalendar();
        openEventMenu(selectedDate);
    }
});

prevMonth.addEventListener("click", function() {
    if (currentMonth === 0) {
        currentMonth = 11;
        currentYear--;
    } else {
        currentMonth--;
    }
    updateCalendar();
});

nextMonth.addEventListener("click", function() {
    if (currentMonth === 11) {
        currentMonth = 0;
        currentYear++;
    } else {
        currentMonth++;
    }
    updateCalendar();
});

updateCalendar();
