function openEnvelope() {
    const envelope = document.querySelector('.envelope');
    const messageContainer = document.getElementById('message-container');

    envelope.style.display = 'none'; 
    messageContainer.classList.remove('hidden'); 
    startFireworks(); 
}


function startFireworks() {
    const container = document.getElementById('fireworks-container');

    for (let i = 0; i < 50; i++) {
        const firework = document.createElement('div');
        firework.className = 'firework';
        firework.style.top = Math.random() * 100 + '%';
        firework.style.left = Math.random() * 100 + '%';
        firework.style.background = `hsl(${Math.random() * 360}, 100%, 50%)`;

        container.appendChild(firework);

        setTimeout(() => firework.remove(), 2000);
    }
}
