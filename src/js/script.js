jQuery(document).ready(function ($) {
    $('.section-main-content-slider-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
    });
});