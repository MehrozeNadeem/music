

// Smooth scrolling to the target section when a navbar link is clicked
function smoothScroll(target) {
    const targetSection = document.querySelector(target);
    if (!targetSection) return;

    const headerHeight = 60; // Adjust this value to account for any fixed header you have

    const targetPosition = targetSection.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - headerHeight;
    const duration = 800; // Adjust the scrolling duration as needed (in milliseconds)
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function for smooth scroll
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add click event listeners to navbar links
const navbarLinks = document.querySelectorAll('.navbar-nav a.nav-link');
navbarLinks.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target.getAttribute('href');
        smoothScroll(target);
    });
});
