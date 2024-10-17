document.addEventListener("DOMContentLoaded", () => {
    const weedImage = document.getElementById("weedImage");
    let isDragging = false;
    let offsetX, offsetY;

    weedImage.addEventListener("mousedown", (event) => {
        isDragging = true;
        offsetX = event.clientX - weedImage.offsetLeft;
        offsetY = event.clientY - weedImage.offsetTop;
        weedImage.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (event) => {
        if (isDragging) {
            const newX = event.clientX - offsetX;
            const newY = event.clientY - offsetY;
            weedImage.style.left = `${newX}px`;
            weedImage.style.top = `${newY}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        weedImage.style.cursor = "grab";
    });

    // Bouncing off screen
    const gameContainer = document.getElementById("game-container");
    let directionX = 2;
    let directionY = 2;

    function bounceWeedImage() {
        let imageRect = weedImage.getBoundingClientRect();
        let containerRect = gameContainer.getBoundingClientRect();

        // Detect collision with container boundaries
        if (imageRect.left <= containerRect.left || imageRect.right >= containerRect.right) {
            directionX *= -1;
        }
        if (imageRect.top <= containerRect.top || imageRect.bottom >= containerRect.bottom) {
            directionY *= -1;
        }

        // Move the image
        weedImage.style.left = `${weedImage.offsetLeft + directionX}px`;
        weedImage.style.top = `${weedImage.offsetTop + directionY}px`;

        requestAnimationFrame(bounceWeedImage);
    }

    requestAnimationFrame(bounceWeedImage);
});
