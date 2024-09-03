$(document).ready(function () {
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

  const pageViewData = [
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

  const pageNumData = [
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
        data: pageViewData,
        fill: true,
        tension: 0.4,
        borderWidth: 0,
        order: 3,
        segment: {
          // borderColor: (ctx) => "#3DD598",
          backgroundColor: (ctx) => {
            console.log("data===>", ctx?.p0?.raw?.adsCount);
            const ads_count = ctx?.p0?.raw?.adsCount;

            if (ads_count) {
              return ads_count < 10 ? yellowShades[ads_count] : yellowShades[9];
            } else return yellowShades[0];
            // return createGradient(ctx, ctx.chart)
          },
        },
        pointStyle: false,
      },

      {
        type: "line",
        label: "Sales",
        data: pageNumData,
        fill: false,
        tension: 0.4,
        borderWidth: 3,
        order: 1,
        borderColor: "#E13D44",
        pointStyle: false,
        yAxisID: "viewLine",
      },

      {
        label: "Scatter Dataset",
        type: "scatter",
        data: [
          { x: "11.07.2024", y: 0 },
          { x: "13.07.2024", y: 0 },
        ],
        backgroundColor: "#ffc0b3",
        borderColor: "#ff0000",
        order: 2,
        borderWidth: 2,
        pointRadius: 7,
        // scaleId: "dots",
        // tooltip:{
        //   label:{
        //     backgroundColor:'#fff'
        //   }
        // }
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
              console.log("ctx==>", context.tick.value);

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
        },

        xAxes: {
          type: "time",
          // alignToPixels:true,
          time: {
            unit: "day",
            parser: "dd.MM.yyyy",
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
        // dots:{

        // }
      },
      plugins: {
        legend: {
          display: false,
        },

        tooltip: {
          callbacks: {
            label: function (context) {
              console.log("tool1==>", context);
              // console.log("tool1==>",context?.raw?.y);
              console.log("tool1==>", context?.dataset?.label);

              let label = "Boosted ads";

              if (label) {
                label += ": ";
              }
              if (context.parsed.y !== null) {
                label += context.parsed.y;
              }
              return label;
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

  const timelineData = [
    {
      x: "9.07.2024",
      // y: 10,
    },
    {
      x: "10.07.2024",
      // y: 5,
    },
    {
      x: "11.07.2024",
      // y: 10,
    },
    {
      x: "12.07.2024",
      // y: 15,
    },
    {
      x: "13.07.2024",
      // y: 10,
    },
    {
      x: "14.07.2024",
      // y: 20,
    },
    {
      x: "15.07.2024",
      // y: 15,
    },
  ];

  const timeline_ctx = document.getElementById("timelineChart");

  const timeline_data = {
    datasets: [
      {
        label: "# of Votes",
        data: timelineData,
        borderWidth: 1,
      },
    ],
  };
  const barPlacement = [0, 3, 6, 9, 12];

  const timeline_7data = [
    {
      start: "10.07.2024",
      end: "11.07.2024",
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
      start: "14.07.2024",
      end: "15.07.2024",
      type: "thumbnailVideo",
      value: 2,
    },
  ];

  let timeline_annotations_7 = {
    // line3: {
    //   //line 4
    //   type: "line",
    //   xMin: "11.07.2024",
    //   xMax: "13.07.2024",
    //   yMin: barPlacement[1],
    //   yMax: barPlacement[1],
    //   borderColor: thumbnailVideoAdColors[thumbVideoCount],
    //   borderWidth: 8,
    //   drawTime: "afterDatasetsDraw",
    //   label: {
    //     display: true,
    //     backgroundColor: "#333",
    //     content: (ctx) => {
    //       console.log("ctx1==>", ctx);

    //       return ["Thumnail Video"];
    //     },
    //     padding: {
    //       top: 2,
    //       left: 4,
    //       bottom: 2,
    //       right: 4,
    //     },
    //     yAdjust: -15,
    //     font: {
    //       size: 11,
    //       weight: 400,
    //     },
    //   },
    // },
    // line11: {
    //   //line 4
    //   type: "line",
    //   xMin: "9.07.2024",
    //   xMax: "10.07.2024",
    //   yMin: barPlacement[1],
    //   yMax: barPlacement[1],
    //   borderColor: thumbnailVideoAdColors[thumbVideoCount],
    //   borderWidth: 8,
    //   drawTime: "afterDatasetsDraw",
    //   label: {
    //     display: true,
    //     backgroundColor: "#333",
    //     content: (ctx) => {
    //       console.log("ctx1==>", ctx);

    //       return ["Thumnail Video"];
    //     },
    //     padding: {
    //       top: 2,
    //       left: 4,
    //       bottom: 2,
    //       right: 4,
    //     },
    //     yAdjust: -15,
    //     font: {
    //       size: 11,
    //       weight: 400,
    //     },
    //   },
    // },

    line4: {
      type: "line",
      yMin: barPlacement[1],
      yMax: barPlacement[1],
      borderColor: "#DFE5F0",
      borderWidth: 8,
      drawTime: "beforeDatasetsDraw",
    },

    line5: {
      type: "line",
      yMin: barPlacement[2],
      yMax: barPlacement[2],
      borderColor: "#DFE5F0",
      borderWidth: 8,
      drawTime: "beforeDatasetsDraw",
    },

    // line6: {
    //   //line 3
    //   type: "line",
    //   xMin: "11.07.2024",
    //   xMax: "13.07.2024",
    //   yMin: barPlacement[2],
    //   yMax: barPlacement[2],
    //   borderColor: urgentSaleColors[urgetSaleCount],
    //   borderWidth: 8,
    //   drawTime: "beforeDatasetsDraw",
    //   label: {
    //     display: true,
    //     backgroundColor: "#333",
    //     content: (ctx) => {
    //       console.log("ctx1==>", ctx);

    //       return ["Urgent Sale"];
    //     },
    //     padding: {
    //       top: 2,
    //       left: 4,
    //       bottom: 2,
    //       right: 4,
    //     },
    //     yAdjust: -15,
    //     font: {
    //       size: 11,
    //       weight: 400,
    //     },
    //   },
    //   // enter({element}, event) {
    //   //     element.label.options.display = true;
    //   //     return true;
    //   // },
    //   // leave({element}, event) {
    //   //     element.label.options.display = false;
    //   //     return true;
    //   // }
    // },

    line7: {
      type: "line",
      yMin: barPlacement[3],
      yMax: barPlacement[3],
      borderColor: "#DFE5F0",
      borderWidth: 8,
      drawTime: "beforeDatasetsDraw",
    },

    // line8: {
    //   //line 2
    //   type: "line",
    //   xMin: "10.07.2024",
    //   xMax: "12.07.2024",
    //   yMin: barPlacement[3],
    //   yMax: barPlacement[3],
    //   borderColor: hotDealColors[hotDealCount],
    //   borderWidth: 8,
    //   drawTime: "beforeDatasetsDraw",
    //   label: {
    //     display: true,
    //     backgroundColor: "#333",
    //     content: (ctx) => {
    //       return ["Hot Deal"];
    //     },
    //     padding: {
    //       top: 2,
    //       left: 4,
    //       bottom: 2,
    //       right: 4,
    //     },
    //     yAdjust: -15,
    //     font: {
    //       size: 11,
    //       weight: 400,
    //     },
    //   },
    // },

    line9: {
      type: "line",
      yMin: barPlacement[4],
      yMax: barPlacement[4],
      borderColor: "#DFE5F0",
      borderWidth: 8,
      drawTime: "beforeDatasetsDraw",
    },

    // line10: {
    //   //line 1
    //   type: "line",
    //   xMin: "13.07.2024",
    //   xMax: "14.07.2024",
    //   yMin: barPlacement[4],
    //   yMax: barPlacement[4],
    //   borderColor: whatsappLiveColors[whatsappCount],
    //   borderWidth: 8,
    //   drawTime: "beforeDatasetsDraw",
    //   label: {
    //     display: true,
    //     backgroundColor: "#333",
    //     content: (ctx) => {
    //       return ["whatsapp Live"];
    //     },
    //     padding: {
    //       top: 2,
    //       left: 4,
    //       bottom: 2,
    //       right: 4,
    //     },
    //     yAdjust: -15,
    //     font: {
    //       size: 11,
    //       weight: 400,
    //     },
    //   },
    // },
  };

  const timeline_annotations_7_temp = timeline_7data.map(
    ({ start, end, type, value }, index) => {
      //MyObjList['newKey'] = obj;

      console.log("ind==>", index);
      const str = `line${index}`;

      const bColor =
        type == "whatsapp"
          ? whatsappLiveColors[value]
          : type == "hotDeal"
          ? hotDealColors[value]
          : type == "urgentSale"
          ? urgentSaleColors[value]
          : thumbnailVideoAdColors[value];

      const placement =
        type == "whatsapp"
          ? 4
          : type == "hotDeal"
          ? 3
          : type == "urgentSale"
          ? 2
          : 1;

      console.log("placement==>", placement);

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
            backgroundColor: "#333",
            content: (ctx) => {
              console.log("ctx1==>", ctx);

              return [type];
            },
            padding: {
              top: 2,
              left: 4,
              bottom: 2,
              right: 4,
            },
            yAdjust: -15,
            font: {
              size: 11,
              weight: 400,
            },
          },
        },
      };

      console.log("newData str==>", newData);

      timeline_annotations_7 = { ...timeline_annotations_7, ...newData };
    }
  );

  console.log("timeline_annotations_7_temp==>", timeline_annotations_7);

  new Chart(timeline_ctx, {
    type: "line",
    data: timeline_data,
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 25,
          right: 20,
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
          annotations: timeline_annotations_7,
        },
      },
    },
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
});
