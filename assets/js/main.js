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

    const updateSwiper = new Swiper('.product-update-desktop .update-swiper', {
        loop: false,
        // If we need pagination
        pagination: {
            el: '.product-update-desktop .update-pagination',
        },
        spaceBetween: 12,
        // Navigation arrows
        navigation: {
            nextEl: '.product-update-desktop .next-update',
            prevEl: '.product-update-desktop .prev-update',
        },
    });

    //mobile
    const updateMobileSwiper = new Swiper('.product-update-mobile .update-swiper', {
        loop: false,
        // If we need pagination
        pagination: {
            el: '.product-update-mobile .update-pagination',
        },
        spaceBetween: 12,
        // Navigation arrows
        navigation: {
            nextEl: '.product-update-mobile .next-update',
            prevEl: '.product-update-mobile .prev-update',
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

//background-image: linear-gradient(180deg, #27885D 21%, #44BD86 100%);

    const gradients = [
        {s: '#ff006f', e: 'rgb(75,246,7)'},
        {s: '#3D9ED5', e: 'rgb(233,253,255)'},
        {s: '#27885D', e: '#44BD86'},
        {s: '#072ff6', e: 'rgb(255,0,111)'},
        {s: '#3D9ED5', e: 'rgba(255,167,0,0.26)'},
        {s: '#3D9ED5', e: 'rgba(255, 255, 255, 0.00)'},
        {s: '#3D9ED5', e: 'rgba(255, 255, 255, 0.00)'},
        {s: '#3D9ED5', e: 'rgba(255, 255, 255, 0.00)'},
    ];

    const createGradient = (context, chart) => {

        if (!chart) {
            return;
        }
        const {ctx, chartArea} = chart;

        let val = 0;
        if (context.p0DataIndex <= 5) {
            val = context.p0DataIndex;
        } else {
            val = (context.p0DataIndex % 6);
        }

        const gradient = ctx.createLinearGradient(0, chartArea.top, 0, chartArea.bottom);

        gradient.addColorStop(0, gradients[val].s);
        gradient.addColorStop(1, gradients[val].e);

        return gradient;
    }

    const setColors = (ctx) => {
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


    const lineData =
        [
            {
                x: "9.07.2024", y: 4
            },{
                x: "10.07.2024", y: 15
            },
            {
                x: "11.07.2024", y: 13
            },
            {
                x: "12.07.2024", y: 9
            },
            {
                x: "13.07.2024", y: 20
            },
            {
                x: "14.07.2024", y: 30
            },

        ];

    const data = {

        datasets: [
            {
                type: 'line',
                label: 'Weekly Sales',
                data: lineData,
                fill: true,
                tension: 0.4,
                borderWidth: 2,
                order: 2,
                segment: {
                    borderColor: (ctx) => setColors(ctx),
                    backgroundColor: (ctx) => createGradient(ctx, ctx.chart),
                }
            },
            {
                label: 'Scatter Dataset',
                type: 'scatter',
                data: [
                    {x: "11.07.2024", y: 0},
                ],
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: '#fff',
                order: 1,
                borderWidth: 2,
                pointRadius: 7,
                pointStyle: 'rect'

            },
        ]
    };

    const barPlacement = [-8, -11, -14]

    const chartAreaBorder = {
        id: 'chartAreaBorder',
        beforeDraw(chart) {
            const { ctx, chartArea: { left, top, right, bottom } } = chart;

            // Save the current state
            ctx.save();

            // Ensure no strokes (borders) are drawn by setting the line width to 0
            ctx.lineWidth = 0;

            // Restore the state to ensure no other drawing operations are affected
            ctx.restore();
        }
    };

    // config
    const config = {
        data,
        options: {
            // responsive: true,
            maintainAspectRatio: false,

            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        callback: (label) => label <0 ? '' : label,
                    },
                    grid: {
                        color: (context) => {
                            console.log("ctx==>",context.tick.value);

                            return context.tick.value < 0 ? '#f7fafc' : '#F1F1F5';
                        },
                    },
                    border: {
                        display: false,
                    },

                },
                xAxes: {
                    type: 'time',
                    time: {
                        unit: 'day',
                        parser: 'dd.MM.yyyy',
                    },
                    position: {y:0},
                    border: {
                        display: false,
                    },
                    grid: {
                        color: (context) => {

                            return '#F1F1F5';
                        },
                    },
                },
                x: {
                    border: {
                        display:false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false,
                },
                // chartAreaBorder: {
                //     borderColor: '#f7fafc',
                //     borderWidth: { top: 0, bottom: 5, left: 0, right: 0 } // Customize border widths here
                // },
                annotation: {
                    // clip: false,
                    annotations: {
                        line1: {
                            type: 'line',
                            yMin: barPlacement[0],
                            yMax: barPlacement[0],
                            borderColor: '#DFE5F0',
                            borderWidth: 8,
                            // display:false
                        },
                        line2: {
                            type: 'line',
                            xMin: '11.07.2024',
                            xMax: '13.07.2024',
                            yMin: barPlacement[0],
                            yMax: barPlacement[0],
                            borderColor: '#C53E46',
                            borderWidth: 8  ,
                            // display:false
                        },
                        line3: {
                            type: 'line',
                            yMin: barPlacement[1],
                            yMax: barPlacement[1],
                            borderColor: '#DFE5F0',
                            borderWidth: 8,
                            // display:false
                        },
                        line4: {
                            type: 'line',
                            xMin: '10.07.2024',
                            xMax: '12.07.2024',
                            yMin: barPlacement[1],
                            yMax: barPlacement[1],
                            borderColor: '#27885D',
                            borderWidth: 8  ,
                            // display:false
                        },
                        line5: {
                            type: 'line',
                            yMin: barPlacement[2],
                            yMax: barPlacement[2],
                            borderColor: '#DFE5F0',
                            borderWidth: 8,
                            // display:false
                        },
                        line6: {
                            type: 'line',
                            xMin: '12.07.2024',
                            xMax: '13.07.2024',
                            yMin: barPlacement[2],
                            yMax: barPlacement[2],
                            borderColor: '#27885D',
                            borderWidth: 8  ,
                            // display:false
                        }
                    }
                }
            }
        },
        plugins: [chartAreaBorder]
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

    $('#btnViewMore').on('click', function () {
        $('#agentScoreList').addClass('view-all');
    });


});

