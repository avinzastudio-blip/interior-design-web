/* =========================================
   VELORA INTERIORS
   Interactive Features
   Designed by Avinza Studio
========================================= */


/* ========== 1. MOBILE NAVIGATION ========== */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle && navLinks) {

    function closeMenu() {
        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation menu");

        menuToggle.textContent = "☰";
    }

    function openMenu() {
        navLinks.classList.add("active");

        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.setAttribute("aria-label", "Close navigation menu");

        menuToggle.textContent = "✕";
    }

    menuToggle.addEventListener("click", function () {

        const isOpen = navLinks.classList.contains("active");

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }

    });

    // Close menu after clicking a navigation link
    navLinks.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", closeMenu);

    });

    // Close menu when Escape is pressed
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape") {
            closeMenu();
        }

    });

    // Close mobile menu when returning to desktop width
    window.addEventListener("resize", function () {

        if (window.innerWidth > 800) {
            closeMenu();
        }

    });

}


/* ========== 2. AUTOMATIC FOOTER YEAR ========== */

const currentYear = document.getElementById("current-year");

if (currentYear) {

    currentYear.textContent = new Date().getFullYear();

}


/* ========== 3. NAVBAR SCROLL EFFECT ========== */

const header = document.querySelector(".header");

if (header) {

    function updateHeader() {

        if (window.scrollY > 30) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }

    }

    window.addEventListener("scroll", updateHeader, {
        passive: true
    });

    // Apply the correct state when the page first loads
    updateHeader();

}


/* ========== 4. PORTFOLIO PROJECT FILTERS ========== */

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

if (filterButtons.length && projectCards.length) {

    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.category;

            // Update the active filter button
            filterButtons.forEach(function (filter) {

                const isActive = filter === button;

                filter.classList.toggle("active", isActive);

                filter.setAttribute(
                    "aria-pressed",
                    String(isActive)
                );

            });

            // Show matching projects
            projectCards.forEach(function (card) {

                const projectCategory = card.dataset.category;

                const shouldShow =
                    selectedCategory === "all" ||
                    projectCategory === selectedCategory;

                card.hidden = !shouldShow;

            });

        });

    });

}


/* ========== 5. SMOOTH SECTION NAVIGATION ========== */

// The CSS already enables smooth scrolling.
// This JavaScript also supports smooth scrolling for browsers
// that do not support the CSS behavior.

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetID = link.getAttribute("href");

        if (!targetID || targetID === "#") {
            return;
        }

        const targetElement = document.querySelector(targetID);

        if (targetElement) {

            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: window.matchMedia(
                    "(prefers-reduced-motion: reduce)"
                ).matches ? "auto" : "smooth",

                block: "start"
            });

        }

    });

});


/* ========== 6. DEMO CONTACT FORM ========== */

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

if (contactForm && formMessage) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the page from reloading
        event.preventDefault();

        // Check required fields and input formats
        if (!contactForm.reportValidity()) {
            return;
        }

        // Show a demo confirmation
        formMessage.textContent =
            "Thank you for exploring Velora! This is a portfolio demo. Your inquiry has not been sent or stored.";

        formMessage.className = "form-message success";

        // Return the form to its original state
        contactForm.reset();

    });

}


/* ========== 7. CONTACT FORM INPUT FEEDBACK ========== */

if (contactForm && formMessage) {

    contactForm.addEventListener("input", function () {

        // Clear the previous message when the user edits the form
        formMessage.textContent = "";
        formMessage.className = "form-message";

    });

}


/* ========== 8. IMAGE ERROR HANDLING ========== */

document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {

        console.warn("Image could not be loaded:", image.src);

        // Keep the image area visually consistent if an image fails
        image.style.backgroundColor = "#eae5d9";

        image.setAttribute("data-image-error", "true");

    });

});


/* ========== 9. CONSOLE MESSAGE ========== */

console.log("Velora Interiors website loaded successfully.");
console.log("Website concept designed by Avinza Studio.");
console.log("Portfolio project: interactive demo mode.");
<button
    type="button"
    class="project-arrow"
    aria-label="View Soft Living project"
    data-project="1">
    ↗
</button>