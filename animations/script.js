const startButton = document.getElementById('startAnimation');
const stopButton = document.getElementById('stopAnimation');
const shapes = document.querySelectorAll('.circle, .square, .triangle');

startButton.addEventListener('click', () => {
    shapes.forEach(shape => {
        shape.style.animationPlayState = 'running';
    });
});

stopButton.addEventListener('click', () => {
    shapes.forEach(shape => {
        shape.style.animationPlayState = 'paused';
    });
});
