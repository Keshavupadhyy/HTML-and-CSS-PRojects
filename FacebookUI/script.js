document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here, you can add your authentication logic or further actions.
    console.log('Email:', email);
    console.log('Password:', password);

    // For demo purposes, we'll just show an alert.
    alert('Login functionality not implemented.');
});
