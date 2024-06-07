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
    strokeWidth: 4,
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

  const progress_swiper = new Swiper(".progress-swiper", {
    direction: "horizontal",
    loop: false,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    slidesPerView: "auto",
    spaceBetween: 8,
    // Responsive breakpoints
    // breakpoints: {
    //   // when window width is >= 320px
    //   320: {
    //     slidesPerView: 1,
    //   },
    //   // when window width is >= 480px
    //   480: {
    //     slidesPerView: 1,
    //   },
    //   // when window width is >= 640px
    //   640: {
    //     slidesPerView: 'auto',
    //   },
    // },
  });
});
