// Diego Velasco Bayón, portfolio interactions (no build, vanilla JS)

(() => {
  "use strict";

  // Independent sections: show one panel at a time, routed by the URL hash.
  const panels = Array.from(document.querySelectorAll(".panel"));
  const links = Array.from(document.querySelectorAll(".nav a"));
  const ids = panels.map((p) => p.id);

  function show(id) {
    if (!ids.includes(id)) id = ids[0];
    panels.forEach((p) => p.classList.toggle("active", p.id === id));
    links.forEach((a) => a.classList.toggle("active", a.dataset.section === id));
  }

  show((location.hash || "").replace("#", "") || ids[0]);
  window.addEventListener("hashchange", () => show(location.hash.replace("#", "")));
})();
