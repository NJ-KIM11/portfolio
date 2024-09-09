// Select the hamburger icon and the menu bar
const hamburger = document.getElementById('hamburger');
const menuBar = document.getElementById('menu-bar');

// Add a click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and the menu bar
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active');
});