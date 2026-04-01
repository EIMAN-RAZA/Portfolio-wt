// ===========================
// Mobile Navigation Toggle
// ===========================
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// ===========================
// Back to Top Button
// ===========================
const backToTop = document.getElementById("backToTop");
backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// ===========================
// Form Validation
// ===========================
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
        alert("Please fill out all fields before submitting.");
        return;
    }

    alert("Message sent successfully (form not yet connected to backend).");
    this.reset();
});

// ===========================
// Animate Skill Bars when visible
// ===========================
const progressBars = document.querySelectorAll('.progress');

window.addEventListener('scroll', () => {
    const triggerBottom = window.innerHeight * 0.85;

    progressBars.forEach(bar => {
        const barTop = bar.getBoundingClientRect().top;

        if (barTop < triggerBottom) {
            const skillValue = bar.getAttribute('data-skill');
            bar.style.width = skillValue + '%';
        }
    });
});


