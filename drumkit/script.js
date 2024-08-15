document.addEventListener('DOMContentLoaded', () => {
    const drums = document.querySelectorAll('.drum');

    drums.forEach(drum => {
        drum.addEventListener('click', () => {
            const sound = drum.getAttribute('data-sound');
            playSound(sound);
            animateButton(drum);
        });
    });

    function playSound(sound) {
        const audio = new Audio(`sounds/${sound}.mp3`);
        audio.play();
    }

    function animateButton(button) {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
        }, 100);
    }
});
