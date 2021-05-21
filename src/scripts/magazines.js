import $ from "jquery";
import isInView from './helpers/is-in-viewport';

const carouselSpeed = 800;
const magTitleElement = document.getElementById('mag-titles-carousel');



$(document).ready(function(){

    // Turn titles to position
    const turnTitlesCarousel = (position) => {
        setTimeout( () => {
            $('#mag-titles-carousel').slick('slickGoTo', parseInt(position));
        }, 50);
    };

    // Initiate title click func when slick inits
    $('#mag-titles-carousel').on('init reInit afterChange', function(){
        const slides = document.querySelectorAll('[data-slick-index]');

        slides.forEach( title => {
            title.addEventListener('click', event => {
                const position = title.getAttribute('data-slick-index');
                if(position){
                    turnTitlesCarousel(position);
                }
            });
            title.addEventListener('mousedown', event => {
                const position = title.getAttribute('data-slick-index');
                if(position){
                    turnTitlesCarousel(position);
                }
            });
        });
    });

    // $('#mag-titles-carousel').on('afterChange', function(event, slick, currentSlide){
    //     $('#mag-illustr-carousel').slick('slickGoTo', currentSlide );
    //     $('#mag-content-carousel').slick('slickGoTo', currentSlide );
    // });
    $('#mag-titles-carousel').on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('#mag-illustr-carousel').slick('slickGoTo', nextSlide );
        $('#mag-content-carousel').slick('slickGoTo', nextSlide );
    });

    

    // Enable slick for titles

    $('#mag-titles-carousel').slick({
        infinite: true,
        autoplay: true, 
        autoplaySpeed: 5000,
        speed: carouselSpeed,
        cssEase: 'cubic-bezier(0.65, 0, 0.35, 1)',

        variableWidth: true,
        arrows: false,
        touchMove: false,
        asNavFor: $('#mag-illustr-carousel, #mag-content-carousel'),
    });


    // Enable slick for illustrations

    $('#mag-illustr-carousel').slick({
        infinite: false,
        speed: carouselSpeed,
        cssEase: 'cubic-bezier(0.65, 0, 0.35, 1)',

        arrows: false,
        draggable: false,
        touchMove: false,
        swipe: false,
        adaptiveHeight: true,

    });


    // Enable slick magazine content on the right

    $('#mag-content-carousel').slick({
        infinite: false,
        speed: carouselSpeed,
        cssEase: 'cubic-bezier(0.65, 0, 0.35, 1)',
        
        arrows: false,
        draggable: false,
        touchMove: false,
        swipe: false,
        adaptiveHeight: true,

    });


    // Enable slick for issues carousel

    $('.issues-carousel-wrap').each( (index, wrapper) => {

        const instance = $(wrapper).find('.issues-carousel');
        const arrowsWrap = $(wrapper).find('.issues-arrows');

        instance.slick({
            slidesToShow: 1,
            arrows: true,
            appendArrows: arrowsWrap,
            
            infinite: false,
            speed: carouselSpeed,
            cssEase: 'cubic-bezier(0.65, 0, 0.35, 1)',
    
            mobileFirst: true,
            responsive: [{
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }, {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 3,
                }
            }],
    
        });

    });




    // Autoplay titles if they're in viewport
    // so that when user scrolls down, the page's height didn't constantly change

    window.addEventListener("scroll", () => {
        if( isInView(magTitleElement) ){
            $('#mag-titles-carousel').slick('slickSetOption', {
                autoplay: true,
            }, true);
        } else {
            $('#mag-titles-carousel').slick('slickSetOption', {
                autoplay: false,
            }, true);
        }    
    });



});
