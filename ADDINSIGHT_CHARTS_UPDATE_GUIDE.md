##For the CSS changes, I mentioned the SCSS file changes with line No, which you can simply convert to CSS for each section using this website: https://jsonformatter.org/scss-to-css.

## changed files
- `adInsight.html` (replace full chart blocks)
- `assets/js/adInsight.js` (replace full JS blocks by block name/marker)
- `_sass/style.scss` (copy SCSS blocks by line number; you can convert to CSS in your system)

## Safe Process
1. Take backup of old 3 files.
2. Update one section at a time.
3. Refresh and check chart before moving to next section.

---

## 1) First chart: `#adsTypeChart`

### 1A. HTML replace (full chart block)
In `adInsight.html`, replace old first chart block with this:

```html
<div class="chart-box d-flex flex-column justify-content-between">
    <div>
    
    
        <div class="d-flex justify-content-between align-items-center">
            <div class="title">
                <img src="assets/img/addInsight/summary/upgradeAds.svg" alt="" />
                Upgraded ads vs normal ads
            </div>
    
            <button type="button" class="btn btn-sm btn-outline-secondary rounded-5 text-center" data-bs-toggle="popover"
                data-bs-trigger="hover" data-bs-placement="top"
                data-bs-content="And here's some amazing content. It's very engaging. Right?">
                <i class="bi bi-info ms-0"></i>
            </button>
        </div>
    
        <div id="adsTypeChartDataType" class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="upgradeChartType" id="views" autocomplete="off" checked
                value="views" />
            <label class="btn btn-outline-primary" for="views">
                <i class="bi bi-eye fs-6 me-1"></i>
                Views</label>
    
            <input type="radio" class="btn-check" name="upgradeChartType" id="leads" autocomplete="off" value="leads" />
            <label class="btn btn-outline-primary" for="leads">
                <i class="bi bi-people fs-6 me-1"></i>
                Leads</label>
        </div>
    
        <div class="adsTypeChartContainer mb-1">
            <canvas id="adsTypeChart"></canvas>
        </div>
    </div>


    <div id="adsTypeChartlegend" class="row mt-5 justify-content-md-center">
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom overall-blue">
                <span class="chart-legend-title">Overall Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom own-green">
                <span class="chart-legend-title">Own Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between align-items-sm-center mt-3 gap-3 gap-sm-0">

        <span id="AdsTypeChartWalkthrough"
              class="badge rounded-2 chart-badge fw-normal py-2 px-2 d-flex align-items-center">
            <i class="bi bi-info-circle me-1"></i>
            Explain this graph
        </span>

        <a href="#" class="btn btn-outline-success"
        >Upgrade your ads now
            <i class="bi bi-caret-right-fill"></i>
        </a>
    </div>
</div>
```

### 1B. JS replace (find by marker)
In `assets/js/adInsight.js`:
- Find: `//ads type chart`
- Replace until: `//ads type chart end`

This block includes new title behavior, views/leads toggle, custom legend logic, curved bar settings.

### 1C. SCSS blocks (line-number based)
Copy these SCSS blocks:
- `_sass/style.scss` lines `2411-2416` (Explain button style)
- `_sass/style.scss` lines `2650-2692` (Views/Leads button style + chart height)
- `_sass/style.scss` lines `3057-3127` (custom legend style)

---

## 2) Second chart: `#dealsChart`

### 2A. HTML replace (full chart block)

```html
<div class="chart-box">

    <div class="d-flex align-items-center justify-content-between gap-2 w-100">
        <div class="title">
            <img src="assets/img/addInsight/summary/upgradeAds.svg" alt="" />
            Ad Types Comparison
        </div>

        <button type="button" class="btn btn-sm btn-outline-secondary rounded-5 text-center" data-bs-toggle="popover"
            data-bs-trigger="hover" data-bs-placement="top"
            data-bs-content="And here's some amazing content. It's very engaging. Right?">
            <i class="bi bi-info ms-0"></i>
        </button>
    </div>

    <div id="dealChartDataType" class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="dealChartDataType" id="dealViews" autocomplete="off" checked
            value="views" />
        <label class="btn btn-outline-primary" for="dealViews">
            <i class="bi bi-eye fs-6 me-1"></i>

            Views</label>

        <input type="radio" class="btn-check" name="dealChartDataType" id="dealLeads" autocomplete="off"
            value="leads" />
        <label class="btn btn-outline-primary" for="dealLeads">
            <i class="bi bi-people fs-6 me-1"></i>
            Leads</label>
    </div>


    <div class="dealsChartContainer mb-1">
        <canvas id="dealsChart"></canvas>
    </div>

    <div id="dealsLegend" class="row mt-5 justify-content-md-center">
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom overall-blue">
                <span class="chart-legend-title">Overall Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom own-green">
                <span class="chart-legend-title">Own Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mt-3">
        <span id="DealsChartWalkthrough"
              class="badge rounded-2 chart-badge fw-normal py-2 px-2 d-flex align-items-center">
            <i class="bi bi-info-circle me-1"></i>
            Explain this graph
        </span>
    </div>

</div>
```

