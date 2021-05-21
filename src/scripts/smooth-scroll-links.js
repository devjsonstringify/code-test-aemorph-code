import $ from "jquery";


$('.js-smooth-scroll').click( function(event){
    
    const href = $(this).attr('href');
    const targetId = href.substring(href.indexOf("#"));
    const targetEl = $(targetId);

    if(targetEl.length){
        event.preventDefault();
        $('html, body').animate({
            scrollTop: targetEl.offset().top
        }, 1000);
        location.hash = targetId;
    }

});
