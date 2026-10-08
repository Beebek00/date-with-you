// =========================
// RESET TIME FOR NEW VISIT
// =========================

localStorage.removeItem("selectedTime");

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
// =========================
// SELECT ELEMENTS
// =========================

const timeOptions =
    document.querySelectorAll(".time-option");

const continueButton =
    document.querySelector(".continue-btn");

const customTimeButton =
    document.querySelector(".custom-time-btn");

const customTimePicker =
    document.querySelector(".custom-time-picker");

const confirmTimeButton =
    document.querySelector(".confirm-time-btn");

const selectedTimeDisplay =
    document.querySelector(".selected-time-display");

const hourValue =
    document.querySelector(".hour-value");

const minuteValue =
    document.querySelector(".minute-value");

const hourUp =
    document.querySelector(".hour-up");

const hourDown =
    document.querySelector(".hour-down");

const minuteUp =
    document.querySelector(".minute-up");

const minuteDown =
    document.querySelector(".minute-down");

const amOption =
    document.querySelector(".am-option");

const pmOption =
    document.querySelector(".pm-option");


// =========================
// TIME VARIABLES
// =========================

let selectedHour = 5;
let selectedMinute = 0;
let selectedPeriod = "PM";


// =========================
// FORMAT TIME
// =========================

function getFormattedTime() {

    const hour =
        String(selectedHour);

    const minute =
        String(selectedMinute)
            .padStart(2, "0");

    return `${hour}:${minute} ${selectedPeriod}`;
}


// =========================
// QUICK TIME OPTIONS
// =========================

timeOptions.forEach((timeButton) => {

    timeButton.addEventListener("click", () => {

        timeOptions.forEach((button) => {
            button.classList.remove("selected");
        });

        customTimeButton.classList.remove("selected");

        timeButton.classList.add("selected");

        const selectedTime =
            timeButton
                .querySelector(".time")
                .textContent
                .trim();

        localStorage.setItem(
            "selectedTime",
            selectedTime
        );

    });

});


// =========================
// OPEN CUSTOM PICKER
// =========================

customTimeButton.addEventListener("click", () => {

    customTimePicker.classList.toggle("open");

    customTimeButton.classList.add("selected");

    updatePickerDisplay();

});


// =========================
// HOUR UP
// =========================

hourUp.addEventListener("click", () => {

    selectedHour++;

    if (selectedHour > 12) {
        selectedHour = 1;
    }

    updatePickerDisplay();

});


// =========================
// HOUR DOWN
// =========================

hourDown.addEventListener("click", () => {

    selectedHour--;

    if (selectedHour < 1) {
        selectedHour = 12;
    }

    updatePickerDisplay();

});


// =========================
// MINUTE UP
// =========================

minuteUp.addEventListener("click", () => {

    selectedMinute += 5;

    if (selectedMinute >= 60) {
        selectedMinute = 0;
    }

    updatePickerDisplay();

});


// =========================
// MINUTE DOWN
// =========================

minuteDown.addEventListener("click", () => {

    selectedMinute -= 5;

    if (selectedMinute < 0) {
        selectedMinute = 55;
    }

    updatePickerDisplay();

});


// =========================
// AM
// =========================

amOption.addEventListener("click", () => {

    selectedPeriod = "AM";

    amOption.classList.add("selected");
    pmOption.classList.remove("selected");

    updatePickerDisplay();

});


// =========================
// PM
// =========================

pmOption.addEventListener("click", () => {

    selectedPeriod = "PM";

    pmOption.classList.add("selected");
    amOption.classList.remove("selected");

    updatePickerDisplay();

});


// =========================
// UPDATE PICKER DISPLAY
// =========================

function updatePickerDisplay() {

    const hour =
        String(selectedHour);

    const minute =
        String(selectedMinute)
            .padStart(2, "0");

    hourValue.textContent =
        hour.padStart(2, "0");

    minuteValue.textContent =
        minute;

    selectedTimeDisplay.textContent =
        `${hour}:${minute} ${selectedPeriod}`;

}


// =========================
// CONFIRM CUSTOM TIME
// =========================

confirmTimeButton.addEventListener("click", () => {

    const selectedTime =
        getFormattedTime();

    // SAVE TO LOCAL STORAGE
    localStorage.setItem(
        "selectedTime",
        selectedTime
    );

    // Remove quick selections
    timeOptions.forEach((button) => {
        button.classList.remove("selected");
    });

    // Mark custom option selected
    customTimeButton.classList.add("selected");

    // Change custom button text
    const customText =
        customTimeButton.querySelector(
            ".custom-time-text strong"
        );

    customText.textContent =
        selectedTime;

    // Close picker
    customTimePicker.classList.remove("open");

});


// =========================
// CONTINUE
// =========================

continueButton.addEventListener("click", () => {

    const selectedTime =
        localStorage.getItem("selectedTime");

    if (!selectedTime) {

        showRomanticAlert();
        return;
    }

    document.body.classList.add(
        "page-exit"
    );

    setTimeout(() => {

        window.location.href =
            "page5.html";

    }, 350);

});


// =========================
// INITIAL DISPLAY
// =========================

updatePickerDisplay();