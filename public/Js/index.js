// script.js

// Function to run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // 1. Simple Greeting Message
    console.log("Welcome to My Awesome Static Website! The page has loaded.");

    // You could also display an alert or message on the page itself, but console.log is less intrusive.
    // Example:
    // const header = document.querySelector('header h1');
    // if (header) {
    //     header.textContent += " (JS Loaded!)";
    // }

    // 2. Smooth Scrolling for Navigation Links
    // Select all anchor links that start with # (internal links)
    document.querySelectorAll('nav ul li a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump behavior

            // Get the target element using the href attribute
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll smoothly to the target element
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3. Basic "Back to Top" Button
    // Create the button element
    const backToTopButton = document.createElement('button');
    backToTopButton.textContent = '↑ Back to Top';
    backToTopButton.id = 'backToTopBtn'; // Assign an ID for styling
    document.body.appendChild(backToTopButton); // Add button to the body

    // Style the button (basic inline styles for demonstration, ideally in CSS)
    backToTopButton.style.display = 'none'; // Hidden by default
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '30px';
    backToTopButton.style.zIndex = '99';
    backToTopButton.style.border = 'none';
    backToTopButton.style.outline = 'none';
    backToTopButton.style.backgroundColor = '#007bff';
    backToTopButton.style.color = 'white';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.fontSize = '16px';
    backToTopButton.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';


    // Show/hide the button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) { // Show button after scrolling 300px down
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Scroll to the top when the button is clicked
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});