### 2B. JS replace
In `assets/js/adInsight.js`:
- Find: `//deals chart .......................................`
- Replace until: `//deals chart end .......................................`

### 2C. SCSS
- `_sass/style.scss` lines `2650-2700`
- `_sass/style.scss` lines `3057-3127`

---

## 3) Third chart: `#boostedChart`

### 3A. HTML replace (full chart block)

```html
<div class="chart-box">
    
    <div class="d-flex align-items-center justify-content-between gap-2 w-100">
        <div class="title">
            <img src="assets/img/addInsight/boosted.svg" alt=""/>
            Boosted ads Vs Normal ads
        </div>

        <button type="button" class="btn btn-sm btn-outline-secondary rounded-5 text-center" data-bs-toggle="popover"
            data-bs-trigger="hover" data-bs-placement="top"
            data-bs-content="And here's some amazing content. It's very engaging. Right?">
            <i class="bi bi-info ms-0"></i>
        </button>
    </div>

    <div id="boostedChartDataType" class="btn-group" role="group" aria-label="Basic radio toggle button group">
        <input type="radio" class="btn-check" name="boostedChartDataType" id="boostedViews" autocomplete="off" checked
            value="views" />
        <label class="btn btn-outline-primary" for="boostedViews">
            <i class="bi bi-eye fs-6 me-1"></i>

            Views</label>

        <input type="radio" class="btn-check" name="boostedChartDataType" id="boostedLeads" autocomplete="off"
            value="leads" />
        <label class="btn btn-outline-primary" for="boostedLeads">
            <i class="bi bi-people fs-6 me-1"></i>
            Leads</label>
    </div>

    <div class="boostedChartContainer mb-1">
        <canvas id="boostedChart"></canvas>
    </div>

    <div id="boostedLegend" class="row mt-5 justify-content-md-center">
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom overall-blue">
                <span class="chart-legend-title">Overall Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-auto">
            <div class="chart-legend-custom own-green">
                <span class="chart-legend-title">Own Data</span>
                <div class="chart-legend-items">
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-primary"></span>
                        <span>Normal Ads</span>
                    </div>
                    <div class="chart-legend-item">
                        <span class="chart-legend-dot dot-secondary"></span>
                        <span>Potential after Upgrading</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="d-flex justify-content-between align-items-center mt-3">
        <span id="BoostedChartWalkthrough"
              class="badge rounded-2 chart-badge fw-normal py-2 px-2 d-flex align-items-center">
            <i class="bi bi-info-circle me-1"></i>
            Explain this graph
        </span>
    </div>

</div>
```

### 3B. JS replace
In `assets/js/adInsight.js`:
- Find: `// boostedChart........................................`
- Replace until: `// boostedChart ends ........................................`

### 3C. SCSS
- `_sass/style.scss` lines `2650-2704`
- `_sass/style.scss` lines `3057-3127`

---

## 4) `#pageNumberChart` and `#leadsAdsChart` (only curve + size update)

### 4A. HTML blocks
Use these blocks (if old HTML differs):

`#pageNumberChart` block:
```html
<div class="chart-box">

    <div class="d-flex justify-content-between align-items-start">
        <div class="title">
            <img src="assets/img/addInsight/number.svg" alt=""/>
            Your ADs Page Number
        </div>

        <button type="button" class="btn btn-sm btn-outline-secondary rounded-5 text-center"
                data-bs-toggle="popover"
                data-bs-trigger="hover" data-bs-placement="top"
                data-bs-content="And here's some amazing content. It's very engaging. Right?">
            <i class="bi bi-info ms-0"></i>
        </button>
    </div>


    <div class="pageNumberChartContainer">
        <canvas id="pageNumberChart"></canvas>
    </div>
</div>
```

`#leadsAdsChart` block:
```html
<div class="chart-box w-100">

    <div class="d-flex justify-content-between align-items-start">
        <div class="title">
            <img src="assets/img/addInsight/ad.svg" alt=""/>
            Leads and Ads
        </div>
        <button type="button" class="btn btn-sm btn-outline-secondary rounded-5 text-center"
                data-bs-toggle="popover"
                data-bs-trigger="hover" data-bs-placement="top"
                data-bs-content="And here's some amazing content. It's very engaging. Right?">
            <i class="bi bi-info ms-0"></i>
        </button>
    </div>


    <div class="leadsAdsChartContainer">
        <canvas id="leadsAdsChart"></canvas>
    </div>
</div>
```

