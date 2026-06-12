/* =========================================================
   IK-BOEKJES — gedeelde site-logica
   Injecteert header, footer en de stijl-switcher op elke pagina,
   en onthoudt het gekozen thema + lettertype via localStorage.
   ========================================================= */
(function () {
  var THEMES = {
    klei:     { name: "Klei",     dots: ["#C0683F", "#E2A07C", "#F5E2D4"] },
    confetti: { name: "Confetti", dots: ["#F3585B", "#FBB13C", "#3AA0E3", "#4FB477"] },
    mist:     { name: "Mist",     dots: ["#6E7AA8", "#C6A8C9", "#E1E5F0"] }
  };
  var FONTS = { serif: "Elegant", rond: "Rond" };
  var root = document.documentElement;

  /* ---- opgeslagen voorkeuren toepassen ---- */
  function saved(key, fallback) {
    try { return localStorage.getItem(key) || fallback; } catch (e) { return fallback; }
  }
  var theme = saved("sass-theme", "klei");
  var font  = saved("sass-font", "serif");
  if (!THEMES[theme]) theme = "klei";
  if (!FONTS[font]) font = "serif";
  root.setAttribute("data-theme", theme);
  root.setAttribute("data-font", font);

  /* ---- navigatie ---- */
  var NAV = [
    { href: "index.html",       label: "Home" },
    { href: "product.html",     label: "Het ik-boekje" },
    { href: "inspiratie.html",  label: "Inspiratie" },
    { href: "over-ons.html",    label: "Over ons" },
    { href: "contact.html",     label: "Contact" },
    // TIJDELIJK: toegang tot de losse SEO-pagina's. Later weghalen uit dit menu.
    { href: "seo.html",         label: "⚙ SEO", temp: true }
  ];
  var current = (location.pathname.split("/").pop() || "index.html").toLowerCase();
  if (current === "") current = "index.html";

  function navLinks() {
    return NAV.map(function (n) {
      var cls = [];
      if (n.href === current) cls.push("active");
      if (n.temp) cls.push("nav-temp");
      var c = cls.length ? ' class="' + cls.join(" ") + '"' : "";
      return '<a href="' + n.href + '"' + c + ">" + n.label + "</a>";
    }).join("");
  }

  /* ---- header ---- */
  var header = document.createElement("header");
  header.className = "site";
  header.innerHTML =
    '<div class="wrap nav">' +
      '<a class="brand" href="index.html"><span class="logomark">✿</span><span class="ph">[ merknaam ]</span></a>' +
      '<nav class="nav-links">' + navLinks() + "</nav>" +
      '<div class="nav-cta">' +
        '<a href="inspiratie.html" class="btn btn--ghost btn--small">Inspiratie</a>' +
        '<a href="product.html" class="btn btn--small">Bekijk het boekje</a>' +
      "</div>" +
    "</div>";
  document.body.insertBefore(header, document.body.firstChild);

  /* ---- footer ---- */
  var footer = document.createElement("footer");
  footer.className = "site";
  footer.innerHTML =
    '<div class="wrap">' +
      '<div class="foot-grid">' +
        "<div>" +
          '<a class="brand" href="index.html" style="margin-bottom:14px"><span class="logomark">✿</span><span class="ph">[ merknaam ]</span></a>' +
          "<p>Stoffen ik-boekjes die spannende eerste momenten verzachten. Voor de allerkleinsten, met liefde gemaakt.</p>" +
        "</div>" +
        "<div><h4>Shop</h4>" +
          '<a href="product.html">Het ik-boekje</a>' +
          '<a href="product.html">Specificaties</a>' +
          '<a href="contact.html">Veelgestelde vragen</a>' +
        "</div>" +
        "<div><h4>Ontdek</h4>" +
          '<a href="inspiratie.html">Inspiratie &amp; tips</a>' +
          '<a href="over-ons.html">Over ons</a>' +
          '<a href="contact.html">Contact</a>' +
        "</div>" +
        "<div><h4>Nieuwsbrief</h4>" +
          "<p style=\"margin-bottom:12px\">Tips voor spannende eerste momenten.</p>" +
          '<form class="news" onsubmit="return false">' +
            '<input type="email" placeholder="Je e-mailadres" aria-label="E-mailadres" />' +
            '<button class="btn btn--small" type="submit">Aanmelden</button>' +
          "</form>" +
        "</div>" +
      "</div>" +
      '<div class="foot-bottom">' +
        "<span>© 2026 [ merknaam ] · KvK 00000000</span>" +
        "<span>Concept — werknaam, huisstijl in ontwikkeling</span>" +
      "</div>" +
    "</div>";
  document.body.appendChild(footer);

  /* ---- stijl-switcher ---- */
  function swatchBtn(key) {
    var t = THEMES[key];
    var dots = t.dots.map(function (c) { return '<i style="background:' + c + '"></i>'; }).join("");
    var pressed = (key === theme) ? "true" : "false";
    return '<button class="sw" data-theme="' + key + '" aria-pressed="' + pressed + '">' +
      '<span class="dots">' + dots + "</span><small>" + t.name + "</small></button>";
  }
  function fontBtn(key, label, cls) {
    var pressed = (key === font) ? "true" : "false";
    return '<button class="fontbtn ' + (cls || "") + '" data-font="' + key + '" aria-pressed="' + pressed + '">' +
      label + " <b>Aa</b></button>";
  }

  var toggle = document.createElement("button");
  toggle.className = "sw-toggle";
  toggle.setAttribute("aria-label", "Open stijl-switcher");
  toggle.textContent = "✨";

  var sw = document.createElement("aside");
  sw.className = "switcher collapsed";
  sw.setAttribute("aria-label", "Stijl-switcher");
  sw.innerHTML =
    "<h4>Stijl-switcher</h4>" +
    '<div class="sub">Je keuze loopt mee op alle pagina\'s.</div>' +
    '<div class="sw-label">Kleurpalet</div>' +
    '<div class="swatches">' + swatchBtn("klei") + swatchBtn("confetti") + swatchBtn("mist") + "</div>" +
    '<div class="sw-label">Lettertype</div>' +
    '<div class="fontrow">' + fontBtn("serif", "Elegant") + fontBtn("rond", "Rond", "rnd") + "</div>" +
    '<div class="current-pill">Nu: <b id="curTheme">' + THEMES[theme].name + "</b> · <b id=\"curFont\">" + FONTS[font] + "</b></div>";

  document.body.appendChild(toggle);
  document.body.appendChild(sw);

  function setTheme(t) {
    theme = t; root.setAttribute("data-theme", t);
    try { localStorage.setItem("sass-theme", t); } catch (e) {}
    sw.querySelectorAll(".sw").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.theme === t); });
    document.getElementById("curTheme").textContent = THEMES[t].name;
  }
  function setFont(f) {
    font = f; root.setAttribute("data-font", f);
    try { localStorage.setItem("sass-font", f); } catch (e) {}
    sw.querySelectorAll(".fontbtn").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.font === f); });
    document.getElementById("curFont").textContent = FONTS[f];
  }
  sw.querySelectorAll(".sw").forEach(function (b) { b.addEventListener("click", function () { setTheme(b.dataset.theme); }); });
  sw.querySelectorAll(".fontbtn").forEach(function (b) { b.addEventListener("click", function () { setFont(b.dataset.font); }); });

  toggle.addEventListener("click", function () {
    sw.classList.toggle("collapsed");
    toggle.style.opacity = sw.classList.contains("collapsed") ? "1" : "0";
  });
  // op de eerste pagina-load even openklappen zodat mensen 'm zien
  if (!saved("sass-switcher-seen", "")) {
    window.addEventListener("load", function () {
      setTimeout(function () { sw.classList.remove("collapsed"); toggle.style.opacity = "0"; }, 600);
      try { localStorage.setItem("sass-switcher-seen", "1"); } catch (e) {}
    });
  }
})();
