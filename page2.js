// =========================
// SELECT ELEMENTS
// =========================

const yesButton =
    document.querySelector(".yes-btn");

const noButton =
    document.querySelector(".no-btn");

const noMessage =
    document.querySelector(".no-message");

const answerArea =
    document.querySelector(".answer-area");


// =========================
// NO ATTEMPT COUNTER
// =========================

let noAttempts = 0;


// =========================
// NUMBER OF ESCAPES
// =========================

const maxAttempts = 15;


// =========================
// NO MESSAGES
// =========================

const noMessages = [

    "You can try... 😌",

    "Nice try. 😏",

    "Still trying to say no?",

    "That button seems strangely nervous. 😂",

    "I wouldn't recommend that button.",

    "Are you sure about this? 👀",

    "The NO button is running out of places to hide.",

    "You're really committed to this, huh? 😭",

    "Okay, that's attempt number eight.",

    "The button has trust issues now.",

    "You're making this unnecessarily difficult. 😂",

    "Maybe... just maybe... YES? ❤️",

    "Fine. One last chance.",

    "Okay, okay... I'm tired of running. 😭",

    "The NO button surrenders. 🏳️"

];


// =========================
// YES BUTTON
// =========================

yesButton.addEventListener(
    "click",
    () => {

        document.body.classList.add("page-exit");

        setTimeout(() => {

            window.location.href = "page3.html";

        }, 350);

    }
);


// =========================
// NO BUTTON HOVER
// =========================

noButton.addEventListener(
    "mouseenter",
    () => {

        if (noAttempts < maxAttempts) {

            moveNoButton();

        }

    }
);


// =========================
// NO BUTTON TOUCH
// =========================

noButton.addEventListener(
    "touchstart",
    (event) => {

        if (noAttempts < maxAttempts) {

            event.preventDefault();

            moveNoButton();

        }

    },
    {
        passive: false
    }
);


// =========================
// NO BUTTON CLICK
// =========================

noButton.addEventListener(
    "click",
    () => {

        // Do not allow clicking
        // until all escape attempts
        // are completed

        if (noAttempts < maxAttempts) {

            return;

        }


        // =========================
        // REJECTION MESSAGE
        // =========================

        noMessage.textContent =
            "Okay. I respect your decision. ❤️";


        noMessage.classList.add(
            "rejected"
        );


        // =========================
        // CHANGE BUTTON
        // =========================

        noButton.textContent =
            "NO ❤️";


        noButton.style.transform =
            "none";


        noButton.style.cursor =
            "default";


        // =========================
        // DISABLE FURTHER CLICKS
        // =========================

        noButton.disabled =
            true;


        // =========================
        // YES BECOMES LESS PROMINENT
        // =========================

        yesButton.style.opacity =
            "0.35";

        yesButton.style.pointerEvents =
            "none";

    }
);


// =========================
// MOVE NO BUTTON
// =========================

function moveNoButton() {

    noAttempts++;


    // =========================
    // UPDATE MESSAGE
    // =========================

    const messageIndex =
        Math.min(
            noAttempts - 1,
            noMessages.length - 1
        );

    noMessage.textContent =
        noMessages[messageIndex];


    // =========================
    // SHAKE
    // =========================

    noButton.style.animation =
        "none";

    void noButton.offsetWidth;

    noButton.style.animation =
        "noShake 0.25s ease";


    // =========================
    // SAFE AREA
    // =========================

    const areaWidth =
        answerArea.clientWidth;

    const areaHeight =
        answerArea.clientHeight;

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;


    const maxX =
        Math.max(
            0,
            (areaWidth - buttonWidth) / 2 - 10
        );

    const maxY =
        Math.max(
            0,
            (areaHeight - buttonHeight) / 2 - 5
        );


    // =========================
    // RANDOM POSITION
    // =========================

    const randomX =
        (Math.random() * 2 - 1) *
        maxX;

    const randomY =
        (Math.random() * 2 - 1) *
        maxY;


    // =========================
    // BUTTON SIZE
    // =========================

    const scale =
        Math.max(
            0.8,
            1 - noAttempts * 0.012
        );


    // =========================
    // APPLY MOVEMENT
    // =========================

    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px) scale(${scale})`;


    // =========================
    // FINAL ATTEMPT
    // =========================

    if (noAttempts >= maxAttempts) {

        noMessage.textContent =
            "The NO button surrenders. 🏳️";

        noButton.style.transform =
            "none";

    }

}