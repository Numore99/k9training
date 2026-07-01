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
  var ICON_PLAY = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>';
  var ICON_TAP = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 11V6a1.5 1.5 0 013 0v5"/><path d="M12 11V4.5a1.5 1.5 0 013 0V11"/><path d="M15 11V6.5a1.5 1.5 0 013 0V15a5 5 0 01-5 5h-2.5a4 4 0 01-3-1.35l-3-3.4a1.5 1.5 0 012.2-2l1.8 1.75V8a1.5 1.5 0 013 0v3"/></svg>';

  function renderServices() {
    var host = $("#js-services");
    if (!host || !DATA.services) return;
    host.innerHTML = DATA.services.map(function (s, idx) {
      var inc = (s.includes || []).map(function (i) { return "<span>" + esc(i) + "</span>"; }).join("");
      var note = s.note ? '<p class="serv-note">' + esc(s.note) + "</p>" : "";
      var price = s.price
        ? '<div class="serv-price"><strong>' + esc(s.price) + '</strong>' +
          (s.priceDetail ? '<span>' + esc(s.priceDetail) + '</span>' : '') +
          '</div>'
        : "";
      var priceOptions = (s.priceOptions || []).map(function (p) {
        return '<div class="serv-price-row">' +
          '<div><b>' + esc(p.label) + '</b>' + (p.detail ? '<span>' + esc(p.detail) + '</span>' : '') + '</div>' +
          '<strong>' + esc(p.value) + '</strong>' +
          '</div>';
      }).join("");
      var priceTable = priceOptions ? '<div class="serv-price-table">' + priceOptions + '</div>' : "";
      var details = s.details ? '<p class="serv-detail-text">' + esc(s.details) + "</p>" : "";
      var detailList = (s.detailList || []).map(function (i) { return "<li>" + esc(i) + "</li>"; }).join("");
      var detailBlock = details || detailList
        ? '<div class="serv-detail" id="serv-detail-' + idx + '">' +
          details +
          (detailList ? '<ul>' + detailList + "</ul>" : "") +
          "</div>"
        : "";
      var msg = "Olá, tenho interesse no serviço: " + esc(s.name) + ". Quero mais informações.";
      // aceita "videos" (lista) e também o antigo "video" (texto), por compatibilidade
      var vids = (s.videos || (s.video ? [s.video] : [])).filter(Boolean);
      var paths = vids.map(function (v) { return "assets/video/serv/" + v; });
      var videoBtn = vids.length
        ? '<button type="button" class="btn btn-ghost serv-video" ' +
          'data-serv-video="' + esc(paths.join("|")) + '" ' +
          'data-serv-title="' + esc(s.name) + '" data-cursor="ver vídeo">' +
          ICON_PLAY + (vids.length > 1 ? "Ver vídeos" : "Ver vídeo") + "</button>"
        : "";
      return '<article class="serv-card reveal" data-service-card data-cursor="detalhes" tabindex="0" role="button" aria-expanded="false" aria-controls="serv-detail-' + idx + '">' +
        "<h3>" + esc(s.name) + "</h3>" +
        price +
        priceTable +
        '<p class="serv-for"><b>Para:</b> ' + esc(s.forWho) + "</p>" +
        '<div class="serv-inc">' + inc + "</div>" +
        note +
        detailBlock +
        '<span class="serv-more">Ver explicação</span>' +
        '<div class="serv-actions">' +
        videoBtn +
        '<button class="btn btn-fire" data-wa="' + encodeURIComponent(msg) + '">' + esc(s.cta) + "</button>" +
        "</div>" +
        "</article>";
    }).join("");
  }

  function wireServiceCards() {
    $all("[data-service-card]").forEach(function (card) {
      function toggle() {
        var open = card.classList.toggle("open");
        card.setAttribute("aria-expanded", open ? "true" : "false");
        var more = card.querySelector(".serv-more");
        if (more) more.textContent = open ? "Ocultar explicação" : "Ver explicação";
      }
      card.addEventListener("click", function (ev) {
        if (ev.target.closest("button,a")) return;
        toggle();
      });
      card.addEventListener("keydown", function (ev) {
        if (ev.key !== "Enter" && ev.key !== " ") return;
        ev.preventDefault();
        toggle();
      });
    });
  }

  // Lightbox de vídeo para os serviços. Cria um único modal reaproveitável.
  function wireServiceVideos() {
    var triggers = $all("[data-serv-video]");
    if (!triggers.length) return;

    var box = document.createElement("div");
    box.className = "vbox";
    box.setAttribute("aria-hidden", "true");
    box.innerHTML =
      '<div class="vbox-backdrop" data-vbox-close></div>' +
      '<div class="vbox-inner" role="dialog" aria-modal="true" aria-label="Vídeo do serviço">' +
      '<button type="button" class="vbox-close" data-vbox-close aria-label="Fechar vídeo">&times;</button>' +
      '<h4 class="vbox-title"></h4>' +
      '<div class="vbox-stage">' +
      '<video class="vbox-video" controls playsinline preload="metadata"></video>' +
      '<div class="vbox-soon">' + ICON_PLAY + "<span>Vídeo em breve</span></div>" +
      "</div>" +
      '<div class="vbox-tabs"></div>' +
      "</div>";
    document.body.appendChild(box);

    var video = box.querySelector(".vbox-video");
    var title = box.querySelector(".vbox-title");
    var tabs = box.querySelector(".vbox-tabs");
    var current = [];

    video.addEventListener("error", function () {
      box.classList.add("no-video");
      video.removeAttribute("src");
    });
    video.addEventListener("loadeddata", function () {
      box.classList.remove("no-video");
    });

    function load(i) {
      if (!current[i]) return;
      box.classList.remove("no-video");
      $all(".vbox-tab", tabs).forEach(function (t) {
        t.classList.toggle("active", Number(t.getAttribute("data-i")) === i);
      });
      video.setAttribute("src", current[i]);
      video.load();
      var p = video.play();
      if (p && p.catch) p.catch(function () {});
    }
    function open(srcs, label) {
      current = (srcs || "").split("|").filter(Boolean);
      title.textContent = label || "";
      if (current.length > 1) {
        tabs.style.display = "";
        tabs.innerHTML = current.map(function (_, i) {
          return '<button type="button" class="vbox-tab' + (i === 0 ? " active" : "") +
            '" data-i="' + i + '">Vídeo ' + (i + 1) + "</button>";
        }).join("");
      } else {
        tabs.style.display = "none";
        tabs.innerHTML = "";
      }
      box.classList.add("open");
      box.setAttribute("aria-hidden", "false");
      document.body.classList.add("vbox-lock");
      load(0);
    }
    function close() {
      box.classList.remove("open");
      box.setAttribute("aria-hidden", "true");
      document.body.classList.remove("vbox-lock");
      try { video.pause(); } catch (e) {}
      video.removeAttribute("src");
      video.load();
    }

    tabs.addEventListener("click", function (e) {
      var t = e.target.closest(".vbox-tab");
      if (t) load(Number(t.getAttribute("data-i")));
    });

    triggers.forEach(function (btn) {
      btn.addEventListener("click", function (e) {
        e.stopPropagation();
        open(btn.getAttribute("data-serv-video"), btn.getAttribute("data-serv-title"));
      });
    });
    $all("[data-vbox-close]", box).forEach(function (el) {
      el.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && box.classList.contains("open")) close();
    });
  }

  function renderPlans() {
    var host = $("#js-plans");
    if (!host) return;

    function planCard(p, shouldReveal) {
      var price = p.price
        ? '<div class="serv-price plan-price"><strong>' + esc(p.price) + '</strong>' +
          (p.priceDetail ? '<span>' + esc(p.priceDetail) + '</span>' : '') +
          '</div>'
        : "";
      var priceOptions = (p.priceOptions || []).map(function (opt) {
        return '<div class="serv-price-row">' +
          '<div><b>' + esc(opt.label) + '</b>' + (opt.detail ? '<span>' + esc(opt.detail) + '</span>' : '') + '</div>' +
          '<strong>' + esc(opt.value) + '</strong>' +
          '</div>';
      }).join("");
      var priceTable = priceOptions ? '<div class="serv-price-table plan-price-table">' + priceOptions + '</div>' : "";
      var msg = "Olá, quero informações sobre o plano: " + p.name + ".";
      var revealClass = shouldReveal ? " reveal" : " reveal force";
      return '<article class="plan' + revealClass + '" data-cursor="WhatsApp">' +
        "<h3>" + esc(p.name) + "</h3>" +
        '<p class="sum">' + esc(p.summary) + "</p>" +
        '<p class="ideal">' + esc(p.ideal) + "</p>" +
        price +
        priceTable +
        '<button class="btn btn-wa" data-wa="' + encodeURIComponent(msg) + '">' + ICON_WA + "Contratar</button>" +
        "</article>";
    }

    function cards(plans, shouldReveal) {
      return '<div class="plans">' + plans.map(function (p) {
        return planCard(p, shouldReveal);
      }).join("") + "</div>";
    }

    var groups = DATA.planGroups || (DATA.plans ? [{
      id: "planos",
      name: "Planos",
      description: "Escolha o melhor formato para começar.",
      plans: DATA.plans
    }] : []);
    if (!groups.length) return;

    if (groups.length === 1) {
      host.innerHTML = cards(groups[0].plans, true);
      return;
    }

    host.classList.add("plan-shell");
    host.innerHTML = '<div class="plan-tabs" role="tablist" aria-label="Categorias de planos">' +
      groups.map(function (group, i) {
        return '<button type="button" class="plan-tab' + (i === 0 ? " active" : "") + '" data-plan-group="' + i + '" role="tab" aria-selected="' + (i === 0 ? "true" : "false") + '">' +
          '<span class="plan-tab-hint" aria-hidden="true">' + ICON_TAP + 'Clique aqui</span>' +
          '<strong>' + esc(group.name) + '</strong>' +
          '<span>' + esc(group.description || "") + '</span>' +
          '</button>';
      }).join("") +
      '</div><div class="plan-panel" data-plan-panel></div>';

    var panel = host.querySelector("[data-plan-panel]");
    var tabs = $all("[data-plan-group]", host);
    function setGroup(i, shouldReveal) {
      var group = groups[i];
      if (!group || !panel) return;
      panel.innerHTML = cards(group.plans, shouldReveal);
      tabs.forEach(function (tab) {
        var active = Number(tab.getAttribute("data-plan-group")) === i;
        tab.classList.toggle("active", active);
        tab.setAttribute("aria-selected", active ? "true" : "false");
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        setGroup(Number(tab.getAttribute("data-plan-group")), false);
      });
    });
    setGroup(0, true);
  }

  function renderGallery() {
    var galleries = $all("[data-gallery]");
    if (!galleries.length) return;
    galleries.forEach(function (gallery) {
      // escolhe a fonte: data-gallery="fotos" usa fotos (sem vídeo), senão vídeos
      var isFotos = gallery.getAttribute("data-gallery") === "fotos";
      var data = isFotos ? DATA.galleryFotos : DATA.gallery;
      if (!data) return;
      var items = data.map(function (g) {
        var base = g.img.replace(/\.(webp|jpg|jpeg|png)$/i, "");
        var hasVideo = !isFotos && g.video !== false;
        var imStyle = "";
        if (g.fit) imStyle += "object-fit:" + esc(g.fit) + ";";
        if (g.pos) imStyle += "object-position:" + esc(g.pos) + ";";
        var im = '<img src="assets/img/' + esc(g.img) + '" alt="' + esc(g.alt) + '" loading="lazy" ' +
                 (imStyle ? 'style="' + imStyle + '" ' : "") +
                 'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\';">';
        var ph = '<div class="gal-ph" style="display:none">' + ICON_PAW + "<span>" + esc(g.alt) + "</span></div>";
        var vid = hasVideo
          ? '<video class="gal-video" muted loop playsinline preload="none" ' +
            'poster="assets/img/' + esc(g.img) + '" data-src="assets/video/gal/' + esc(base) + '.mp4"></video>' +
            '<span class="gal-badge"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>Vídeo</span>' +
            '<button type="button" class="gal-play" aria-label="Reproduzir vídeo">' + ICON_PLAY + '</button>'
          : "";
        return '<figure class="gal-item" data-has-video="' + (hasVideo ? "1" : "0") + '">' +
               im + ph + vid +
               '<figcaption class="gal-cap">' + esc(g.alt) + "</figcaption></figure>";
      }).join("");
      var track = gallery.querySelector(".gallery-track");
      var dots = gallery.querySelector(".gallery-dots");
      if (track) track.innerHTML = items;
      if (dots) {
        dots.innerHTML = data.map(function (_, i) {
          return '<button type="button" aria-label="Ir para a foto ' + (i + 1) + '"></button>';
        }).join("");
      }
    });
  }

  // Carrossel em fluxo contínuo (marquee): as fotos deslizam sozinhas para a
  // esquerda. O usuário pode pausar (passar o mouse) e arrastar para os dois
  // lados, com mouse ou no celular. Loop sem salto via clones dos itens.
  function wireGalleryCarousel() {
    $all("[data-gallery]").forEach(function (gallery) {
      var viewport = gallery.querySelector(".gallery-viewport");
      var track = gallery.querySelector(".gallery-track");
      var prev = gallery.querySelector(".gallery-prev");
      var next = gallery.querySelector(".gallery-next");
      var dotsWrap = gallery.querySelector(".gallery-dots");
      if (!viewport || !track) return;

      var originals = $all(".gal-item", track);
      if (originals.length <= 1) return;

      // pontos não fazem sentido num fluxo contínuo
      if (dotsWrap) dotsWrap.style.display = "none";
      // desliga o "snap" e a rolagem suave para o movimento ser fluido
      viewport.style.scrollSnapType = "none";
      viewport.style.scrollBehavior = "auto";

      // clona todos os itens para o loop ser contínuo (sem salto)
      originals.forEach(function (it) {
        var c = it.cloneNode(true);
        c.setAttribute("aria-hidden", "true");
        c.classList.add("is-clone");
        track.appendChild(c);
      });

      var SPEED = 0.05;       // px por milissegundo (~50px/s) — fotos para a esquerda
      var prefersReduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      var paused = prefersReduced;
      var lastT = 0;
      var cw = 0; // largura de um ciclo (todos os originais + gaps)

      function recalc() {
        var clone = track.querySelector(".gal-item.is-clone");
        cw = clone ? clone.offsetLeft : track.scrollWidth / 2;
      }
      // mantém o scroll dentro de [0, cw) → gira nos dois sentidos sem salto
      function wrap() {
        if (cw <= 0) return;
        var sl = viewport.scrollLeft;
        if (sl >= cw) viewport.scrollLeft = sl - cw;
        else if (sl < 0) viewport.scrollLeft = sl + cw;
      }

      function frame(t) {
        if (!lastT) lastT = t;
        var dt = t - lastT;
        lastT = t;
        if (dt > 50) dt = 50; // evita salto após aba em segundo plano
        if (cw <= 0) recalc();
        if (!paused) {
          viewport.scrollLeft += SPEED * dt;
          wrap();
        }
        window.requestAnimationFrame(frame);
      }

      function pause() {
        paused = true;
      }
      function resumeSoon() {
        if (prefersReduced) return;
        lastT = 0;       // reinicia o relógio para não dar salto
        paused = false;  // volta a correr na hora que solta
      }

      // ---------- ARRASTAR COM MOUSE ----------
      var down = false, startX = 0, startScroll = 0, moved = false;
      viewport.addEventListener("pointerdown", function (e) {
        if (e.pointerType === "touch") return; // toque usa rolagem nativa
        down = true; moved = false;
        startX = e.clientX; startScroll = viewport.scrollLeft;
        pause();
      });
      viewport.addEventListener("pointermove", function (e) {
        if (!down) return;
        var dx = e.clientX - startX;
        if (Math.abs(dx) > 4) {
          if (!moved) { moved = true; viewport.classList.add("dragging"); viewport.setPointerCapture(e.pointerId); }
          e.preventDefault();
          viewport.scrollLeft = startScroll - dx;
          wrap();
        }
      });
      function endDrag() {
        if (!down) return;
        down = false;
        viewport.classList.remove("dragging");
        resumeSoon();
      }
      viewport.addEventListener("pointerup", endDrag);
      viewport.addEventListener("pointercancel", endDrag);

      // passar o mouse por cima NÃO pausa; só pausa segurando o clique.
      // se o ponteiro sair durante o arrasto, encerra o arrasto com segurança.
      viewport.addEventListener("pointerleave", function (e) {
        if (e.pointerType === "touch") return;
        endDrag();
      });

      // ---------- TOQUE (celular): rolagem nativa nos dois sentidos ----------
      viewport.addEventListener("touchstart", pause, { passive: true });
      viewport.addEventListener("touchend", resumeSoon, { passive: true });
      viewport.addEventListener("touchcancel", resumeSoon, { passive: true });

      // roda do mouse / trackpad
      viewport.addEventListener("wheel", function () { pause(); resumeSoon(); }, { passive: true });
      // mantém o loop ao rolar nativamente (toque/trackpad)
      viewport.addEventListener("scroll", function () { window.requestAnimationFrame(wrap); }, { passive: true });

      // ---------- SETAS: empurra um item e segue o fluxo ----------
      function nudge(dir) {
        var styles = getComputedStyle(track);
        var gap = parseFloat(styles.columnGap || styles.gap || 0) || 0;
        var stepPx = originals[0].getBoundingClientRect().width + gap;
        pause();
        viewport.scrollLeft += dir * stepPx;
        wrap();
        resumeSoon();
      }
      if (prev) { prev.disabled = false; prev.addEventListener("click", function () { nudge(-1); }); }
      if (next) { next.disabled = false; next.addEventListener("click", function () { nudge(1); }); }

      // pausa quando a aba não está visível
      document.addEventListener("visibilitychange", function () {
        if (document.hidden) paused = true;
        else if (!prefersReduced) { lastT = 0; paused = false; }
      });

      window.addEventListener("resize", recalc);
      window.addEventListener("load", recalc);
      recalc();
      window.requestAnimationFrame(frame);
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

  function heroVideoPan() {
    var v = document.querySelector(".hero-video");
    if (!v) return;
    // o vídeo é vertical; em telas largas (PC) recorta mais, então
    // usamos pontos de enquadramento diferentes para manter o cão visível
    function isWide() { return window.innerWidth > 760; }
    // [tempo do clipe (0-1), posição Y] — desktop e mobile
    var keysWide   = [[0, 30], [0.55, 40], [0.80, 58], [1, 62]];
    var keysMobile = [[0, 18], [0.55, 30], [0.80, 50], [1, 54]];
    function posAt(t, keys) {
      for (var i = 1; i < keys.length; i++) {
        if (t <= keys[i][0]) {
          var a = keys[i - 1], b = keys[i];
          var r = (t - a[0]) / (b[0] - a[0] || 1);
          return a[1] + (b[1] - a[1]) * r;
        }
      }
      return keys[keys.length - 1][1];
    }
    function tick() {
      if (v.duration && !v.paused) {
        // em PC o vídeo é mostrado inteiro (centralizado), não precisa de pan
        if (isWide()) {
          v.style.objectPosition = "center center";
        } else {
          var t = (v.currentTime % v.duration) / v.duration;
          v.style.objectPosition = "61% " + posAt(t, keysMobile).toFixed(1) + "%";
        }
      }
      requestAnimationFrame(tick);
    }
    v.addEventListener("playing", function () {
      v.style.animation = "none"; // desliga o fallback CSS quando o vídeo roda
    });
    requestAnimationFrame(tick);
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
    }, { threshold: 0.24, rootMargin: "-20% 0px -18% 0px" });
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
  safe(wireServiceCards, "service-cards");
  safe(wireServiceVideos, "service-videos");
  safe(renderPlans, "plans");
    safe(renderGallery, "gallery");
    safe(wireGalleryCarousel, "gallery-carousel");
    safe(bindBrand, "brand");
    safe(wireWAButtons, "wa-buttons");
    safe(wireForm, "form");
    safe(splash, "splash");
    safe(heroVideoPan, "hero-pan");
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
