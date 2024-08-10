document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const errorMessage = document.getElementById('error-message');
    const eyes = document.querySelectorAll('.eye');
    
    // Make the robot's eyes follow the cursor
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        eyes.forEach(eye => {
            eye.style.left = `${x}%`;
            eye.style.top = `${y}%`;
        });
    });

    // Form validation and error animation
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        if (username === 'robot' && password === '1234') {
            alert('Login successful!');
            // Reset the form and hide error message
            form.reset();
            errorMessage.classList.add('hidden');
        } else {
            errorMessage.classList.remove('hidden');
            shakeRobot();
        }
    });

    // Shake the robot's head if login fails
    function shakeRobot() {
        const robot = document.querySelector('.robot');
        robot.classList.add('shake');
        setTimeout(() => {
            robot.classList.remove('shake');
        }, 500);
    }
});
