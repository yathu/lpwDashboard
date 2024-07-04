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
        slidesPerView: 'auto',
      },
    },
  });
});

var bar = new ProgressBar.Path('#path-ndmds5olzj-3', {
  easing: 'easeInOut',
  duration: 1400,
});

bar.set(0);
bar.animate(0.7);  // Number from 0.0 to 1.0

const updateSwiper = new Swiper('.update-swiper', {
  loop: false,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  spaceBetween: 12,
  // Navigation arrows
  navigation: {
    nextEl: '.next-update',
    prevEl: '.prev-update',
  },
});
