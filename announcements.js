// Sliding Menu Functionality
document.getElementById("openBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.add("open");
});

document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("open");
});

// Modal functionality to view the announcement details
function viewAnnouncement(id) {
    // Simulate loading announcement data
    const announcements = [
        {
            subject: "Important Update",
            from: "Admin",
            date: "Feb 22, 2025",
            content: "We have updated the schedule for the next semester. Please check your timetable."
        },
        {
            subject: "New Schedule",
            from: "Student Affairs",
            date: "Feb 21, 2025",
            content: "The new class schedule for the upcoming semester is now available on your dashboard."
        }
        // Add more announcements if needed
    ];

    const announcement = announcements[id - 1];

    document.getElementById("modalSubject").innerText = announcement.subject;
    document.getElementById("modalFrom").innerText = `From: ${announcement.from}`;
    document.getElementById("modalDate").innerText = `Date: ${announcement.date}`;
    document.getElementById("modalContent").innerText = announcement.content;

    // Show the modal
    document.getElementById("announcementModal").style.display = "flex";
}

// Close the modal
function closeModal() {
    document.getElementById("announcementModal").style.display = "none";
}
