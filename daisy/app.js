// function slowScroll(id) { 
//     var offset = 0;
//     $('html, body').animate({ scrollTop: $(id).offset().top - offset 
//     }, 1000);
//     return false; 
// }  


$(function() {

    var header = $("#header");
    var intro = $("#intro");
    var introH = intro.innerHeight();
    var scrollPos = $(window).scrollTop();
    var nav = $("#nav");
    var navToggle = $("#navToggle");

    checkScroll(scrollPos, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight();
        scrollPos = $(this).scrollTop();

        checkScroll(scrollPos, introH);
    });

    function checkScroll(scrollPos, introH) {
        if( scrollPos >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    }



    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        var elementId = $(this).data('scroll');
        var elementOffset = $(elementId).offset().top;

        nav.removeClass("show");

        $("html, body").animate({
            scrollTop: elementOffset - 70
        }, 700);
    });

    navToggle.on("click", function(event) {
        event.preventDefault();
        nav.toggleClass("show");
    });

});
(function () {
    $('.hamburger-menu').on('click', function() {
        $('.bar').toggleClass('animate');
    })
})();