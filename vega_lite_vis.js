// Chart 1: Bar chart 
vegaEmbed("#skin_cancer_asr", "skin_cancer_asr.json")
  .then(res => {})
  .catch(console.error);

// Chart 2: Line chart 
vegaEmbed("#melanoma_trend", "melanoma_trend.json").then(function(result) {
    const view = result.view;
    let currentYear = 1982;
  
    function animate() {
      if (currentYear <= 2020) {
        view.signal("yearFilter", currentYear).run();
        currentYear++;
        setTimeout(animate, 450); 
      } else {
        // loop back to start
        currentYear = 1982;
        setTimeout(animate, 4000); 
      }
    }
  
    animate();
  }).catch(console.error);
  
  
// Chart 3: lollipop chart
vegaEmbed("#top_cancer_types", "top_cancer_types.json")
    .then(res => {})
    .catch(console.error);

// Chart 4: mirror bar chart 
// incidence_mortality_butterfly_chart.js

(() => {
  const SPEC_URL = "incidence_mortality_butterfly_chart.json";
  const CHART_SEL = "#incidence_mortality_butterfly_chart";
  const CTRL_SEL  = "#incidence_mortality_butterfly_chart_controls";

  // Basic guards so we fail gracefully if the page structure changes
  const chartEl = document.querySelector(CHART_SEL);
  const controlsEl = document.querySelector(CTRL_SEL);
  if (!chartEl) {
    console.warn(`[butterfly] Missing chart container: ${CHART_SEL}`);
    return;
  }
  if (!controlsEl) {
    console.warn(`[butterfly] Missing controls container: ${CTRL_SEL}`);
    return;
  }

  // Render the Vega-Lite spec and place all param-bound inputs into CTRL_SEL
  vegaEmbed(CHART_SEL, SPEC_URL, {
    actions: false,        // hide "Open in Vega Editor" buttons
    renderer: "canvas",    // "svg" also fine; canvas is fastest for larger data
    bind: CTRL_SEL         //  this puts the Year/Sex inputs below the chart
    // You can add a `config` block here if you need chart-wide tweaks.
  })
  .then(({ view }) => {
    // optional: reflow logic, hooks, etc., if you need them later
    // view.addSignalListener(...);
  })
  .catch(err => {
    console.error("[butterfly] Failed to render chart:", err);
  });
})();


  // Chart 5: uv map
vegaEmbed("#uvmap", "uvmap.json")
.then(res => {})
.catch(console.error);

// Chart 6: scatter plot
vegaEmbed("#prop_sunscreen_usage", "prop_sunscreen_usage.json")
  .then(res => {})
  .catch(console.error);