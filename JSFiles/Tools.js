document.addEventListener('DOMContentLoaded', function() {
    // Modal
    const modal = document.getElementById("modal");
    const closeBtn = document.querySelector(".close-btn");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Tool boxes
    const tool1 = document.getElementById("tool1");
    const tool2 = document.getElementById("tool2");
    const tool3 = document.getElementById("tool3");

    // Function to open the modal with content
    function openModal(title, description) {
        modalTitle.textContent = title;
        modalDescription.textContent = description;
        modal.style.display = "flex";
    }

    // Tool 1 Event Listener
    tool1.addEventListener('click', function() {
        openModal("Hellix Searcher", "Search and find as much possible information on a Roblox/Discord user.");
    });

    // Tool 2 Event Listener
    tool2.addEventListener('click', function() {
        openModal("Hellix Grouper", "Find open/Nonowner groups.");
    });

    // Tool 3 Event Listener
    tool3.addEventListener('click', function() {
        openModal("Hellix Scraper", "Scrape and extract unlimited amounts of data from websites.");
    });

    // Close modal
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });

    // Close modal when clicking outside
    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
