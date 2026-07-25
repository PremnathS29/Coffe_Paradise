// Nav
function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("active");
}

// Order Button Popup
const buttons = document.querySelectorAll(".buy_btn");

buttons.forEach(btn => {
    btn.addEventListener("click", function(e) {
        e.preventDefault();
        alert("We are currently working on the payment page.");
    });
});

// Contact Us Popup
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("We will contact you soon.");
        this.reset();
    });
}