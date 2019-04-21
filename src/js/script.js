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
            breakpoint: 481,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: false,
                slidesToScroll: 1
            }
        },
            {
                breakpoint: 320,
                settings: {
                    arrows: false,
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    $.get(
        // "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=MSFT&interval=1min&outputsize=full&apikey=466U4PJ0R9230V6C",
        "http://api.openweathermap.org/data/2.5/weather",
        {
            "id": "2643743",
            "appid": "d74f35da617974e2c8453a4e52d3aa81"
        },
        function (data) {
            let temp = '';
            let humi = '';
            let pressure = '';
            let temp_min = '';
            let temp_max = '';
            // out += 'Погода: <b>' + data.weather[0].main + '</b><br>';
            temp += 'Temp: <b>' + Math.round(data.main.temp - 273) + 'C</b><br>';
            humi += 'Humidity: <b>' + data.main.humidity + '%</b>';
            pressure += 'Pressure: <b>' + data.main.pressure + '</b>';
            temp_max += 'T max:<b>' + data.main.temp_max + '</b>';
            temp_min += 'T min:<b>' + data.main.temp_min + '</b>';
            // console.log('Humidity: '+data.main.humidity + '%');
            // console.log('Temp: '+Math.round(data.main.temp-273));
            console.log(data.main);
            $('.temp-show').html(temp);
            $('.humi-show').html(humi);
            $('.pressure-show').html(pressure);
            $('.temp_min-show').html(temp_min);
            $('.temp_max-show').html(temp_max);


        }
    )
});

$('.section-main-content-slider-item').click(function () {
    $(this).toggleClass('active');
})