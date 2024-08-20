document.addEventListener("DOMContentLoaded", function() {
    // Optional: Add any JavaScript interactions or animations here if needed.
    // This example animates the greeting card and button when the page loads.
    
    const greetingCard = document.querySelector('.greeting-card');
    greetingCard.style.opacity = 0;
    greetingCard.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        greetingCard.style.transition = 'opacity 1s ease, transform 1s ease';
        greetingCard.style.opacity = 1;
        greetingCard.style.transform = 'translateY(0)';
    }, 300);
});
