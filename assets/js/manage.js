$(document).ready(() => {

    // $('.selectpicker').selectpicker();

    // Handle credit package selection
    $('.credit-package-radio').on('change', function () {
        // Store the selected credit package value
        const selectedValue = $(this).val();
        console.log('Selected credit package:', selectedValue);

        // You can add more logic here if needed
    });

    // Function to toggle selected options container visibility
    function toggleSelectedOptionsVisibility() {
        // Use jQuery to select checkboxes and container
        const $propertyCheckboxes = $('.property-item input[type="checkbox"][id^="propertyListItem"]');
        const $mobileCheckboxes = $('.mobile-ad-checkbox');
        const $selectedOptionsContainer = $('#selectedItemsOptions');

        // Check if at least one checkbox is checked (from either property items or mobile items)
        const propertyAtLeastOneChecked = $propertyCheckboxes.is(':checked');
        const mobileAtLeastOneChecked = $mobileCheckboxes.is(':checked');
        const atLeastOneChecked = propertyAtLeastOneChecked || mobileAtLeastOneChecked;

        // Show/hide the selected options container based on checkbox state
        if (atLeastOneChecked) {
            $selectedOptionsContainer.removeClass('d-none').addClass('d-flex');
        } else {
            $selectedOptionsContainer.removeClass('d-flex').addClass('d-none');
        }
    }

    // Add event listeners to all property item checkboxes
    $(document).on('change', '.property-item input[type="checkbox"][id^="propertyListItem"]', function () {
        toggleSelectedOptionsVisibility();
    });

    // Add event listeners to all mobile ad checkboxes
    $(document).on('change', '.mobile-ad-checkbox', function () {
        toggleSelectedOptionsVisibility();
    });

    // Handle click on agent-mobile-ad container to toggle checkbox (mobile UX)
    $(document).on('click', '.agent-mobile-ad', function (e) {
        // Get the checkbox inside this container
        const $checkbox = $(this).find('.mobile-ad-checkbox');
        
        // Check if clicked element is a button or interactive element that shouldn't trigger checkbox
        const $target = $(e.target);
        const isButton = $target.closest('button').length > 0 || $target.closest('.btn').length > 0;
        const isInteractiveIcon = $target.closest('[data-bs-toggle]').length > 0 || $target.closest('.dot-popover').length > 0 || $target.closest('.custom-switch').length > 0;
        
        // If click is on a button or interactive element, don't toggle checkbox
        if (isButton || isInteractiveIcon) {
            return;
        }
        
        // Toggle the checkbox
        if ($checkbox.length) {
            $checkbox.prop('checked', !$checkbox.prop('checked'));
            $checkbox.trigger('change');
        }
    });

    // Initialize the visibility state on page load
    toggleSelectedOptionsVisibility();

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
                slidesPerView: 1.5,
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
        allowSlideNext: true,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            576: {
                slidesPerView: 2.1,
            },
            768: {
                slidesPerView: 2.1,
            },
            992: {
                slidesPerView: 3,
            }
        }
    });

    //list item toggle

    const listItem = $('.property-item');
    const listItemHeader = $('.property-item .header-row');

    $(listItemHeader).on('click', function (el) {
        const element = $(this).parent('.property-item');

        // Close all other expanded items first
        $('.property-item.expanded').not(element).removeClass('expanded')
            .find('.bi-chevron-up').removeClass('bi-chevron-up').addClass('bi-chevron-down');

        // Toggle clicked item
        $(element).toggleClass('expanded');

        // Change the chevron icon direction
        const chevron = element.find('.bi-chevron-down, .bi-chevron-up');
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
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
            },
        },
        navigation: {
            nextEl: '.upgrade-ad-swiper-button-next',
            prevEl: '.upgrade-ad-swiper-button-prev',
        }
    });

    //buy-addon-swiper
    const buyAddonSwiper = new Swiper('.buy-addon-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 10,
        loop: true,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.3,
            },
            // when window width is >= 480px
            480: {
                slidesPerView: 1.5,
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 'auto',
            },
        },
        navigation: {
            nextEl: '.buy-ad-swiper-button-next',
            prevEl: '.buy-ad-swiper-button-prev',
        }
    });


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
    $(".showAutoBoostBtn").on('click', function () {
        autoBoostPopup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', function () {
        autoBoostPopup.style.display = 'none';
    });

    closePopupBtnBottom.addEventListener('click', function () {
        autoBoostPopup.style.display = 'none';
    });

    // Day buttons toggle functionality
    dayButtons.forEach(button => {
        button.addEventListener('click', function () {
            this.classList.toggle('active');
            updateSelectAllCheckbox();
        });
    });

    // Select all days checkbox functionality
    selectAllCheckbox.addEventListener('change', function () {
        dayButtons.forEach(button => {
            if (this.checked) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    });

    // Save Changes Button
    saveChangesBtn.addEventListener('click', function () {
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
    autoBoostSwitch.addEventListener('change', function () {
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
        el.addEventListener('change', function () {
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


    // Bulk action dropdown handlers
    $('#setStatusBtn').click(function () {
        // Handle set status action
        console.log('Set status action triggered');
    });

    $('#assignToUserBtn').click(function () {
        // Handle assign to user action
        console.log('Assign to user action triggered');
    });

    // Share selected ads handler
    $('#shareBtn').click(function () {
        $('#selectedAdsActionsModal .modal-title').text('Share Selected Ads');
        $('#selectedAdsActionsModal .modal-content-share').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-deactivate, #selectedAdsActionsModal .modal-content-activate').addClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-share').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-deactivate, #selectedAdsActionsModal .modal-btn-activate').addClass('d-none');
    });

    // Boost selected ads handler
    $('#boostBtn').click(function () {
        $('#selectedAdsActionsModal .modal-title').text('Confirm Boost');
        $('#selectedAdsActionsModal .modal-content-boost').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-deactivate, #selectedAdsActionsModal .modal-content-activate, #selectedAdsActionsModal .modal-content-share').addClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-boost').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-deactivate, #selectedAdsActionsModal .modal-btn-activate, #selectedAdsActionsModal .modal-btn-share').addClass('d-none');
    });

    // Deactivate selected ads handler
    $('#deactivateBtn').click(function () {
        $('#selectedAdsActionsModal .modal-title').text('Confirm Deactivate');
        $('#selectedAdsActionsModal .modal-content-deactivate').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-activate, #selectedAdsActionsModal .modal-content-share').addClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-deactivate').removeClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-activate, #selectedAdsActionsModal .modal-btn-share').addClass('d-none');
    });

    // Handle switch toggle for deactivation
    $('.custom-switch input[type="checkbox"]').on('change', function () {
        if (!$(this).is(':checked')) {
            // If switch is turned off, show deactivate confirmation modal
            $('#selectedAdsActionsModal .modal-title').text('Confirm Deactivate');
            $('#selectedAdsActionsModal .modal-content-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-activate, #selectedAdsActionsModal .modal-content-share').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-deactivate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-activate, #selectedAdsActionsModal .modal-btn-share').addClass('d-none');

            // Show the modal
            $('#selectedAdsActionsModal').modal('show');
        } else {
            // If switch is turned on, show activate confirmation modal
            $('#selectedAdsActionsModal .modal-title').text('Confirm Activate');
            $('#selectedAdsActionsModal .modal-content-activate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-deactivate, #selectedAdsActionsModal .modal-content-share').addClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-activate').removeClass('d-none');
            $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-deactivate, #selectedAdsActionsModal .modal-btn-share').addClass('d-none');

            // Show the modal
            $('#selectedAdsActionsModal').modal('show');
        }
    });


    // Action button handlers
    $('#selectedAdsActionsModal .modal-btn-delete').click(function () {
        console.log('Deleting selected ads...');
        $('#selectedAdsActionsModal').modal('hide');
    });

    $('#selectedAdsActionsModal .modal-btn-boost').click(function () {
        console.log('Boosting selected ads...');
        $('#selectedAdsActionsModal').modal('hide');
    });

    $('#selectedAdsActionsModal .modal-btn-deactivate').click(function () {
        console.log('Deactivating selected ads...');
        $('#selectedAdsActionsModal').modal('hide');
    });

    $('#selectedAdsActionsModal .modal-btn-activate').click(function () {
        console.log('activating selected ads...');
        $('#selectedAdsActionsModal').modal('hide');
    });

    $('#selectedAdsActionsModal .modal-btn-share').click(function () {
        console.log('Sharing selected ads...');
        $('#selectedAdsActionsModal').modal('hide');
    });

    // Reset modal content when modal is hidden
    $('#selectedAdsActionsModal').on('hidden.bs.modal', function () {
        $('#selectedAdsActionsModal .modal-content-delete, #selectedAdsActionsModal .modal-content-boost, #selectedAdsActionsModal .modal-content-deactivate, #selectedAdsActionsModal .modal-content-activate, #selectedAdsActionsModal .modal-content-share').addClass('d-none');
        $('#selectedAdsActionsModal .modal-btn-delete, #selectedAdsActionsModal .modal-btn-boost, #selectedAdsActionsModal .modal-btn-deactivate, #selectedAdsActionsModal .modal-btn-activate, #selectedAdsActionsModal .modal-btn-share').addClass('d-none');
    });

    // ===== Mobile Bottom Sheet Handlers =====
    // Show mobile bottom sheet on checkbox selection (only when checked)
    $(document).on('change', '.mobile-ad-checkbox', function () {
        // Only show bottom sheet on mobile (< 768px) and only when checkbox is checked
        if (window.innerWidth < 768 && $(this).is(':checked')) {
            const modal = new bootstrap.Modal(document.getElementById('bulkActionsMobileModal'));
            modal.show();
        }
    });

    // Handle mobile action item selection from dropdown
    $(document).on('click', '.mobile-action-item', function (e) {
        e.preventDefault();
        
        const actionType = $(this).data('action');

        // Close the dropdown
        const dropdownBtn = document.getElementById('bulkActionsMobileDropdown');
        const dropdown = bootstrap.Dropdown.getInstance(dropdownBtn);
        if (dropdown) {
            dropdown.hide();
        }

        // Execute action directly
        executeMobileAction(actionType);
    });

    // Execute the selected mobile action
    function executeMobileAction(actionType) {
        if (actionType === 'boost') {
            console.log('Mobile: Boosting selected ads...');
        } else if (actionType === 'deactivate') {
            console.log('Mobile: Deactivating selected ads...');
        } else if (actionType === 'share') {
            console.log('Mobile: Sharing selected ads...');
        } else if (actionType === 'status') {
            console.log('Mobile: Setting status for selected ads...');
        } else if (actionType === 'assign') {
            console.log('Mobile: Assigning user for selected ads...');
        }
        
        // Close the bottom sheet
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('bulkActionsMobileModal'));
            if (modal) {
                modal.hide();
            }
        }, 200);
    }

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
    $(document).on('click', function (e) {
        if (!$(e.target).closest('[data-bs-toggle="popover"]').length &&
            !$(e.target).closest('.popover').length) {
            shareButton.popover('hide');
        }
    });

    // Prevent popover from closing when clicking inside it
    $(document).on('click', '.popover', function (e) {
        e.stopPropagation();
    });

    //tooltip default code
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

    // Promote Modal Scroll Navigation Functionality
    const tabButtons = document.querySelectorAll('.promote-modal-tabs .tab-btn');
    const modalSections = document.querySelectorAll('.modal-section');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            const targetSection = this.getAttribute('data-section');

            // Remove active class from all tabs
            tabButtons.forEach(btn => btn.classList.remove('active'));

            // Add active class to clicked tab
            this.classList.add('active');

            // Scroll to target section
            const targetElement = document.getElementById(`${targetSection}-section`);
            if (targetElement) {
                const modalBody = targetElement.closest('.modal-body');
                const targetOffset = targetElement.offsetTop - modalBody.offsetTop - 20; // 20px offset for better visibility

                modalBody.scrollTo({
                    top: targetOffset,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Placement card selection functionality
    const placementCards = document.querySelectorAll('.placement-card');
    const selectButtons = document.querySelectorAll('.select-btn');

    selectButtons.forEach(button => {
        button.addEventListener('click', function () {
            const card = this.closest('.placement-card');

            // Remove selected state from all cards
            placementCards.forEach(c => {
                c.classList.remove('selected');
                c.querySelector('.select-btn').textContent = 'Select';
            });

            // Add selected state to clicked card
            card.classList.add('selected');
            this.textContent = 'Selected';
        });
    });

    // const popoverBtn = $('.dot-popover');
    // const popover = new bootstrap.Popover(popoverBtn,{
    //     trigger: 'click,    // });

    // Scroll spy functionality - update active tab based on visible section
    (function () {
        const modalBody = document.querySelector('#promotedAddModal .modal-body');
        if (!modalBody) return;
        modalBody.addEventListener('scroll', function () {
            const scrollTop = this.scrollTop;
            const tabHeight = document.querySelector('.promote-modal-tabs').offsetHeight;
            let currentSection = null;
            let minDistance = Infinity;
            modalSections.forEach(section => {
                const sectionTop = section.offsetTop - modalBody.offsetTop - tabHeight - 10;
                const distance = Math.abs(scrollTop - sectionTop);
                if (scrollTop >= sectionTop && distance < minDistance) {
                    minDistance = distance;
                    currentSection = section;
                }
            });
            if (currentSection) {
                const sectionName = currentSection.id.replace('-section', '');
                tabButtons.forEach(btn => {
                    if (btn.getAttribute('data-section') === sectionName) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
            }
        });
    })();

    // Video preview click handler
    $('.video-preview').on('click', function () {
        // Close the promote modal
        $('#promotedAddModal').modal('hide');

        // Get video source from data-video attribute
        const videoSrc = $(this).data('video');
        $('#videoPlayerFrame').attr('src', videoSrc);

        // Open the video player modal
        $('#videoPlayerModal').modal('show');
    });

    // Reset video src when modal is closed to stop playback
    $('#videoPlayerModal').on('hidden.bs.modal', function () {
        $('#videoPlayerFrame').attr('src', '');
        // Reopen the promotedAddModal when videoPlayerModal is closed
        $('#promotedAddModal').modal('show');
    });

    // Initialize charts for all insight buttons
    function initializeInsightChart(canvasId) {
        const ctx = document.getElementById(canvasId).getContext('2d');

        var gradient = ctx.createLinearGradient(0, 0, 0, 60);
        gradient.addColorStop(0.2, 'rgb(161,205,250)');
        gradient.addColorStop(1, 'rgba(218,241,253,0.52)');

        const chart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                        data: [300, 350, 900, 300, 330, 900, 300, 310, 400, 900, 300, 397],
                        // backgroundColor: 'rgba(250,35,35,0.11)', // Light blue fill
                        backgroundColor: gradient, // Light blue fill
                        borderWidth: 2,
                        fill: true,
                        tension:.3,
                        borderColor:'rgb(25 127 230)'
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        display: true,
                        ticks: {
                            display: false
                        },
                        border: {
                            width: 0,
                            dash: [2, 4],
                        },
                        grid: {
                            drawTicks: false,
                        },
                    },
                    x: {
                        display: false,
                        ticks: {
                            display: false
                        },
                        border: {
                            width: 0,
                        },
                    }
                },
                plugins: {
                    legend: {
                        display: false,
                    },
                },
                elements: {
                    line: {
                        borderColor: 'rgb(237,237,237)',
                        borderWidth: 1
                    },
                    point: {
                        radius: 0
                    }
                },
                tooltips: {
                    enabled: false
                },
            }
        });
        return chart;
    }

    // Initialize
    // all
    // charts
    const chartIds = ['insightChart2', 'insightChart3', 'insightChart4',];
    chartIds.forEach(id => {
        if (document.getElementById(id)) {
            initializeInsightChart(id);
        }
    });


     // ===== Progress Modal Configuration =====
        const config = {
            currentPage: 18,
            targetPage: 4
        };
        
        // Bootstrap modal instances
        let progressModal;
        let successModal;
        
        // Calculate progress
        function calculateProgress(current, target) {
            const totalPages = current;
            const progress = (totalPages - target) / totalPages;
            return Math.min(Math.max(progress, 0), 1);
        }
        
        // Animate progress circle
        function animateProgress() {
            const progress = calculateProgress(config.currentPage, config.targetPage);
            const radius = 110;
            const circumference = 2 * Math.PI * radius; // 691.15 approximately
            const offset = circumference * (1 - progress); // Start full, animate to progress
            
            // Delay animation to allow modal to render
            setTimeout(function() {
                const $circle = $('#progressCircle');
                $circle.css({
                    'stroke-dasharray': circumference,
                    'stroke-dashoffset': offset
                });
                console.log('Animation triggered:', { progress, circumference, offset });
            }, 300);
        }
        
        // Initialize progress view
        function initProgressView() {
            $('#targetPage').text(config.targetPage);
            $('#currentPage').text('Page ' + config.currentPage);
            $('#newPage').text('Page ' + config.targetPage);
            
            animateProgress();
        }
        
        // Show success modal
        function showSuccess() {
            $('#successPageNumber').text(config.targetPage);
            $('#successFromPage').text('page ' + config.currentPage);
            $('#successToPage').text('page ' + config.targetPage);
            $('#successInitialPage').text('Page ' + config.currentPage);
            $('#successFinalPage').text('Page ' + config.targetPage);
            
            progressModal.hide();
            successModal.show();
        }
        
        // Public API for external use (if needed)
        $.fn.updateBoostConfig = function(currentPage, targetPage) {
            config.currentPage = currentPage;
            config.targetPage = targetPage;
            initProgressView();
            return this;
        };
        
        $.fn.showProgressModal = function() {
            successModal.hide();
            progressModal.show();
            initProgressView();
            return this;
        };
        
        // Initialize modals
        progressModal = new bootstrap.Modal('#progressModal');
        
        successModal = new bootstrap.Modal('#successModal');
        
        // Handle progress modal show event - animate when modal becomes visible
        document.getElementById('progressModal').addEventListener('shown.bs.modal', function() {
            initProgressView();
        });
        
        // Event handlers
        $('#btnMinimize').on('click', showSuccess);

        $('#btnYesBoost').on("click",()=>{
            progressModal.show();
        });
        
        // Show progress modal on page load
        // progressModal.show();
        

});
