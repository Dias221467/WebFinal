// Main page

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section"); // Select your content sections
    const navLinks = document.querySelectorAll("#new_navbar a"); // Select your navigation links

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - sectionHeight / 2) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").slice(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});





// Order
document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const titleSelect = document.getElementById('title');
    const firstNameInput = document.getElementById('first-name');
    const lastNameInput = document.getElementById('last-name');
    // Add more element references as needed

    // Event Handling
    const submitButton = document.getElementById('submit-button');
    submitButton.addEventListener('click', function() {
        // Validate and process the form data here
        var sound = new Audio('sound/thank-you-for-your-patronage.mp3');
        sound.play();
        alert('Form submitted successfully!');
    });
});


// Sound effect

