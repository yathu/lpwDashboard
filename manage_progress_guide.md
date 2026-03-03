replace this this entire **progressModal**

    <div  class="modal fade slide-up bottom-sheet-modal"  id="progressModal"  tabindex="-1"  aria-labelledby="progressModalLabel"  aria-hidden="true">
    
    <div  class="modal-dialog modal-dialog-centered">
    
    <div  class="modal-content">
    
    <!-- Drag Handle -->
    
    <div  class="text-center pt-3 pb-2">
    
    <div  class="drag-handle mx-auto"></div>
    
    </div>
    
    <!-- Header -->
    
    <div  class="px-4 pb-1 d-flex justify-content-between align-items-center"  id="modalHeader">
    
    <div  style="width: 32px;"></div>
    
    <h2  id="modalTitle"  class="fs-6 fw-bold mb-0"  data-boosting="Boosting Ad"  data-boosted="Boosted">Boosting Ad</h2>
    
    <button  type="button"  class="btn btn-close"  data-bs-dismiss="modal">
    
    </button>
    
    </div>
    
    <!-- Body -->
    
    <div  class="modal-body px-4 pb-4 text-center">
    
    <!-- Progress Circle (Visible only during boosting) -->
    
    <div  id="progressCircleContainer"  class="progress-circle-container mx-auto">
    
    <svg  class="progress-circle"  width="225"  height="225"  viewBox="0 0 256 256">
    
    <defs>
    
    <linearGradient  id="gradient-progress"  x1="0%"  y1="100%"  x2="100%"  y2="0%">
    
    <stop  offset="0%"  stop-color="#22c55e"/>
    
    <stop  offset="100%"  stop-color="#22c55e"/>
    
    </linearGradient>
    
    </defs>
    
    <circle  class="progress-circle-bg"  cx="128"  cy="128"  r="110"/>
    
    <circle  class="progress-circle-fill"  id="progressCircle"  cx="128"  cy="128"  r="110"  stroke="url(#gradient-progress)"/>
    
    </svg>
    
    <div  class="circle-content">
    
    <div  class="page-number"  id="targetPage">4</div>
    
    <div  class="page-label">Page no.</div>
    
    <div  class="arrow-boost">
    
    <i  class="bi bi-chevron-up"></i>
    
    <i  class="bi bi-chevron-up"></i>
    
    <i  class="bi bi-chevron-up"></i>
    
    </div>
    
    </div>
    
    </div>
    
    <!-- Success Circle (Visible only when boosted) -->
    
    <!-- <div id="successCircleContainer" class="d-none mb-4">
    
    <div class="success-circle mx-auto">
    
    <div class="success-number" id="successPageNumber">4</div>
    
    <div class="success-label">Page no.</div>
    
    </div>
    
    </div> -->
    
    <!-- Status/Title Container (Reused for both states) -->
    
    <!-- Status Indicator for Boosting -->
    
    <div  id="statusIndicator"  class="d-flex align-items-center justify-content-center gap-3 mb-3 status-indicator">
    
    <span  class="position-relative d-flex"  style="height: 12px; width: 12px;"  id="statusPing">
    
    <span  class="position-absolute top-0 start-0 ping rounded-circle opacity-75"  style="height: 12px; width: 12px;"></span>
    
    <span  class="position-relative rounded-circle"  style="height: 12px; width: 12px;"></span>
    
    </span>
    
    <span  id="statusText"  class="fw-bold fs-6 text-uppercase"  style="letter-spacing: 0.05em;">Boosting your ad</span>
    
    </div>
    
    <!-- Success Title for Boosted (Initially Hidden) -->
    
    <div  id="successTitleContainer"  class="d-none mb-3">
    
    <div  class="d-flex align-items-center justify-content-center gap-1 mb-1">
    
    <span  class="bi bi-check-circle-fill"  style="font-size: 16px; color: #22c55e;"></span>
    
    <span  class="fw-bold text-uppercase"  style="font-size: 16px; letter-spacing: 0.05em; color: #22c55e;">Boosted</span>
    
    </div>
    
    <h3  class="fw-bold mb-2">Success! Your ad is boosted</h3>
    
    <p  class="text-secondary px-3 mb-2">Your listing jumped from <span  id="successFromPage">page 18</span> to <span  id="successToPage">page 4</span> for maximum exposure.</p>
    
    </div>
    
    <!-- Position Comparison (Reused for both states) -->
    
    <div  id="positionContainer"  class="bg-light rounded-4 px-3 py-3 mb-3 border position-container"  style="max-width: 320px; margin: 0 auto;">
    
    <div  class="row align-items-center justify-content-between g-2">
    
    <div  class="col text-start text-col">
    
    <small  id="leftLabel"  class="text-uppercase d-block">Current Pos.</small>
    
    <div  id="leftValue"  class="text-num">Page 18</div>
    
    </div>
    
    <div  class="col-auto">
    
    <div  class="bg-white rounded-circle shadow-sm d-flex align-items-center justify-content-center"  style="width: 32px; height: 32px;">
    
    <span  id="comparisonIcon"  class="bi bi-arrow-right text-secondary"  style="font-size: 1.125rem;"></span>
    
    </div>
    
    </div>
    
    <div  class="col text-end text-col">
    
    <small  id="rightLabel"  class="text-uppercase d-block">New Pos.</small>
    
    <div  id="rightValue"  class="text-num progress-text-green">Page 4</div>
    
    </div>
    
    </div>
    
    </div>
    
    <!-- Message Section (Boosting only) -->
    
    <div  id="boostingMessageSection"  class="mb-4 px-4 msg-container">
    
    <h3  class="fs-5 fw-bold mb-2">Your ad is being boosted.</h3>
    
    <p  class="text-secondary">Please check in 5-10 mins to see the changes.</p>
    
    </div>
    
    <!-- Upgrade CTA Section (Visible only when boosted) -->
    
    <div  id="upgradeSectionContainer"  class="d-none">
    
    <div  class="rounded-4 p-3 mb-2 success-upgrade-box">
    
    <div  class="mb-2 text-center">
    
    <div  class="text-primary fw-bold mb-1 success-upgrade-title">Reach page 1 or 2</div>
    
    <p  class="text-muted small mb-0 getmore-text">Get 3x more visibility by upgrading</p>
    
    </div>
    
    <button  class="btn btn-primary w-100 rounded-3 d-flex align-items-center justify-content-center gap-2 fw-bold success-upgrade-btn">
    
    <span  class="bi bi-rocket-takeoff-fill"></span>
    
    <span>Upgrade your ad now</span>
    
    </button>
    
    </div>
    
    <!-- Done Button -->
    
    <button  class="btn w-100 text-secondary success-done-btn border-0 py-0"  data-bs-dismiss="modal">Done</button>
    
    </div>
    
    </div>
    
    </div>
    
    </div>
    
    </div>




