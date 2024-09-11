// Select the hamburger icon and the menu bar
const hamburger = document.getElementById('hamburger');
const menuBar = document.getElementById('menu-bar');

// Add a click event listener to the hamburger
hamburger.addEventListener('click', () => {
    // Toggle the 'active' class on the hamburger and the menu bar
    hamburger.classList.toggle('active');
    menuBar.classList.toggle('active');
});

function typeWriter(element, text, delay = 100) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

function typeWriter2(element, text, delay = 100) {
    element.textContent += text.charAt(0);
}


document.addEventListener("DOMContentLoaded", () => {
    const titleElement = document.getElementById('intro-title');
    const subtitleElement = document.getElementById('intro-subtitle');

    // Clear the initial content
    titleElement.textContent = "";
    subtitleElement.textContent = document.getElementById('intro-subtitle')[0];

    // Type the first sentence
    typeWriter(titleElement, "Hello, I'm Nam Joon Kim.", 100);
    typeWriter2(subtitleElement, " I am a full-stack junior developer.");
    // Delay the typing of the second sentence
    setTimeout(() => {
        
        typeWriter(subtitleElement, " I am a full-stack junior developer.", 100);
    }, 3800); // Delay for the second sentence after the first one completes
});
