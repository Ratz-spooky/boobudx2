let clicks = 0;
let autoClickerActive = false;
let clickPower = 1;
let saveData = {
    nickname: localStorage.getItem('nickname') || "Guest",
    clicks: 0
};

document.addEventListener('DOMContentLoaded', () => {
    // Load saved nickname
    const savedNickname = localStorage.getItem('nickname');
    if (savedNickname) {
        saveData.nickname = savedNickname;
    } else {
        const nickname = prompt("Enter your nickname:");
        saveData.nickname = nickname || "Guest";
        localStorage.setItem('nickname', saveData.nickname);
    }
    
    document.getElementById('nicknameDisplay').textContent = saveData.nickname;

    // Load saved stats
    loadStats();

    document.getElementById('clickBtn').addEventListener('click', () => {
        clicks += clickPower;
        updateStats();
    });

    document.querySelectorAll('.upgrade-btn').forEach(button => {
        button.addEventListener('click', () => {
            const upgradeDiv = button.parentElement;
            const cost = parseInt(upgradeDiv.getAttribute('data-cost'));
            const power = parseInt(upgradeDiv.getAttribute('data-power'));

            if (clicks >= cost) {
                clicks -= cost;
                clickPower += power;
                updateStats();
                upgradeDiv.style.display = 'none'; // Hide upgrade after purchase
            } else {
                document.getElementById('message').textContent = "Not enough clicks!";
            }
        });
    });

    document.getElementById('autoClickerBtn').addEventListener('click', () => {
        if (!autoClickerActive) {
            autoClickerActive = true;
            startAutoClicker();
            document.getElementById('message').textContent = "Auto Clicker Activated!";
        } else {
            document.getElementById('message').textContent = "Auto Clicker is already active!";
        }
    });

    document.getElementById('speedAutoClickerBtn').addEventListener('click', () => {
        // Implement payment logic here (e.g., CashApp)
        document.getElementById('message').textContent = "Speed Auto Clicker Purchased!";
    });
});

function updateStats() {
    saveData.clicks = clicks;
    localStorage.setItem('saveData', JSON.stringify(saveData)); // Save all data to local storage
    document.getElementById('clicksDisplay').textContent = clicks;
}

function startAutoClicker() {
    setInterval(() => {
        if (autoClickerActive) {
            clicks += clickPower;
            updateStats();
        }
    }, 1000); // Auto-click every second
}

function loadStats() {
    const savedData = JSON.parse(localStorage.getItem('saveData'));
    if (savedData) {
        clicks = savedData.clicks;
        saveData = savedData;
        document.getElementById('clicksDisplay').textContent = clicks; // Update display with loaded clicks
    }
}


let clickCount = 0; // Player's total clicks
const clickCountDisplay = document.getElementById("clickCount");
const clickableArea = document.getElementById("clickableArea");

// Function to spawn a clickable image
function spawnClickableImage() {
    const clickableImage = document.createElement("img");
    clickableImage.src = "Images/BackgroundDesign.png"; // Change this to your image path
    clickableImage.classList.add("clickable-image");

    // Random position within the clickable area
    const xPos = Math.random() * (clickableArea.clientWidth - 100); // Adjust 100 to the width of your image
    const yPos = Math.random() * (clickableArea.clientHeight - 100); // Adjust 100 to the height of your image

    clickableImage.style.left = `${xPos}px`;
    clickableImage.style.top = `${yPos}px`;

    // Add event listener to the clickable image
    clickableImage.addEventListener("click", () => {
        const randomClicks = Math.floor(Math.random() * (10000 - 100 + 1)) + 100; // Random amount from 100 to 10000
        clickCount += randomClicks; // Update click count
        clickCountDisplay.textContent = clickCount; // Update displayed click count
        clickableImage.remove(); // Remove the image after clicking
    });

    clickableArea.appendChild(clickableImage);

    // Remove the image after a few seconds (optional)
    setTimeout(() => {
        clickableImage.remove();
    }, 10000); // Adjust the duration for how long the image stays before being removed
}

// Spawn a new clickable image every minute
setInterval(spawnClickableImage, 60000); // 60000 milliseconds = 1 minute
