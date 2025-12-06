document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Smooth Scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Reveal Animations (Hiện dần khi cuộn)
    const observerOptions = {
        threshold: 0.1 
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Áp dụng cho các phần tử chính
    const animatedElements = document.querySelectorAll('.hero-text, .hero-img, .interest-item, .project-card, .pub-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)"; // Dịch xuống dưới một chút
        el.style.transition = "all 0.6s ease-out"; // Thời gian hiệu ứng
        observer.observe(el);
    });
});