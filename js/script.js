document.addEventListener('DOMContentLoaded', () => {

    const hamburgerButton = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // Toggle the menu when the hamburger is clicked
    hamburgerButton.addEventListener('click', () => {
        hamburgerButton.classList.toggle('is-active');
        mainNav.classList.toggle('is-open');
    });

    // Close the menu when a navigation link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('is-open')) {
                hamburgerButton.classList.remove('is-active');
                mainNav.classList.remove('is-open');
            }
        });
    });

});