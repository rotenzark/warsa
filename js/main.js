/* Warsa — i18n IT/EN, intro "il mesob", stato orari (Europe/Rome),
   barra azioni, reveal, watchdog */
(function () {
  'use strict';

  /* ---------- i18n ---------- */

  var translations = {
    it: {
      skip: 'Salta al contenuto',
      menu: 'Menu',
      nav_mesob: 'Il mesob',
      nav_menu2: 'Il menù',
      nav_room: 'La sala',
      nav_hours: 'Orari e dove',
      book: 'Prenota',
      book_cta: 'Prenota',
      menu_cta: 'Sfoglia il menù digitale',
      menu_cta2: 'Apri il menù digitale',
      menu_short: 'Menù',
      hero_eyebrow: 'Cucina eritrea · Via Melzo 16 — Porta Venezia, Milano',
      hero_sub: 'Uno dei ristoranti storici della cucina eritrea a Milano',
      hero_lead: 'L’injera arriva al centro del tavolo, lo zighinì ci si appoggia sopra, e le posate restano nel cassetto: qui si mangia con le mani, insieme, come ad Asmara.',
      hero_proof: '4,4 su 5 · 1.472 recensioni',
      mesob_kicker: 'Il rito',
      mesob_title: 'Come si mangia da Warsa',
      mesob_sub: 'Niente piatti singoli, niente forchette: la cucina eritrea è un rito collettivo.',
      r1_t: 'L’injera è il piatto',
      r1_p: 'Il pane spugnoso di farina di teff copre il mesob: morbido, leggermente acidulo, raccoglie tutto.',
      r2_t: 'Le mani sono le posate',
      r2_p: 'Si strappa un pezzo di injera, si prende un boccone di zighinì, e la scarpetta comincia dal primo minuto.',
      r3_t: 'Il tavolo è di tutti',
      r3_p: 'Le portate arrivano insieme, al centro: si condivide, si assaggia, si parla. È il contrario del piatto singolo.',
      menu_kicker: 'Dal mesob',
      menu_title: 'I piatti della casa',
      menu_sub: 'I classici della casa — con le varianti vegetariane che in Eritrea sono tradizione, non moda.',
      p1_t: 'Zighinì di manzo',
      p1_p: 'Lo stufato simbolo: carne cotta a lungo nel berberè, il misto di spezie che scalda senza bruciare.',
      p2_t: 'Zighinì di pollo',
      p2_p: 'La variante più gentile, stessa lentezza e stesse spezie.',
      p3_t: 'Zighinì vegetariano',
      p3_p: 'Verdure e legumi al berberè: lenticchie, ceci e l’orto che c’è.',
      p4_t: 'Tibs',
      p4_p: 'Bocconcini di carne saltati con spezie: il piatto di chi ha fretta solo a parole.',
      p5_t: 'Sambusa',
      p5_p: 'Fagottini fritti ripieni di carne o verdure: si comincia da qui.',
      p6_t: 'Injera di teff',
      p6_p: 'Sempre in tavola, perché è la tavola.',
      menu_note: 'Conto tipico: 25–35 € a persona. Il menù completo, coi prezzi del giorno, è sul menù digitale del ristorante.',
      room_kicker: 'Il posto',
      room_title: 'La sala',
      room_sub: 'Colori caldi, tappeti e artigianato tradizionale: trent’anni di Asmara nel cuore di Porta Venezia.',
      room_note: 'Immagini di repertorio (Urbanfile) — in attesa del servizio fotografico ufficiale del locale.',
      banner_line: 'Trent’anni di Asmara, in Via Melzo',
      cap_sala: 'La sala di Warsa',
      cap_zighini: 'Injera con zighinì',
      cap_intagli: 'Paraventi e intagli',
      cap_tibs: 'Tibs con injera',
      cap_mesob: 'Il mesob in tavola',
      cap_sambusa: 'Sambusa',
      cap_tavola: 'La tavola apparecchiata',
      cap_spezie: 'Il berberè, le spezie',
      press: 'Ne hanno scritto',
      hours_kicker: 'Quando',
      hours_title: 'Orari',
      hours_caption: 'Orari di apertura',
      where_kicker: 'Dove',
      mon: 'Lunedì', tue: 'Martedì', wed: 'Mercoledì', thu: 'Giovedì',
      fri: 'Venerdì', sat: 'Sabato', sun: 'Domenica',
      closed: 'chiuso',
      open_now: 'Aperto ora', closed_now: 'Chiuso',
      until: 'fino alle', opens: 'apre',
      metro: 'M1 Porta Venezia, cinque minuti a piedi',
      maps: 'Apri in Google Maps',
      cards: 'Carte accettate · sala accessibile',
      f_contacts: 'Contatti',
      f_menu: 'Menù digitale',
      f_where: 'Dove',
      f_what: 'Cucina eritrea',
      f_line: 'Injera, zighinì e tavolo condiviso, dal cuore di Porta Venezia.',
      aria_top: 'Warsa — torna su',
      aria_nav: 'Navigazione principale'
    },
    en: {
      skip: 'Skip to content',
      menu: 'Menu',
      nav_mesob: 'The mesob',
      nav_menu2: 'The menu',
      nav_room: 'The room',
      nav_hours: 'Hours & location',
      book: 'Book',
      book_cta: 'Book',
      menu_cta: 'Browse the digital menu',
      menu_cta2: 'Open the digital menu',
      menu_short: 'Menu',
      hero_eyebrow: 'Eritrean cuisine · Via Melzo 16 — Porta Venezia, Milan',
      hero_sub: 'One of Milan’s historic Eritrean restaurants',
      hero_lead: 'The injera lands at the centre of the table, the zighinì goes on top, and the cutlery stays in the drawer: here you eat with your hands, together, the Asmara way.',
      hero_proof: '4.4 out of 5 · 1,472 reviews',
      mesob_kicker: 'The ritual',
      mesob_title: 'How you eat at Warsa',
      mesob_sub: 'No single plates, no forks: Eritrean food is a collective ritual.',
      r1_t: 'The injera is the plate',
      r1_p: 'The spongy teff flatbread covers the mesob: soft, gently sour, it catches everything.',
      r2_t: 'Hands are the cutlery',
      r2_p: 'Tear a piece of injera, scoop up some zighinì — the bread-mopping starts from minute one.',
      r3_t: 'The table belongs to everyone',
      r3_p: 'The dishes arrive together, in the middle: you share, you taste, you talk. The opposite of the single plate.',
      menu_kicker: 'From the mesob',
      menu_title: 'The house dishes',
      menu_sub: 'The house classics — with the vegetarian variants that in Eritrea are tradition, not trend.',
      p1_t: 'Beef zighinì',
      p1_p: 'The signature stew: beef slow-cooked in berbere, the spice blend that warms without burning.',
      p2_t: 'Chicken zighinì',
      p2_p: 'The gentler variant — same patience, same spices.',
      p3_t: 'Vegetarian zighinì',
      p3_p: 'Vegetables and pulses in berbere: lentils, chickpeas, and whatever the garden offers.',
      p4_t: 'Tibs',
      p4_p: 'Spiced, pan-seared morsels of meat: the dish for people in a hurry — in theory.',
      p5_t: 'Sambusa',
      p5_p: 'Fried parcels stuffed with meat or vegetables: this is where you start.',
      p6_t: 'Teff injera',
      p6_p: 'Always on the table — because it is the table.',
      menu_note: 'Typical bill: €25–35 per person. The full menu, with today’s prices, lives on the restaurant’s digital menu.',
      room_kicker: 'The place',
      room_title: 'The room',
      room_sub: 'Warm colours, rugs and traditional craftwork: thirty years of Asmara in the heart of Porta Venezia.',
      room_note: 'Library images (Urbanfile) — awaiting the restaurant’s official photo shoot.',
      banner_line: 'Thirty years of Asmara, on Via Melzo',
      cap_sala: 'The Warsa dining room',
      cap_zighini: 'Injera with zighinì',
      cap_intagli: 'Screens and carvings',
      cap_tibs: 'Tibs with injera',
      cap_mesob: 'The mesob on the table',
      cap_sambusa: 'Sambusa',
      cap_tavola: 'The set table',
      cap_spezie: 'Berbere, the spices',
      press: 'Featured in',
      hours_kicker: 'When',
      hours_title: 'Hours',
      hours_caption: 'Opening hours',
      where_kicker: 'Where',
      mon: 'Monday', tue: 'Tuesday', wed: 'Wednesday', thu: 'Thursday',
      fri: 'Friday', sat: 'Saturday', sun: 'Sunday',
      closed: 'closed',
      open_now: 'Open now', closed_now: 'Closed',
      until: 'until', opens: 'opens',
      metro: 'M1 Porta Venezia, a five-minute walk',
      maps: 'Open in Google Maps',
      cards: 'Cards accepted · step-free access',
      f_contacts: 'Contact',
      f_menu: 'Digital menu',
      f_where: 'Find us',
      f_what: 'Eritrean cuisine',
      f_line: 'Injera, zighinì and a shared table, in the heart of Porta Venezia.',
      aria_top: 'Warsa — back to top',
      aria_nav: 'Main navigation'
    }
  };

  var current = 'it';
  try {
    var saved = localStorage.getItem('warsa-lang');
    if (saved === 'en' || saved === 'it') current = saved;
  } catch (e) { /* storage non disponibile: si resta in IT */ }

  function applyLang(lang) {
    var dict = translations[lang];
    if (!dict) return;
    current = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-alt');
      if (dict[key] !== undefined) el.setAttribute('alt', dict[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('warsa-lang', lang); } catch (e) { /* ok */ }
    updateStatus();
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () { applyLang(btn.getAttribute('data-lang')); });
  });

  /* ---------- orari: stato Aperto/Chiuso (Europe/Rome) ---------- */

  /* indice 0=Dom .. 6=Sab; intervalli in minuti dalla mezzanotte */
  var SCHEDULE = {
    0: [[720, 930], [1140, 1410]],   // Domenica 12:00–15:00 · 19:00–23:30
    1: [[1140, 1410]],               // Lunedì 19:00–23:30
    2: [[720, 930], [1140, 1410]],   // Martedì 12:00–15:30 · 19:00–23:30
    3: [],                           // Mercoledì chiuso
    4: [[720, 900], [1140, 1380]],   // Giovedì 12:00–15:00 · 19:00–23:00
    5: [[720, 900], [1140, 1410]],   // Venerdì 12:00–15:00 · 19:00–23:30
    6: [[720, 900], [1140, 1350]]    // Sabato 12:00–15:00 · 19:00–22:30
  };
  var DAY_KEYS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  var WD_MAP = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };

  function romeNow() {
    try {
      var parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Europe/Rome', hour12: false,
        weekday: 'short', hour: '2-digit', minute: '2-digit'
      }).formatToParts(new Date());
      var wd, h, m;
      parts.forEach(function (p) {
        if (p.type === 'weekday') wd = WD_MAP[p.value];
        else if (p.type === 'hour') h = parseInt(p.value, 10) % 24;
        else if (p.type === 'minute') m = parseInt(p.value, 10);
      });
      if (wd === undefined || isNaN(h) || isNaN(m)) return null;
      return { day: wd, min: h * 60 + m };
    } catch (e) { return null; }
  }

  function hhmm(mins) {
    var h = Math.floor(mins / 60) % 24, m = mins % 60;
    return (h < 10 ? '0' + h : h) + ':' + (m < 10 ? '0' + m : m);
  }

  function computeStatus(now) {
    var today = SCHEDULE[now.day] || [];
    for (var i = 0; i < today.length; i++) {
      if (now.min >= today[i][0] && now.min < today[i][1]) {
        return { open: true, close: today[i][1] };
      }
    }
    /* prossima apertura: oggi (più tardi) o nei giorni seguenti */
    for (var d = 0; d < 8; d++) {
      var dayIdx = (now.day + d) % 7;
      var slots = SCHEDULE[dayIdx] || [];
      for (var j = 0; j < slots.length; j++) {
        if (d === 0 && slots[j][0] <= now.min) continue;
        return { open: false, nextDay: dayIdx, nextOpen: slots[j][0], sameDay: d === 0 };
      }
    }
    return { open: false };
  }

  function updateStatus() {
    var now = romeNow();
    var dict = translations[current];
    var boxes = document.querySelectorAll('.status');
    var today = now ? now.day : -1;

    document.querySelectorAll('.orari-tabella tr[data-day]').forEach(function (tr) {
      tr.classList.toggle('is-today', parseInt(tr.getAttribute('data-day'), 10) === today);
    });

    if (!now) { boxes.forEach(function (b) { b.hidden = true; }); return; }
    var st = computeStatus(now);
    var text, cls;
    if (st.open) {
      cls = 'is-open';
      text = dict.open_now + ' · ' + dict.until + ' ' + hhmm(st.close);
    } else {
      cls = 'is-closed';
      text = dict.closed_now;
      if (st.nextOpen !== undefined) {
        var when = st.sameDay ? '' : (' ' + dict[DAY_KEYS[st.nextDay]]);
        text += ' · ' + dict.opens + when + ' ' + hhmm(st.nextOpen);
      }
    }
    boxes.forEach(function (b) {
      b.hidden = false;
      b.classList.remove('is-open', 'is-closed');
      b.classList.add(cls);
      var t = b.querySelector('.status-text');
      if (t) t.textContent = text;
    });
  }

  /* ---------- intro "il mesob" (iride) ---------- */

  var intro = document.getElementById('intro');
  if (intro) {
    var introReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (introReduced) {
      intro.remove();
    } else {
      var introDone = false;
      var irideIntro = function () {
        intro.classList.add('intro--iride');
        document.documentElement.classList.add('intro-done');
      };
      var finishIntro = function () {
        if (introDone) return;
        introDone = true;
        clearTimeout(irideTimer);
        clearTimeout(endTimer);
        document.documentElement.classList.add('intro-done');
        document.body.classList.remove('intro-lock');
        if (intro.parentNode) intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var irideTimer = setTimeout(irideIntro, 2300);
      var endTimer = setTimeout(finishIntro, 3300);
      window.addEventListener('pointerdown', finishIntro, true);
      window.addEventListener('keydown', finishIntro, true);
    }
  }

  /* ---------- copyright dinamico ---------- */

  var nowYear = new Date().getFullYear();
  document.querySelectorAll('[data-current-year]').forEach(function (el) {
    el.textContent = String(nowYear);
  });

  /* ---------- nav mobile ---------- */

  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  if (nav && toggle) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav-menu a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- barra azioni (appare dopo l'hero) ---------- */

  var actionbar = document.getElementById('actionbar');
  var hero = document.querySelector('.hero');
  if (actionbar && hero) {
    var ticking = false;
    var onScroll = function () {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(function () {
        var past = window.scrollY > (hero.offsetHeight * 0.62);
        actionbar.classList.toggle('is-visible', past);
        ticking = false;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- lightbox gallery ---------- */

  var lb = document.getElementById('lightbox');
  if (lb) {
    var lbImg = lb.querySelector('.lb-img');
    var lbCap = lb.querySelector('.lb-cap');
    var tiles = Array.prototype.slice.call(document.querySelectorAll('.tile'));
    var lbIdx = -1, lbLastFocus = null;
    var capText = function (key) { var d = translations[current]; return (d && d[key]) || ''; };
    var lbShow = function (i) {
      if (!tiles.length) return;
      if (i < 0) i = tiles.length - 1;
      if (i >= tiles.length) i = 0;
      lbIdx = i;
      var t = tiles[i];
      lbImg.src = t.getAttribute('data-full');
      lbImg.alt = capText(t.getAttribute('data-cap'));
      lbCap.textContent = capText(t.getAttribute('data-cap'));
    };
    var lbOpen = function (i) {
      lbLastFocus = document.activeElement;
      lb.hidden = false;
      document.body.classList.add('lb-lock');
      lbShow(i);
      lb.querySelector('.lb-close').focus();
    };
    var lbClose = function () {
      lb.hidden = true;
      document.body.classList.remove('lb-lock');
      if (lbLastFocus && lbLastFocus.focus) lbLastFocus.focus();
    };
    tiles.forEach(function (t, i) { t.addEventListener('click', function () { lbOpen(i); }); });
    lb.querySelector('.lb-close').addEventListener('click', lbClose);
    lb.querySelector('.lb-prev').addEventListener('click', function () { lbShow(lbIdx - 1); });
    lb.querySelector('.lb-next').addEventListener('click', function () { lbShow(lbIdx + 1); });
    lb.addEventListener('click', function (e) { if (e.target === lb) lbClose(); });
    document.addEventListener('keydown', function (e) {
      if (lb.hidden) return;
      if (e.key === 'Escape') lbClose();
      else if (e.key === 'ArrowLeft') lbShow(lbIdx - 1);
      else if (e.key === 'ArrowRight') lbShow(lbIdx + 1);
    });
  }

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.sez-intesta, .mesob-scena, .rito, .piatto, .banner, .tile, .stampa, .orari-col, .dove-col');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* rete di sicurezza: se IntersectionObserver non parte, mostra tutto */
  if ('IntersectionObserver' in window) {
    var ioVivo = false;
    var sentinella = new IntersectionObserver(function () { ioVivo = true; sentinella.disconnect(); });
    sentinella.observe(document.body);
    setTimeout(function () {
      if (!ioVivo) {
        document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      }
    }, 1500);
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- avvio ---------- */

  if (current !== 'it') applyLang(current);
  updateStatus();
  setInterval(updateStatus, 60000);
})();
