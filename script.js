// 1. INIT SCROLL REVEAL (Hiệu ứng cuộn)
// Tự động làm mờ và trượt lên các phần tử khi cuộn tới
ScrollReveal().reveal('.headline', { delay: 200, origin: 'bottom', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.bio-short', { delay: 400, origin: 'bottom', distance: '30px', duration: 1000 });
ScrollReveal().reveal('.intro-left', { delay: 200, origin: 'left', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.intro-right', { delay: 400, origin: 'right', distance: '50px', duration: 1000 });
ScrollReveal().reveal('.area-item', { interval: 100, origin: 'bottom', distance: '30px', duration: 800 });
ScrollReveal().reveal('.pub-card', { interval: 100, origin: 'left', distance: '30px', duration: 800 });

// 2. PARTICLES JS (Hiệu ứng nền)
particlesJS("particles-js", {
    "particles": {
        "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
        "color": { "value": "#aaaaaa" },
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true, "distance": 150, "color": "#aaaaaa", "opacity": 0.4, "width": 1
        },
        "move": {
            "enable": true, "speed": 2, "direction": "none", "random": false,
            "straight": false, "out_mode": "out", "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" },
            "resize": true
        },
        "modes": {
            "grab": { "distance": 140, "line_linked": { "opacity": 1 } }
        }
    },
    "retina_detect": true
});

// 3. MOBILE MENU TOGGLE
const mobileMenuBtn = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 4. PORTFOLIO FILTER
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');

        portfolioItems.forEach(item => {
            const category = item.getAttribute('data-category');
            if (filterValue === 'all' || filterValue === category) {
                item.classList.remove('hide');
                item.classList.add('show');
            } else {
                item.classList.remove('show');
                item.classList.add('hide');
            }
        });
    });
});

// 5. MODAL LOGIC (Popup dự án)
const modal = document.getElementById('project-modal');
const closeModal = document.querySelector('.close-modal');
const modalTitle = document.getElementById('modal-title');
const modalTech = document.getElementById('modal-tech');
const modalDesc = document.getElementById('modal-desc');
const modalImg = document.getElementById('modal-img');
const modalLink = document.getElementById('modal-link');

// Xử lý khi click vào Portfolio Item
portfolioItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Ngăn chặn chuyển trang

        // Lấy dữ liệu từ data attributes
        const title = item.getAttribute('data-title');
        const tech = item.getAttribute('data-tech');
        const desc = item.getAttribute('data-desc');
        const link = item.getAttribute('data-link');
        const imgSrc = item.querySelector('img').src;

        // Điền dữ liệu vào Modal
        modalTitle.textContent = title;
        modalTech.textContent = tech;
        modalDesc.textContent = desc;
        modalImg.src = imgSrc;
        modalLink.href = link;

        // Hiện Modal
        modal.classList.add('open');
    });
});

// Đóng Modal
closeModal.addEventListener('click', () => {
    modal.classList.remove('open');
});

// Click ra ngoài vùng Modal cũng đóng
window.addEventListener('click', (e) => {
    if (e.target == modal) {
        modal.classList.remove('open');
    }
});