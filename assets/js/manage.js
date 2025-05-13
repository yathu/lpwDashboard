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

    //buy-addon-swiper
    const buyAddonSwiper = new Swiper('.buy-addon-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
    });







    const showAutoBoostBtn = document.getElementById('showAutoBoostBtn');
    const autoBoostPopup = document.getElementById('autoBoostPopup');
    const closePopupBtn = document.getElementById('closePopupBtn');
    const closePopupBtnBottom = document.getElementById('closePopupBtnBottom');
    const saveChangesBtn = document.getElementById('saveChangesBtn');
    const autoBoostSwitch = document.getElementById('autoBoostSwitch');
    const scheduleDisplay = document.querySelector('.schedule-display span');
    const dayButtons = document.querySelectorAll('.day-btn');
    const selectAllCheckbox = document.getElementById('selectAllDays');
    const timeSlot1 = document.getElementById('timeSlot1');
    const timeSlot2 = document.getElementById('timeSlot2');

    // Show/Hide Auto Boost Popup
    showAutoBoostBtn.addEventListener('click', function() {
        autoBoostPopup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', function() {
        autoBoostPopup.style.display = 'none';
    });

    closePopupBtnBottom.addEventListener('click', function() {
        autoBoostPopup.style.display = 'none';
    });

    // Day buttons toggle functionality
    dayButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            updateSelectAllCheckbox();
        });
    });

    // Select all days checkbox functionality
    selectAllCheckbox.addEventListener('change', function() {
        dayButtons.forEach(button => {
            if (this.checked) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });

    // Save Changes Button
    saveChangesBtn.addEventListener('click', function() {
        // Get selected days
        const selectedDays = Array.from(dayButtons)
            .filter(btn => btn.classList.contains('active'))
            .map(btn => btn.dataset.day.toUpperCase());

        // Format display text
        let displayText = '';
        if (selectedDays.length === 7) {
            displayText = '#MON-SUN';
        } else if (selectedDays.length === 0) {
            displayText = 'No days selected';
        } else {
            displayText = '#' + selectedDays.join('-');
        }

        // Add time slots
        const slot1Value = timeSlot1.value;
        let timeDisplay = slot1Value.replace(':00', '.00');

        if (timeSlot2.value !== 'none') {
            const slot2Value = timeSlot2.value;
            timeDisplay += ' & ' + slot2Value.replace(':00', '.00');
        }

        // Update schedule display
        scheduleDisplay.textContent = `${displayText} | ${timeDisplay}`;

        // Close popup
        autoBoostPopup.style.display = 'none';
    });

    // Toggle Auto Boost Switch
    autoBoostSwitch.addEventListener('change', function() {
        const scheduleDisplayElement = document.querySelector('.schedule-display');
        if (this.checked) {
            scheduleDisplayElement.style.display = 'flex';
        } else {
            scheduleDisplayElement.style.display = 'none';
        }
    });

    // Helper function to update "Select all" checkbox state
    function updateSelectAllCheckbox() {
        const allSelected = Array.from(dayButtons).every(btn => btn.classList.contains('active'));
        selectAllCheckbox.checked = allSelected;
    }


    const toggleSwitches = document.querySelectorAll('input[type="checkbox"]');

    toggleSwitches.forEach(el => {
        el.addEventListener('change', function() {
            console.log('Switch state:', this.checked ?
                this.nextElementSibling.querySelector('.on-text').textContent :
                this.nextElementSibling.querySelector('.off-text').textContent);
        });
    });

});
