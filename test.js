document.addEventListener('DOMContentLoaded', () => {

    // Get the elements from the HTML
    const hamburgerButton = document.getElementById('hamburger-menu');
    const mainNav = document.getElementById('main-nav');

    // Add a click event listener to the hamburger button
    hamburgerButton.addEventListener('click', () => {
        // Toggle the 'is-active' class on the button (for the 'X' animation)
        hamburgerButton.classList.toggle('is-active');
        
        // Toggle the 'is-open' class on the navigation menu
        mainNav.classList.toggle('is-open');
    });

});