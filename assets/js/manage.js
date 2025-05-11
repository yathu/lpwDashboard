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

    const desktopToggle = $('.desktop-toggle');
    const mobileToggle = document.getElementById('mobile-toggle');
    const collapsibleContent = $('.collapsible-content');

    // Set initial state
    collapsibleContent.eq(0).addClass('show');

    // Desktop toggle
    desktopToggle.on('click', function () {
        const closestContent = $(this).closest('.grid-ad-item').find('.collapsible-content');
        console.log(closestContent);
        closestContent.toggleClass('show');

        if (closestContent.hasClass('show')) {
            $(this).html('VIEW LESS <span><i class="bi bi-caret-up-fill"></i></span>');
        } else {
            $(this).html('VIEW MORE <span><i class="bi bi-caret-down-fill"></i></span>');
        }
    });

    // Mobile toggle
    mobileToggle.addEventListener('click', function () {
        const closestContent = $(this).closest('.grid-ad-item').find('.collapsible-content');
        closestContent.toggleClass('show');

        if (closestContent.hasClass('show')) {
            $(this).html('VIEW LESS <span><i class="bi bi-caret-up-fill"></i></span>');
        } else {
            $(this).html('VIEW MORE <span><i class="bi bi-caret-down-fill"></i></span>');
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

    const maxAdSwiper = new Swiper('.max-ad-swiper', {
        slidesPerView: 3,
        spaceBetween: 12,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    //list item toggle

    const listItem = $('.property-item');

    $(listItem).on('click', function () {
        const element = $(this);

        $(element).toggleClass('expanded');

        // Change the chevron icon direction
        const chevron = element.find('.bi-chevron-down, .bi-chevron-up');

        console.log("chevron==>",chevron);


        if (chevron) {
            $(chevron).toggleClass('bi-chevron-down');
            $(chevron).toggleClass('bi-chevron-up');
        }
    });

    //upgrade Ads swiper
    const upgradeAdSwiper = new Swiper('.upgrade-ad-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
    });

});