Replace this css, (find and del all by #progressModal)


    #progressModal .success-badge-icon {
    	 font-size: 18px;
    	 color: #22c55e;
    }
     #progressModal .success-badge-text {
    	 font-size: 18px;
    	 font-weight: bold;
    	 letter-spacing: 0.05em;
    	 color: #22c55e;
    }
     #progressModal .suscess-msg-box p {
    	 font-size: 14px;
    }
     #progressModal .success-title {
    	 letter-spacing: -0.025em;
    }
     #progressModal .success-small-label {
    	 font-size: 11px;
    }
     #progressModal .success-icon-circle {
    	 width: 40px;
    	 height: 40px;
    }
     #progressModal .success-graph-icon {
    	 font-size: 1.5rem;
    }
     #progressModal .success-final-page {
    	 font-size: 2rem;
    	 line-height: 1;
    }
     #progressModal .success-upgrade-box {
    	 background-color: rgba(29, 133, 237, 0.05);
    	 border: 1px solid rgba(29, 133, 237, 0.2);
    }
     #progressModal .success-upgrade-box .getmore-text {
    	 font-size: 13px;
    }
     #progressModal .success-upgrade-title {
    	 font-size: 16px;
    }
     #progressModal .success-upgrade-btn {
    	 height: 40px;
    }
     #progressModal .success-upgrade-btn .bi {
    	 font-size: 14px;
    }
     #progressModal .success-done-btn {
    	 font-weight: 500;
    	 letter-spacing: 0.5px;
    	 font-size: 14px;
    }

 
 add this ID to **yes boost button** and add this js in manage js, you may already have it - `btnYesBoost`

    $('#btnYesBoost').on("click",()=>{  
        progressModal.show();  
    });


