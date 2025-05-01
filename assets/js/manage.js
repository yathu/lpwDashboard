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
    });

    const desktopToggle = document.getElementById('desktop-toggle');
    const mobileToggle = document.getElementById('mobile-toggle');
    const collapsibleContent = document.getElementById('collapsible-content');

    // Set initial state
    collapsibleContent.classList.add('show');

    // Desktop toggle
    desktopToggle.addEventListener('click', function() {
        collapsibleContent.classList.toggle('show');

        if (collapsibleContent.classList.contains('show')) {
            this.innerHTML = 'VIEW LESS <span><i class="bi bi-caret-up-fill"></i></span>';
        } else {
            this.innerHTML = 'VIEW MORE <span><i class="bi bi-caret-down-fill"></i></span>';
        }
    });

    // Mobile toggle
    mobileToggle.addEventListener('click', function() {
        collapsibleContent.classList.toggle('show-mobile');

        if (collapsibleContent.classList.contains('show-mobile')) {
            this.innerHTML = 'View Less <span><i class="bi bi-caret-up-fill"></i></span>';
        } else {
            this.innerHTML = 'View More <span><i class="bi bi-caret-down-fill"></i></span>';
        }
    });

    //features swiper

    const Fswiper = new Swiper('.recommendation-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
            }
        }
    });

});
