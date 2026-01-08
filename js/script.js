document.addEventListener('DOMContentLoaded', () => {

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    // Active Link Highlight on Scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // Fade In Animation on Scroll
    const fadeElems = document.querySelectorAll('.fade-on-scroll');
    const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.add('fade-in'); // Ensure css class exists
            }
        });
    }, { threshold: 0.1 });

    fadeElems.forEach(elem => {
        elem.classList.add('fade-in'); // Initial state
        fadeObserver.observe(elem);
    });


});

// Menu Image Update Function (Global)
function updateMenuImage(imageSrc) {
    const imgDisplay = document.getElementById('menu-img-display');
    if (imgDisplay && imageSrc) {
        // Simple fade effect
        imgDisplay.style.opacity = '0.5';
        setTimeout(() => {
            imgDisplay.src = imageSrc;
            imgDisplay.style.opacity = '1';
        }, 200);
    }
}
