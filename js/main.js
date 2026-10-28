// ========== STICKY NAVBAR SCROLL EFFECT ==========
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ========== MOBILE NAV TOGGLE ==========
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});
// Close menu when a link is clicked
navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => navMenu.classList.remove("open"));
});

// ========== TYPEWRITER EFFECT ==========
const typewriterEl = document.getElementById("typewriter");
const words = ["Passionate Web Developer!", "Frontend Enthusiast!", "BTech IT Student!", "Open Source Lover!"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        typewriterEl.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentWord.length) {
        setTimeout(() => { isDeleting = true; }, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(type, speed);
}
type();

// ========== SCROLL REVEAL ANIMATIONS ==========
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// ========== CONTACT FORM SUBMIT ==========
const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("form-success");
const formError = document.getElementById("form-error");
const submitBtn = document.getElementById("submitBtn");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    formSuccess.style.display = "none";
    formError.style.display = "none";

    if (!name || !email || !message || !emailPattern.test(email)) {
        formError.style.display = "block";
        return;
    }

    // Simulate sending (replace with actual EmailJS or backend call if needed)
    submitBtn.textContent = "Sending...";
    submitBtn.disabled = true;

    setTimeout(() => {
        formSuccess.style.display = "block";
        contactForm.reset();
        submitBtn.textContent = "Send Message";
        submitBtn.disabled = false;
    }, 1200);
});

// ========== ACTIVE NAV LINK ON SCROLL ==========
const sections = document.querySelectorAll("section, footer");
const navLinks = document.querySelectorAll("header nav ul li a");

window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});
