
// =========================
// RESET DATE FOR NEW VISIT
// =========================

localStorage.removeItem("selectedDate");

// =========================
// SELECT ELEMENTS
// =========================
// =========================
// ROMANTIC ALERT
// =========================

const romanticAlert =
    document.querySelector(".romantic-alert");

const alertOverlay =
    document.querySelector(".alert-overlay");

const alertClose =
    document.querySelector(".alert-close");


function showRomanticAlert() {

    romanticAlert.classList.add("show");

    alertOverlay.classList.add("show");

}


function hideRomanticAlert() {

    romanticAlert.classList.remove("show");

    alertOverlay.classList.remove("show");

}


alertClose.addEventListener(
    "click",
    hideRomanticAlert
);


alertOverlay.addEventListener(
    "click",
    hideRomanticAlert
);
const dateOptions =
    document.querySelectorAll(".date-option");

const continueButton =
    document.querySelector(".continue-btn");

const customDateButton =
    document.querySelector(".custom-date-option");

const calendar =
    document.querySelector(".romantic-calendar");

const calendarDays =
    document.querySelector(".calendar-days");

const calendarMonth =
    document.querySelector(".calendar-month");

const calendarYear =
    document.querySelector(".calendar-year");

const previousMonthButton =
    document.querySelector(".prev-month");

const nextMonthButton =
    document.querySelector(".next-month");


// =========================
// DATE VARIABLES
// =========================

let currentDate = new Date();

let selectedCustomDate = null;


// =========================
// FORMAT DATE
// =========================

function formatDate(date) {

    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric"
    };

    return date.toLocaleDateString(
        "en-US",
        options
    );
}


// =========================
// CREATE UPCOMING DATES
// =========================

function createUpcomingDates() {

    const today = new Date();

    dateOptions.forEach(
        (dateButton, index) => {

            const date =
                new Date(today);

            date.setDate(
                today.getDate() + index + 1
            );

            const day =
                dateButton.querySelector(".day");

            const number =
                dateButton.querySelector("strong");

            const month =
                dateButton.querySelector(".month");

            day.textContent =
                date.toLocaleDateString(
                    "en-US",
                    {
                        weekday: "short"
                    }
                ).toUpperCase();

            number.textContent =
                date.getDate();

            month.textContent =
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short"
                    }
                ).toUpperCase();

            dateButton.dataset.date =
                formatDate(date);

        }
    );

}


// =========================
// QUICK DATE SELECTION
// =========================

dateOptions.forEach(
    (dateButton) => {

        dateButton.addEventListener(
            "click",
            () => {

                dateOptions.forEach(
                    (button) => {
                        button.classList.remove(
                            "selected"
                        );
                    }
                );

                dateButton.classList.add(
                    "selected"
                );


                const selectedDate =
                    dateButton.dataset.date;


                localStorage.setItem(
                    "selectedDate",
                    selectedDate
                );

            }
        );

    }
);


// =========================
// CUSTOM DATE BUTTON
// =========================

customDateButton.addEventListener(
    "click",
    () => {

        calendar.classList.toggle(
            "open"
        );

        customDateButton.classList.add(
            "selected"
        );

        renderCalendar();

    }
);


// =========================
// RENDER CALENDAR
// =========================

function renderCalendar() {

    const year =
        currentDate.getFullYear();

    const month =
        currentDate.getMonth();


    const monthNames = [
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


    calendarMonth.textContent =
        monthNames[month];

    calendarYear.textContent =
        year;


    calendarDays.innerHTML =
        "";


    // =========================
    // FIRST DAY
    // =========================

    let firstDay =
        new Date(
            year,
            month,
            1
        ).getDay();


    // Convert Sunday-first to Monday-first

    firstDay =
        firstDay === 0
            ? 6
            : firstDay - 1;


    // =========================
    // DAYS IN MONTH
    // =========================

    const daysInMonth =
        new Date(
            year,
            month + 1,
            0
        ).getDate();


    // =========================
    // TODAY
    // =========================

    const today =
        new Date();

    today.setHours(
        0,
        0,
        0,
        0
    );


    // =========================
    // EMPTY DAYS
    // =========================

    for (
        let i = 0;
        i < firstDay;
        i++
    ) {

        const emptyDay =
            document.createElement(
                "div"
            );

        emptyDay.classList.add(
            "calendar-empty"
        );

        calendarDays.appendChild(
            emptyDay
        );

    }


    // =========================
    // CREATE DAYS
    // =========================

    for (
        let day = 1;
        day <= daysInMonth;
        day++
    ) {

        const dayButton =
            document.createElement(
                "button"
            );


        dayButton.type =
            "button";


        dayButton.classList.add(
            "calendar-date"
        );


        dayButton.textContent =
            day;


        const dateValue =
            new Date(
                year,
                month,
                day
            );


        // =========================
        // DISABLE PAST DATES
        // =========================

        if (dateValue < today) {

            dayButton.disabled =
                true;

            dayButton.classList.add(
                "disabled"
            );

        }


        // =========================
        // SELECT CALENDAR DATE
        // =========================

        dayButton.addEventListener(
            "click",
            () => {

                document
                    .querySelectorAll(
                        ".calendar-date"
                    )
                    .forEach(
                        (button) => {
                            button.classList.remove(
                                "selected"
                            );
                        }
                    );


                dayButton.classList.add(
                    "selected"
                );


                selectedCustomDate =
                    dateValue;


                localStorage.setItem(
                    "selectedDate",
                    formatDate(
                        dateValue
                    )
                );


                // Close calendar

                calendar.classList.remove(
                    "open"
                );


                // Keep custom option selected

                dateOptions.forEach(
                    (button) => {
                        button.classList.remove(
                            "selected"
                        );
                    }
                );


                customDateButton.classList.add(
                    "selected"
                );


                // Update custom date text

                const customText =
                    customDateButton.querySelector(
                        ".custom-date-text strong"
                    );


                if (customText) {

                    customText.textContent =
                        formatDate(
                            dateValue
                        );

                }

            }
        );


        calendarDays.appendChild(
            dayButton
        );

    }

}


// =========================
// PREVIOUS MONTH
// =========================

previousMonthButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        currentDate.setMonth(
            currentDate.getMonth() - 1
        );

        renderCalendar();

    }
);


// =========================
// NEXT MONTH
// =========================

nextMonthButton.addEventListener(
    "click",
    (event) => {

        event.stopPropagation();

        currentDate.setMonth(
            currentDate.getMonth() + 1
        );

        renderCalendar();

    }
);


// =========================
// CONTINUE TO PAGE 4
// =========================

continueButton.addEventListener(
    "click",
    () => {

        const selectedDate =
            localStorage.getItem(
                "selectedDate"
            );


        if (!selectedDate) {

           showRomanticAlert();
            return;

        }


        // Fade out

        document.body.classList.add(
            "page-exit"
        );


        // Navigate

        setTimeout(
            () => {

                window.location.href =
                    "page4.html";

            },
            350
        );

    }
);


// =========================
// INITIALIZE
// =========================

createUpcomingDates();

renderCalendar();