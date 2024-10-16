// Array of colors to transition between for the trippy effect
const trippyColors = [
    '#1a1a1a', '#662d91', '#ff6699', '#ffcc33', '#99ff33', '#33ccff'
];

// Get the container element
const trippyContainer = document.getElementById('trippy-container');

// Variable to keep track of color index
let currentColorIndex = 0;

// Function to change the background color slowly
function changeBackgroundColor() {
    // Increment color index and reset if it exceeds the array length
    currentColorIndex = (currentColorIndex + 1) % trippyColors.length;
    
    // Apply the next color with a smooth transition
    trippyContainer.style.backgroundColor = trippyColors[currentColorIndex];
}

// Add a click event to the entire background
trippyContainer.addEventListener('click', () => {
    changeBackgroundColor();
});
