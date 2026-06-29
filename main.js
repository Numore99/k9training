/* =====================================================================
   K9 TRAINING - main.js
   JS simples, sem módulos, em IIFE. Apenas melhora a experiência:
   se algo falhar, o conteúdo crítico já está no HTML.
   ===================================================================== */
(function () {
  "use strict";

  var DATA = (window.__K9TRAINING__) || {};
  var BRAND = DATA.brand || {};

  try { document.documentElement.classList.remove("no-js"); } catch (e) {}

  function safe(fn, name) {
    try { fn(); } catch (err) {
      if (window.console && console.warn) console.warn("[K9] init falhou:", name, err);
    }
  }
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $all(sel, ctx) { return Array.prototype.slice.call((ctx || document).querySelectorAll(sel)); }
  function esc(s) { return String(s == null ? "" : s); }

  function waNumber() { return esc(BRAND.whatsapp).replace(/[^0-9]/g, ""); }
  function waURL(msg) {
    var n = waNumber();
    var base = n ? ("https://wa.me/" + n) : "https://wa.me/";
    return base + (msg ? ("?text=" + encodeURIComponent(msg)) : "");
  }
  function openWA(msg) {
    var w = window.open(waURL(msg), "_blank");
    if (!w) window.location.href = waURL(msg);
  }

  var ICON_WA = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 018.413 3.488 11.82 11.82 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.477-.708zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>';
  var ICON_PAW = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="6" cy="9" r="2"/><circle cx="10.5" cy="6" r="2"/><circle cx="15" cy="6" r="2"/><circle cx="18" cy="9" r="2"/><path d="M8 16c0-2 2-4 4-4s4 2 4 4 1.5 3-1 3.5c-1.2.24-2-.5-3-.5s-1.8.74-3 .5c-2.5-.5-1-1.5-1-3.5z"/></svg>';

  function renderServices() {
    var host = $("#js-services");
    if (!host || !DATA.services) return;
    host.innerHTML = DATA.services.map(function (s) {
      var inc = (s.includes || []).map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("");
      var note = s.note ? '<p class="serv-note">' + esc(s.note) + "</p>" : "";
      var msg = "Olá, tenho interesse no serviço: " + esc(s.name) + ". Quero mais informações.";
      return '<article class="serv-card reveal" data-cursor="WhatsApp">' +
        '<span class="serv-code">' + esc(s.code) + ' / Serviço</span>' +
        "<h3>" + esc(s.name) + "</h3>" +
        '<p class="serv-for"><b style="color:#cdd2d6">Para:</b> ' + esc(s.forWho) + "</p>" +
        '<div class="serv-inc">' + inc + "</div>" +
        note +
        '<button class="btn btn-fire" data-wa="' + encodeURIComponent(msg) + '">' + esc(s.cta) + "</button>" +
        "</article>";
    }).join("");
  }

  function renderPlans() {
    var host = $("#js-plans");
    if (!host || !DATA.plans) return;
    host.innerHTML = DATA.plans.map(function (p, i) {
      var feat = i === 1 ? " feat" : "";
      var msg = "Olá, quero informações sobre o " + esc(p.name) + ".";
      return '<article class="plan' + feat + ' reveal" data-cursor="WhatsApp">' +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="sum">' + esc(p.summary) + "</p>" +
        '<p class="ideal">' + esc(p.ideal) + "</p>" +
        '<p class="price">' + esc(p.price) + "</p>" +
        '<button class="btn btn-wa" data-wa="' + encodeURIComponent(msg) + '">' + ICON_WA + "Consultar</button>" +
        "</article>";
    }).join("");
  }

  function renderGallery() {
    var galleries = $all("[data-gallery]");
    if (!galleries.length || !DATA.gallery) return;
    galleries.forEach(function (gallery) {
      var items = DATA.gallery.map(function (g) {
        var im = '<img src="assets/img/' + esc(g.img) + '" alt="' + esc(g.alt) + '" loading="lazy" ' +
                 'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">';
        return '<figure class="gal-item">' + im +
               '<div class="gal-ph" style="display:none">' + ICON_PAW + "<span>" + esc(g.alt) + "</span></div>" +
               '<figcaption class="gal-cap">' + esc(g.alt) + "</figcaption></figure>";
      }).join("");
      var track = gallery.querySelector(".gallery-track");
      var dots = gallery.querySelector(".gallery-dots");
      if (track) track.innerHTML = items;
      if (dots) {
        dots.innerHTML = DATA.gallery.map(function (_, i) {
          return '<button type="button" aria-label="Ir para a foto ' + (i + 1) + '"></button>';
        }).join("");
      }
    });
  }

  function wireGalleryCarousel() {
    $all("[data-gallery]").forEach(function (gallery) {
      var viewport = gallery.querySelector(".gallery-viewport");
      var track = gallery.querySelector(".gallery-track");
      var prev = gallery.querySelector(".gallery-prev");
      var next = gallery.querySelector(".gallery-next");
      var dots = $all(".gallery-dots button", gallery);
      if (!viewport || !track) return;

      function items() { return $all(".gal-item", track); }
      function step() {
        var first = items()[0];
        if (!first) return viewport.clientWidth;
        var styles = getComputedStyle(track);
        var gap = parseFloat(styles.columnGap || styles.gap || 0) || 0;
        return first.getBoundingClientRect().width + gap;
      }
      function index() {
        var s = step();
        return s ? Math.round(viewport.scrollLeft / s) : 0;
      }
      function go(i) {
        var count = items().length;
        if (!count) return;
        var target = Math.max(0, Math.min(i, count - 1));
        viewport.scrollTo({ left: target * step(), behavior: "smooth" });
      }
      function update() {
        var active = index();
        dots.forEach(function (dot, i) {
          dot.classList.toggle("active", i === active);
          dot.setAttribute("aria-current", i === active ? "true" : "false");
        });
        if (prev) prev.disabled = active <= 0;
        if (next) next.disabled = active >= items().length - 1;
      }

      if (prev) prev.addEventListener("click", function () { go(index() - 1); });
      if (next) next.addEventListener("click", function () { go(index() + 1); });
      dots.forEach(function (dot, i) { dot.addEventListener("click", function () { go(i); }); });
      viewport.addEventListener("scroll", function () { window.requestAnimationFrame(update); }, { passive: true });
      window.addEventListener("resize", update);

      var down = false, startX = 0, startScroll = 0;
      viewport.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "touch") return;
        down = true;
        startX = e.clientX;
        startScroll = viewport.scrollLeft;
        viewport.classList.add("dragging");
        viewport.setPointerCapture(e.pointerId);
      });
      viewport.addEventListener("pointermove", function (e) {
        if (!down) return;
        e.preventDefault();
        viewport.scrollLeft = startScroll - (e.clientX - startX);
      });
      function stopDrag() {
        if (!down) return;
        down = false;
        viewport.classList.remove("dragging");
        go(index());
      }
      viewport.addEventListener("pointerup", stopDrag);
      viewport.addEventListener("pointercancel", stopDrag);
      viewport.addEventListener("mouseleave", stopDrag);
      update();
    });
  }

  function bindBrand() {
    $all("[data-brand]").forEach(function (el) {
      var v = BRAND[el.getAttribute("data-brand")];
      if (v) el.textContent = v;
    });
    $all("[data-wa-link]").forEach(function (el) {
      var custom = el.getAttribute("data-wa-msg");
      el.setAttribute("href", waURL(custom || "Olá, quero agendar uma avaliação K9."));
      el.setAttribute("target", "_blank");
      el.setAttribute("rel", "noopener");
    });
    $all("[data-ig-link]").forEach(function (el) {
      if (BRAND.instagram) {
        el.setAttribute("href", "https://instagram.com/" + BRAND.instagram);
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener");
      }
    });
    $all("[data-wa-display]").forEach(function (el) {
      if (BRAND.whatsappDisplay) el.textContent = BRAND.whatsappDisplay;
    });
  }

  function wireWAButtons() {
    document.addEventListener("click", function (e) {
      var t = e.target.closest("[data-wa]");
      if (!t) return;
      e.preventDefault();
      var msg = decodeURIComponent(t.getAttribute("data-wa") || "");
      openWA(msg);
    });
  }

  function wireForm() {
    var form = $("#js-form");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var tpl = (DATA.contact && DATA.contact.waTemplate) ||
        "Olá, quero agendar uma avaliação K9.\nNome: {nombre}\nTelefone: {telefono}\nCão: {perro}\nIdade / raça: {edadraza}\nPrincipal problema: {problema}\nDisponibilidade: {disponibilidad}";
      function val(id) { var f = form.querySelector("#" + id); return f ? f.value.trim() : ""; }
      var nombre = val("f-nombre"), tel = val("f-tel");
      if (!nombre || !tel) {
        var warn = $("#js-form-warn");
        if (warn) warn.style.display = "block";
        return;
      }
      var msg = tpl
        .replace("{nombre}", nombre)
        .replace("{telefono}", tel)
        .replace("{perro}", val("f-perro"))
        .replace("{edadraza}", val("f-edad"))
        .replace("{problema}", val("f-problema"))
        .replace("{disponibilidad}", val("f-dispo"));
      openWA(msg);
    });
  }

  function splash() {
    var sp = $("#js-splash");
    if (!sp) return;
    function hide() { sp.classList.add("hide"); }
    window.addEventListener("load", function () { setTimeout(hide, 600); });
    setTimeout(hide, 2200);
  }

  function reveal() {
    var els = $all(".reveal");
    if (!els.length) return;

    if (!("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("force"); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) en.target.classList.add("in");
        else en.target.classList.remove("in");
      });
    }, { threshold: 0.08, rootMargin: "-8% 0px -8% 0px" });
    els.forEach(function (el) { io.observe(el); });
  }

  function nav() {
    var bar = $("#js-nav");
    if (bar) window.addEventListener("scroll", function () {
      bar.style.background = window.scrollY > 60 ? "rgba(8,10,12,0.95)" : "rgba(8,10,12,0.82)";
    }, { passive: true });

    var burger = $("#js-burger"), menu = $("#js-mobile");
    if (burger && menu) {
      burger.addEventListener("click", function () { menu.classList.toggle("open"); });
      $all("a", menu).forEach(function (a) {
        a.addEventListener("click", function () { menu.classList.remove("open"); });
      });
    }
    $all("[data-top]").forEach(function (el) {
      el.addEventListener("click", function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); });
    });
  }

  function cursor() {
    if (!window.matchMedia || !window.matchMedia("(hover:hover) and (pointer:fine)").matches) return;
    var dot = document.createElement("div"); dot.className = "cursor-dot";
    var lab = document.createElement("div"); lab.className = "cursor-label";
    document.body.appendChild(dot); document.body.appendChild(lab);
    document.documentElement.classList.add("has-cursor");
    var x = 0, y = 0;
    document.addEventListener("mousemove", function (e) {
      x = e.clientX; y = e.clientY;
      dot.style.transform = "translate(" + x + "px," + y + "px) translate(-50%,-50%)";
      lab.style.transform = "translate(" + x + "px," + y + "px) translate(14px,14px)";
    });
    document.addEventListener("mouseover", function (e) {
      var t = e.target.closest("[data-cursor],a,button");
      if (t) {
        dot.classList.add("big");
        var l = t.getAttribute("data-cursor");
        if (l) { lab.textContent = l; lab.classList.add("show"); }
      }
    });
    document.addEventListener("mouseout", function (e) {
      var t = e.target.closest("[data-cursor],a,button");
      if (t) { dot.classList.remove("big"); lab.classList.remove("show"); }
    });
  }

  function year() {
    $all("[data-year]").forEach(function (el) { el.textContent = new Date().getFullYear(); });
  }

  function boot() {
    safe(renderServices, "services");
    safe(renderPlans, "plans");
    safe(renderGallery, "gallery");
    safe(wireGalleryCarousel, "gallery-carousel");
    safe(bindBrand, "brand");
    safe(wireWAButtons, "wa-buttons");
    safe(wireForm, "form");
    safe(splash, "splash");
    safe(nav, "nav");
    safe(cursor, "cursor");
    safe(year, "year");
    safe(reveal, "reveal");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
