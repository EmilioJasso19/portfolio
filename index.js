const modal = document.getElementById("modal");
const form = document.getElementById('contact-form');
form.addEventListener("submit", function (e) {
    e.preventDefault();
    modal.style.display = 'block'
    setTimeout(() => {
        modal.style.display = 'none';
    }, 5000);
})