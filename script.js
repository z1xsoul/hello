// Function to open the envelope
function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const messageContainer = document.getElementById('message-container');

    envelope.style.display = 'none'; // Hide the envelope
    messageContainer.classList.remove('hidden'); // Show the message
    startFireworks(); // Trigger fireworks
}

// Function to create a firework effect
function startFireworks() {
    const container = document.getElementById('fireworks-container');

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

        container.appendChild(firework);

        setTimeout(() => firework.remove(), 2000); // Remove after animation
    }
}
