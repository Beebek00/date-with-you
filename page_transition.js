// =========================
// PAGE TRANSITIONS
// =========================

document.addEventListener("DOMContentLoaded", () => {

    const links =
        document.querySelectorAll("a");

    links.forEach((link) => {

        link.addEventListener("click", (event) => {

            const destination =
                link.getAttribute("href");

            if (
                !destination ||
                destination.startsWith("#") ||
                destination.startsWith("http")
            ) {
                return;
            }

            event.preventDefault();

            document.body.classList.add(
                "page-exit"
            );

            setTimeout(() => {

                window.location.href =
                    destination;

            }, 350);

        });

    });

});