document.addEventListener('DOMContentLoaded', function() {
    const clickerBtn = document.getElementById('clickerBtn');
    const aiBtn = document.getElementById('aiBtn');
    const gameFrame = document.getElementById('gameFrame');
    const gameTitle = gameFrame.querySelector('.game-title');
    const gameContent = gameFrame.querySelector('.game-content');

    function loadGame(gameName) {
        gameTitle.textContent = gameName;
        gameContent.innerHTML = "<p>Loading " + gameName + "...</p>";

        // Smooth Tween-like effect
        gameFrame.classList.remove('hidden');
        gameFrame.style.opacity = 0;
        let opacity = 0;
        const fadeIn = setInterval(() => {
            opacity += 0.05;
            gameFrame.style.opacity = opacity;
            if (opacity >= 1) {
                clearInterval(fadeIn);
            }
        }, 50);
    }

    clickerBtn.addEventListener('click', function() {
        loadGame('MarijuanaClicker');
    });

    aiBtn.addEventListener('click', function() {
        loadGame('MarijuanaAI');
    });
});
