let weedBucks = 0;
let weedBucksPerClick = 1;
let weedBucksPerSecond = 0;
let doubleHarvestActive = false;
let stonerAuraActive = false;
let prestigeMultiplier = 1;
let autoClickerInterval;

// Currency elements
const currencyAmountEl = document.getElementById('currencyAmount');

// Plant element
const weedPlant = document.getElementById('weedPlant');

// Shop buttons
const buyUpgradeButton = document.getElementById('buyUpgrade');
const buyDoubleHarvestButton = document.getElementById('buyDoubleHarvest');
const buyAutoClickerButton = document.getElementById('buyAutoClicker');
const buyJointButton = document.getElementById('buyJoint');
const buyBongButton = document.getElementById('buyBong');
const buyStonerAuraButton = document.getElementById('buyStonerAura');
const buyPrestigeButton = document.getElementById('buyPrestige');
const buyMunchiesBoostButton = document.getElementById('buyMunchiesBoost');
const buyBlazingBluntButton = document.getElementById('buyBlazingBlunt');
const buy420SpecialButton = document.getElementById('buy420Special');
// More buttons...
const buttons = document.querySelectorAll('button');

// Achievements
const achievementsList = document.getElementById('achievementsList');
let achievements = [];

// Random events
const eventMessageEl = document.getElementById('eventMessage');

// Function to update displayed Weed Bucks
function updateWeedBucks() {
    currencyAmountEl.textContent = weedBucks;
}

// Handle clicking the weed plant
weedPlant.addEventListener('click', () => {
    weedBucks += weedBucksPerClick * prestigeMultiplier;
    updateWeedBucks();
    checkAchievements();
    triggerRandomEvent();
});

// Handle buying upgrades
buyUpgradeButton.addEventListener('click', () => {
    if (weedBucks >= 50) {
        weedBucks -= 50;
        weedBucksPerClick += 1;
        updateWeedBucks();
    }
});

buyDoubleHarvestButton.addEventListener('click', () => {
    if (weedBucks >= 100) {
        weedBucks -= 100;
        doubleHarvestActive = true;
        weedBucksPerClick *= 2;
        updateWeedBucks();
    }
});

buyAutoClickerButton.addEventListener('click', () => {
    if (weedBucks >= 150) {
        weedBucks -= 150;
        autoClickerInterval = setInterval(() => {
            weedBucks += 1;
            updateWeedBucks();
        }, 1000);
    }
});

buyJointButton.addEventListener('click', () => {
    if (weedBucks >= 200) {
        weedBucks -= 200;
        weedBucksPerClick += 10;
        updateWeedBucks();
    }
});

buyBongButton.addEventListener('click', () => {
    if (weedBucks >= 500) {
        weedBucks -= 500;
        weedBucksPerClick += 25;
        updateWeedBucks();
    }
});

buyStonerAuraButton.addEventListener('click', () => {
    if (weedBucks >= 1000) {
        weedBucks -= 1000;
        stonerAuraActive = true;
        document.body.style.backgroundColor = '#4b0082';
        updateWeedBucks();
    }
});

buyPrestigeButton.addEventListener('click', () => {
    if (weedBucks >= 5000) {
        weedBucks = 0;
        weedBucksPerClick = 2;
        prestigeMultiplier *= 2;
        updateWeedBucks();
    }
});

// Handle more shop items...
buyMunchiesBoostButton.addEventListener('click', () => {
    if (weedBucks >= 300) {
        weedBucks -= 300;
        if (autoClickerInterval) clearInterval(autoClickerInterval);
        autoClickerInterval = setInterval(() => {
            weedBucks += 5;
            updateWeedBucks();
        }, 500);
    }
});

// Check for achievements
function checkAchievements() {
    if (weedBucks >= 100 && !achievements.includes('First High')) {
        achievements.push('First High');
        achievementsList.innerHTML += '<li>First High: Reached 100 Weed Bucks</li>';
    }
    // More achievements...
}

// Trigger random events
function triggerRandomEvent() {
    const random = Math.random();
    if (random < 0.01) {
        weedBucks *= 2;
        eventMessageEl.textContent = "Whoa! The Weed Gods have blessed you with Double Weed Bucks!";
        setTimeout(() => {
            eventMessageEl.textContent = "No events happening now...";
        }, 5000);
    }
}
