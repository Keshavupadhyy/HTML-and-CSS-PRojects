document.getElementById('toggleAnimation').addEventListener('click', function() {
    const box = document.querySelector('.animated-box');
    if (box.style.animationPlayState === 'paused') {
        box.style.animationPlayState = 'running';
    } else {
        box.style.animationPlayState = 'paused';
    }
});
