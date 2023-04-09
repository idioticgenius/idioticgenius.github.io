document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 1,
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        mousewheel: true,
    });
});

VANTA.NET({
    el: "#netAnimation",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x000000,
    backgroundColor: 0x1d1d1d,
    points: 10.00,
    maxDistance: 30.00,
    spacing: 15.00
});
