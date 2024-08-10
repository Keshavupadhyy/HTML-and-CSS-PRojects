// Initialize EmailJS
(function(){
    emailjs.init("upadhyaykeshav555@gmail.com");
})();

document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Basic form validation
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill out all fields.");
        return;
    }

    // Send email using EmailJS
    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
        from_name: name,
        from_email: email,
        message: message
    }).then(function(response) {
        alert("Message sent successfully!");
    }, function(error) {
        alert("Failed to send message. Please try again later.");
    });

    // Clear form
    document.getElementById("contact-form").reset();
});
