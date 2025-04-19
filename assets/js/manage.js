$(document).ready(() => {

    // const swiper = new Swiper('.initial-swiper-container', {
    //     // Optional parameters
    //     loop: true,
    //     spaceBetween: 12,
    //     slidesPerView: 'auto',
    //     // If we need pagination
    //     pagination: {
    //         el: '.swiper-pagination',
    //     },
    //
    //     // Navigation arrows
    //     navigation: {
    //         nextEl: '.swiper-button-next',
    //         prevEl: '.swiper-button-prev',
    //     },
    //
    //     // And if we need scrollbar
    //     scrollbar: {
    //         el: '.swiper-scrollbar',
    //     },
    // });

    // Initialize Swiper

    var swiper = new Swiper(".initial-swiper-container", {
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
                slidesPerView: 2.5,
            },
            // when window width is >= 992px
            992: {
                spaceBetween: 8,
                slidesPerView: 4,

            },
            // when window width is >= 1200px
            1200: {
                spaceBetween: 8,
                slidesPerView: 4,

            },
        },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
    })
})
