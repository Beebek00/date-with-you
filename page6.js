// =========================
// GET SAVED INFORMATION
// =========================

const selectedDate =
    localStorage.getItem("selectedDate");

const selectedTime =
    localStorage.getItem("selectedTime");

const selectedExperience =
    localStorage.getItem("selectedExperience");


// =========================
// DISPLAY SUMMARY
// =========================

document.querySelector("#summary-date").textContent =
    selectedDate || "Not selected";

document.querySelector("#summary-time").textContent =
    selectedTime || "Not selected";

document.querySelector("#summary-experience").textContent =
    selectedExperience || "Not selected";


// =========================
// SELECT ELEMENTS
// =========================

const saveButton =
    document.querySelector(".finish-btn");

const savedMessage =
    document.querySelector(".saved-message");

const celebrationMessage =
    document.querySelector(".celebration-message");

const confirmationCard =
    document.querySelector(".confirmation-card");

const celebrationContainer =
    document.querySelector(".celebration-container");


// =========================
// SAVE BUTTON
// =========================

saveButton.addEventListener("click", () => {

    localStorage.setItem(
        "dateConfirmed",
        "true"
    );

    saveButton.innerHTML =
        `DATE SAVED <span>✓</span>`;

    saveButton.disabled = true;

    savedMessage.classList.add("show");

    celebrationMessage.classList.add("show");

    confirmationCard.classList.add("celebrate");

    createCelebration();

    setTimeout(() => {

        confirmationCard.classList.remove(
            "celebrate"
        );

    }, 900);

});


// =========================
// CREATE CELEBRATION
// =========================

function createCelebration() {

    // Clear any old pieces
    celebrationContainer.innerHTML = "";

    const pieces = 80;

    for (let i = 0; i < pieces; i++) {

        const piece =
            document.createElement("span");

        piece.classList.add("confetti");


        // Randomly create heart or square

        if (Math.random() > 0.45) {

            piece.textContent = "♥";

            piece.style.color =
                getRandomColor();

            piece.style.fontSize =
                `${Math.random() * 14 + 12}px`;

            piece.style.background =
                "transparent";

        } else {

            piece.style.background =
                getRandomColor();

            piece.style.width =
                `${Math.random() * 7 + 6}px`;

            piece.style.height =
                `${Math.random() * 7 + 6}px`;

        }


        // Random direction

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            Math.random() * 350 + 150;

        const x =
            Math.cos(angle) * distance;

        const y =
            Math.sin(angle) * distance;


        // Random rotation

        const rotation =
            Math.random() * 720 - 360;


        // Send values to CSS

        piece.style.setProperty(
            "--x",
            `${x}px`
        );

        piece.style.setProperty(
            "--y",
            `${y}px`
        );

        piece.style.setProperty(
            "--rotation",
            `${rotation}deg`
        );


        // Slightly different timing

        piece.style.animationDelay =
            `${Math.random() * 0.2}s`;


        // Add to screen

        celebrationContainer.appendChild(
            piece
        );


        // Remove after animation

        setTimeout(() => {

            piece.remove();

        }, 1800);

    }

}


// =========================
// RANDOM COLOR
// =========================

function getRandomColor() {

    const colors = [
        "#ff4f81",
        "#ff7fa5",
        "#ffb3c6",
        "#ffd6e2",
        "#ffffff"
    ];

    return colors[
        Math.floor(
            Math.random() * colors.length
        )
    ];

}


// =========================
// RESTORE SAVED STATE
// =========================

if (
    localStorage.getItem("dateConfirmed")
    === "true"
) {

    saveButton.innerHTML =
        `DATE SAVED <span>✓</span>`;

    saveButton.disabled = true;

    savedMessage.classList.add("show");

    celebrationMessage.classList.add("show");

}
// =========================
// START OVER
// =========================

const restartButton =
    document.querySelector(".restart-btn");

restartButton.addEventListener("click", () => {

    localStorage.removeItem("selectedDate");
    localStorage.removeItem("selectedTime");
    localStorage.removeItem("selectedExperience");
    localStorage.removeItem("dateConfirmed");

    document.body.classList.add("page-exit");

    setTimeout(() => {

        window.location.href = "index.html";

    }, 350);

});