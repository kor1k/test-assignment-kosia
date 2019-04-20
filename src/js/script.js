jQuery(document).ready(function ($) {
    $('.section-main-content-slider-items').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        dotsClass: "my-dots",
        // autoplay: true,
        // autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 400,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
});

$('.section-main-content-slider-item').click(function () {
    $(this).toggleClass('active');
})