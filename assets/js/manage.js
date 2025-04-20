$(document).ready(() => {
    // Initialize Swiper

    var swiper = new Swiper(".initial-swiper", {
        // Optional parameters
            loop: true,
            spaceBetween: 12,
            slidesPerView: 'auto',

        // Responsive breakpoints
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
            },
            // when window width is >= 992px
            992: {
                spaceBetween: 8,
                slidesPerView: 'auto',

            },
            // when window width is >= 1200px
            1200: {
                spaceBetween: 8,
                slidesPerView: 'auto',

            },
        },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    })
})
