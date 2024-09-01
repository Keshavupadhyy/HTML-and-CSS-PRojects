const tabs = document.querySelectorAll('.tab-icon');

tabs.forEach(tab => {
    tab.addEventListener('mouseenter', () => {
        tab.classList.add('active');
    });

    tab.addEventListener('mouseleave', () => {
        tab.classList.remove('active');
    });
});
