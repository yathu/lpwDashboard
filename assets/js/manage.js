$(document).ready(() => {
    // Initialize Swiper

    var swiper = new Swiper(".initial-swiper", {
        // Optional parameters
        loop: false,
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
            nextEl: '.swiper-button-next-init',
            prevEl: '.swiper-button-prev-init',
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

    const maxAdSwiper = new Swiper('.max-ad-swiper-1', {
        slidesPerView: 3,
        spaceBetween: 12,
        loop: true,
        navigation: {
            nextEl: '.max-ad-swiper-button-next',
            prevEl: '.max-ad-swiper-button-prev',
        },
        allowSlideNext:true,
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
        navigation:{
            nextEl:'.upgrade-ad-swiper-button-next',
            prevEl:'.upgrade-ad-swiper-button-prev',
        }
    });

    //buy-addon-swiper
    const buyAddonSwiper = new Swiper('.buy-addon-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        navigation:{
            nextEl:'.buy-ad-swiper-button-next',
            prevEl:'.buy-ad-swiper-button-prev',
        }
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

    //handle delete boost deactivate
    // Modal content handling
//     const deleteBtn = $('#deleteSelectedAdsBtn');
//     const boostBtn = $('#boostSelectedAd');
//     const deactivateBtn = $('#deactivateSelectedAdsBtn');
//
//     const modal = document.getElementById('actionsModal');
//     const modalTitle = modal.querySelector('.modal-title');
//     const deleteContent = modal.querySelector('.modal-content-delete');
//     const boostContent = modal.querySelector('.modal-content-boost');
//     const deactivateContent = modal.querySelector('.modal-content-deactivate');
//     const deleteActionBtn = modal.querySelector('.modal-btn-delete');
//     const boostActionBtn = modal.querySelector('.modal-btn-boost');
//     const deactivateActionBtn = modal.querySelector('.modal-btn-deactivate');
//
// // Delete button click handler
//     deleteBtn.addEventListener('click', () => {
//         modalTitle.textContent = 'Confirm Delete';
//         showModalContent('delete');
//     });
//
// // Boost button click handler
//     boostBtn.addEventListener('click', () => {
//         modalTitle.textContent = 'Confirm Boost';
//         showModalContent('boost');
//     });
//
// // Deactivate button click handler
//     deactivateBtn.addEventListener('click', () => {
//         modalTitle.textContent = 'Confirm Deactivate';
//         showModalContent('deactivate');
//     });
//
//     function showModalContent(type) {
//         // Hide all content and buttons first
//         deleteContent.classList.add('d-none');
//         boostContent.classList.add('d-none');
//         deactivateContent.classList.add('d-none');
//         deleteActionBtn.classList.add('d-none');
//         boostActionBtn.classList.add('d-none');
//         deactivateActionBtn.classList.add('d-none');
//
//         // Show appropriate content and button
//         switch(type) {
//             case 'delete':
//                 deleteContent.classList.remove('d-none');
//                 deleteActionBtn.classList.remove('d-none');
//                 break;
//             case 'boost':
//                 boostContent.classList.remove('d-none');
//                 boostActionBtn.classList.remove('d-none');
//                 break;
//             case 'deactivate':
//                 deactivateContent.classList.remove('d-none');
//                 deactivateActionBtn.classList.remove('d-none');
//                 break;
//         }
//     }
//
// // Action button handlers
//     deleteActionBtn.addEventListener('click', () => {
//         // Handle delete action
//         console.log('Deleting selected ads...');
//         bootstrap.Modal.getInstance(modal).hide();
//     });
//
//     boostActionBtn.addEventListener('click', () => {
//         // Handle boost action
//         console.log('Boosting selected ads...');
//         bootstrap.Modal.getInstance(modal).hide();
//     });
//
//     deactivateActionBtn.addEventListener('click', () => {
//         // Handle deactivate action
//         console.log('Deactivating selected ads...');
//         bootstrap.Modal.getInstance(modal).hide();
//     });


        // Button click handlers
        $('#deleteSelectedAdsBtn').click(function() {
            $('#selectedAdsActionsModal .modal-title').text('Confirm Delete');
            $('#selectedAdsActionsModal .modal-content-delete').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-deactivate').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-deactivate').addClass('d-none');
        });

        $('#boostSelectedAd').click(function() {
            $('#selectedAdsActionsModal .modal-title').text('Confirm Boost');
            $('#selectedAdsActionsModal .modal-content-boost').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-deactivate').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-boost').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-deactivate').addClass('d-none');
        });

        $('#deactivateSelectedAdsBtn').click(function() {
            $('#selectedAdsActionsModal .modal-title').text('Confirm Deactivate');
            $('#selectedAdsActionsModal .modal-content-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost').addClass('d-none');
        });

    // Handle switch toggle for deactivation
    $('.custom-switch input[type="checkbox"]').on('change', function() {
        if (!$(this).is(':checked')) {
            // If switch is turned off, show deactivate confirmation modal
            $('#selectedAdsActionsModal .modal-title').text('Confirm Deactivate');
            $('#selectedAdsActionsModal .modal-content-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost').addClass('d-none');

            // Show the modal
            $('#selectedAdsActionsModal').modal('show');
        }
    });


    // Action button handlers
        $('#selectedAdsActionsModal .modal-btn-delete').click(function() {
            console.log('Deleting selected ads...');
            $('#selectedAdsActionsModal').modal('hide');
        });

        $('#selectedAdsActionsModal .modal-btn-boost').click(function() {
            console.log('Boosting selected ads...');
            $('#selectedAdsActionsModal').modal('hide');
        });

        $('#selectedAdsActionsModal .modal-btn-deactivate').click(function() {
            console.log('Deactivating selected ads...');
            $('#selectedAdsActionsModal').modal('hide');
        });

        // Reset modal content when modal is hidden
        $('#selectedAdsActionsModal').on('hidden.bs.modal', function() {
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-deactivate').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-deactivate').addClass('d-none');
        });


        //social media popover

    // Initialize all popovers
    let shareButton = $('#sharePopover');

    shareButton.popover({
        trigger: 'click',
        html: true,
        placement: 'bottom',
        content: `
            <div class='d-flex gap-3 p-2'>
                <a href='#' class='text-dark fs-5'><i class='bi bi-facebook'></i></a>
                <a href='#' class='text-dark fs-5'><i class='bi bi-twitter-x'></i></a>
                <a href='#' class='text-dark fs-5'><i class='bi bi-whatsapp'></i></a>
                <a href='#' class='text-dark fs-5'><i class='bi bi-telegram'></i></a>
                <a href='#' class='text-dark fs-5'><i class='bi bi-linkedin'></i></a>
            </div>`
    });

    // Close popover when clicking outside
    $(document).on('click', function(e) {
        if (!$(e.target).closest('[data-bs-toggle="popover"]').length &&
            !$(e.target).closest('.popover').length) {
            shareButton.popover('hide');
        }
    });

    // Prevent popover from closing when clicking inside it
    $(document).on('click', '.popover', function(e) {
        e.stopPropagation();
    });

    //tooltip default code
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

});
