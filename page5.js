// =========================
// RESET EXPERIENCE FOR NEW VISIT
// =========================

localStorage.removeItem("selectedExperience");


// =========================
// SELECT ELEMENTS
// =========================

const experienceOptions =
    document.querySelectorAll(
        ".experience-option"
    );

const continueButton =
    document.querySelector(
        ".continue-btn"
    );


// =========================
// ROMANTIC ALERT
// =========================

const romanticAlert =
    document.querySelector(
        ".romantic-alert"
    );

const alertOverlay =
    document.querySelector(
        ".alert-overlay"
    );

const alertClose =
    document.querySelector(
        ".alert-close"
    );


function showRomanticAlert() {

    romanticAlert.classList.add(
        "show"
    );

    alertOverlay.classList.add(
        "show"
    );

}


function hideRomanticAlert() {

    romanticAlert.classList.remove(
        "show"
    );

    alertOverlay.classList.remove(
        "show"
    );

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
// EXPERIENCE SELECTION
// =========================

experienceOptions.forEach(
    (experienceButton) => {

        experienceButton.addEventListener(
            "click",
            () => {

                experienceOptions.forEach(
                    (button) => {

                        button.classList.remove(
                            "selected"
                        );

                    }
                );


                experienceButton.classList.add(
                    "selected"
                );


                const selectedExperience =
                    experienceButton
                        .querySelector("h2")
                        .textContent
                        .trim();


                localStorage.setItem(
                    "selectedExperience",
                    selectedExperience
                );


                // Selection animation

                experienceButton.style.animation =
                    "none";

                void experienceButton.offsetWidth;

                experienceButton.style.animation =
                    "selectedPulse 0.3s ease";

            }
        );

    }
);


// =========================
// CONTINUE
// =========================

continueButton.addEventListener(
    "click",
    () => {

        const selectedExperience =
            localStorage.getItem(
                "selectedExperience"
            );


        if (!selectedExperience) {

            showRomanticAlert();

            return;

        }


        // Page transition

        document.body.classList.add(
            "page-exit"
        );


        setTimeout(
            () => {

                window.location.href =
                    "page6.html";

            },
            350
        );

    }
);