$(document).ready(function () {
  Chart.register(ChartDataLabels);

  var bar = new ProgressBar.Circle("#feratured_progress", {
    color: "#000",
    strokeWidth: 5,
    trailWidth: 1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#0062FF", width: 5 },
    to: { color: "#0062FF", width: 5 },
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
    strokeWidth: 5,
    trailWidth: 1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#FF974A", width: 5 },
    to: { color: "#FF974A", width: 5 },
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
    strokeWidth: 5,
    trailWidth: 1,
    easing: "easeInOut",
    duration: 1400,
    text: {
      autoStyleContainer: false,
    },
    from: { color: "#53BC77", width: 5 },
    to: { color: "#53BC77", width: 5 },
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
        slidesPerView: "auto",
      },
    },
  });

  var bar1 = new ProgressBar.Path("#path-ndmds5olzj-3", {
    easing: "easeInOut",
    duration: 1400,
  });

  bar1.set(0);
  bar1.animate(0.7); // Number from 0.0 to 1.0

  const updateSwiper = new Swiper(".product-update-desktop .update-swiper", {
    loop: false,
    // If we need pagination
    pagination: {
      el: ".product-update-desktop .update-pagination",
    },
    spaceBetween: 12,
    // Navigation arrows
    navigation: {
      nextEl: ".product-update-desktop .next-update",
      prevEl: ".product-update-desktop .prev-update",
    },
  });

  let index_currentSlide = updateSwiper.realIndex;
  // let currentSlide       = updateSwiper.slides[index_currentSlide]

  $(".dismiss-btn").on("click", function () {
    updateSwiper.removeSlide(index_currentSlide);
  });

  //mobile
  const updateMobileSwiper = new Swiper(
    ".product-update-mobile .update-swiper",
    {
      loop: false,
      // If we need pagination
      pagination: {
        el: ".product-update-mobile .update-pagination",
      },
      spaceBetween: 12,
      // Navigation arrows
      navigation: {
        nextEl: ".product-update-mobile .next-update",
        prevEl: ".product-update-mobile .prev-update",
      },
    }
  );

  let index_currentSlide_mobile = updateMobileSwiper.realIndex;

  $(".dismiss-btn").on("click", function () {
    updateMobileSwiper.removeSlide(index_currentSlide_mobile);
  });

  const tipsAwiper = new Swiper(".tips-swiper", {
    loop: false,
    // If we need pagination
    pagination: {
      // el: '.update-pagination',
    },
    spaceBetween: 20,
    // Navigation arrows
    navigation: {
      nextEl: ".next-tip",
      prevEl: ".prev-tip",
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
    easing: "easeInOut",
    duration: 1400,
  });

  profileCompletion.set(0);
  profileCompletion.animate(0.75); // Number from 0.0 to 1.0

  //Chart js

  const DATA_COUNT = 8;

  const labels = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push("" + i);
  }

  const chartColors = [
    "rgba(255, 26, 104, 1)",
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(0, 0, 0, 1)",
  ];

  //background-image: linear-gradient(180deg, #27885D 21%, #44BD86 100%);

  const gradients = [
    // {s: '#ff006f', e: '#072ff6'},
    { s: "#3D9ED5", e: "rgba(255,255,255,0)" },
    { s: "#27885D", e: "#44BD86" },
    { s: "#3D9ED5", e: "rgba(255,255,255,0.1)" },
    { s: "#D5AA55", e: "#F7F5F0" },
    { s: "#27885D", e: "#44BD86" },
    { s: "#7A7F86", e: "#EAECEB" },
  ];

  const createGradient = (context, chart) => {
    if (!chart) {
      return;
    }
    const { ctx, chartArea } = chart;

    let val = 0;
    if (context.p0DataIndex <= 5) {
      val = context.p0DataIndex;
    } else {
      val = context.p0DataIndex % 6;
    }

    const gradient = ctx.createLinearGradient(0, 0, 0, chart.height);

    // gradient.addColorStop(0, gradients[val].s);
    // gradient.addColorStop(0.8, gradients[val].e);

    gradient.addColorStop(0, gradients[val].s); // Start color
    gradient.addColorStop(0.1, gradients[val].s); // Start color occupies 30%
    gradient.addColorStop(0.7, gradients[val].e); // End color starts from 70%
    gradient.addColorStop(1, gradients[val].e);

    return gradient;
  };

  const setColors = (ctx) => {
    let val = 0;
    if (ctx.p0DataIndex <= 5) {
      val = ctx.p0DataIndex;
      // return  chartColors[ctx.p0DataIndex]
    } else {
      val = ctx.p0DataIndex % 6;
      // return chartColors[ctx.p0DataIndex % 2]
    }

    return chartColors[val];
  };

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
    { x: "9.07.2024", y: 100, adsCount: 0 },
    { x: "10.07.2024", y: 105, adsCount: 1 },
    { x: "11.07.2024", y: 200, adsCount: 4 },
    { x: "12.07.2024", y: 25, adsCount: 6 },
    { x: "13.07.2024", y: 400, adsCount: 8 },
    { x: "14.07.2024", y: 700, adsCount: 9 },
    { x: "15.07.2024", y: 205, adsCount: 10 },
    { x: "16.07.2024", y: 300, adsCount: 12 },
    { x: "17.07.2024", y: 150, adsCount: 13 },
    { x: "18.07.2024", y: 500, adsCount: 14 },
    { x: "19.07.2024", y: 350, adsCount: 16 },
    { x: "20.07.2024", y: 600, adsCount: 17 },
    { x: "21.07.2024", y: 450, adsCount: 18 },
    { x: "22.07.2024", y: 750, adsCount: 20 },
    { x: "23.07.2024", y: 800, adsCount: 21 },
    { x: "24.07.2024", y: 250, adsCount: 22 },
    { x: "25.07.2024", y: 320, adsCount: 23 },
    { x: "26.07.2024", y: 290, adsCount: 24 },
    { x: "27.07.2024", y: 520, adsCount: 25 },
    { x: "28.07.2024", y: 480, adsCount: 26 },
    { x: "29.07.2024", y: 610, adsCount: 27 },
    { x: "30.07.2024", y: 700, adsCount: 28 },
    { x: "31.07.2024", y: 340, adsCount: 29 },
    { x: "1.08.2024", y: 550, adsCount: 30 },
    { x: "2.08.2024", y: 600, adsCount: 31 },
    { x: "3.08.2024", y: 820, adsCount: 32 },
    { x: "4.08.2024", y: 720, adsCount: 33 },
    { x: "5.08.2024", y: 300, adsCount: 34 },
    { x: "6.08.2024", y: 500, adsCount: 35 },
    { x: "7.08.2024", y: 400, adsCount: 36 },
    { x: "8.08.2024", y: 650, adsCount: 37 },
    { x: "9.08.2024", y: 700, adsCount: 38 },
    { x: "10.08.2024", y: 200, adsCount: 39 },
    { x: "11.08.2024", y: 540, adsCount: 40 },
    { x: "12.08.2024", y: 360, adsCount: 41 },
    { x: "13.08.2024", y: 480, adsCount: 42 },
    { x: "14.08.2024", y: 600, adsCount: 43 },
    { x: "15.08.2024", y: 250, adsCount: 44 },
    { x: "16.08.2024", y: 700, adsCount: 45 },
    { x: "17.08.2024", y: 590, adsCount: 46 },
    { x: "18.08.2024", y: 800, adsCount: 47 },
    { x: "19.08.2024", y: 850, adsCount: 48 },
    { x: "20.08.2024", y: 100, adsCount: 49 },
    { x: "21.08.2024", y: 300, adsCount: 50 },
    { x: "22.08.2024", y: 550, adsCount: 51 },
    { x: "23.08.2024", y: 450, adsCount: 52 },
    { x: "24.08.2024", y: 650, adsCount: 53 },
    { x: "25.08.2024", y: 780, adsCount: 54 },
    { x: "26.08.2024", y: 480, adsCount: 55 },
    { x: "27.08.2024", y: 350, adsCount: 56 },
    { x: "28.08.2024", y: 600, adsCount: 57 },
    { x: "29.08.2024", y: 700, adsCount: 58 },
    { x: "30.08.2024", y: 500, adsCount: 59 },
    { x: "31.08.2024", y: 750, adsCount: 60 },
    { x: "1.09.2024", y: 400, adsCount: 61 },
    { x: "2.09.2024", y: 600, adsCount: 62 },
    { x: "3.09.2024", y: 350, adsCount: 63 },
  ];

  const pageViewData30Days = [
    { x: "9.07.2024", y: 100, adsCount: 0 },
    { x: "10.07.2024", y: 105, adsCount: 1 },
    { x: "11.07.2024", y: 200, adsCount: 4 },
    { x: "12.07.2024", y: 25, adsCount: 6 },
    { x: "13.07.2024", y: 400, adsCount: 8 },
    { x: "14.07.2024", y: 700, adsCount: 9 },
    { x: "15.07.2024", y: 205, adsCount: 10 },
    { x: "16.07.2024", y: 300, adsCount: 12 },
    { x: "17.07.2024", y: 150, adsCount: 13 },
    { x: "18.07.2024", y: 500, adsCount: 14 },
    { x: "19.07.2024", y: 350, adsCount: 16 },
    { x: "20.07.2024", y: 600, adsCount: 17 },
    { x: "21.07.2024", y: 450, adsCount: 18 },
    { x: "22.07.2024", y: 750, adsCount: 20 },
    { x: "23.07.2024", y: 800, adsCount: 21 },
    { x: "24.07.2024", y: 850, adsCount: 23 },
    { x: "25.07.2024", y: 300, adsCount: 24 },
    { x: "26.07.2024", y: 400, adsCount: 25 },
    { x: "27.07.2024", y: 500, adsCount: 26 },
    { x: "28.07.2024", y: 600, adsCount: 28 },
    { x: "29.07.2024", y: 450, adsCount: 29 },
    { x: "30.07.2024", y: 700, adsCount: 30 },
    { x: "31.07.2024", y: 800, adsCount: 31 },
    { x: "01.08.2024", y: 650, adsCount: 33 },
    { x: "02.08.2024", y: 700, adsCount: 34 },
    { x: "03.08.2024", y: 500, adsCount: 35 },
    { x: "04.08.2024", y: 750, adsCount: 37 },
    { x: "05.08.2024", y: 800, adsCount: 38 },
    { x: "06.08.2024", y: 900, adsCount: 40 },
    { x: "07.08.2024", y: 950, adsCount: 41 },
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
    { x: "9.07.2024", y: 0 },
    { x: "10.07.2024", y: 5 },
    { x: "11.07.2024", y: 10 },
    { x: "12.07.2024", y: 15 },
    { x: "13.07.2024", y: 10 },
    { x: "14.07.2024", y: 20 },
    { x: "15.07.2024", y: 15 },
    { x: "16.07.2024", y: 25 },
    { x: "17.07.2024", y: 20 },
    { x: "18.07.2024", y: 30 },
    { x: "19.07.2024", y: 25 },
    { x: "20.07.2024", y: 35 },
    { x: "21.07.2024", y: 30 },
    { x: "22.07.2024", y: 40 },
    { x: "01.09.2024", y: 10 },
    { x: "03.09.2024", y: 20 },
  ];

  const pageNumData30Days = [
    { x: "9.07.2024", y: 0 },
    { x: "10.07.2024", y: 5 },
    { x: "11.07.2024", y: 10 },
    { x: "12.07.2024", y: 15 },
    { x: "13.07.2024", y: 10 },
    { x: "14.07.2024", y: 20 },
    { x: "15.07.2024", y: 15 },
    { x: "16.07.2024", y: 25 },
    { x: "17.07.2024", y: 20 },
    { x: "18.07.2024", y: 30 },
    { x: "19.07.2024", y: 25 },
    { x: "20.07.2024", y: 35 },
    { x: "21.07.2024", y: 30 },
    { x: "22.07.2024", y: 40 },
    { x: "23.07.2024", y: 35 },
    { x: "24.07.2024", y: 45 },
    { x: "25.07.2024", y: 40 },
    { x: "26.07.2024", y: 50 },
    { x: "27.07.2024", y: 45 },
    { x: "28.07.2024", y: 55 },
    { x: "29.07.2024", y: 50 },
    { x: "30.07.2024", y: 60 },
    { x: "31.07.2024", y: 55 },
    { x: "01.08.2024", y: 65 },
    { x: "02.08.2024", y: 60 },
    { x: "03.08.2024", y: 70 },
    { x: "04.08.2024", y: 65 },
    { x: "05.08.2024", y: 75 },
    { x: "06.08.2024", y: 70 },
    { x: "07.08.2024", y: 80 },
  ];

  const scatter7 = [
    { x: "11.07.2024", y: 0, value: 2 },
    { x: "13.07.2024", y: 0, value: 7 },
  ];

  const scatter90 = [
    { x: "11.07.2024", y: 0, value: 2 },
    { x: "03.09.2024", y: 0, value: 5 },
  ];

  const scatter30 = [
    { x: "11.07.2024", y: 0, value: 2 },
    { x: "29.07.2024", y: 0, value: 2 },
  ];

  const yellowShades = [
    "#FFFFE0", // Light Yellow
    "#FFFACD", // Lemon Chiffon
    "#FAFAD2", // Light Goldenrod Yellow
    "#FFEFD5", // Papaya Whip
    "#FFE4B5", // Moccasin
    "#FFD700", // Gold
    "#FFC107", // Amber
    "#FFB300", // Dark Amber
    "#FFA000", // Deep Orange
    "#FF8C00", // Dark Orange (Darker Yellow)
  ];

  const data = {
    datasets: [
      {
        type: "line",
        label: "Weekly Sales",
        data: pageViewData7Days,
        fill: true,
        tension: 0.4,
        borderWidth: 0,
        order: 3,
        segment: {
          // borderColor: (ctx) => "#3DD598",
          backgroundColor: (ctx) => {
            // console.log("data===>", ctx?.p0?.raw?.adsCount);
            const ads_count = ctx?.p0?.raw?.adsCount;

            if (ads_count) {
              return ads_count < 10 ? yellowShades[ads_count] : yellowShades[9];
            } else return yellowShades[0];
            // return createGradient(ctx, ctx.chart)
          },
        },
        pointStyle: false,
        datalabels: {
          display: false,
        },
      },

      {
        type: "line",
        label: "Sales",
        data: pageNumData7days,
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        order: 1,
        borderColor: "#E13D44",
        pointStyle: false,
        yAxisID: "viewLine",
        datalabels: {
          display: false,
        },
      },

      {
        label: "Scatter Dataset",
        type: "bubble",
        data: scatter7,
        backgroundColor: "#ffc0b3",
        borderColor: "#ff0000",
        order: 2,
        borderWidth: 2,
        pointRadius: 10,

        // Core options
        datalabels: {
          formatter: function ({ value }, context) {
            return value;
          },
          // color: 'white'
        },
      },
    ],
  };

  const chartAreaBorder = {
    id: "chartAreaBorder",
    beforeDraw(chart) {
      const {
        ctx,
        chartArea: { left, top, right, bottom },
      } = chart;

      // Save the current state
      ctx.save();

      // Ensure no strokes (borders) are drawn by setting the line width to 0
      ctx.lineWidth = 0;

      // Restore the state to ensure no other drawing operations are affected
      ctx.restore();
    },
  };

  // config
  const config = {
    data,
    options: {
      responsive: true,
      maintainAspectRatio: false,

      scales: {
        y: {
          type: "linear",
          display: true,
          position: "left",
          // beginAtZero: true,
          ticks: {
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
            callback: (label) => (label < 0 ? "" : label),
          },
          grid: {
            display: false,
            drawOnChartArea: false,
          },
          suggestedMin: 0,
          // suggestedMax: 30
          reverse: true,
          // min:1
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
          callbacks: {
            label: function (context) {
              // console.log("tool1==>", context.dataset.type);
              // // console.log("tool1==>",context?.raw?.y);
              // console.log("tool1==>", context?.dataset?.label);

              if (context.dataset.type == "bubble") {
                let label = "Boosted ads";

                if (label) {
                  label += ": ";
                }
                if (context.parsed.y !== null) {
                  label += context.raw.value;
                }
                return label;
              }
            },
          },
        },
      },
    },
    // plugins: [chartAreaBorder],
  };

  // render init block
  const myChart = new Chart(document.getElementById("myChart"), config);

  //upgrade-swiper

  const upgradeSwiper = new Swiper(".upgrade-swiper", {
    spaceBetween: 16,
    slidesPerView: 1.25,
    navigation: {
      nextEl: ".next-upgrade",
      prevEl: ".prev-upgrade",
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
  const trendingSwiper = new Swiper(".trendingSwiper", {
    spaceBetween: 16,
    slidesPerView: 2.7,
    navigation: {
      nextEl: ".next-trending",
      prevEl: ".prev-trending",
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

  const swiperFilter = (value) => {
    const classval = "colombo-" + value;

    $(".trendingSwiper .swiper-slide").each(function () {
      if ($(this).hasClass(classval)) {
        $(this).removeClass("d-none");
      } else {
        $(this).addClass("d-none");
      }
    });

    trendingSwiper.update();
  };

  const selected = $("#trendLocationSwiperDropwown").val();

  swiperFilter(selected);

  $("#trendLocationSwiperDropwown").on("change", function () {
    swiperFilter(this.value);
  });

  //worstSwiper
  const worstSwiper = new Swiper(".worstSwiper", {
    spaceBetween: 16,
    slidesPerView: 2.7,
    navigation: {
      nextEl: ".next-worst",
      prevEl: ".prev-worst",
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

  $("#btnViewMore").on("click", function () {
    $("#agentScoreList").addClass("view-all");
  });

  //timelineChart

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
    "#f8eddf", // Lightest shade
    "#f5e4cd",
    "#ebcaa2",
    "#e1af78",
    "#d7944d",
    "#cd7a23",
    "#b66f1f",
    "#9f641b",
    "#885916",
    "#d5aa55", // Original color
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

  const timelineData = (Tata) =>
    Tata.map((data) => {
      return { x: data };
    });

  const timeline_ctx = document.getElementById("timelineChart");

  const timeline_data = {
    datasets: [
      {
        label: "# of Votes",
        data: timelineData(timelineDates7),
        borderWidth: 1,
      },
    ],
  };
  const barPlacement = [0, 3, 6, 9, 12];

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


  const getColor = (type, value )=> {
    console.log("getColor=>", type,value);
       
    const colorType =
    type == "whatsapp"
      ? whatsappLiveColors
      : type == "hotDeal"
      ? hotDealColors
      : type == "urgentSale"
      ? urgentSaleColors
      : thumbnailVideoAdColors;

      const newVal = value > (colorType.length -1) ? (colorType.length-1) : value;

      return colorType[newVal];  
  }


  const timeline_anntation_gen = (genData) => {
    let temData = {};

    genData.map(({ start, end, type, value }, index) => {
      //MyObjList['newKey'] = obj;
      // console.log("ind==>", index);
      const str = `line${index}`;

      const bColor = getColor(type, value);

      const placement =
        type == "whatsapp"
          ? 4
          : type == "hotDeal"
          ? 3
          : type == "urgentSale"
          ? 2
          : 1;

      // console.log("placement==>", placement);

      const newData = {
        [str]: {
          //line 4
          type: "line",
          xMin: start,
          xMax: end,
          yMin: barPlacement[placement],
          yMax: barPlacement[placement],
          borderColor: bColor,
          borderWidth: 8,
          drawTime: "afterDatasetsDraw",
          label: {
            display: true,
            backgroundColor: "#fff",
            color: "#000",
            borderColor: bColor,
            borderWidth: 2,

            content: (ctx) => {
              // console.log("ctx1==>", ctx);

              return [value];
            },
            padding: {
              top: 0,
              left: 3,
              bottom: 0,
              right: 3,
            },
            yAdjust: 0,
            font: {
              size: 11,
              weight: 400,
            },
          },
        },
      };

      // console.log("newData str==>", newData);

      temData = { ...temData, ...newData };
    });

    return temData;
  };

  const timeline7gen = timeline_anntation_gen(timeline_7data);

  let temp_timeline_bg_lines = { ...timeline_bg_lines, ...timeline7gen };

  // // console.log("timeline_bg_lines==>", timeline7gen);

  const timelineChart = new Chart(timeline_ctx, {
    type: "line",
    data: timeline_data,
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 25,
          right: 20,
          top: 25,
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
            display: false,
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
          annotations: temp_timeline_bg_lines,
        },
      },
    },
  });

  //dropdown onchange

  $("#listingPerfomanceDays").on("change", function () {
    //myChart
    const val = this.value;

    // console.log("change==>", val);

    let newData = pageViewData7Days;
    let newPageNumData = pageNumData7days;
    let newScatter = scatter7;

    let timeLineDates = timelineDates7;

    if (val == 90) {
      newData = pageViewData90Days;
      newPageNumData = pageNumData90Days;
      newScatter = scatter90;

      timeLineDates = timelineDates90;
    }

    if (val == 30) {
      newData = pageViewData30Days;
      newPageNumData = pageNumData30Days;
      newScatter = scatter30;

      timeLineDates = timelineDates30;
    }

    // console.log("myChart==>");
    // console.log(myChart.data);

    myChart.data.datasets[0].data = newData;
    myChart.data.datasets[1].data = newPageNumData;
    myChart.data.datasets[2].data = newScatter;

    if (val == 90) {
      console.log("myChart==>", myChart);
      console.log("myChart1==>", myChart.options.scales.xAxes.time);

      myChart.options.scales.xAxes.time.unit = "week";
      // myChart.options.scales.xAxes.time.displayFormats = { month: 'MM' }
      // myChart.options.scales.xAxes.time.parser = 'dd.MM.yy';
    } else {
      myChart.options.scales.xAxes.time.unit = "day";
    }

    myChart.update();

    // console.log("timelineChart==>", timelineChart);
    timelineChart.data.datasets[0].data = timelineData(timeLineDates);
    timelineChart.update();

    //annotation

    const days =
      val == 90
        ? timeline_90data
        : val == 30
        ? timeline_30data
        : timeline_7data;

    const timelinegen = timeline_anntation_gen(days);

    let temp_timeline_bg_lines = { ...timeline_bg_lines, ...timelinegen };

    timelineChart.options.plugins.annotation.annotations =
      temp_timeline_bg_lines;

    if (val == 90) {
      // console.log("myChart==>", myChart);
      // console.log("myChart1==>", myChart.options.scales.xAxes.time);

      timelineChart.options.scales.xAxes.time.unit = "week";
      // myChart.options.scales.xAxes.time.displayFormats = { month: 'MM' }
      // myChart.options.scales.xAxes.time.parser = 'dd.MM.yy';
    } else {
      timelineChart.options.scales.xAxes.time.unit = "day";
    }

    timelineChart.update();
  });

  //profile image upload

  function showImage(input) {
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const previewImg = document.getElementById("previewImg");
        previewImg.src = e.target.result;
        document.getElementById("imagePreview").style.display = "block";
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  //collapse for mobile

  function toggleAccordionClasses() {
    if ($(window).width() <= 767.98) {
      $(".upgrade-ads-container")
        .find(".accordion-button")
        .addClass("collapsed");
      $(".upgrade-ads-container")
        .find(".accordion-collapse")
        .removeClass("show");
    } else {
      $(".upgrade-ads-container")
        .find(".accordion-button")
        .removeClass("collapsed");
      $(".upgrade-ads-container").find(".accordion-collapse").addClass("show");
    }
  }

  // Call the function on page load
  toggleAccordionClasses();

  // Add a listener for window resize
  $(window).resize(function () {
    toggleAccordionClasses();
  });

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
  $("#upgradeAdsColors").append('<span class="me-1">1</span>');
  upgradeAdsColors.map((color) =>
    $("#upgradeAdsColors").append(
      '<span class="box" style="background-color:' + color + '"></span>'
    )
  );
  $("#upgradeAdsColors").append(
    '<span class="ms-1">' + thumbnailVideoAdColors.length + "</span>"
  );

  //custom long legends end

  //upgrade ads dropdown

  $(".upgrade_drop").on("change", function () {
    // console.log(this.value);

    const item = "data-" + this.value;

    $(this)
      .closest(".accordion-body")
      .find(".insight-data")
      .removeClass("d-flex");
    $(this).closest(".accordion-body").find(".insight-data").addClass("d-none");

    $(this)
      .closest(".accordion-body")
      .find("." + item)
      .removeClass("d-none");
    $(this)
      .closest(".accordion-body")
      .find("." + item)
      .addClass("d-flex");
  });

  //upgrade ads dropdown
});
