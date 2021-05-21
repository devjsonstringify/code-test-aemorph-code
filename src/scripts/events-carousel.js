import $ from "jquery";

const carouselSpeed = 900;

$(document).ready(function(){
    $('#events-carousel').slick({
        slidesToShow: 1,
        infinite: true,
        speed: carouselSpeed,
        cssEase: 'cubic-bezier(0.76, 0, 0.24, 1)',

        arrows: true,
        appendArrows: $('#events-arrows'),

        mobileFirst: true,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        }],

    });
});
