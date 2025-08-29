const modal = document.getElementById("modal");
const form = document.getElementById('contact-form');

const modalOverlay = document.getElementById("modal-overlay");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    modalOverlay.classList.add("active");
    form.reset();
    setTimeout(() => {
        modalOverlay.classList.remove("active");
    }, 3000);
});

modalOverlay.addEventListener("click", (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove("active");
    }
});
