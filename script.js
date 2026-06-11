document.addEventListener("DOMContentLoaded", () => {
    // 1. Inject Images into Masonry Grid
    const masonryGrid = document.getElementById("masonry-grid");
    
    const images = [
        "images/Captura de pantalla 2026-06-11 002302.png",
        "images/Captura de pantalla 2026-06-11 002342.png",
        "images/Captura de pantalla 2026-06-11 002355.png",
        "images/Captura de pantalla 2026-06-11 002402.png",
        "images/Captura de pantalla 2026-06-11 002408.png",
        "images/Captura de pantalla 2026-06-11 002413.png",
        "images/Captura de pantalla 2026-06-11 002418.png",
        "images/Captura de pantalla 2026-06-11 002423.png",
        "images/Captura de pantalla 2026-06-11 002429.png",
        "images/Captura de pantalla 2026-06-11 002434.png",
        "images/Captura de pantalla 2026-06-11 002438.png",
        "images/Captura de pantalla 2026-06-11 002443.png",
        "images/Captura de pantalla 2026-06-11 002448.png",
        "images/Captura de pantalla 2026-06-11 002453.png",
        "images/Captura de pantalla 2026-06-11 002457.png",
        "images/Captura de pantalla 2026-06-11 002501.png",
        "images/Captura de pantalla 2026-06-11 002505.png",
        "images/Captura de pantalla 2026-06-11 002509.png",
        "images/Captura de pantalla 2026-06-11 002513.png",
        "images/Captura de pantalla 2026-06-11 002517.png",
        "images/Captura de pantalla 2026-06-11 002524.png",
        "images/Captura de pantalla 2026-06-11 002528.png",
        "images/Captura de pantalla 2026-06-11 002533.png",
        "images/Captura de pantalla 2026-06-11 002537.png"
    ];

    // Load images
    images.forEach((src, index) => {
        const img = document.createElement("img");
        img.src = src;
        img.alt = `DNS Adolescentes foto ${index + 1}`;
        img.loading = "lazy"; // Better performance
        masonryGrid.appendChild(img);
    });

    // 2. Intersection Observer for Smooth Fade-In Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Optional: Stop observing once visible
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});