replace this entire functions related to the progress modal:

    // Bootstrap modal instance  
    let progressModal;  
      
    // Calculate progress  
    function calculateProgress(current, target) {  
        const totalPages = current;  
        const progress = (totalPages - target) / totalPages;  
        return Math.min(Math.max(progress, 0), 1);  
    }  
      
    // Animate progress circle  
    function animateProgress() {  
        return new Promise((resolve) => {  
            const progress = calculateProgress(progressConfig.currentPage, progressConfig.targetPage);  
            const radius = 110;  
            const circumference = 2 * Math.PI * radius; // 691.15 approximately  
      const offset = circumference * (1 - progress); // Calculate target offset  
      const $circle = $('#progressCircle');  
              
            // First, reset the circle to 0% progress (full offset)  
      $circle.css({  
                'stroke-dasharray': circumference,  
                'stroke-dashoffset': circumference,  // Start at 0% progress  
      'transition': 'none' // Disable transition for instant reset  
      });  
              
            // Force reflow to apply the reset immediately  
      $circle[0].offsetHeight;  
              
            // Re-enable transition and animate to target  
      setTimeout(function() {  
                $circle.css({  
                    'transition': 'stroke-dashoffset 1.5s ease-in-out',  
                    'stroke-dashoffset': offset // Animate to target progress  
      });  
                console.log('Animation triggered:', { progress, circumference, offset });  
                  
                // Wait for CSS transition (1.5s) to complete  
      setTimeout(resolve, 1500);  
            }, 100);  
        });  
    }  
      
    // Update modal to boosting state  
    function setBoostingState() {  
        progressConfig.isBoostComplete = false;  
          
        // Update title  
      $('#modalTitle').text('Boosting Ad').css('color', '');  
          
        // Show progress circle, hide success circle  
      $('#progressCircleContainer').removeClass('d-none');  
        // $('#successCircleContainer').addClass('d-none');  
         // Show status indicator, hide success title  
      $('#statusIndicator').removeClass('d-none');  
        $('#successTitleContainer').addClass('d-none');  
        $('#statusText').text('Boosting your ad');  
          
        // Update position container for boosting state  
      $('#positionContainer').removeClass('d-none');  
        $('#leftLabel').text('Current Pos.');  
        $('#rightLabel').text('New Pos.');  
        $('#leftValue').text('Page ' + progressConfig.currentPage)  
            .removeClass('text-muted text-decoration-line-through light-page-number');  
        $('#rightValue').text('Page ' + progressConfig.targetPage)  
            .removeClass('text-muted text-decoration-line-through light-page-number');  
        $('#comparisonIcon')  
            .attr('class', 'bi bi-arrow-right text-secondary')  
            .attr('style', 'font-size: 1.125rem;');  
          
        // Show boosting message, hide upgrade section  
      $('#boostingMessageSection').removeClass('d-none');  
        $('#upgradeSectionContainer').addClass('d-none');  
    }  
      
    // Update modal to boosted state  
    function setBoostedState() {  
        progressConfig.isBoostComplete = true;  
          
        // Update title with success color  
      $('#modalTitle').text('Boosted').css('color', '#22c55e');  
          
        // Hide progress circle, show success circle  
     // $('#progressCircleContainer').addClass('d-none'); // $('#successCircleContainer').removeClass('d-none');  $('#successPageNumber').text(progressConfig.targetPage);  
          
        // Hide status indicator, show success title  
      $('#statusIndicator').addClass('d-none');  
        $('#successTitleContainer').removeClass('d-none');  
        $('#successFromPage').text('page ' + progressConfig.currentPage);  
        $('#successToPage').text('page ' + progressConfig.targetPage);  
          
        // Update position container for boosted state  
      $('#positionContainer').removeClass('d-none');  
        $('#leftLabel').text('Initial');  
        $('#rightLabel').text('New Position');  
        $('#leftValue').text('Page ' + progressConfig.currentPage)  
            .addClass('text-muted text-decoration-line-through light-page-number');  
        $('#rightValue').text('Page ' + progressConfig.targetPage)  
            .removeClass('text-muted text-decoration-line-through light-page-number');  
        $('#comparisonIcon')  
            .attr('class', 'bi bi-graph-up-arrow text-success')  
            .attr('style', 'font-size: 1.125rem;');  
          
        // Hide boosting message, show upgrade section  
      $('#boostingMessageSection').addClass('d-none');  
        $('#upgradeSectionContainer').removeClass('d-none');  
    }  
      
    // Initialize progress view  
    function initProgressView() {  
        setBoostingState();  
        $('#targetPage').text(progressConfig.targetPage);  
          
        animateProgress().then(() => setTimeout(() => setBoostedState(), 1000));  
    }  
      
    // Public API for external use (if needed)  
    $.fn.updateBoostConfig = function(currentPage, targetPage) {  
        progressConfig.currentPage = currentPage;  
        progressConfig.targetPage = targetPage;  
        initProgressView();  
        return this;  
    };  
      
    $.fn.showProgressModal = function() {  
        // Reset to boosting state when showing modal  
      setBoostingState();  
        progressConfig.isBoostComplete = false;  
          
        progressModal.show();  
        return this;  
    };  
      
    // Initialize modal  
    progressModal = new bootstrap.Modal('#progressModal');  
      
    // Handle progress modal show event - animate when modal becomes visible  
    document.getElementById('progressModal').addEventListener('shown.bs.modal', function() {  
        // Reset to boosting state when modal opens  
      setBoostingState();  
        progressConfig.isBoostComplete = false;  
          
        initProgressView();  
    });