### 4B. JS replace
In `assets/js/adInsight.js`:
- For page number chart:
  - Find: `var ctx = document.getElementById("pageNumberChart");`
  - Replace until chart init ends at `var myBarChart = new Chart(ctx, { ... });`
- For leads/ads chart:
  - Find: `//leads and ads chart`
  - Replace until `var leadsChart = new Chart(ctx, { ... });`

### 4C. SCSS
- `_sass/style.scss` lines `2694-2708` (height changes only)

---

## 5) `#overAllChart` + new `long-legends`

### 5A. HTML replace
In `adInsight.html`, replace the whole `chart-container position-relative` block with:

```html
<div class="chart-container position-relative">
    <div
            class="d-flex justify-content-between align-items-center title-container"
    >
        <div>
            <div class="title">Views</div>
            <div class="desc">
                Numbers of times users <br/>
                clicked on your listing
            </div>
        </div>
        <div class="title">
            Page <br/>
            Number
        </div>
    </div>
    <div class="chart-box">
        <canvas id="overAllChart"></canvas>
    </div>
    <div class="long-legends">

        <div class="legend-item" id="legendUpgradeAds">
            <p class="me-3">Upgrade ads:</p>
            <div id="upgradeAdsColors" class="box-container"></div>
        </div>

        <div class="legend-item" id="legendPageNo">
            <div class="line-no-legend me-2"></div>
            <p class="">Page Number (lower = better placement)</p>
        </div>

        <div class="legend-item"  id="legendViews">
            <div class="views-legend me-2"></div>
            <p class="me-3">Views</p>
        </div>

        <div class="legend-item"  id="legendBoosts">
            <div class="upgrade-legend me-2"></div>
            <p class="me-3">Boosts</p>
        </div>

    </div>
    <div class="campaign-timeline-section mt-1 pt-3">
        <!-- Header -->
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h5 class="campaign-title mb-0 text-uppercase text-secondary" style="font-size: 12px; letter-spacing: 0.5px;">Campaign Timeline</h5>
            <a class="btn btn-link text-decoration-none p-0 text-secondary d-flex align-items-center gap-1" data-bs-toggle="collapse" href="#timelineDetails" role="button" aria-expanded="true" aria-controls="timelineDetails" style="font-size: 12px;">
                <span>Collapse Details</span>
                <i class="bi bi-chevron-up transition-icon"></i>
            </a>
        </div>

        <!-- Chart (Always Visible) -->
        <div class="chart-box-timeline mb-4">
            <canvas id="timelineChart"></canvas>
        </div>

        <!-- Collapsible Section -->
        <div class="collapse show" id="timelineDetails">
            <!-- timeline detail boxes and footer stay as in current file -->
        </div>
    </div>
</div>
```

### 5B. JS replace
In `assets/js/adInsight.js`:
- Replace full overall chart block:
  - Find: `//overall chart...........................................`
  - Replace until next same marker line before timeline section.
- Replace long legends colors block:
  - Find: `//custom long legends`
  - Replace until: `//custom long legends end`

---

## 6) `campaign-timeline-section` (`timelineChart` + collapse details)

### 6A. HTML replace
- Replace full timeline section from:
  - `<div class="campaign-timeline-section mt-1 pt-3">`
  - until its closing `</div>` (just before chart-container closes)

### 6B. JS replace
In `assets/js/adInsight.js`:
- Find: `//timeline chart...........`
- Replace until just before: `//custom long legends`

This includes:
- timeline data
- annotation generator
- tooltip behavior
- dropdown based update for timeline

### 6C. SCSS
Copy these SCSS blocks:
- `_sass/style.scss` lines `1374-1474` (`chart-box-timeline`, timeline cards, collapse icon rotate)
- `_sass/style.scss` lines `1511-1596` (`long-legends` styles)

---

## 7) Explain Graph buttons (walkthrough click handlers)

In `assets/js/adInsight.js`:
- Find these IDs and keep/update block:
  - `#AdsTypeChartWalkthrough`
  - `#DealsChartWalkthrough`
  - `#BoostedChartWalkthrough`
  - `#OverallChartWalkthrough`
- Replace section from:
  - `// Initialize walkthroughs`
  - until end of `$('#OverallChartWalkthrough').on('click', ... );`

---

## Important Note for SCSS -> CSS
- Keep same selectors and properties.
- Only flatten nesting when converting to CSS.
- Do not rename IDs/classes because JS depends on exact IDs.
