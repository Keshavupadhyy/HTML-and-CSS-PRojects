// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const button = document.querySelector('button');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        if (!username.value || !password.value) {
            if (!username.value) username.parentElement.classList.add('shake');
            if (!password.value) password.parentElement.classList.add('shake');
            setTimeout(() => {
                document.querySelectorAll('.input-group').forEach(group => group.classList.remove('shake'));
            }, 600);
        } else {
            // Add pulse animation to the button on successful form submission
            button.classList.add('pulse');
            setTimeout(() => {
                button.classList.remove('pulse');
            }, 1500);
            // Simulate form submission
            console.log('Form submitted');
        }
    });
});
