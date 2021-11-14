import Splide from '@splidejs/splide';

const carouselSpeed = 1500;

document.addEventListener( 'DOMContentLoaded', function () {
    const splide = new Splide( '#brands-carousel', {
        autoplay: true,
        arrows: false,
        perPage: 1,
        type   : 'slide',
        speed: 3000,
        easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
    });

    splide.on( 'pagination:mounted', function ( data ) {
        data.list.classList.add( 'splide__pagination__brands-carousel' );
    });

    splide.mount();
  });
