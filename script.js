function showMessage() {
    document.querySelector('.envelope').classList.add('open');
    setTimeout(() => {
        document.querySelector('.envelope').style.display = 'none';
        document.getElementById('message').style.display = 'block';
        createBalloons(25); // Number of balloons
    }, 600); // Wait for the envelope animation to complete
}

function closeMessage() {
    document.getElementById('message').style.display = 'none';
}

function createBalloons(num) {
    const balloonsContainer = document.getElementById('balloons-container');
    for (let i = 0; i < num; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.backgroundColor = getRandomColor();
        balloon.style.left = `${Math.random() * 100}%`; // Fill the screen width
        balloon.style.animationDelay = `${Math.random() * 2}s`;
        balloon.style.animationDuration = `${Math.random() * 2 + 4}s`;
        balloonsContainer.appendChild(balloon);
    }
}

function getRandomColor() {
    const colors = ['#ff69b4', '#ff1493', '#ff6347', '#ffd700', '#32cd32', '#1e90ff', '#ff4500'];
    return colors[Math.floor(Math.random() * colors.length)];
}
