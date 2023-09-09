function updateTime() {
    const utcTimeElement = document.getElementById("utc-time");
    const now = new Date();
    
    const options = {
        timeZone: "Africa/Lagos", 
        hour12: true,
        hour: 'numeric', 
        minute: 'numeric',
        second: 'numeric',
        timeZoneName: 'short'
    };

    const timeString = now.toLocaleString("en-US", options);
    utcTimeElement.textContent = `UTC+1 WAT ${timeString}`;
}

// Update the time every second (1000 milliseconds)
setInterval(updateTime, 1000);

// Call updateTime() immediately to display the time on page load
updateTime();



function updateDayOfWeek() {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const dayOfWeekString = daysOfWeek[now.getDay()];
    document.getElementById('current-day').textContent = dayOfWeekString;
}
updateDayOfWeek(); // Initial update
setInterval(updateDayOfWeek, 1000 * 60 * 60 * 24);