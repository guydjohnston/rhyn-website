const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const navLinkItems = document.querySelectorAll('.nav-links a');

// Open menu when menu button is clicked
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle('active');
});

// Close menu when one of the navigation links is clicked
navLinkItems.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove('active');
    })
});