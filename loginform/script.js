// Optional: Add some more interactivity with JavaScript here
document.querySelector('.login-container').addEventListener('mousemove', function(e) {
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;
    document.querySelector('.login-box').style.transform = `translate(${x * 0.05}px, ${y * 0.05}px)`;
});
