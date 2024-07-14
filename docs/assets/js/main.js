$(document).ready(function () {
    var bar = new ProgressBar.Circle("#feratured_progress", {
        color: "#000",
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
            autoStyleContainer: false,
        },
        from: {color: "#0062FF", width: 5},
        to: {color: "#0062FF", width: 5},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
            circle.path.setAttribute("stroke-width", state.width);
            circle.path.setAttribute("stroke-linecap", "round");

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText("");
            } else {
                circle.setText(value + "%");
            }
        },
    });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    bar.text.style.fontSize = "16px";

    bar.animate(0.75);


    // bootsts left swiper ------------------------------------------------------------>

    var boosts_left = new ProgressBar.Circle("#boosts_left_progress", {
        color: "#000",
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
            autoStyleContainer: false,
        },
        from: {color: "#FF974A", width: 5},
        to: {color: "#FF974A", width: 5},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
            circle.path.setAttribute("stroke-width", state.width);
            circle.path.setAttribute("stroke-linecap", "round");

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText("");
            } else {
                circle.setText(value + "%");
            }
        },
    });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    boosts_left.text.style.fontSize = "16px";

    boosts_left.animate(0.6);

    // wap swiper ------------------------------------------------------------>

    var boosts_left = new ProgressBar.Circle("#wap_progress", {
        color: "#000",
        strokeWidth: 4,
        trailWidth: 1,
        easing: "easeInOut",
        duration: 1400,
        text: {
            autoStyleContainer: false,
        },
        from: {color: "#53BC77", width: 5},
        to: {color: "#53BC77", width: 5},
        // Set default step function for all animate calls
        step: function (state, circle) {
            circle.path.setAttribute("stroke", state.color);
            circle.path.setAttribute("stroke-width", state.width);
            circle.path.setAttribute("stroke-linecap", "round");

            var value = Math.round(circle.value() * 100);
            if (value === 0) {
                circle.setText("");
            } else {
                circle.setText(value + "%");
            }
        },
    });
    // bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
    boosts_left.text.style.fontSize = "16px";

    boosts_left.animate(0.3);


    // swipoer hero---------------------------------------------------------------------------------------------------
    const progress_swiper = new Swiper(".progress-swiper", {
        direction: "horizontal",
        loop: false,
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: ".hero-next",
            prevEl: ".hero-prev",
        },
        slidesPerView: "auto",
        spaceBetween: 8,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1,
            },
            // when window width is >= 640px
            640: {
                slidesPerView: 'auto',
            },
        },
    });

    var bar1 = new ProgressBar.Path('#path-ndmds5olzj-3', {
        easing: 'easeInOut',
        duration: 1400,
    });

    bar1.set(0);
    bar1.animate(0.7);  // Number from 0.0 to 1.0

    const updateSwiper = new Swiper('.update-swiper', {
        loop: false,
        // If we need pagination
        pagination: {
            el: '.update-pagination',
        },
        spaceBetween: 12,
        // Navigation arrows
        navigation: {
            nextEl: '.next-update',
            prevEl: '.prev-update',
        },
    });

    const tipsAwiper = new Swiper('.tips-swiper', {
        loop: false,
        // If we need pagination
        pagination: {
            // el: '.update-pagination',
        },
        spaceBetween: 20,
        // Navigation arrows
        navigation: {
            nextEl: '.next-tip',
            prevEl: '.prev-tip',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                    slidesPerView: 1.2,
                spaceBetween: 12,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.3,
                spaceBetween: 12,

            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.5,
                spaceBetween: 12,

            },
            1200: {
                slidesPerView: 2.5,
            },
        },
    });

    var profileCompletion = new ProgressBar.Path("#profileCompleteProgress", {
        easing: 'easeInOut',
        duration: 1400,
    })

    profileCompletion.set(0);
    profileCompletion.animate(0.75);  // Number from 0.0 to 1.0


    //Chart js

    const chartColors = [
        'rgba(255, 26, 104, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(0, 0, 0, 1)'
    ];

    const setColors = (ctx)=>{
        let val = 0;
        if (ctx.p0DataIndex <= 5) {
            val = ctx.p0DataIndex;
            // return  chartColors[ctx.p0DataIndex]
        } else {
            val = (ctx.p0DataIndex % 6);
            // return chartColors[ctx.p0DataIndex % 2]
        }

        return chartColors[val]
    }

    const data = {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [{
            label: 'Weekly Sales',
            data: [0, 12, 6, 9, 12, 3, 9],
            backgroundColor: [
                'rgba(255, 26, 104, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(0, 0, 0, 0.2)'
            ],
            borderColor: [
                'rgba(255, 26, 104, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(0, 0, 0, 1)'
            ],
            fill: true,
            tension: 0.4,
            borderWidth: 2,
            segment: {
                borderColor: (ctx)=> setColors(ctx),
                backgroundColor: (ctx)=> setColors(ctx),
            }
        }]
    };

    // config
    const config = {
        type: 'line',
        data,
        options: {
            // scales: {
            //     y: {
            //         beginAtZero: true
            //     }
            // }
        }
    };

    // render init block
    const myChart = new Chart(
        document.getElementById('myChart'),
        config
    );


    //upgrade-swiper

    const upgradeSwiper = new Swiper('.upgrade-swiper', {
        spaceBetween: 16,
        slidesPerView: 1.25,
        navigation: {
            nextEl: '.next-upgrade',
            prevEl: '.prev-upgrade',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.4,
                spaceBetween: 12,

            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.4,
                spaceBetween: 12,

            },
            768: {
                slidesPerView: 1.4,
                spaceBetween: 12,

            },
            992: {
                slidesPerView: 1.2,
                spaceBetween: 12,

            },
            1200: {
                slidesPerView: 1.2,
            },
            1440: {
                slidesPerView: 1.4,
            },
        },
    });

    //trendingSwiper
    const trendingSwiper = new Swiper('.trendingSwiper', {
        spaceBetween: 16,
        slidesPerView: 2.7,
        navigation: {
            nextEl: '.next-trending',
            prevEl: '.prev-trending',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.4,
                spaceBetween: 12,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 12,

            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.5,
                spaceBetween: 12,

            },
            1200: {
                slidesPerView: 2.5,
            },
        },
    });

    //worstSwiper
    const worstSwiper = new Swiper('.worstSwiper', {
        spaceBetween: 16,
        slidesPerView: 2.7,
        navigation: {
            nextEl: '.next-worst',
            prevEl: '.prev-worst',
        },
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.4,
                spaceBetween: 12,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
                spaceBetween: 12,

            },
            // when window width is >= 640px
            640: {
                slidesPerView: 1.5,
                spaceBetween: 12,

            },
            1200: {
                slidesPerView: 2.5,
            },
        },
    });


    //show view more in agent section

    $('#btnViewMore').on('click', function(){
        $('#agentScoreList').addClass('view-all');
    });

});

