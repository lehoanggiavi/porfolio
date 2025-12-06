// Chờ web tải xong mới chạy code
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Hiệu ứng cuộn mượt khi bấm Menu
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

    // 2. Hiệu ứng Fade-in khi cuộn xuống (Animation)
    const observerOptions = {
        threshold: 0.1 // Khi hiện 10% phần tử thì bắt đầu hiệu ứng
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    // Áp dụng cho các thẻ card dự án và bài báo
    const animatedElements = document.querySelectorAll('.project-card, .pub-card, .hero-text');
    
    animatedElements.forEach(el => {
        // Thiết lập trạng thái ban đầu (ẩn đi)
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        
        // Bắt đầu theo dõi
        observer.observe(el);
    });
});