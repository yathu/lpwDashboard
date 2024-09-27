$(document).ready(() => {
  // AdinsightPage

  var ctx = document.getElementById("pageNumberChart");

  const chartData = [
    { label: "1-10", view: 500, lead: 22, ads: 10, psg: "<1%" },
    { label: "11-20", view: 700, lead: 104, ads: 10, psg: "<1%" },
    { label: "21-30", view: 200, lead: 200, ads: 30, psg: "2%" },
    { label: "31-40", view: 800, lead: 300, ads: 80, psg: "6%" },
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
        backgroundColor: "red",
        data: viewsData,
        // axis: 'y',
        //yAxisID: 'y',
      },
      {
        label: "Leads",
        type: "bar",
        backgroundColor: "green",
        data: LeadsData,
        xAxisID: "x2",
        // axis: 'y',
        // yAxisID: "y1",
      },
    ],
  };

  const yLeftTitle = {
    id: "yLeftTitle",
    afterDatasetsDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, left },
        scales: { x, y },
      } = chart;
      ctx.save();
      ctx.fillText("Pages", 10, top - 10);
      ctx.restore();
    },
  };

  const yRightTitle = {
    id: "yRightTitle",
    afterDatasetsDraw(chart, args, options) {
      const {
        ctx,
        chartArea: { top, right },
        scales: { x, y },
      } = chart;
      ctx.save();
      ctx.fillText("Ads", right + 40, top - 10);
      ctx.restore();
    },
  };

  var myBarChart = new Chart(ctx, {
    type: "bar",
    data: Addata,
    options: {
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
    plugins: [yLeftTitle, yRightTitle],
  });
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


var data = {
  labels: leadsAdsData.map((data) => data.label),
  datasets: [
    {
      label: "Leads",
      type: "bar",
      backgroundColor: "red",
      data: leadsAdsData.map((data) => data.lead),
      //yAxisID: 'y',
    },
    {
      label: "Ads",
      type: "bar",
      backgroundColor: "green",
      data: leadsAdsData.map((data) => data.ads),
      yAxisID: "y1",
    },
  ],
};

var myBarChart = new Chart(ctx, {
  type: "bar",
  data: data,
  options: {
    //barValueSpacing: 20,
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
        //	suggestedMin: 0,
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        //suggestedMin: 0,
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  },
});