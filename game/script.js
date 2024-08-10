const gameContainer = document.getElementById('gameContainer');
const player = document.getElementById('player');
const fallingObject = document.querySelector('.fallingObject');

let gameInterval;
let fallingObjectInterval;
let score = 0;

function startGame() {
    document.addEventListener('keydown', movePlayer);
    gameInterval = setInterval(updateGame, 20);
    fallingObjectInterval = setInterval(createFallingObject, 2000);
}

function movePlayer(event) {
    const key = event.key;
    const playerLeft = parseInt(window.getComputedStyle(player).left);

    if (key === 'ArrowLeft' && playerLeft > 0) {
        player.style.left = playerLeft - 20 + 'px';
    } else if (key === 'ArrowRight' && playerLeft < gameContainer.clientWidth - player.clientWidth) {
        player.style.left = playerLeft + 20 + 'px';
    }
}

function createFallingObject() {
    fallingObject.style.left = Math.random() * (gameContainer.clientWidth - fallingObject.clientWidth) + 'px';
    fallingObject.style.top = '0px';
}

function updateGame() {
    const fallingObjectTop = parseInt(window.getComputedStyle(fallingObject).top);
    const fallingObjectLeft = parseInt(window.getComputedStyle(fallingObject).left);
    const playerLeft = parseInt(window.getComputedStyle(player).left);

    if (fallingObjectTop > gameContainer.clientHeight) {
        createFallingObject();
    } else {
        fallingObject.style.top = fallingObjectTop + 5 + 'px';
    }

    // Check for collision
    if (
        fallingObjectTop + fallingObject.clientHeight > gameContainer.clientHeight - player.clientHeight &&
        fallingObjectLeft + fallingObject.clientWidth > playerLeft &&
        fallingObjectLeft < playerLeft + player.clientWidth
    ) {
        score++;
        alert('Score: ' + score);
        createFallingObject();
    }
}

startGame();
