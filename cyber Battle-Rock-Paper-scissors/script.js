document.addEventListener("DOMContentLoaded", function () {
    const choices = ["rock", "paper", "scissors"];
    let playerScore = 0;
    let computerScore = 0;

    const choiceImages = document.querySelectorAll(".choice-image");
    const resultDisplay = document.getElementById("result");
    const playerScoreDisplay = document.createElement("p");
    const computerScoreDisplay = document.createElement("p");

    playerScoreDisplay.textContent = `Jugador: ${playerScore}`;
    computerScoreDisplay.textContent = `Computadora: ${computerScore}`;
    
    document.querySelector("#juego").appendChild(playerScoreDisplay);
    document.querySelector("#juego").appendChild(computerScoreDisplay);

    choiceImages.forEach(img => {
        img.addEventListener("click", () => {
            playGame(img.id);
        });
    });

    function getComputerChoice() {
        return choices[Math.floor(Math.random() * choices.length)];
    }

    function playGame(playerChoice) {
        const computerChoice = getComputerChoice();
        let result;

        if (playerChoice === computerChoice) {
            result = "¡Empate! Ambos eligieron " + getChoiceImage(playerChoice);
        } else if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "scissors" && computerChoice === "paper") ||
            (playerChoice === "paper" && computerChoice === "rock")
        ) {
            result = "¡Ganaste! " + getChoiceImage(playerChoice) + " vence a " + getChoiceImage(computerChoice);
            playerScore++;
            playerScoreDisplay.textContent = `Jugador: ${playerScore}`;
            showConfetti();
        } else {
            result = "Perdiste... " + getChoiceImage(computerChoice) + " vence a " + getChoiceImage(playerChoice);
            computerScore++;
            computerScoreDisplay.textContent = `Computadora: ${computerScore}`;
            showDefeatEffect();
        }

        resultDisplay.innerHTML = result;
    }

    function getChoiceImage(choice) {
        switch (choice) {
            case "rock":
                return '<img src="https://elsaltoweb.es/wp-content/uploads/2024/09/piedra.png" alt="Piedra" width="50" height="50">';
            case "paper":
                return '<img src="https://elsaltoweb.es/wp-content/uploads/2024/09/papel.png" alt="Papel" width="50" height="50">';
            case "scissors":
                return '<img src="https://elsaltoweb.es/wp-content/uploads/2024/09/tijera.png" alt="Tijeras" width="50" height="50">';
        }
    }

    function showConfetti() {
        const confettiContainer = document.createElement("div");
        confettiContainer.classList.add("confetti-container");
        document.body.appendChild(confettiContainer);

        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "vw";
            confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
            confettiContainer.appendChild(confetti);
        }

        setTimeout(() => {
            confettiContainer.remove();
        }, 5000);
    }

    function showDefeatEffect() {
        document.body.classList.add("shake");
        setTimeout(() => {
            document.body.classList.remove("shake");
        }, 500);
    }
});
// Crear efecto de iluminación que sigue al cursor
const light = document.createElement('div');
light.id = 'light';
document.body.appendChild(light);

document.addEventListener('mousemove', (e) => {
    light.style.left = e.clientX - 100 + 'px';
    light.style.top = e.clientY - 100 + 'px';
});

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (playerScore / 5) * 100; // Suponiendo que 5 victorias es el objetivo
    progressBar.style.width = progress + '%';

    if (playerScore >= 5) {
        alert('¡Felicidades, has ganado el juego!');
        resetGame();
    }
}

function updateProgressBar() {
    const progressBar = document.getElementById('progress-bar');
    const progress = (playerScore / 5) * 100; // Suponiendo que 5 victorias es el objetivo
    progressBar.style.width = progress + '%';

    if (playerScore >= 5) {
        alert('¡Felicidades, has ganado el juego!');
        resetGame();
    }
}
