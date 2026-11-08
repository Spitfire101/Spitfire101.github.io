// Diego Velasco Bayón, portfolio interactions (no build, vanilla JS)

(() => {
  "use strict";

  // Independent sections: show one panel at a time, routed by the URL hash.
  // Panel ids are "panel-<name>" while the hash is "#<name>", so the browser never
  // fragment-scrolls to a panel (that used to load deep links pre-scrolled).
  const panels = Array.from(document.querySelectorAll(".panel"));
  const links = Array.from(document.querySelectorAll(".nav a"));
  const names = panels.map((p) => p.dataset.section);

  if ("scrollRestoration" in history) history.scrollRestoration = "manual";

  function show(name, fromUser) {
    if (!names.includes(name)) name = names[0];
    panels.forEach((p) => p.classList.toggle("active", p.dataset.section === name));
    links.forEach((a) => {
      const on = a.dataset.section === name;
      a.classList.toggle("active", on);
      if (on) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
    if (fromUser) {
      const heading = document.querySelector(".panel.active .eyebrow");
      if (heading) heading.focus({ preventScroll: true });
    }
  }

  show(location.hash.slice(1));

  window.addEventListener("hashchange", () => show(location.hash.slice(1), true));
})();
