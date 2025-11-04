// Simple script to confirm the site is working and log a message
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Kind-Connect Landing Page Loaded Successfully. Ready for expansion.');

    // Note: You can add more complex functionality here, like form validation or dynamic content loading.
    
    // Example: Highlight the active navigation link when scrolling
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('header nav a');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) { // 60px buffer for fixed header
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });
});
