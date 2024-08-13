let wavesVisible = true;

function toggleWave() {
    const waves = document.querySelectorAll('.wave');
    waves.forEach(wave => {
        wave.style.display = wavesVisible ? 'none' : 'block';
    });
    wavesVisible = !wavesVisible;
}
