jQuery(document).ready(function ($) {
    // $('.section-main-content-slider-items').slick({
    //     infinite: true,
    //     slidesToShow: 4,
    //     slidesToScroll: 4,
    //     dots: true,
    //     dotsClass: "custom-dots",
    //     // autoplay: true,
    //     // autoplaySpeed: 7000,
    //     responsive: [{
    //         breakpoint: 481,
    //         settings: {
    //             slidesToShow: 1,
    //             arrows: true,
    //             dots: true,
    //             slidesToScroll: 1
    //         }
    //     },
    //         {
    //             breakpoint: 320,
    //             settings: {
    //                 slidesToShow: 1,
    //                 arrows: false,
    //                 dots: false,
    //                 slidesToScroll: 1
    //             }
    //         }]
    //
    // });

    $('.section-star-slider, .section-oil-slider, .section-stocks-slider, .section-exchange_green-slider, .section-exchange_violet-slider').slick({
        // infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        // destroy: slick,
        // slickPlay: true,
        dotsClass: "custom-dots",
        autoplay: true,
        autoplaySpeed: 1500,
        responsive: [{
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                arrows: true,
                dots: true,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    arrows: false,
                    dots: false,
                    slidesToScroll: 1
                }
            }]
    });

    // active tabs at slider
    $('.section-main-content-slider-item').click(function () {
        $('.section-main-content-slider-item').removeClass('tab-active');
        $(this).toggleClass('tab-active');
    });

    // при клике на section-main-content-progress-bar-item-star-border должен выдаваться другой слайцер с другим контентом внутри.
    // $('.section-main-content-progress-bar-item-star-border').click(function () {
    //     $('.section-main-content-slider-items').toggleClass('active'); //add active class to section-main-content-slider-items...
    //     $('')
    // });
    // $('.content-side-options__option').click(function () {
    //     $('.content-side-main-result').show(1000);
    //     $('.content-side-options__option').removeClass('active');
    //     $(this).toggleClass('active');
    // });

    $('.bar-item').click(function () {
        $('.bar-item').removeClass('active');
        $(this).toggleClass('active');
    });

    $(document).ready(function () {
        $('ul.tabs li').click(function () {
            var tab_id = $(this).attr('data-tab');
            $('ul.tabs li').removeClass('current');
            $('.tab-content').removeClass('current');
            $(this).addClass('current');
            $("#" + tab_id).addClass('current');
        })
    });

    // TODO: add 4 different content in sliders to each round image
    // TODO: add simple toggling of NEW different content in slider


    // $('.test-1').click(function () {
    //     $('.test-2, .test-3, .test-4, .test-5').toggleClass('not-active');
    // })

    $.get(
        // "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=466U4PJ0R9230V6C",
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id": "2643743", //London, GB
            "appid": "d74f35da617974e2c8453a4e52d3aa81"
        },
        function (data) {
            let temp = '', humi = '', pressure = '', temp_min = '', temp_max = '';
            console.log(data);
            temp += 'Temp: <b>' + Math.round(data.main.temp - 273) + ' C &#176;</b><br>';
            humi += 'Humidity: <b>' + data.main.humidity + '%</b>';
            pressure += 'Pressure: <b>' + data.main.pressure + '</b>';
            temp_max += 'T max:<b>' + Math.round(data.main.temp_max - 273) + ' С &#176;</b>';
            temp_min += 'T min:<b>' + Math.round(data.main.temp_min - 273) + ' С &#176;</b>';
            // console.log('Humidity: '+data.main.humidity + '%');
            // console.log('Temp: '+Math.round(data.main.temp-273));
            console.log(data);
            $('.temp-show').html(temp);
            $('.humi-show').html(humi);
            $('.pressure-show').html(pressure);
            $('.temp_min-show').html(temp_min);
            $('.temp_max-show').html(temp_max);
        }
    )
});