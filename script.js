// Get references to DOM elements
const nameInput = document.getElementById('nameInput');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

// Function to handle button click
function handleGreeting() {
    const name = nameInput.value.trim();
    
    if (name) {
        greetingMessage.textContent = `Hello ${name}`;
    } else {
        greetingMessage.textContent = 'Hello';
    }
}

// Add click event listener to button
greetButton.addEventListener('click', handleGreeting);

// Optional: Allow Enter key to trigger greeting
nameInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleGreeting();
    }
});
