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
    $.get(
        "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=466U4PJ0R9230V6C",

        // "http://api.openweathermap.org/data/2.5/weather",
        // {
        //     "id": "2643743",
        //     "appid": "d74f35da617974e2c8453a4e52d3aa81"
        // },
        function (data) {
            console.log(data);
        }
    )
});

$('.section-main-content-slider-item').click(function () {
    $(this).toggleClass('active');
})