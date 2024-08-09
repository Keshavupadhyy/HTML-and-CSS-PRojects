// Confetti effect
const confettiContainer = document.querySelector('.confetti');

function createConfetti() {
    const confettiElement = document.createElement('div');
    confettiElement.classList.add('confetti-piece');
    confettiElement.style.left = Math.random() * 100 + 'vw';
    confettiElement.style.animationDuration = Math.random() * 3 + 2 + 's';
    confettiElement.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    confettiContainer.appendChild(confettiElement);

    setTimeout(() => {
        confettiElement.remove();
    }, 5000);
}

setInterval(createConfetti, 100);
