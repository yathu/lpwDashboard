$(document).ready(() => {
    Chart.register(ChartDataLabels);

    $(".chosen-select").chosen();

    //button groups swiper

    const dealsButtonswiper = new Swiper('.dealsButtonsSwiper', {
        // loop: true,
        slidesPerView: 'auto',
        spaceBetween: 10,

        // If we need pagination
        // pagination: {
        //   el: '.swiper-pagination',
        // },

        // Navigation arrows
        navigation: {
            nextEl: '.dealsNext ',
            prevEl: '.dealsPrev',
        },

    });

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))


    // $('button').popover('show').off('click');

    const genLeftTitle = (title, id, fromLeft, topAlign) => {
        const yLeftTitle = {
            id: id,
            afterDatasetsDraw(chart, args, options) {
                const {
                    ctx,
                    chartArea: {top, left},
                    scales: {x, y},
                } = chart;
                ctx.save();
                ctx.fillText(title, fromLeft, top - topAlign);
                ctx.restore();
            },
        };

        return yLeftTitle;
    };

    const genRightTitle = (title, id, fromRight, topAlign) => {
        const yRightTitle = {
            id: id,
            afterDatasetsDraw(chart, args, options) {
                const {
                    ctx,
                    chartArea: {top, right},
                    scales: {x, y},
                } = chart;
                ctx.save();
                ctx.fillText(title, right + fromRight, top - topAlign);
                ctx.restore();
            },
        };

        return yRightTitle;
    };

    // background: linear-gradient(180deg, #27885D 21.12%, #44BD86 100%);

    //background: linear-gradient(180deg, #2874BC 21.12%, #4392E7 100%);

    const createGradient = (chart, color) => {
        if (!chart) {
            return;
        }
        const {ctx, chartArea} = chart;

        const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);

        if (color == "green") {
            gradient.addColorStop(0.21, "#27885D"); // Start color
            gradient.addColorStop(1, "#44BD86");
        } else {
            gradient.addColorStop(0.21, "#2874BC"); // Start color
            gradient.addColorStop(1, "#4392E7");
        }

        // console.log("gradient==>", gradient);

        return gradient;
    };

    let CURRENT_LANGUAGE = 'en';

    //ads type chart
    var adsTypeCtx = document.getElementById("adsTypeChart");

    const AdsViewsData = [100, 300, 200];
    const potentialViewsData = [250, 350, 250];

    const AdsLeadsData = [350, 400, 300];
    const potentialLeadsData = [400, 450, 350];

    //char bars green - light-1fad53 dark-rgba(68, 189, 134, 0.34)

    //  3 colors for Current bars
    const currentBarColors = ['#1fad53', 'rgb(25 127 230)', 'rgb(25 127 230)'];
    //  3 transparent colors for Potential bars
    const potentialBarColors = ['rgba(68, 189, 134, 0.34)', 'rgb(147 206 236)', 'rgb(147 206 236)'];

    var adsTypeData = {
        labels: ["Featured Ads", "Platinum Ads", "Showcase Ads"],
        datasets: [
            {
                label: "Current",
                type: "bar",
                data: AdsViewsData,
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                // backgroundColor: (ctx) => {
                //   return createGradient(ctx.chart, "green");
                // },
                backgroundColor: currentBarColors,
                // barPercentage: 0.3

                // categoryPercentage:1.0,
                // barPercentage: 0.5,
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "green",
                    offset: 0,
                    display: false,
                },
            },
            {
                label: "Potential",
                type: "bar",
                data: potentialViewsData,
                // yAxisID: "y1",
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                backgroundColor: potentialBarColors,
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "blue",
                    offset: 0,
                    display: false,
                },
            }
        ],
    };

    var adsTypeChart = new Chart(adsTypeCtx, {
        type: "bar",
        data: adsTypeData,
        // inflateAmount: 5,
        options: {
            //barValueSpacing: 20,
            categoryPercentage: 0.5,
            barPercentage: 0.3,
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30,
                },
            },

            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    //	suggestedMin: 0,

                    ticks: {
                        // autoSkip: true,
                        maxTicksLimit: 6,
                    },
                    grid: {
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    // stacked: true,
                },
                // y1: {
                //   type: "linear",
                //   display: true,
                //   position: "right",
                //   //suggestedMin: 0,
                //   grid: {
                //     drawOnChartArea: false,
                //     tickColor: "white",
                //   },
                //   ticks: {
                //     // autoSkip: true,
                //     maxTicksLimit: 6,
                //   },
                //   stacked: true
                // },
                x: {
                    type: "category",
                    grid: {
                        drawOnChartArea: false,
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    border: {
                        display: false,
                    },
                    stacked: true,
                },
            },
            plugins: {
                legend: {
                    display: false,
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        // boxWidth: 0
                    },
                },
            },
        },
        plugins: [
            genLeftTitle("Pages", "PageNUmLtitle", 0, 20),
            // genRightTitle("Leads Per Ads", "PageNumRtitle", -50, 20),
        ],
    });

    //on pills change data

    // console.log(adsTypeChart.data);

    $("input[type=radio][name=upgradeChartType]").change(function () {
        console.log(adsTypeChart.data.datasets);
        if (this.value == "views") {
            adsTypeChart.data.datasets[0].data = AdsViewsData;
            adsTypeChart.data.datasets[1].data = potentialViewsData;

            // adsTypeChart.data.labels.splice(0, 1, "Featured");
        } else if (this.value == "leads") {
            adsTypeChart.data.datasets[0].data = AdsLeadsData;
            adsTypeChart.data.datasets[1].data = potentialLeadsData;

            // adsTypeChart.data.labels.splice(0, 1, "Platinum");
        }
        // else {
        //   // adsTypeChart.data.datasets[0].data = showcaseAdsViewsData;
        //   adsTypeChart.data.datasets[1].data = showcaseAdsLeadsData;
        //
        //   // adsTypeChart.data.labels.splice(0, 1, "ShowCase");
        // }

        adsTypeChart.update();
    });

    // Walkthrough Arrays
    const walkthrough1 = [
        {
            type: 'element',
            id: 'adsTypeChartDataType',
            content: {
                en: 'This information box provides context about the chart data.',
                es: 'Este cuadro de información proporciona contexto sobre los datos del gráfico.',
                fr: 'Cette boîte d\'information fournit un contexte sur les données du graphique.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Featured Ads',
            content: {
                en: 'These bars represent January sales for both products.',
                es: 'Estas barras representan las ventas de enero para ambos productos.',
                fr: 'Ces barres représentent les ventes de janvier pour les deux produits.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Platinum Ads',
            content: {
                en: 'March shows different performance across products.',
                es: 'Marzo muestra un rendimiento diferente entre productos.',
                fr: 'Mars montre des performances différentes selon les produits.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Showcase Ads',
            content: {
                en: 'March shows different performance across products.',
                es: 'Marzo muestra un rendimiento diferente entre productos.',
                fr: 'Mars montre des performances différentes selon les produits.'
            }
        },
        {
            type: 'element',
            id: 'adsTypeChartlegend',
            content: {
                en: 'The legend helps identify which color represents which product.',
                es: 'La leyenda ayuda a identificar qué color representa cada producto.',
                fr: 'La légende aide à identifier quelle couleur représente quel produit.'
            }
        }
    ];

    //ads type chart end

    //deals chart .......................................

    var dealsCtx = document.getElementById("dealsChart");

    // Data for all 6 ad types - Current and Potential
    const allDealsCurrentViewsData = [400, 300, 200, 350, 450, 500];
    const allDealsPotentialViewsData = [550, 450, 350, 500, 600, 650];

    const allDealsCurrentLeadsData = [600, 100, 400, 250, 350, 300];
    const allDealsPotentialLeadsData = [750, 250, 550, 400, 500, 450];

    var hotData = {
        labels: ["Hot deals", "WhatsApp Live Chat", "Ads with Videos", "New 1", "New with data", "Facebook Ads view"],
        datasets: [
            {
                label: "Current",
                type: "bar",
                data: allDealsCurrentViewsData,
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                backgroundColor: '#1fad53',
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "green",
                    offset: 0,
                    display: false,
                },
            },
            {
                label: "Potential",
                type: "bar",
                data: allDealsPotentialViewsData,
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                backgroundColor: 'rgba(68, 189, 134, 0.34)',
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "blue",
                    offset: 0,
                    display: false,
                },
            }
        ],
    };

    var dealsChart = new Chart(dealsCtx, {
        type: "bar",
        data: hotData,
        // inflateAmount: 5,
        options: {
            //barValueSpacing: 20,
            categoryPercentage: 0.5,
            barPercentage: 0.3,

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30,
                },
            },

            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    //	suggestedMin: 0,

                    ticks: {
                        // autoSkip: true,
                        maxTicksLimit: 6,
                    },
                    grid: {
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    // stacked: true,

                },
                // y1: {
                //     type: "linear",
                //     display: true,
                //     position: "right",
                //     //suggestedMin: 0,
                //     grid: {
                //         drawOnChartArea: false,
                //         tickColor: "white",
                //     },
                //     ticks: {
                //         // autoSkip: true,
                //         maxTicksLimit: 6,
                //     },
                // },
                x: {
                    type: "category",
                    grid: {
                        drawOnChartArea: false,
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    border: {
                        display: false,
                    },
                    stacked: true,
                },
            },
            plugins: {
                legend: {
                    display: false,
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        // boxWidth: 0
                    },
                },
            },
        },
        plugins: [
            genLeftTitle("Views", "dealsLtitle", 0, 20),
            // genRightTitle("Leads", "dealsRtitle", 1, 20),
        ],
    });

    // Toggle between Views and Leads for deals chart
    $("input[type=radio][name=dealChartDataType]").change(function (e) {
        e.preventDefault();

        if (this.value == "views") {
            dealsChart.data.datasets[0].data = allDealsCurrentViewsData;
            dealsChart.data.datasets[1].data = allDealsPotentialViewsData;
        } else if (this.value == "leads") {
            dealsChart.data.datasets[0].data = allDealsCurrentLeadsData;
            dealsChart.data.datasets[1].data = allDealsPotentialLeadsData;
        }

        dealsChart.update();
    });

    // Walkthrough deals
    const dealsChartWalk = [
        {
            type: 'element',
            id: 'dealChartDataType',
            content: {
                en: 'This information box provides context about the chart data.',
                es: 'Este cuadro de información proporciona contexto sobre los datos del gráfico.',
                fr: 'Cette boîte d\'information fournit un contexte sur les données du graphique.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Hot deals',
            content: {
                en: 'These bars represent January sales for both products.',
                es: 'Estas barras representan las ventas de enero para ambos productos.',
                fr: 'Ces barres représentent les ventes de janvier pour les deux produits.'
            }
        },
        {
            type: 'chart-bars',
            label: 'WhatsApp Live Chat',
            content: {
                en: 'March shows different performance across products.',
                es: 'Marzo muestra un rendimiento diferente entre productos.',
                fr: 'Mars montre des performances différentes selon les produits.'
            }
        },
        {
            type: 'element',
            id: 'dealsLegend',
            content: {
                en: 'The legend helps identify which color represents which product.',
                es: 'La leyenda ayuda a identificar qué color representa cada producto.',
                fr: 'La légende aide à identifier quelle couleur représente quel produit.'
            }
        }
    ];

    //deals chart end .......................................

    // boostedChart........................................
    //char bars green - light-1fad53 dark-rgba(68, 189, 134, 0.34)

    var boostedCtx = document.getElementById("boostedChart");

    const boostedFeaturedViewsData = [300, 300];
    const boostedNormalViewsData = [400, 500];

    const boostedFeaturedLeadsData = [200, 150];
    const boostedNormalLeadsData = [200, 450];

    const boostedCurrentBarColors = ['#1fad53', 'rgb(25 127 230)'];
    const boostedPotentialBarColors = ['rgba(68, 189, 134, 0.34)', 'rgb(147 206 236)'];

    var boostedData = {
        labels: ["Featured", "Normal"],
        datasets: [
            {
                label: "Boosted",
                type: "bar",
                data: boostedFeaturedViewsData,
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                backgroundColor: boostedCurrentBarColors,
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "green",
                    offset: 0,
                    display: false,
                },
            },
            {
                label: "Normal",
                type: "bar",
                data: boostedNormalViewsData,
                barThickness: 30,
                borderWidth: {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                },
                borderColor: "white",
                borderRadius: 7,
                backgroundColor: boostedPotentialBarColors,
                datalabels: {
                    align: "end",
                    anchor: "end",
                    color: "blue",
                    offset: 0,
                    display: false,
                },
            },
        ],
    };

    var boostedChart = new Chart(boostedCtx, {
        type: "bar",
        data: boostedData,
        // inflateAmount: 5,
        options: {
            //barValueSpacing: 20,
            categoryPercentage: 0.5,
            barPercentage: 0.3,

            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30,
                },
            },

            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    //	suggestedMin: 0,

                    ticks: {
                        // autoSkip: true,
                        maxTicksLimit: 6,
                    },
                    grid: {
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    // stacked: true,
                },
                x: {
                    type: "category",
                    grid: {
                        drawOnChartArea: false,
                        // drawTicks: false,
                        tickColor: "white",
                    },
                    border: {
                        display: false,
                    },
                    stacked: true,
                },
            },
            plugins: {
                legend: {
                    display: false,
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        // boxWidth: 0
                    },
                },
            },
        },
        plugins: [
            genLeftTitle("Pages", "boostedLtitle", 0, 20),
        ],
    });

    // Toggle between Views and Leads for boosted chart
    $("input[type=radio][name=boostedChartDataType]").change(function (e) {
        e.preventDefault();

        if (this.value == "views") {
            boostedChart.data.datasets[0].data = boostedFeaturedViewsData;
            boostedChart.data.datasets[1].data = boostedNormalViewsData;
        } else if (this.value == "leads") {
            boostedChart.data.datasets[0].data = boostedFeaturedLeadsData;
            boostedChart.data.datasets[1].data = boostedNormalLeadsData;
        }

        boostedChart.update();
    });

    // Walkthrough boosted chart
    const boostedChartWalk = [
        {
            type: 'element',
            id: 'boostedChartDataType',
            content: {
                en: 'This information box provides context about the chart data.',
                es: 'Este cuadro de información proporciona contexto sobre los datos del gráfico.',
                fr: 'Cette boîte d\'information fournit un contexte sur les données du graphique.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Featured',
            content: {
                en: 'These bars represent Featured ads performance.',
                es: 'Estas barras representan el rendimiento de los anuncios destacados.',
                fr: 'Ces barres représentent la performance des annonces mises en avant.'
            }
        },
        {
            type: 'chart-bars',
            label: 'Normal',
            content: {
                en: 'These bars represent Normal ads performance.',
                es: 'Estas barras representan el rendimiento de los anuncios normales.',
                fr: 'Ces barres représentent la performance des annonces normales.'
            }
        },
        {
            type: 'element',
            id: 'boostedLegend',
            content: {
                en: 'The legend helps identify which color represents which product.',
                es: 'La leyenda ayuda a identificar qué color representa cada producto.',
                fr: 'La légende aide à identifier quelle couleur représente quel produit.'
            }
        }
    ];

    // boostedChart ends ........................................


    var ctx = document.getElementById("pageNumberChart");

    const chartData = [
        {label: "1-10", view: 500, lead: 22, ads: 100, psg: "<0%"},
        {label: "11-20", view: 700, lead: 104, ads: 100, psg: "<1%"},
        {label: "21-30", view: 200, lead: 200, ads: 300, psg: "2%"},
        {label: "31-40", view: 800, lead: 300, ads: 800, psg: "6%"},
        {label: "41-50", view: 2000, lead: 400, ads: 400, psg: "20%"},
        {label: "51-60", view: 2500, lead: 525, ads: 3200, psg: "80%"},
        {label: "61-80", view: 3500, lead: 625, ads: 4200, psg: "90%"},
        {label: "81-100", view: 3500, lead: 625, ads: 4200, psg: "90%"},
    ];

    const labelsData = chartData.map((data) => data.label);
    const viewsData = chartData.map((data) => data.view);
    const LeadsData = chartData.map((data) => data.lead);
    const adsTick = chartData.map((data) => data.ads);
    const psg = chartData.map((data) => data.psg);

    // const boostedCurrentBarColors = ['#1fad53', 'rgb(25 127 230)'];

    var Addata = {
        labels: labelsData,
        datasets: [
            {
                label: "Views",
                type: "bar",
                backgroundColor: "#197FE6FF",
                data: viewsData,
                barThickness: 15,
                datalabels: {
                    display: false,
                },
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 5,

                // axis: 'y',
                //yAxisID: 'y',
            },
            {
                label: "Ads count",
                type: "bar",
                backgroundColor: "#1fad53",
                data: adsTick,
                xAxisID: "x2",
                barThickness: 15,
                datalabels: {
                    display: false,
                },
                borderWidth: 1,
                borderColor: "white",
                borderRadius: 5,

                // axis: 'y',
                // yAxisID: "y1",
            },
        ],
    };

    //pageNumberChart

    var myBarChart = new Chart(ctx, {
        type: "bar",
        data: Addata,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: "y",
            layout: {
                padding: {
                    top: 30,
                },
            },
            //barValueSpacing: 20,
            scales: {
                // xAxes: [{
                //     categoryPercentage: 5.0,
                //     barPercentage: 5.0
                // }],
                x: {
                    grid: {
                        drawOnChartArea: false,
                    },
                    display: false,
                },
                x2: {
                    type: "linear",
                    display: false,
                },
                y: {
                    type: "category",
                    grid: {
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    border: {
                        display: false,
                    },
                },
                y2: {
                    position: "right",
                    type: "linear",
                    grid: {
                        drawOnChartArea: false,
                        // drawTicks: false,
                        tickLength: 20,
                        tickColor: "white",
                    },
                    max: psg.length - 1,
                    min: 0,
                    ticks: {
                        // maxTicksLimit: psg.length,
                        stepSize: 1,
                        callback: function (val, index) {
                            const tickval = psg.reverse()[index];
                            return tickval;
                        },
                        // padding:5
                    },
                    border: {
                        display: false,
                    },
                },
                y3: {
                    type: "linear",
                    position: "right",
                    grid: {
                        drawOnChartArea: false,
                        drawTicks: false,
                    },
                    border: {
                        display: false,
                    },
                    min: 0,
                    max: adsTick.length - 1,
                    ticks: {
                        // maxTicksLimit: adsTick.length,
                        callback: function (val, index) {
                            const tickval = adsTick[index];

                            return tickval > 999 ? tickval / 1000 + "k" : tickval;
                        },
                        color: "blue",
                        font: {
                            weight: 600,
                        },
                    },
                },
                // y: {
                //   type: "linear",
                //   display: true,
                //   position: "right",
                // },
                // y1: {
                //   type: "linear",
                //   display: true,
                //   position: "right",
                //   //suggestedMin: 0,
                //   grid: {
                //     drawOnChartArea: false,
                //   },
                // },
            },

            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        // boxWidth: 0
                    },
                },
            },
        },
        plugins: [
            genLeftTitle("Pages", "PageNUmLtitle", 10, 15),
            genRightTitle("Leads Per Ads", "pageNumRtitle", 35, 15),
        ],
    });

    //leads and ads chart

    var ctx = document.getElementById("leadsAdsChart").getContext("2d");

    const leadsAdsData = [
        {label: "-100%", lead: 23, ads: 45},
        {label: "-90%", lead: 25, ads: 40},
        {label: "-80%", lead: 30, ads: 38},
        {label: "-70%", lead: 35, ads: 50},
        {label: "-60%", lead: 40, ads: 55},
        {label: "-50%", lead: 45, ads: 60},
        {label: "-40%", lead: 50, ads: 65},
        {label: "-30%", lead: 55, ads: 70},
        {label: "-20%", lead: 60, ads: 75},
        {label: "-10%", lead: 65, ads: 80},
        {label: "0%", lead: 78, ads: 12},
        {label: "10%", lead: 80, ads: 20},
        {label: "20%", lead: 85, ads: 25},
        {label: "30%", lead: 90, ads: 30},
        {label: "40%", lead: 95, ads: 35},
        {label: "50%", lead: 100, ads: 40},
        {label: "60%", lead: 105, ads: 45},
        {label: "70%", lead: 110, ads: 50},
        {label: "80%", lead: 115, ads: 55},
        {label: "90%", lead: 120, ads: 60},
        {label: "100%", lead: 125, ads: 90},
    ];

    var leadsData = {
        labels: leadsAdsData.map((data) => data.label),
        datasets: [
            {
                label: "Leads",
                type: "bar",
                backgroundColor: "#0C68E9",
                data: leadsAdsData.map((data) => data.lead),
                //yAxisID: 'y',
                datalabels: {
                    display: false,
                },
                borderRadius:5
            },
            {
                label: "Ads",
                type: "bar",
                backgroundColor: "#34A06F",
                data: leadsAdsData.map((data) => data.ads),
                yAxisID: "y1",
                datalabels: {
                    display: false,
                },
                borderRadius:5

            },
        ],
    };

    var leadsChart = new Chart(ctx, {
        type: "bar",
        data: leadsData,
        options: {
            //barValueSpacing: 20,
            responsive: true,
            maintainAspectRatio: false,
            layout: {
                padding: {
                    top: 30,
                },
            },
            scales: {
                x: {
                    grid: {
                        display: false,
                        // drawOnChartArea: false,
                        border: {
                            display: false,
                        },
                    },
                    title: {
                        display: true,
                        text: "Price percentage",
                        color: "#000",
                        font: {
                            // family: 'Roboto',
                            size: 14,
                        },
                        padding: {top: 15, left: 0, right: 0, bottom: 10},
                    },
                },
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    //	suggestedMin: 0,
                    grid: {
                        display: false,
                        // drawOnChartArea: false,
                    },
                },
                y1: {
                    type: "linear",
                    display: true,
                    position: "right",
                    //suggestedMin: 0,
                    grid: {
                        display: false,
                        // drawOnChartArea: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                        usePointStyle: true,
                        pointStyle: "circle",
                        // boxWidth: 0
                    },
                },
            },
        },
        plugins: [
            genLeftTitle("Leads", "leadLtitle", 0, 20),
            genRightTitle("Ads", "leadRtitle", 0, 20),
        ],
    });

    //overall chart...........................................

    const pageViewData7Days = [
        {
            x: "9.07.2024",
            y: 100,
            adsCount: 0,
        },
        {
            x: "10.07.2024",
            y: 105,
            adsCount: 1,
        },
        {
            x: "11.07.2024",
            y: 200,
            adsCount: 4,
        },
        {
            x: "12.07.2024",
            y: 25,
            adsCount: 6,
        },
        {
            x: "13.07.2024",
            y: 400,
            adsCount: 8,
        },
        {
            x: "14.07.2024",
            y: 700,
            adsCount: 9,
        },
        {
            x: "15.07.2024",
            y: 205,
            adsCount: 10,
        },
    ];

    const pageViewData90Days = [
        {x: "9.07.2024", y: 100, adsCount: 0},
        {x: "10.07.2024", y: 105, adsCount: 1},
        {x: "11.07.2024", y: 200, adsCount: 4},
        {x: "12.07.2024", y: 25, adsCount: 6},
        {x: "13.07.2024", y: 400, adsCount: 8},
        {x: "14.07.2024", y: 700, adsCount: 9},
        {x: "15.07.2024", y: 205, adsCount: 10},
        {x: "16.07.2024", y: 300, adsCount: 12},
        {x: "17.07.2024", y: 150, adsCount: 13},
        {x: "18.07.2024", y: 500, adsCount: 14},
        {x: "19.07.2024", y: 350, adsCount: 16},
        {x: "20.07.2024", y: 600, adsCount: 17},
        {x: "21.07.2024", y: 450, adsCount: 18},
        {x: "22.07.2024", y: 750, adsCount: 20},
        {x: "23.07.2024", y: 800, adsCount: 21},
        {x: "24.07.2024", y: 250, adsCount: 22},
        {x: "25.07.2024", y: 320, adsCount: 23},
        {x: "26.07.2024", y: 290, adsCount: 24},
        {x: "27.07.2024", y: 520, adsCount: 25},
        {x: "28.07.2024", y: 480, adsCount: 26},
        {x: "29.07.2024", y: 610, adsCount: 27},
        {x: "30.07.2024", y: 700, adsCount: 28},
        {x: "31.07.2024", y: 340, adsCount: 29},
        {x: "1.08.2024", y: 550, adsCount: 30},
        {x: "2.08.2024", y: 600, adsCount: 31},
        {x: "3.08.2024", y: 820, adsCount: 32},
        {x: "4.08.2024", y: 720, adsCount: 33},
        {x: "5.08.2024", y: 300, adsCount: 34},
        {x: "6.08.2024", y: 500, adsCount: 35},
        {x: "7.08.2024", y: 400, adsCount: 36},
        {x: "8.08.2024", y: 650, adsCount: 37},
        {x: "9.08.2024", y: 700, adsCount: 38},
        {x: "10.08.2024", y: 200, adsCount: 39},
        {x: "11.08.2024", y: 540, adsCount: 40},
        {x: "12.08.2024", y: 360, adsCount: 41},
        {x: "13.08.2024", y: 480, adsCount: 42},
        {x: "14.08.2024", y: 600, adsCount: 43},
        {x: "15.08.2024", y: 250, adsCount: 44},
        {x: "16.08.2024", y: 700, adsCount: 45},
        {x: "17.08.2024", y: 590, adsCount: 46},
        {x: "18.08.2024", y: 800, adsCount: 47},
        {x: "19.08.2024", y: 850, adsCount: 48},
        {x: "20.08.2024", y: 100, adsCount: 49},
        {x: "21.08.2024", y: 300, adsCount: 50},
        {x: "22.08.2024", y: 550, adsCount: 51},
        {x: "23.08.2024", y: 450, adsCount: 52},
        {x: "24.08.2024", y: 650, adsCount: 53},
        {x: "25.08.2024", y: 780, adsCount: 54},
        {x: "26.08.2024", y: 480, adsCount: 55},
        {x: "27.08.2024", y: 350, adsCount: 56},
        {x: "28.08.2024", y: 600, adsCount: 57},
        {x: "29.08.2024", y: 700, adsCount: 58},
        {x: "30.08.2024", y: 500, adsCount: 59},
        {x: "31.08.2024", y: 750, adsCount: 60},
        {x: "1.09.2024", y: 400, adsCount: 61},
        {x: "2.09.2024", y: 600, adsCount: 62},
        {x: "3.09.2024", y: 350, adsCount: 63},
    ];

    const pageViewData30Days = [
        {x: "9.07.2024", y: 100, adsCount: 0},
        {x: "10.07.2024", y: 105, adsCount: 1},
        {x: "11.07.2024", y: 200, adsCount: 4},
        {x: "12.07.2024", y: 25, adsCount: 6},
        {x: "13.07.2024", y: 400, adsCount: 8},
        {x: "14.07.2024", y: 700, adsCount: 9},
        {x: "15.07.2024", y: 205, adsCount: 10},
        {x: "16.07.2024", y: 300, adsCount: 12},
        {x: "17.07.2024", y: 150, adsCount: 13},
        {x: "18.07.2024", y: 500, adsCount: 14},
        {x: "19.07.2024", y: 350, adsCount: 16},
        {x: "20.07.2024", y: 600, adsCount: 17},
        {x: "21.07.2024", y: 450, adsCount: 18},
        {x: "22.07.2024", y: 750, adsCount: 20},
        {x: "23.07.2024", y: 800, adsCount: 21},
        {x: "24.07.2024", y: 850, adsCount: 23},
        {x: "25.07.2024", y: 300, adsCount: 24},
        {x: "26.07.2024", y: 400, adsCount: 25},
        {x: "27.07.2024", y: 500, adsCount: 26},
        {x: "28.07.2024", y: 600, adsCount: 28},
        {x: "29.07.2024", y: 450, adsCount: 29},
        {x: "30.07.2024", y: 700, adsCount: 30},
        {x: "31.07.2024", y: 800, adsCount: 31},
        {x: "01.08.2024", y: 650, adsCount: 33},
        {x: "02.08.2024", y: 700, adsCount: 34},
        {x: "03.08.2024", y: 500, adsCount: 35},
        {x: "04.08.2024", y: 750, adsCount: 37},
        {x: "05.08.2024", y: 800, adsCount: 38},
        {x: "06.08.2024", y: 900, adsCount: 40},
        {x: "07.08.2024", y: 950, adsCount: 41},
    ];

    const pageNumData7days = [
        {
            x: "9.07.2024",
            y: 0,
        },
        {
            x: "10.07.2024",
            y: 5,
        },
        {
            x: "11.07.2024",
            y: 10,
        },
        {
            x: "12.07.2024",
            y: 15,
        },
        {
            x: "13.07.2024",
            y: 10,
        },
        {
            x: "14.07.2024",
            y: 20,
        },
        {
            x: "15.07.2024",
            y: 15,
        },
    ];

    const pageNumData90Days = [
        {x: "9.07.2024", y: 0},
        {x: "10.07.2024", y: 5},
        {x: "11.07.2024", y: 10},
        {x: "12.07.2024", y: 15},
        {x: "13.07.2024", y: 10},
        {x: "14.07.2024", y: 20},
        {x: "15.07.2024", y: 15},
        {x: "16.07.2024", y: 25},
        {x: "17.07.2024", y: 20},
        {x: "18.07.2024", y: 30},
        {x: "19.07.2024", y: 25},
        {x: "20.07.2024", y: 35},
        {x: "21.07.2024", y: 30},
        {x: "22.07.2024", y: 40},
        {x: "01.09.2024", y: 10},
        {x: "03.09.2024", y: 20},
    ];

    const pageNumData30Days = [
        {x: "9.07.2024", y: 0},
        {x: "10.07.2024", y: 5},
        {x: "11.07.2024", y: 10},
        {x: "12.07.2024", y: 15},
        {x: "13.07.2024", y: 10},
        {x: "14.07.2024", y: 20},
        {x: "15.07.2024", y: 15},
        {x: "16.07.2024", y: 25},
        {x: "17.07.2024", y: 20},
        {x: "18.07.2024", y: 30},
        {x: "19.07.2024", y: 25},
        {x: "20.07.2024", y: 35},
        {x: "21.07.2024", y: 30},
        {x: "22.07.2024", y: 40},
        {x: "23.07.2024", y: 35},
        {x: "24.07.2024", y: 45},
        {x: "25.07.2024", y: 40},
        {x: "26.07.2024", y: 50},
        {x: "27.07.2024", y: 45},
        {x: "28.07.2024", y: 55},
        {x: "29.07.2024", y: 50},
        {x: "30.07.2024", y: 60},
        {x: "31.07.2024", y: 55},
        {x: "01.08.2024", y: 65},
        {x: "02.08.2024", y: 60},
        {x: "03.08.2024", y: 70},
        {x: "04.08.2024", y: 65},
        {x: "05.08.2024", y: 75},
        {x: "06.08.2024", y: 70},
        {x: "07.08.2024", y: 80},
    ];

    const scatter7 = [
        {x: "11.07.2024", y: 0, value: 2},
        {x: "13.07.2024", y: 0, value: 8},
    ];

    const scatter90 = [
        {x: "11.07.2024", y: 0, value: 2},
        {x: "03.09.2024", y: 0, value: 5},
    ];

    const scatter30 = [
        {x: "11.07.2024", y: 0, value: 2},
        {x: "29.07.2024", y: 0, value: 2},
    ];

    const yellowShades = [
        "#FFE0A3",
        "#FFCE70",
        "#FFBF44",
        "#FFAE14",
        "#F09E00",
        "#E08F00",
        "#B87500",
        "#915C00",
        "#6E4600",
        "#402900"
    ];

    const timelineDates7 = [
        "9.07.2024",
        "10.07.2024",
        "11.07.2024",
        "12.07.2024",
        "13.07.2024",
        "14.07.2024",
        "15.07.2024",
    ];

    const timelineDates90 = [
        "9.07.2024",
        "10.07.2024",
        "11.07.2024",
        "12.07.2024",
        "13.07.2024",
        "14.07.2024",
        "15.07.2024",
        "16.07.2024",
        "17.07.2024",
        "18.07.2024",
        "19.07.2024",
        "20.07.2024",
        "21.07.2024",
        "22.07.2024",
        "23.07.2024",
        "24.07.2024",
        "25.07.2024",
        "26.07.2024",
        "27.07.2024",
        "28.07.2024",
        "29.07.2024",
        "30.07.2024",
        "31.07.2024",
        "1.08.2024",
        "2.08.2024",
        "3.08.2024",
        "4.08.2024",
        "5.08.2024",
        "6.08.2024",
        "7.08.2024",
        "8.08.2024",
        "9.08.2024",
        "10.08.2024",
        "11.08.2024",
        "12.08.2024",
        "13.08.2024",
        "14.08.2024",
        "15.08.2024",
        "16.08.2024",
        "17.08.2024",
        "18.08.2024",
        "19.08.2024",
        "20.08.2024",
        "21.08.2024",
        "22.08.2024",
        "23.08.2024",
        "24.08.2024",
        "25.08.2024",
        "26.08.2024",
        "27.08.2024",
        "28.08.2024",
        "29.08.2024",
        "30.08.2024",
        "31.08.2024",
        "1.09.2024",
        "2.09.2024",
        "3.09.2024",
    ];

    const timelineDates30 = [
        "9.07.2024",
        "10.07.2024",
        "11.07.2024",
        "12.07.2024",
        "13.07.2024",
        "14.07.2024",
        "15.07.2024",
        "16.07.2024",
        "17.07.2024",
        "18.07.2024",
        "19.07.2024",
        "20.07.2024",
        "21.07.2024",
        "22.07.2024",
        "23.07.2024",
        "24.07.2024",
        "25.07.2024",
        "26.07.2024",
        "27.07.2024",
        "28.07.2024",
        "29.07.2024",
        "30.07.2024",
        "31.07.2024",
        "01.08.2024",
        "02.08.2024",
        "03.08.2024",
        "04.08.2024",
        "05.08.2024",
        "06.08.2024",
        "07.08.2024",
    ];

    const timeline_7data = [
        {
            start: "11.07.2024",
            end: "13.07.2024",
            type: "whatsapp",
            value: 2,
        },
        {
            start: "9.07.2024",
            end: "13.07.2024",
            type: "hotDeal",
            value: 2,
        },
        {
            start: "12.07.2024",
            end: "13.07.2024",
            type: "urgentSale",
            value: 2,
        },
        {
            start: "10.07.2024",
            end: "11.07.2024",
            type: "thumbnailVideo",
            value: 2,
        },
        {
            start: "14.07.2024",
            end: "15.07.2024",
            type: "thumbnailVideo",
            value: 2,
        },
    ];

    const timeline_90data = [
        {
            start: "10.07.2024",
            end: "12.07.2024",
            type: "whatsapp",
            value: 3,
        },
        {
            start: "9.07.2024",
            end: "13.07.2024",
            type: "hotDeal",
            value: 5,
        },
        {
            start: "14.07.2024",
            end: "16.07.2024",
            type: "urgentSale",
            value: 3,
        },
        {
            start: "20.08.2024",
            end: "01.09.2024",
            type: "thumbnailVideo",
            value: 4,
        },
    ];

    const timeline_30data = [
        {
            start: "10.07.2024",
            end: "14.07.2024",
            type: "whatsapp",
            value: 5,
        },
        {
            start: "9.07.2024",
            end: "15.07.2024",
            type: "hotDeal",
            value: 7,
        },
        {
            start: "16.07.2024",
            end: "20.07.2024",
            type: "urgentSale",
            value: 5,
        },
        {
            start: "29.07.2024",
            end: "07.08.2024",
            type: "thumbnailVideo",
            value: 6,
        },
    ];

    const chartDatas = {
        all: {
            7: {
                pageView: pageViewData7Days,
                pageNUm: pageNumData7days,
                scatter: scatter7,
                timelineDate: timelineDates7,
                timelineData: timeline_7data,
                performance: {isUp: false, value: 49.5}

            },
            30: {
                pageView: pageViewData30Days,
                pageNUm: pageNumData30Days,
                scatter: scatter30,
                timelineDate: timelineDates30,
                timelineData: timeline_30data,
                performance: {isUp: true, value: 69.5}

            },
            90: {
                pageView: pageViewData90Days,
                pageNUm: pageNumData90Days,
                scatter: scatter90,
                timelineDate: timelineDates90,
                timelineData: timeline_90data,
                performance: {isUp: true, value: 9.5}

            },
        },
        ads1: {
            7: {
                pageView: [
                    {
                        x: "9.07.2024",
                        y: 500,
                        adsCount: 0,
                    },
                    ...pageViewData7Days.slice(1),
                ],
                pageNUm: [
                    {
                        x: "9.07.2024",
                        y: 1,
                    },
                    {
                        x: "14.07.2024",
                        y: 1,
                    },
                    // ...pageNumData7days.slice(1),
                ],
                scatter: scatter7,
                timelineDate: [...timelineDates7, ..."16.07.2024"],
                timelineData: [
                    ...timeline_7data,
                    {
                        start: "15.07.2024",
                        end: "16.07.2024",
                        type: "thumbnailVideo",
                        value: 9,
                    },
                ],
                performance: {isUp: false, value: 19.5}

            },
            30: {
                pageView: pageViewData30Days,
                pageNUm: pageNumData30Days,
                scatter: scatter30,
                timelineDate: timelineDates30,
                timelineData: timeline_30data,
                performance: {isUp: true, value: 39.5}

            },
            90: {
                pageView: pageViewData90Days,
                pageNUm: pageNumData90Days,
                scatter: scatter90,
                timelineDate: timelineDates90,
                timelineData: timeline_90data,
                performance: {isUp: false, value: 29.5}
            },
        },
    };

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(233,255,250,0.67)');
    gradient.addColorStop(1, 'rgba(154,189,184,0.09)');

    const data = {
        datasets: [
            {
                type: "line",
                label: "Views",
                data: chartDatas.all[7].pageView,
                fill: true,
                tension: 0.4,
                borderWidth: 2,
                order: 3,
                segment: {
                    // borderColor: (ctx) => "#3DD598",
                    backgroundColor: (ctx) => {
                        const ads_count = ctx?.p0?.raw?.adsCount;
                        const chart = ctx.chart;
                        const {ctx: canvasCtx, chartArea} = chart;

                        if (!chartArea) {
                            // Chart not fully initialized yet
                            return 'rgb(255,255,255)';
                        }

                        // Create gradient
                        const gradient = canvasCtx.createLinearGradient(
                            0, chartArea.bottom,
                            0, chartArea.top
                        );

                        // Add yellow at stop 0
                        gradient.addColorStop(0, '#fffcf9'); // Yellow

                        // Add dynamic color based on ads_count
                        if (ads_count) {
                            const color = ads_count < 10
                                ? yellowShades[ads_count]
                                : yellowShades[yellowShades.length - 1];
                            gradient.addColorStop(1, color);
                        } else {
                            gradient.addColorStop(1, yellowShades[0]);
                        }

                        return gradient;
                    },
                },
                // backgroundColor: gradient,
                // pointStyle: false,
                datalabels: {
                    display: false,
                },
                pointBackgroundColor: "yellow",
                borderColor: "#2bb8a5",
                pointRadius: 3,
                pointBorderColor: yellowShades[yellowShades.length - 1],
                pointBorderWidth: 1,
            },

            {
                type: "line",
                label: "Page #",
                data: chartDatas.all[7].pageNUm,
                fill: false,
                tension: 0.4,
                borderWidth: 2,
                order: 1,
                borderColor: "#9933cc",
                // pointStyle: false,
                yAxisID: "viewLine",
                datalabels: {
                    display: false,
                },
                pointBackgroundColor: "#9933cc",
                pointRadius: 3,
                pointBorderColor: "#9933cc",
                pointBorderWidth: 1,
                borderDash:[4,4]
            },
            {
                label: "Scatter Dataset",
                type: "bubble",
                data: chartDatas.all[7].scatter.filter((data) => data.value > 0),
                backgroundColor: "#f97416",
                borderColor: "#ff0000",
                order: 2,
                borderWidth: 0,
                pointRadius: 14,
                pointHoverRadius: 1,
                pointStyle: 'rectRounded',

                // Core options
                datalabels: {
                    font: {
                        size: 11,
                    },
                    formatter: function ({value}, context) {
                        return value < 100 ? value : "99+";
                        // return value;
                    },
                    color: 'white'
                },
            },
        ],
    };

    const overallChartHoverLinePlugin = {
        id: "overallChartHoverLine",
        afterDraw(chart) {
            const activeElements = chart.getActiveElements
                ? chart.getActiveElements()
                : chart?.tooltip?._active || [];

            if (!activeElements.length) {
                return;
            }

            const activePoint = activeElements[0].element || activeElements[0];
            const x = activePoint?.x;
            const { top, bottom } = chart.chartArea || {};

            if (x === undefined || top === undefined || bottom === undefined) {
                return;
            }

            const { ctx } = chart;
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, top);
            ctx.lineTo(x, bottom);
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#D8D8DF";
            ctx.stroke();
            ctx.restore();
        },
    };

    // config
    const config = {
        data,
        plugins: [overallChartHoverLinePlugin],
        options: {
            clip: false,
            responsive: true,
            maintainAspectRatio: false,
            interaction: {
                mode: "nearest",
                intersect: false,
                axis: "x",
            },
            hover: {
                mode: "nearest",
                intersect: false,
                axis: "x",
            },

            scales: {
                y: {
                    type: "linear",
                    display: true,
                    position: "left",
                    // beginAtZero: true,
                    ticks: {
                        precision: 0,
                        callback: (label) => (label < 0 ? "" : label),
                    },
                    grid: {
                        color: (context) => {
                            // console.log("ctx==>", context.tick.value);

                            return context.tick.value < 0 ? "#f7fafc" : "#F1F1F5";
                        },
                    },
                    border: {
                        display: false,
                    },
                    suggestedMin: 0,
                    // suggestedMax: 30
                },

                viewLine: {
                    type: "linear",
                    display: true,
                    position: "right",
                    // beginAtZero: true,
                    ticks: {
                        precision: 0,
                        callback: (label) => (label < 0 ? "" : label),
                    },
                    grid: {
                        display: false,
                        drawOnChartArea: false,
                    },
                    suggestedMin: 1,
                    // suggestedMax: 30
                    reverse: true,
                    min: 1
                },

                xAxes: {
                    type: "time",
                    // alignToPixels:true,
                    ticks: {
                        color: (context) => {
                            console.log("Color val==>", context.tick.value);
                            const dayOfWeek = moment(context.tick.value).day();
                            var isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0);

                            if (isWeekend) {
                                return 'blue'
                            } else{
                                return 'grey'
                            }
                        }
                    },
                    time: {
                        unit: "day",
                        parser: "dd.MM.yyyy",
                        displayFormats: {
                            millisecond: "MMM dd",
                            second: "MMM dd",
                            minute: "MMM dd",
                            hour: "MMM dd",
                            day: "MMM dd",
                            week: "MMM dd",
                            month: "MMM dd",
                            quarter: "MMM dd",
                            year: "MMM dd",
                        },
                    },
                    // position: {
                    //   y: 0
                    // },
                    border: {
                        display: false,
                    },
                    grid: {
                        color: (context) => {
                            return "#F1F1F5";
                        },
                    },
                },
                x: {
                    border: {
                        display: false,
                    },
                    // position: { y: 0 },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },

                tooltip: {
                    enabled: false,
                    mode: "nearest",
                    intersect: false,
                    external: function (context) {
                        const {chart, tooltip} = context;
                        let tooltipEl = chart.canvas.parentNode.querySelector('.overall-chart-tooltip');

                        // Create tooltip element on first render
                        if (!tooltipEl) {
                            tooltipEl = document.createElement('div');
                            tooltipEl.classList.add('overall-chart-tooltip');
                            tooltipEl.style.cssText = `
                                background: #fff;
                                border: 1px solid #e0e0e0;
                                border-radius: 8px;
                                padding: 12px 14px;
                                pointer-events: none;
                                position: absolute;
                                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                                font-size: 13px;
                                color: #333;
                                box-shadow: 0 2px 8px rgba(0,0,0,0.08);
                                transition: opacity 0.15s ease, left 0.1s ease, top 0.1s ease;
                                z-index: 100;
                                min-width: 140px;
                            `;
                            chart.canvas.parentNode.appendChild(tooltipEl);
                        }

                        // Hide if no tooltip
                        if (tooltip.opacity === 0) {
                            tooltipEl.style.opacity = '0';
                            return;
                        }

                        // Build tooltip content
                        let innerHtml = '';

                        // Date header – use the title (x-axis label)
                        if (tooltip.title && tooltip.title.length) {
                            const rawTitle = tooltip.title[0];
                            // Format date as "Mon DD" e.g. "Jun 24"
                            let dateStr = rawTitle;
                            console.log("dateStr==>",dateStr);
                            try {
                                const parsed = moment(dateStr, "MMM DD, YYYY, hh:mm:ss a");
                                if (parsed.isValid()) {
                                    dateStr = parsed.format('MMM DD, YYYY');
                                }
                            } catch(e) {
                                console.log("date format error==>",e);
                            }
                            innerHtml += `<div style="font-size:15px;font-weight:600;color:#222;margin-bottom:8px;">${dateStr}</div>`;
                        }

                        // Separate items: line datasets vs bubble dataset
                        const lineItems = [];
                        const bubbleItems = [];

                        if (tooltip.dataPoints) {
                            tooltip.dataPoints.forEach((dp) => {
                                if (dp.dataset.type === 'bubble') {
                                    bubbleItems.push(dp);
                                } else {
                                    lineItems.push(dp);
                                }
                            });
                        }

                        // Render line dataset rows (Views, Page #) with circle markers
                        lineItems.forEach((dp) => {
                            const color = dp.dataset.borderColor || dp.dataset.backgroundColor || '#999';
                            const label = dp.dataset.label || '';
                            const value = dp.parsed && dp.parsed.y !== undefined ? dp.parsed.y : dp.formattedValue;
                            innerHtml += `
                                <div style="display:flex;align-items:center;gap:7px;margin-bottom:4px;">
                                    <span style="width:9px;height:9px;border-radius:50%;background:${color};display:inline-block;flex-shrink:0;"></span>
                                    <span style="color:#666;">${label}:</span>
                                    <span style="font-weight:600;color:#222;margin-left:4px;">${value}</span>
                                </div>`;
                        });

                        // Divider + Bubble dataset rows (Upgrade Ads) with rounded-rect marker
                        if (bubbleItems.length > 0) {
                            innerHtml += `<div style="border-top:1px solid #e5e5e5;margin:6px 0;"></div>`;
                            bubbleItems.forEach((dp) => {
                                const rawVal = dp.raw && dp.raw.value !== undefined ? dp.raw.value : '';
                                innerHtml += `
                                    <div style="display:flex;align-items:center;gap:7px;">
                                        <span style="width:12px;height:9px;border-radius:3px;background:#f97416;display:inline-block;flex-shrink:0;"></span>
                                        <span style="color:#666;">Upgrade Ads:</span>
                                        <span style="font-weight:600;color:#b8860b;margin-left:4px;">${rawVal}</span>
                                    </div>`;
                            });
                        }

                        tooltipEl.innerHTML = innerHtml;
                        tooltipEl.style.opacity = '1';

                        // Position tooltip
                        const {offsetLeft: positionX, offsetTop: positionY} = chart.canvas;
                        const tooltipWidth = tooltipEl.offsetWidth;
                        const chartWidth = chart.width;
                        let left = positionX + tooltip.caretX + 12;
                        // Flip to left side if overflowing right
                        if (tooltip.caretX + tooltipWidth + 20 > chartWidth) {
                            left = positionX + tooltip.caretX - tooltipWidth - 12;
                        }
                        tooltipEl.style.left = left + 'px';
                        tooltipEl.style.top = positionY + tooltip.caretY - 20 + 'px';
                    },
                },
            },
        },
        // plugins: [chartAreaBorder],
    };

    const overallChart = new Chart(
        document.getElementById("overAllChart"),
        config
    );

    const addOneMorePage = () => {
        // return;

        const maxPage = overallChart.scales.viewLine.max;
        const length = overallChart.scales.viewLine.ticks.length;
        const stepSize = maxPage / (length - 1);
        const newMaxVal = Math.ceil(maxPage + stepSize);

        // if (length > 4) {
        //   return;
        // }

        console.log("old==>", maxPage);
        console.log("new==>", stepSize, newMaxVal);
        overallChart.config.options.scales.viewLine.max = newMaxVal;
        overallChart.config.options.scales.viewLine.ticks.stepSize = stepSize;

        console.log(overallChart.config.options.scales.viewLine);
        overallChart.update();
    };

    addOneMorePage();

    //overall chart...........................................

    //timeline chart...........

    const whatsappCount = 9;
    const hotDealCount = 2;
    const urgetSaleCount = 2;
    const thumbVideoCount = 2;

    const whatsappLiveColors = [
        "#CCFFCC", // Light Green
        "#B3FFB3",
        "#99FF99",
        "#80FF80",
        "#66FF66",
        "#4DFF4D",
        "#33FF33",
        "#1AFF1A",
        "#00FF00", // Lime
        "#00E600",
        "#00CC00",
        "#00B300",
        "#009900",
        "#008000", // Green
        "#006600",
        "#004D00",
        "#003300",
        "#001A00",
        "#001000",
        "#000D00", // Very Dark Green
    ];

    const hotDealColors = [
        "#FFCCCC", // Light Red
        "#FF9999",
        "#FF6666",
        "#FF3333",
        "#FF0000", // Red
        "#E60000",
        "#CC0000",
        "#990000",
        "#660000",
        "#330000", // Dark Red
    ];

    const urgentSaleColors = [
        "#E6CCFF", // Light Purple
        "#D9B3FF",
        "#CC99FF",
        "#BF80FF",
        "#B366FF",
        "#A64DFF",
        "#9933FF",
        "#8C1AFF",
        "#8000FF", // Purple
        "#6600CC", // Dark Purple
    ];

    const thumbnailVideoAdColors = [
        "#CCE5FF", // Light Blue
        "#B3D1FF",
        "#99CCFF",
        "#80BFFF",
        "#66B2FF",
        "#4DA6FF",
        "#3399FF",
        "#1A8CFF",
        "#007BFF", // Medium Blue
        "#005FCC", // Dark Blue
    ];

    const upgradeAdsColors = [
        "#ddcfc0", // Lightest shade
        "#d8c4b1",
        "#d5b79a",
        "#d2ab87",
        "#ce9f74",
        "#ca9361",
        "#c6874e",
        "#c27b3b",
        "#bf6f34",
        "#bd5c28", // Darkest shade
    ];

    // const timelineData = [
    //   {
    //     x: "9.07.2024",
    //     // y: 10,
    //   },
    //   {
    //     x: "10.07.2024",
    //     // y: 5,
    //   },
    //   {
    //     x: "11.07.2024",
    //     // y: 10,
    //   },
    //   {
    //     x: "12.07.2024",
    //     // y: 15,
    //   },
    //   {
    //     x: "13.07.2024",
    //     // y: 10,
    //   },
    //   {
    //     x: "14.07.2024",
    //     // y: 20,
    //   },
    //   {
    //     x: "15.07.2024",
    //     // y: 15,
    //   },
    // ];

    const timelineData = (Tata) =>
        Tata.map((data) => {
            return {x: data};
        });

    const timeline_ctx = document.getElementById("timelineChart");

    const timeline_data = {
        datasets: [
            {
                label: "# of Votes",
                data: timelineData(chartDatas.all[7].timelineDate),
                borderWidth: 1,

            },
        ],
    };
    const barPlacement = [0, 3, 6, 9, 12];

    const adjust = -25;
    const titleLabelSize = 12;
    const titlePadding = {
        top: 2,
        left: 4,
        bottom: 2,
        right: 4,
    };

    const timeline_bg_lines = {
        label1: {
            type: "label",
            yValue: 12,
            // xValue:'9.07.2024',
            backgroundColor: "#333",
            content: ["Whatsapp"],
            font: {
                size: titleLabelSize,
            },
            yAdjust: adjust,
            color: "#fff",
            borderRadius: 4,
            padding: titlePadding,
        },
        label2: {
            type: "label",
            yValue: 9,
            // xValue:'9.07.2024',
            backgroundColor: "#333",
            content: ["Hot deal"],
            font: {
                size: titleLabelSize,
            },
            yAdjust: adjust,
            color: "#fff",
            borderRadius: 4,
            padding: titlePadding,
        },
        label3: {
            type: "label",
            yValue: 6,
            // xValue:'9.07.2024',
            backgroundColor: "#333",
            content: ["Urgent sale"],
            font: {
                size: titleLabelSize,
            },
            yAdjust: adjust,
            color: "#fff",
            borderRadius: 4,
            padding: titlePadding,
        },
        label4: {
            type: "label",
            yValue: 3,
            // xValue:'9.07.2024',
            backgroundColor: "#333",
            content: ["Thumbnail Video"],
            font: {
                size: titleLabelSize,
            },
            yAdjust: adjust,
            color: "#fff",
            borderRadius: 4,
            padding: titlePadding,
        },

        line100: {
            type: "line",
            yMin: barPlacement[1],
            yMax: barPlacement[1],
            borderColor: "#DFE5F0",
            borderWidth: 8,
            drawTime: "beforeDatasetsDraw",
        },

        line101: {
            type: "line",
            yMin: barPlacement[2],
            yMax: barPlacement[2],
            borderColor: "#DFE5F0",
            borderWidth: 8,
            drawTime: "beforeDatasetsDraw",
        },

        line102: {
            type: "line",
            yMin: barPlacement[3],
            yMax: barPlacement[3],
            borderColor: "#DFE5F0",
            borderWidth: 8,
            drawTime: "beforeDatasetsDraw",
        },

        line103: {
            type: "line",
            yMin: barPlacement[4],
            yMax: barPlacement[4],
            borderColor: "#DFE5F0",
            borderWidth: 8,
            drawTime: "beforeDatasetsDraw",
        },
    };

    const getColor = (type, value) => {
        console.log("getColor=>", type, value);

        const colorType =
            type == "whatsapp"
                ? whatsappLiveColors
                : type == "hotDeal"
                    ? hotDealColors
                    : type == "urgentSale"
                        ? urgentSaleColors
                        : thumbnailVideoAdColors;

        const newVal = value > colorType.length - 1 ? colorType.length - 1 : value;

        return colorType[newVal];
    };

    // Timeline Tooltip Helper
    const getTooltip = () => {
        let tooltip = document.getElementById('timeline-tooltip');
        if (!tooltip) {
            tooltip = document.createElement('div');
            tooltip.id = 'timeline-tooltip';
            tooltip.style.opacity = 0;
            tooltip.style.position = 'absolute';
            tooltip.style.background = '#fff';
            tooltip.style.border = '1px solid #ebebebff';
            tooltip.style.color = '#000000ff';
            tooltip.style.borderRadius = '5px';
            tooltip.style.padding = '6px 10px';
            tooltip.style.fontSize = '12px';
            tooltip.style.fontFamily = '"Inter", sans-serif';
            tooltip.style.pointerEvents = 'none';
            tooltip.style.zIndex = '1000';
            tooltip.style.transition = 'opacity 0.2s';
            tooltip.style.transform = 'translate(-50%, -100%)'; // Center above cursor
            tooltip.style.marginTop = '-10px';
            document.body.appendChild(tooltip);
        }
        return tooltip;
    };

    const formatDate = (dateUnformated) => {
        // Parse dd.MM.yyyy
        const parts = dateUnformated.split('.');
        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1; // Months are 0-indexed
        const year = parseInt(parts[2], 10);
        
        const date = new Date(year, month, day);
        
        // Format to "MMM dd" (e.g. Jul 18)
        return date.toLocaleDateString('en-US', { month: 'short', day: '2-digit' });
    };

    const timeline_anntation_gen = (genData) => {
        let temData = {};

        // Group data by type to track which types are present
        const typesPresent = new Set();
        genData.forEach(({type}) => {
            typesPresent.add(type);
        });

        // Get the type-specific styling
        const getTypeStyle = (type) => {
            switch(type) {
                case "hotDeal":
                    return {
                        bgColor: "#EF5350",
                        icon: "\uF7F6",  // bi-fire
                        label: "Hot Deal"
                    };
                case "urgentSale":
                    return {
                        bgColor: "#4CAF50",
                        icon: "\uF46E",  // bi-lightning-charge-fill
                        label: "Urgent Sale"
                    };
                case "whatsapp":
                    return {
                        bgColor: "#25D366",
                        icon: "\uF618",  // bi-chat-fill
                        label: "Whatsapp"
                    };
                default:
                    return {
                        bgColor: "#2196F3",
                        icon: "\uF4F0",  // bi-play-btn-fill
                        label: "Thumbnail Video"
                    };
            }
        };

        // Create one title per category (centered in chart area)
        let titleIndex = 0;
        typesPresent.forEach((type) => {
            const style = getTypeStyle(type);
            const placement =
                type == "whatsapp"
                    ? 4
                    : type == "hotDeal"
                        ? 3
                        : type == "urgentSale"
                            ? 2
                            : 1;

            const titleStr = `categoryTitle${titleIndex}`;
            temData[titleStr] = {
                type: "label",
                yValue: barPlacement[placement],
                yAdjust: -22,
                // xAdjust: -75,
                backgroundColor: "#333",
                content: [style.label],
                font: {
                    size: 10,
                    family: '"Inter", sans-serif',
                },
                display: window.innerWidth < 768,
                color: "#fff",
                borderRadius: 4,
                padding: {
                    top: 2,
                    left: 4,
                    bottom: 2,
                    right: 4,
                },
                position: "center",
                drawTime: "afterDatasetsDraw",
            };
            titleIndex++;
        });

        let annotationIndex = 0;
        
        genData.forEach(({start, end, type, value}, index) => {
            const style = getTypeStyle(type);
            
            const placement =
                type == "whatsapp"
                    ? 4
                    : type == "hotDeal"
                        ? 3
                        : type == "urgentSale"
                            ? 2
                            : 1;

            // Main bar annotation using box type for rounded corners
            const barStr = `bar${annotationIndex}`;
            const barAnnotation = {
                [barStr]: {
                    type: "box",
                    xMin: start,
                    xMax: end,
                    yMin: barPlacement[placement] - (window.innerWidth >= 768 ? 0.9 : 0.45),
                    yMax: barPlacement[placement] + (window.innerWidth >= 768 ? 0.9 : 0.45),
                    backgroundColor: style.bgColor,
                    borderColor: style.bgColor,
                    borderRadius: 6,
                    borderWidth: 0,
                    drawTime: "afterDatasetsDraw",
                    label: {
                        display: window.innerWidth >= 768,
                        content: `${style.icon}  ${style.label}`,
                        color: "#fff",
                        font: {
                            family: `"bootstrap-icons", "Inter", sans-serif`,
                            size: 10,
                            weight: 500,
                        },
                        position: {
                            x: "start",
                            y: "center"
                        },
                        padding: {
                            left: window.innerWidth >= 576 ? 10 : 4,
                            right: window.innerWidth >= 576 ? 8 : 2,
                        },
                    },
                    enter: (ctx, event) => {
                        const tooltip = getTooltip();
                        tooltip.innerHTML = `${formatDate(start)} - ${formatDate(end)}`;
                        
                        // Use native event coordinates for body-relative positioning
                        const e = event.native || event;
                        const pageX = e.pageX !== undefined ? e.pageX : e.clientX + window.scrollX;
                        const pageY = e.pageY !== undefined ? e.pageY : e.clientY + window.scrollY;
                        
                        tooltip.style.left = pageX + 'px';
                        tooltip.style.top = pageY + 'px';
                        tooltip.style.opacity = 1;
                        ctx.chart.canvas.style.cursor = 'pointer';
                    },
                    leave: (ctx, event) => {
                        const tooltip = getTooltip();
                        tooltip.style.opacity = 0;
                        ctx.chart.canvas.style.cursor = 'default';
                    }
                },
            };

            // Badge annotation for count (x1, x2, etc.)
            const badgeStr = `badge${annotationIndex}`;
            const badgeAnnotation = {
                [badgeStr]: {
                    type: "label",
                    xValue: end,
                    yValue: barPlacement[placement],
                    xAdjust: window.innerWidth >= 576 ? -16 : -13,
                    backgroundColor: "rgba(255,255,255,0.15)",
                    borderRadius: 4,
                    content: `x${value}`,
                    color: "#fff",
                    font: {
                        size: 11,
                        weight: 600,
                    },
                    padding: {
                        top: 2,
                        left: window.innerWidth >= 576 ? 6 : 2,
                        bottom: 2,
                        right: window.innerWidth >= 576 ? 6 : 2,
                    },
                    drawTime: "afterDatasetsDraw",
                },
            };

            temData = {...temData, ...barAnnotation, ...badgeAnnotation};
            annotationIndex++;
        });

        return temData;
    };

    const timeline7gen = timeline_anntation_gen(chartDatas.all[7].timelineData);

    // let temp_timeline_bg_lines = {...timeline_bg_lines, ...timeline7gen};
    let temp_timeline_bg_lines = { ...timeline7gen};


    // // console.log("timeline_bg_lines==>", timeline7gen);

    const timelineChart = new Chart(timeline_ctx, {
        type: "line",
        data: timeline_data,
        plugins: [{
            // id: 'customCanvasBackgroundColor',
            // beforeDraw: (chart) => {
            //     const ctx = chart.canvas.getContext('2d');
            //     const chartArea = chart.chartArea;
            //     if (!chartArea) return;
                
            //     ctx.save();
            //     ctx.fillStyle = '#edf1f4ff'; // Light grey background
                
            //     // Draw rounded rectangle - full width, bottom above x-axis
            //     const x = 0;
            //     const y = 0;
            //     const width = chart.width;
            //     const height = chartArea.bottom; // Stops above x-axis
            //     const radius = 12; // Border radius
                
            //     ctx.beginPath();
            //     ctx.moveTo(x + radius, y);
            //     ctx.lineTo(x + width - radius, y);
            //     ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            //     ctx.lineTo(x + width, y + height - radius);
            //     ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            //     ctx.lineTo(x + radius, y + height);
            //     ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            //     ctx.lineTo(x, y + radius);
            //     ctx.quadraticCurveTo(x, y, x + radius, y);
            //     ctx.closePath();
            //     ctx.fill();
                
            //     ctx.restore();
            // }
        }],
        options: {
            maintainAspectRatio: false,
            layout: {
                padding: {
                    left: 25,
                    right: 20,
                    top: 0,
                    bottom: 0,
                },
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    },
                    ticks: {
                        display: false,
                    },
                    border: {
                        display: false,
                    },
                    suggestedMax: 14,
                },
                xAxes: {
                    type: "time",
                    // alignToPixels:true,
                    time: {
                        unit: "day",
                        parser: "dd.MM.yyyy",
                        displayFormats: {
                            millisecond: "MMM dd",
                            second: "MMM dd",
                            minute: "MMM dd",
                            hour: "MMM dd",
                            day: "MMM dd",
                            week: "MMM dd",
                            month: "MMM dd",
                            quarter: "MMM dd",
                            year: "MMM dd",
                        },
                    },
                    border: {
                        display: false,
                    },
                    grid: {
                        display: false,
                    },
                    ticks: {
                        // display: false,
                    },
                },
                x: {
                    border: {
                        display: false,
                    },
                    // position: { y: 0 },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
                annotation: {
                    clip: false,
                    common: {
                        drawTime: "beforeDatasetsDraw",
                    },
                    // annotations: temp_timeline_bg_lines,
                },
            },
        },
    });

    //dropdown onchange
    $("#allAdsSelect").on("change", function () {
        handleSelectChart();
    });

    $("#listingPerfomanceDays").on("change", function () {
        handleSelectChart();
    });


    const handlePerfomance = (perform, selectedDay) => {

        const duration =
            selectedDay == 7 ? "last week" : selectedDay == 30 ? "last 30 days" : "last 90 days";
        const perfomanceMsg = `${perform.value}% from ${duration}`;
        console.log("perfomanceMsg==>", perfomanceMsg, perform.isUp);

        if (perform.isUp) {
            $("#perfomanceMessageBox").removeClass("down");
        } else {
            $("#perfomanceMessageBox").addClass("down");
        }

        $("#perfomanceMessageBox i")
            .removeClass()
            .addClass(perform.isUp ? "bi bi-arrow-up" : "bi bi-arrow-down");
        $("#perfomanceMessageBox .text").text(perfomanceMsg);
    }

    handleSelectChart();

    function handleSelectChart() {
        var adsSelect = document.getElementById("allAdsSelect");
        var selectedAd = adsSelect.value;

        var daysSelect = document.getElementById("listingPerfomanceDays");
        var selectedDay = daysSelect.value;

        console.log(selectedAd, selectedDay);

        /// data: chartDatas.all[7].scatter.filter((data)=> data.value > 0),
        let selectedAdDayData = chartDatas[selectedAd][selectedDay];

        console.log("ddData==>", selectedAdDayData);

        const perform = selectedAdDayData.performance;
        console.log("perform==>", perform);

        handlePerfomance(perform, selectedDay);


        let newData = selectedAdDayData.pageView;
        let newPageNumData = selectedAdDayData.pageNUm;

        let newScatter = selectedAdDayData.scatter.filter((data) => data.value > 0);

        let timeLineDates = selectedAdDayData.timelineDate;

        // if (selectedDay == 90) {
        //   timeLineDates = timelineDates90;
        // }

        // if (selectedDay == 30) {
        //   timeLineDates = timelineDates30;
        // }

        overallChart.config.options.scales.viewLine.max = undefined;
        overallChart.config.options.scales.viewLine.ticks.stepSize = undefined;
        overallChart.update();

        overallChart.data.datasets[0].data = newData;
        overallChart.data.datasets[1].data = newPageNumData;
        overallChart.data.datasets[2].data = newScatter;

        if (selectedDay == 90) {
            console.log("overallChart==>", overallChart);
            console.log("overallChart1==>", overallChart.options.scales.xAxes.time);

            overallChart.options.scales.xAxes.time.unit = "week";
            // overallChart.options.scales.xAxes.time.displayFormats = { month: 'MM' }
            // overallChart.options.scales.xAxes.time.parser = 'dd.MM.yy';
        } else {
            overallChart.options.scales.xAxes.time.unit = "day";
        }

        overallChart.update();

        addOneMorePage();

        timelineChart.data.datasets[0].data = timelineData(timeLineDates);
        timelineChart.update();

        //annotation

        // const days =
        //   selectedDay == 90
        //     ? timeline_90data
        //     : selectedDay == 30
        //     ? timeline_30data
        //     : timeline_7data;

        const days = selectedAdDayData.timelineData;

        const timelinegen = timeline_anntation_gen(days);

        let temp_timeline_bg_lines = {...timelinegen};

        timelineChart.options.plugins.annotation.annotations =
            temp_timeline_bg_lines;

        if (selectedDay == 90) {
            // console.log("overallChart==>", overallChart);
            // console.log("overallChart1==>", overallChart.options.scales.xAxes.time);

            timelineChart.options.scales.xAxes.time.unit = "week";
            // overallChart.options.scales.xAxes.time.displayFormats = { month: 'MM' }
            // overallChart.options.scales.xAxes.time.parser = 'dd.MM.yy';
        } else {
            timelineChart.options.scales.xAxes.time.unit = "day";
        }

        timelineChart.update();
    }


    //custom long legends

    $("#whatsappColors").append('<span class="me-1">1</span>');
    whatsappLiveColors.map((color) =>
        $("#whatsappColors").append(
            '<span class="box" style="background-color:' + color + '"></span>'
        )
    );
    $("#whatsappColors").append(
        '<span class="ms-1">' + whatsappLiveColors.length + "</span>"
    );

    //hotDealColors
    $("#hotDealColors").append('<span class="me-1">1</span>');
    hotDealColors.map((color) =>
        $("#hotDealColors").append(
            '<span class="box" style="background-color:' + color + '"></span>'
        )
    );
    $("#hotDealColors").append(
        '<span class="ms-1">' + hotDealColors.length + "</span>"
    );

    //hotDealColors
    $("#urgentSaleColors").append('<span class="me-1">1</span>');
    urgentSaleColors.map((color) =>
        $("#urgentSaleColors").append(
            '<span class="box" style="background-color:' + color + '"></span>'
        )
    );
    $("#urgentSaleColors").append(
        '<span class="ms-1">' + urgentSaleColors.length + "</span>"
    );

    //hotDealColors
    $("#thumbnailVideoColors").append('<span class="me-1">1</span>');
    thumbnailVideoAdColors.map((color) =>
        $("#thumbnailVideoColors").append(
            '<span class="box" style="background-color:' + color + '"></span>'
        )
    );
    $("#thumbnailVideoColors").append(
        '<span class="ms-1">' + thumbnailVideoAdColors.length + "</span>"
    );

    //upgradeAdsColors
    $("#upgradeAdsColors").append('<span class="me-2">1</span>');
    yellowShades.map((color) =>
        $("#upgradeAdsColors").append(
            '<span class="box" style="background-color:' + color + '"></span>'
        )
    );
    $("#upgradeAdsColors").append(
        '<span class="ms-2">' + thumbnailVideoAdColors.length + "</span>"
    );

    //custom long legends end


    class ChartWalkthrough {
        constructor(chartInstance, steps, title = 'Walkthrough') {
            this.chart = chartInstance;
            this.steps = steps;
            this.title = title;
            this.currentStep = 0;
            this.isActive = false;
            this.overlay = null;
            this.highlight = null;
            this.tooltip = null;
        }

        start() {
            if (this.isActive) return;

            this.isActive = true;
            this.currentStep = 0;

            // Wait for chart to render completely before getting positions
            setTimeout(() => {
                this.createElements();
                this.showStep(0);
            }, 100);
        }

        createElements() {
            // Create overlay
            this.overlay = $('<div class="walkthrough-overlay"></div>');
            $('body').append(this.overlay);
            this.overlay.fadeIn(300);

            // Create highlight box
            this.highlight = $('<div class="walkthrough-highlight"></div>');
            $('body').append(this.highlight);

            // Create tooltip
            this.tooltip = $('<div class="walkthrough-tooltip"></div>');
            $('body').append(this.tooltip);
        }

        showStep(stepIndex) {
            if (stepIndex < 0 || stepIndex >= this.steps.length) return;

            this.currentStep = stepIndex;
            const step = this.steps[stepIndex];
            const content = step.content[CURRENT_LANGUAGE] || step.content['en'];

            let targetRect;

            if (step.type === 'element') {
                targetRect = this.getElementRect(step.id);
            } else if (step.type === 'chart-bars') {
                targetRect = this.getChartBarsRect(step.label);
            } else if (step.type === 'chart-legend') {
                targetRect = this.getChartLegendRect();
            }

            if (!targetRect) {
                console.error('Could not find target element for step', stepIndex);
                return;
            }

            //scroll to position on 0
            if (stepIndex == 0) window.scrollTo(0, targetRect.top);

            // Position highlight
            this.highlight.css({
                left: targetRect.left + 'px',
                top: targetRect.top + 'px',
                width: targetRect.width + 'px',
                height: targetRect.height + 'px',
                display: 'block'
            });

            // Build indicator dots
            let dotsHTML = '';
            for (let i = 0; i < this.steps.length; i++) {
                dotsHTML += `<span class="walkthrough-dot ${i === stepIndex ? 'active' : ''}"></span>`;
            }

            // Build tooltip content
            const tooltipHTML = `
                    <div class="walkthrough-tooltip-arrow"></div>
                    <div class="walkthrough-tooltip-header">
                        <div class="walkthrough-title">${this.title}</div>
                        <button class="btn-walkthrough-close" title="Close">×</button>
                    </div>
                    <div class="walkthrough-tooltip-content">${content}</div>
                    <div class="walkthrough-step-indicators">
                        ${dotsHTML}
                    </div>
                    <div class="walkthrough-tooltip-footer">
                    <div class="lang-container">
                        <div class="btn-group walkthrough-language-group gap-0">
                            <button class="walkthrough-lang-btn btn ${CURRENT_LANGUAGE === 'en' ? 'active' : ''}" id="langEnglish" data-lang="en">English</button>
                            <button class="walkthrough-lang-btn btn ${CURRENT_LANGUAGE === 'es' ? 'active' : ''}" id="langSinhala" data-lang="es">සිංහල</button>
                            <button class="walkthrough-lang-btn btn ${CURRENT_LANGUAGE === 'fr' ? 'active' : ''}" id="langTamil" data-lang="fr">தமிழ்</button>
                        </div>
                    </div>
                    <div>
                        <button class="btn-walkthrough-prev" role="group" aria-label="languages button" style="opacity: ${stepIndex > 0 ? '1' : '0'}">
                        <i class="bi bi-chevron-left"></i>
                        </button>
                        
                        ${stepIndex < this.steps.length - 1 ? '<button class="btn-walkthrough-next"><i class="bi bi-chevron-right"></i></button>' : '<button class="btn-walkthrough-next">Done</button>'}
                    </div>
                    </div>
                `;

            this.tooltip.html(tooltipHTML);

            // Position tooltip and arrow
            this.positionTooltip(targetRect);

            // Bind events
            this.tooltip.find('.btn-walkthrough-prev').on('click', () => this.previous());
            this.tooltip.find('.btn-walkthrough-next').on('click', () => this.next());
            this.tooltip.find('.btn-walkthrough-close').on('click', () => this.close());

            // Language button handlers for walkthrough
            this.tooltip.find('.walkthrough-lang-btn').on('click', (e) => {
                const newLang = $(e.target).data('lang');
                CURRENT_LANGUAGE = newLang;

                // Update active state for walkthrough language buttons
                this.tooltip.find('.walkthrough-lang-btn').removeClass('active');
                this.tooltip.find(`.walkthrough-lang-btn[data-lang="${newLang}"]`).addClass('active');

                // Update the content with new language
                const stepContent = this.steps[this.currentStep].content;
                const newContent = stepContent[newLang] || stepContent['en'];
                this.tooltip.find('.walkthrough-tooltip-content').text(newContent);
            });
        }

        getElementRect(elementId) {
            const element = document.getElementById(elementId);
            if (!element) return null;

            const rect = element.getBoundingClientRect();
            const padding = 10;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            return {
                left: rect.left + scrollLeft - padding,
                top: rect.top + scrollTop - padding,
                width: rect.width + (padding * 2),
                height: rect.height + (padding * 2)
            };
        }

        getChartBarsRect(label) {
            const meta = this.chart.getDatasetMeta(0);
            const labelIndex = this.chart.data.labels.indexOf(label);

            if (labelIndex === -1) return null;

            let minX = Infinity, minY = Infinity;
            let maxX = -Infinity, maxY = -Infinity;

            // Get all datasets and find bars for this label
            this.chart.data.datasets.forEach((dataset, datasetIndex) => {
                const meta = this.chart.getDatasetMeta(datasetIndex);
                if (meta.data[labelIndex]) {
                    const bar = meta.data[labelIndex];
                    const props = bar.getProps(['x', 'y', 'base', 'width', 'height'], true);

                    const barLeft = props.x - props.width / 2;
                    const barRight = props.x + props.width / 2;
                    const barTop = Math.min(props.y, props.base);
                    const barBottom = Math.max(props.y, props.base);

                    minX = Math.min(minX, barLeft);
                    maxX = Math.max(maxX, barRight);
                    minY = Math.min(minY, barTop);
                    maxY = Math.max(maxY, barBottom);
                }
            });

            const canvas = this.chart.canvas;
            const canvasRect = canvas.getBoundingClientRect();
            const padding = 10;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            return {
                left: canvasRect.left + scrollLeft + minX - padding,
                top: canvasRect.top + scrollTop + minY - padding,
                width: (maxX - minX) + (padding * 2),
                height: (maxY - minY) + (padding * 2)
            };
        }

        getChartLegendRect() {
            const legend = this.chart.legend;
            if (!legend) return null;

            const canvas = this.chart.canvas;
            const canvasRect = canvas.getBoundingClientRect();
            const padding = 10;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

            return {
                left: canvasRect.left + scrollLeft + legend.left - padding,
                top: canvasRect.top + scrollTop + legend.top - padding,
                width: legend.width + (padding * 2),
                height: legend.height + (padding * 2)
            };
        }

        positionTooltip(targetRect) {
            const tooltipHeight = this.tooltip.outerHeight();
            const tooltipWidth = this.tooltip.outerWidth();
            const windowHeight = $(window).height();
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const spacing = 20;
            const arrowSize = 12;

            let top, left;
            let arrowPosition = 'bottom'; // default: arrow points down (tooltip above)

            // Convert absolute position to viewport position for comparison
            const targetTopInViewport = targetRect.top - scrollTop;

            // Try to position above target
            if (targetTopInViewport - tooltipHeight - spacing > 0) {
                top = targetRect.top - tooltipHeight - spacing - arrowSize;
                arrowPosition = 'bottom';
            } else {
                // Position below if not enough space above
                top = targetRect.top + targetRect.height + spacing + arrowSize;
                arrowPosition = 'top';
            }

            // Center horizontally relative to target
            left = targetRect.left + (targetRect.width / 2) - (tooltipWidth / 2);

            // Keep within viewport
            const maxLeft = scrollLeft + $(window).width() - tooltipWidth - 10;
            const minLeft = scrollLeft + 10;
            left = Math.max(minLeft, Math.min(left, maxLeft));

            // Calculate arrow position relative to tooltip
            const targetCenterX = targetRect.left + (targetRect.width / 2);
            const tooltipLeftInViewport = left - scrollLeft;
            const arrowOffsetX = targetCenterX - tooltipLeftInViewport;

            this.tooltip.css({
                top: top + 'px',
                left: left + 'px',
                display: 'block'
            });

            // Position arrow
            const arrow = this.tooltip.find('.walkthrough-tooltip-arrow');
            arrow.removeClass('top bottom').addClass(arrowPosition);
            arrow.css({
                left: Math.max(10, Math.min(tooltipWidth - 20, arrowOffsetX)) + 'px'
            });
        }

        next() {
            if (this.currentStep < this.steps.length - 1) {
                this.showStep(this.currentStep + 1);
            } else {
                this.close();
            }
        }

        previous() {
            if (this.currentStep > 0) {
                this.showStep(this.currentStep - 1);
            }
        }

        close() {
            this.isActive = false;
            this.overlay.fadeOut(300, () => this.overlay.remove());
            this.highlight.fadeOut(300, () => this.highlight.remove());
            this.tooltip.fadeOut(300, () => this.tooltip.remove());
        }
    }

    // Initialize walkthroughs
    let walkthroughInstance1;
    let walkthroughInstance2;
    let walkthroughInstanceBoosted;

    $('#AdsTypeChartWalkthrough').on('click', function () {
        walkthroughInstance1 = new ChartWalkthrough(adsTypeChart, walkthrough1, 'Ad Types Overview');
        walkthroughInstance1.start();
    });

    $('#DealsChartWalkthrough').on('click', function () {
        walkthroughInstance2 = new ChartWalkthrough(dealsChart, dealsChartWalk, 'Ad Types Comparison');
        walkthroughInstance2.start();
    });

    $('#BoostedChartWalkthrough').on('click', function () {
        walkthroughInstanceBoosted = new ChartWalkthrough(boostedChart, boostedChartWalk, 'Boosted ads Vs Normal ads');
        walkthroughInstanceBoosted.start();
    });

    // Language buttons - all change the global variable
    $('.lang-btn').on('click', function () {
        CURRENT_LANGUAGE = $(this).data('lang');

        // Update active state for all language buttons
        $('.lang-btn').removeClass('active');
        $(`.lang-btn[data-lang="${CURRENT_LANGUAGE}"]`).addClass('active');
    });

    // Set initial active language
    $(`.lang-btn[data-lang="${CURRENT_LANGUAGE}"]`).addClass('active');


    // Walkthrough for overall
    const overallChartWalk = [
        {
            type: 'element',
            id: 'allAdsSelect',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'listingPerfomanceDays',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'legendUpgradeAds',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'legendPageNo',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'legendViews',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'legendBoosts',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
        {
            type: 'element',
            id: 'timelineChart',
            content: {
                en: 'chart types',
                es: 'chart types ES',
                fr: 'chart types FR'
            }
        },
    ];

        $('#OverallChartWalkthrough').on('click', function () {
        walkthroughInstanceBoosted = new ChartWalkthrough(timelineChart, overallChartWalk, 'Overall & timeline');
        walkthroughInstanceBoosted.start();
    });
});
