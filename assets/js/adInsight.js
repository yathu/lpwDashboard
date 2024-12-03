$(document).ready(() => {
  Chart.register(ChartDataLabels);

  const genLeftTitle = (title, id, fromLeft, topAlign) => {
    const yLeftTitle = {
      id: id,
      afterDatasetsDraw(chart, args, options) {
        const {
          ctx,
          chartArea: { top, left },
          scales: { x, y },
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
          chartArea: { top, right },
          scales: { x, y },
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
    const { ctx, chartArea } = chart;

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

  //ads type chart
  var adsTypeCtx = document.getElementById("adsTypeChart");

  const featuredAdsViewsData = [400, 800];
  const featuredAdsLeadsData = [200, 700];

  const platinumAdsViewsData = [300, 700];
  const platinumAdsLeadsData = [100, 600];

  const showcaseAdsViewsData = [200, 500];
  const showcaseAdsLeadsData = [300, 600];

  var adsTypeData = {
    labels: ["Featured", "Normal"],
    datasets: [
      {
        label: "Views",
        type: "bar",
        data: featuredAdsViewsData,
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "green");
        },
        // barPercentage: 0.3

        // categoryPercentage:1.0,
        // barPercentage: 0.5,
        datalabels: {
          display: false,
        },
      },
      {
        label: "Leads",
        type: "bar",
        data: featuredAdsLeadsData,
        yAxisID: "y1",
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "");
        },
        datalabels: {
          display: false,
        },
        // inflateAmount:5
        // barPercentage: 0.7

        // categoryPercentage: 0,
        // barPercentage: 0.5,
      },
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
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          //suggestedMin: 0,
          grid: {
            drawOnChartArea: false,
            tickColor: "white",
          },
          ticks: {
            // autoSkip: true,
            maxTicksLimit: 6,
          },
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
      genLeftTitle("Pages", "PageNUmLtitle", 0, 20),
      genRightTitle("Leads", "PageNumRtitle", 1, 20),
    ],
  });

  //on pills change data

  // console.log(adsTypeChart.data);

  $("input[type=radio][name=upgradeChartType]").change(function () {


    // console.log(adsTypeChart.data.labels);
    if (this.value == "featured") {
      adsTypeChart.data.datasets[0].data = featuredAdsViewsData;
      adsTypeChart.data.datasets[1].data = featuredAdsLeadsData;

      adsTypeChart.data.labels.splice(0, 1, "Featured");

    } else if (this.value == "platinum") {
      adsTypeChart.data.datasets[0].data = platinumAdsViewsData;
      adsTypeChart.data.datasets[1].data = platinumAdsLeadsData;

      adsTypeChart.data.labels.splice(0, 1, "Platinum");


    } else {
      adsTypeChart.data.datasets[0].data = showcaseAdsViewsData;
      adsTypeChart.data.datasets[1].data = showcaseAdsLeadsData;

      adsTypeChart.data.labels.splice(0, 1, "ShowCase");

    }

    adsTypeChart.update();
  });

  //ads type chart end

  //deals chart .......................................

  var dealsCtx = document.getElementById("dealsChart");

  const dealsViewsData = [400, 800];
  const dealLeadsData = [200, 600];

  const wapViewsData = [300, 600];
  const wapLeadsData = [100, 400];

  const videoViewsData = [200, 700];
  const videoLeadsData = [400, 700];

  var hotData = {
    labels: ["Hot deals", "Normal"],
    datasets: [
      {
        label: "Views",
        type: "bar",
        // backgroundColor: "red",
        data: dealsViewsData,
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        // barPercentage: 0.3

        // categoryPercentage:1.0,
        // barPercentage: 0.5,

        // borderColor: (ctx) => "#3DD598",
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "green");
        },
        datalabels: {
          display: false,
        },
      },
      {
        label: "Leads",
        type: "bar",
        data: dealLeadsData,
        yAxisID: "y1",
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "");
        },
        datalabels: {
          display: false,
        },
        // inflateAmount:5
        // barPercentage: 0.7

        // categoryPercentage: 0,
        // barPercentage: 0.5,
      },
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
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          //suggestedMin: 0,
          grid: {
            drawOnChartArea: false,
            tickColor: "white",
          },
          ticks: {
            // autoSkip: true,
            maxTicksLimit: 6,
          },
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
      genLeftTitle("Views", "dealsLtitle", 0, 20),
      genRightTitle("Leads", "dealsRtitle", 1, 20),
    ],
  });

  $("input[type=radio][name=dealChartType]").change(function () {
    if (this.value == "hotdeal") {
      dealsChart.data.datasets[0].data = dealsViewsData;
      dealsChart.data.datasets[1].data = dealLeadsData;

      dealsChart.data.labels.splice(0, 1, "Hot deals");


    } else if (this.value == "whatsapp") {
      dealsChart.data.datasets[0].data = wapViewsData;
      dealsChart.data.datasets[1].data = wapLeadsData;

      dealsChart.data.labels.splice(0, 1, "whatsapp");


    } else {
      dealsChart.data.datasets[0].data = videoViewsData;
      dealsChart.data.datasets[1].data = videoLeadsData;

      dealsChart.data.labels.splice(0, 1, "Video");

    }

    dealsChart.update();
  });

  //deals chart end .......................................

  // boostedChart........................................

  var boostedCtx = document.getElementById("boostedChart");

  const boostedViewsData = [400, 800];
  const boostedLeadsData = [200, 600];

  var boostedData = {
    labels: ["Featured", "Normal"],
    datasets: [
      {
        label: "Views",
        type: "bar",
        data: boostedViewsData,
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        // barPercentage: 0.3

        // categoryPercentage:1.0,
        // barPercentage: 0.5,
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "green");
        },
        datalabels: {
          display: false,
        },
      },
      {
        label: "Leads",
        type: "bar",
        data: boostedLeadsData,
        yAxisID: "y1",
        barThickness: 30,
        borderWidth: 1,
        borderColor: "white",
        backgroundColor: (ctx) => {
          return createGradient(ctx.chart, "");
        },
        datalabels: {
          display: false,
        },
        // inflateAmount:5
        // barPercentage: 0.7

        // categoryPercentage: 0,
        // barPercentage: 0.5,
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
        },
        y1: {
          type: "linear",
          display: true,
          position: "right",
          //suggestedMin: 0,
          grid: {
            drawOnChartArea: false,
            tickColor: "white",
          },
          ticks: {
            // autoSkip: true,
            maxTicksLimit: 6,
          },
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
      genLeftTitle("Views", "boostedLtitle", 0, 20),
      genRightTitle("Leads", "boostedRtitle", 1, 20),
    ],
  });

  // boostedChart ends ........................................

  var ctx = document.getElementById("pageNumberChart");

  const chartData = [
    { label: "1-10", view: 500, lead: 22, ads: 100, psg: "<1%" },
    { label: "11-20", view: 700, lead: 104, ads: 100, psg: "<1%" },
    { label: "21-30", view: 200, lead: 200, ads: 300, psg: "2%" },
    { label: "31-40", view: 800, lead: 300, ads: 800, psg: "6%" },
    { label: "41-50", view: 2000, lead: 400, ads: 400, psg: "20%" },
    { label: "51-100", view: 2500, lead: 525, ads: 3200, psg: "90%" },
  ];

  const labelsData = chartData.map((data) => data.label);
  const viewsData = chartData.map((data) => data.view);
  const LeadsData = chartData.map((data) => data.lead);
  const adsTick = chartData.map((data) => data.ads);
  const psg = chartData.map((data) => data.psg);

  var Addata = {
    labels: labelsData,
    datasets: [
      {
        label: "Views",
        type: "bar",
        backgroundColor: "#0C68E9",
        data: viewsData,
        barThickness: 14,
        datalabels: {
          display: false,
        },
        borderWidth: 1,
        borderColor: "white",
        // axis: 'y',
        //yAxisID: 'y',
      },
      {
        label: "Ads count",
        type: "bar",
        backgroundColor: "#34A06F",
        data: adsTick,
        xAxisID: "x2",
        barThickness: 14,
        datalabels: {
          display: false,
        },
        borderWidth: 1,
        borderColor: "white",
        // axis: 'y',
        // yAxisID: "y1",
      },
    ],
  };

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
          ticks: {
            maxTicksLimit: psg.length,
            callback: function (val, index) {
              const tickval = psg[index];
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
          // min: 0,
          // max: 3200,
          ticks: {
            maxTicksLimit: adsTick.length,
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
      genLeftTitle("Pages", "PageNUmLtitle", 10, 10),
      genRightTitle("Ads", "pageNumRtitle", 40, 10),
    ],
  });

  //leads and ads chart

  var ctx = document.getElementById("leadsAdsChart").getContext("2d");

  const leadsAdsData = [
    { label: "-100%", lead: 23, ads: 45 },
    { label: "-90%", lead: 25, ads: 40 },
    { label: "-80%", lead: 30, ads: 38 },
    { label: "-70%", lead: 35, ads: 50 },
    { label: "-60%", lead: 40, ads: 55 },
    { label: "-50%", lead: 45, ads: 60 },
    { label: "-40%", lead: 50, ads: 65 },
    { label: "-30%", lead: 55, ads: 70 },
    { label: "-20%", lead: 60, ads: 75 },
    { label: "-10%", lead: 65, ads: 80 },
    { label: "0%", lead: 78, ads: 12 },
    { label: "10%", lead: 80, ads: 20 },
    { label: "20%", lead: 85, ads: 25 },
    { label: "30%", lead: 90, ads: 30 },
    { label: "40%", lead: 95, ads: 35 },
    { label: "50%", lead: 100, ads: 40 },
    { label: "60%", lead: 105, ads: 45 },
    { label: "70%", lead: 110, ads: 50 },
    { label: "80%", lead: 115, ads: 55 },
    { label: "90%", lead: 120, ads: 60 },
    { label: "100%", lead: 125, ads: 90 },
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
            padding: { top: 15, left: 0, right: 0, bottom: 10 },
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
    { x: "13.07.2024", y: 0, value: 700 },
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

  const chartDatas = {
    all: {
      7: {
        pageView: pageViewData7Days,
        pageNUm: pageNumData7days,
        scatter: scatter7,
      },
      30: {
        pageView: pageViewData30Days,
        pageNUm: pageNumData30Days,
        scatter: scatter30,
      },
      90: {
        pageView: pageViewData90Days,
        pageNUm: pageNumData90Days,
        scatter: scatter90,
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
            y: 300,
          },
          ...pageNumData7days.slice(1),
        ],
        scatter: scatter7,
      },
      30: {
        pageView: pageViewData30Days,
        pageNUm: pageNumData30Days,
        scatter: scatter30,
      },
      90: {
        pageView: pageViewData90Days,
        pageNUm: pageNumData90Days,
        scatter: scatter90,
      },
    },
  };

  const data = {
    datasets: [
      {
        type: "line",
        label: "Weekly Sales",
        data: chartDatas.all[7].pageView,
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
        data: chartDatas.all[7].pageNUm,
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
        data: chartDatas.all[7].scatter,
        backgroundColor: "#ffc0b3",
        borderColor: "#ff0000",
        order: 2,
        borderWidth: 2,
        pointRadius: 10,
        pointHoverRadius: 1,

        // Core options
        datalabels: {
          font: {
            size: 11,
          },
          formatter: function ({ value }, context) {
            return value < 100 ? value : "99+";
            // return value;
          },
          // color: 'white'
        },
      },
    ],
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

  const overallChart = new Chart(
    document.getElementById("overAllChart"),
    config
  );

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
  $("#allAdsSelect").on("change", function () {
    handleSelectChart();
  });

  $("#listingPerfomanceDays").on("change", function () {
    handleSelectChart();
  });

  function handleSelectChart() {
    var adsSelect = document.getElementById("allAdsSelect");
    var selectedAd = adsSelect.value;

    var daysSelect = document.getElementById("listingPerfomanceDays");
    var selectedDay = daysSelect.value;

    console.log(selectedAd, selectedDay);

    let selectedAdDayData = chartDatas[selectedAd][selectedDay];

    console.log("ddData==>", selectedAdDayData);

    let newData = selectedAdDayData.pageView;
    let newPageNumData = selectedAdDayData.pageNUm;
    let newScatter = selectedAdDayData.scatter;

    let timeLineDates = timelineDates7;

    if (selectedDay == 90) {
      timeLineDates = timelineDates90;
    }

    if (selectedDay == 30) {
      timeLineDates = timelineDates30;
    }

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

    // console.log("timelineChart==>", timelineChart);
    timelineChart.data.datasets[0].data = timelineData(timeLineDates);
    timelineChart.update();

    //annotation

    const days =
      selectedDay == 90
        ? timeline_90data
        : selectedDay == 30
        ? timeline_30data
        : timeline_7data;

    const timelinegen = timeline_anntation_gen(days);

    let temp_timeline_bg_lines = { ...timeline_bg_lines, ...timelinegen };

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
