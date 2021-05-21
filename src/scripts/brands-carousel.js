import $ from "jquery";


const carouselSpeed = 1500;

$(document).ready(function(){
    $('#brands-carousel').slick({
        slidesToShow: 1,
        infinite: true,
        speed: carouselSpeed,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',

        arrows: false,
        dots: true,
        appendDots: $('#brands-carousel-dots'),
    });
});
