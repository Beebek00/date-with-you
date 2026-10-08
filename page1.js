const openButton =
    document.querySelector(".open-btn");

openButton.addEventListener("click", () => {

    localStorage.removeItem("dateConfirmed");

    document.body.classList.add(
        "page-exit"
    );

    setTimeout(() => {

        window.location.href =
            "page2.html";

    }, 350);

});
// =========================
// SECRET HEART EASTER EGG
// =========================

const secretHeart =
    document.querySelector(".heart");

const secretMessage =
    document.querySelector(".secret-message");

let heartClicks = 0;

secretHeart.addEventListener("click", () => {

    heartClicks++;

    if (heartClicks === 1) {

        secretHeart.style.transform =
            "scale(1.15)";

    }

    if (heartClicks === 2) {

        secretHeart.style.transform =
            "scale(1.25)";

    }

    if (heartClicks === 3) {

        secretHeart.style.transform =
            "scale(1.15)";

        secretMessage.classList.add("show");

    }

});

