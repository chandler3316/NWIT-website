document.addEventListener("DOMContentLoaded", () => {
    // Function to re-trigger animations
    const triggerAnimations = () => {
        const animatedElements = document.querySelectorAll(".animate-on-load");
        animatedElements.forEach((element) => {
            // Reset animation by removing the class
            element.classList.remove("fade-in");
            // Force reflow (browser repaint) to restart animation
            void element.offsetWidth; 
            // Add the animation class back
            element.classList.add("fade-in");
        });
    };

    // Trigger animations on page load
    triggerAnimations();

    // Optionally, listen for navigation changes if using AJAX (e.g., single-page apps)
    window.addEventListener("popstate", () => {
        triggerAnimations();
    });
});


