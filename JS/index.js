// Highlight the current page in the navigation bar
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");
    const currentPage = window.location.pathname;

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });

    // Log a message when the page loads
    console.log("Welcome to Lovely Sheen A. Cabilin's Homepage!");

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            } else {
                window.location.href = targetId; // Navigate to other pages
            }
        });
    });
});
