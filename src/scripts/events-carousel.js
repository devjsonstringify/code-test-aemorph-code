import Splide from '@splidejs/splide';

const carouselSpeed = 900;
document.addEventListener( 'DOMContentLoaded', function () {
    const splideEventsCarousel = new Splide( '.events-carousel-wrap', {
        autoplay: false,
        arrows: false,
        perPage: 2,
        pagination: false,
        type   : 'loop',
        speed: carouselSpeed,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
        mediaQuery: 'max',
        breakpoints: {
            992: {
                perPage: 1,
            },
      }
    });
   
    const nextBtn = document.querySelector('.events-carousel-next');
    const prevBtn = document.querySelector('.events-carousel-prev');

    // Manually added control buttons outside splide required markup structure
    nextBtn.addEventListener('click', () => splideEventsCarousel.go( '>' ));
    prevBtn.addEventListener('click', () => splideEventsCarousel.go( '<' ));
    splideEventsCarousel.mount();
  });