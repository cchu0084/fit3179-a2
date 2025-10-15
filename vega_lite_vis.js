// Chart 1: Bar chart 
vegaEmbed("#skin_cancer_asr", "skin_cancer_asr.json", { actions: false })
  .then(res => {})
  .catch(console.error);

// Chart 2: Line chart 
vegaEmbed("#melanoma_trend", "melanoma_trend.json", { actions: false }).then(function(result) {
  const view = result.view;
  let currentYear = 1982;

  function animate() {
    if (currentYear <= 2020) {
      view.signal("yearFilter", currentYear).run();
      currentYear++;
      setTimeout(animate, 450); 
    } else {
      
      currentYear = 1982;
      setTimeout(animate, 4000); 
    }
  }

  animate();
}).catch(console.error);

// Chart 3: Lollipop chart
vegaEmbed("#top_cancer_types", "top_cancer_types.json", { actions: false })
  .then(res => {})
  .catch(console.error);

// Chart 4: Butterfly chart
(() => {
  const SPEC_URL = "incidence_mortality_butterfly_chart.json";
  const CHART_SEL = "#incidence_mortality_butterfly_chart";
  const CTRL_SEL  = "#incidence_mortality_butterfly_chart_controls";

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

  vegaEmbed(CHART_SEL, SPEC_URL, {
    actions: false,
    renderer: "canvas",
    bind: CTRL_SEL
  })
  .then(({ view }) => {
   
  })
  .catch(err => {
    console.error("[butterfly] Failed to render chart:", err);
  });
})();

// Chart 5: UV map
vegaEmbed("#uvmap", "uvmap.json", { actions: false })
  .then(res => {})
  .catch(console.error);

// Chart 6: Scatter plot
vegaEmbed("#prop_sunscreen_usage", "prop_sunscreen_usage.json", { actions: false })
  .then(res => {})
  .catch(console.error);
