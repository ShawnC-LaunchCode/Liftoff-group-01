const date = new Date();
const day = date.getDate();
const month = date.getMonth();
const year = date.getFullYear();
const calendar = document.getElementById('calendar');
const currentDate = document.querySelector(".calendar-current-date");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const weekdays = [
    "Sunday", 
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

function load() {
    const firstDay = new Date(year, month, 1);
    const lastDate = new Date(year, month + 1, 0).getDate();
    const lastDay = new Date(year, month, lastDate);

    console.log(lastDay);

    const dateString = firstDay.toLocaleDateString('en-us', {
        weekday: "long",
        year: "numeric",
        month: "numeric",
        day: "numeric",
    })

    currentDate.innerText = `${months[month]} ${year}`;

    const paddingDay = weekdays.indexOf(dateString.split(", ")[0]);

    for (let i = 1; i < paddingDay + lastDate; i++) {
        const calendarSquare = document.createElement('div');
        calendarSquare.classList.add('day');

        if (i > paddingDay) {
            calendarSquare.innerText = i - paddingDay;

            calendarSquare.addEventListener("click", () => console.log("click"));
        } else {
            calendarSquare.classList.add('padding')
        }
        calendar.appendChild(calendarSquare);
    }
}

load();