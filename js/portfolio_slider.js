const mediaQuery = '(min-width: 768px)';
const mediaQueryList = window.matchMedia(mediaQuery);

function updateSwiper(swiper) {
    if (mediaQueryList.matches) {
        swiper.params.slidesPerView = 2;
    } else {
        swiper.params.slidesPerView = 1;
    }
    swiper.update();
}

document.addEventListener('DOMContentLoaded', function() {
    const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: mediaQueryList.matches ? 2 : 1,
        spaceBetween: 30,
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500, // Increase depth to zoom out the center image
            modifier: 1,
            slideShadows: false,
        },
        loop: true,
        mousewheel: true,
    });

    mediaQueryList.addEventListener('change', () => updateSwiper(swiper));

    // Add click event to the swiper-slide to show the larger image
    document.querySelectorAll('.swiper-slide').forEach(slide => {
        slide.addEventListener('click', () => {
            const imgSrc = slide.querySelector('img').src;
            showLargeImage(imgSrc);
        });
    });
});

function showLargeImage(src) {
    const largeImageCard = document.createElement('div');
    largeImageCard.className = 'large-image-card';

    const largeImage = document.createElement('img');
    largeImage.src = src;

    largeImageCard.appendChild(largeImage);
    document.body.appendChild(largeImageCard);

    largeImageCard.addEventListener('click', () => {
        largeImageCard.remove();
    });
}



