# AddInsight Charts Update Guide (Old Version -> Current)

Use this guide to update the client’s old AddInsight charts by copying the exact blocks from current files.

## Files
- `adInsight.html`
- `_sass/style.scss`
- `assets/js/adInsight.js`

## Update Order (Recommended)
1. `#adsTypeChart`
2. `#dealsChart`
3. `#boostedChart`
4. `#pageNumberChart` and `#leadsAdsChart` (curve + size only)
5. `#overAllChart` + `long-legends` + colors JS
6. `campaign-timeline-section` (`timelineChart` + collapse details)

## 1) `#adsTypeChart` (title, views/leads icon buttons, custom legends, explain/upgrade buttons, curved bars)
- HTML: `adInsight.html` lines **171-252**
- SCSS (chart badge / button-group style / container heights / legends):
  - `_sass/style.scss` lines **2411-2416** (`Explain this graph` badge)
  - `_sass/style.scss` lines **2650-2692** (Views/Leads button style + chart container height)
  - `_sass/style.scss` lines **3057-3127** (custom legend design: Overall Data / Own Data)
- JS (full chart data + options + toggle):
  - `assets/js/adInsight.js` lines **95-324**
- Note: `Upgrade your ads now` uses Bootstrap `btn-outline-success` in HTML (`adInsight.html` lines **248-251**). No dedicated override found in `_sass/style.scss`.

## 2) `#dealsChart` (custom legends + explain button + curved bars)
- HTML: `adInsight.html` lines **256-332**
- SCSS:
  - `_sass/style.scss` lines **2650-2700**
  - `_sass/style.scss` lines **3057-3127**
- JS (full chart data + options + views/leads toggle):
  - `assets/js/adInsight.js` lines **326-523**

## 3) `#boostedChart` (custom legends + explain button + curved bars)
- HTML: `adInsight.html` lines **356-431**
- SCSS:
  - `_sass/style.scss` lines **2650-2704**
  - `_sass/style.scss` lines **3057-3127**
- JS (full chart data + options + views/leads toggle):
  - `assets/js/adInsight.js` lines **524-707**

## 4) `#pageNumberChart` and `#leadsAdsChart` (only curved bars + size changes)
- HTML:
  - `#pageNumberChart`: `adInsight.html` lines **334-354**
  - `#leadsAdsChart`: `adInsight.html` lines **433-452**
- SCSS (size updates):
  - `_sass/style.scss` lines **2694-2708**
- JS (curve/radius + bar thickness):
  - `#pageNumberChart`: `assets/js/adInsight.js` lines **710-891**
  - `#leadsAdsChart`: `assets/js/adInsight.js` lines **895-1019**

## 5) `#overAllChart` (full chart JS + chart-box HTML + new `long-legends` + colors JS)
- HTML:
  - chart header + chart-box + `overAllChart`: `adInsight.html` lines **518-536**
  - new `long-legends`: `adInsight.html` lines **537-579**
- SCSS:
  - chart box / timeline container shared styles: `_sass/style.scss` lines **1374-1389**
  - `long-legends` full style: `_sass/style.scss` lines **1511-1596**
- JS:
  - full `overAllChart` data + config: `assets/js/adInsight.js` lines **1021-1951**
  - `long-legends` colors rendering JS: `assets/js/adInsight.js` lines **2667-2723**

## 6) `campaign-timeline-section` (`timelineChart` + collapse section)
- HTML:
  - full timeline section (header, collapse toggle, timeline chart, detail cards, footer): `adInsight.html` lines **580-731**
- SCSS:
  - timeline section styles: `_sass/style.scss` lines **1392-1474**
- JS:
  - timeline colors, annotations, chart init, and update on dropdown change: `assets/js/adInsight.js` lines **1953-2664**

## 7) Explain Graph Walkthrough Triggers
- HTML trigger IDs:
  - `AdsTypeChartWalkthrough`, `DealsChartWalkthrough`, `BoostedChartWalkthrough`, `OverallChartWalkthrough`
  - `adInsight.html` lines **242-246**, **325-329**, **424-428**, **724-727**
- JS click handlers + walkthrough steps:
  - `assets/js/adInsight.js` lines **3017-3115**

## Quick Implementation Tip
- Replace section-by-section using the line ranges above.
- After each section, validate:
  - title text
  - views/leads toggle
  - custom legends
  - explain button
  - chart curve/radius and size
