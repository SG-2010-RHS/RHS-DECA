// Simple script to confirm the site is working and log a message
document.addEventListener('DOMContentLoaded', (event) => {
    console.log('Kind-Connect Landing Page Loaded Successfully.');

    // Example of a simple interactive element
    const primaryButton = document.querySelector('.cta-primary');
    primaryButton.addEventListener('click', () => {
        alert('Searching the Itemized Needs Marketplace now...');
    });
});