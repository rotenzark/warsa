/* Warsa — i18n IT/EN, intro "il mesob", reveal, watchdog */
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
      call_short: 'Chiama',
      call_cta: 'Chiama',
      menu_cta: 'Sfoglia il menù digitale',
      menu_cta2: 'Apri il menù digitale',
      hero_eyebrow: 'Cucina eritrea · Via Melzo 16 — Porta Venezia, Milano',
      hero_sub: 'Uno dei ristoranti storici della cucina eritrea a Milano',
      hero_lead: 'L’injera arriva al centro del tavolo, lo zighinì ci si appoggia sopra, e le posate restano nel cassetto: qui si mangia con le mani, insieme, come ad Asmara.',
      hero_proof: '4,4 su 5 · 1.472 recensioni',
      mesob_title: 'Come si mangia da Warsa',
      mesob_sub: 'Niente piatti singoli, niente forchette: la cucina eritrea è un rito collettivo.',
      r1_t: 'L’injera è il piatto',
      r1_p: 'Il pane spugnoso di farina di teff copre il mesob: morbido, leggermente acidulo, raccoglie tutto.',
      r2_t: 'Le mani sono le posate',
      r2_p: 'Si strappa un pezzo di injera, si prende un boccone di zighinì, e la scarpetta comincia dal primo minuto.',
      r3_t: 'Il tavolo è di tutti',
      r3_p: 'Le portate arrivano insieme, al centro: si condivide, si assaggia, si parla. È il contrario del piatto singolo.',
      menu_title: 'Dal mesob',
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
      room_title: 'La sala',
      room_sub: 'Colori caldi, tappeti e artigianato tradizionale: trent’anni di Asmara nel cuore di Porta Venezia.',
      room_note: 'Le fotografie della sala e dei piatti arrivano col primo servizio fotografico.',
      press: 'Ne hanno scritto:',
      hours_title: 'Orari e dove',
      hours_caption: 'Orari di apertura',
      mon: 'Lunedì',
      tue: 'Martedì',
      wed: 'Mercoledì',
      thu: 'Giovedì',
      fri: 'Venerdì',
      sat: 'Sabato',
      sun: 'Domenica',
      closed: 'chiuso',
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
      call_short: 'Call',
      call_cta: 'Call',
      menu_cta: 'Browse the digital menu',
      menu_cta2: 'Open the digital menu',
      hero_eyebrow: 'Eritrean cuisine · Via Melzo 16 — Porta Venezia, Milan',
      hero_sub: 'One of Milan’s historic Eritrean restaurants',
      hero_lead: 'The injera lands at the centre of the table, the zighinì goes on top, and the cutlery stays in the drawer: here you eat with your hands, together, the Asmara way.',
      hero_proof: '4.4 out of 5 · 1,472 reviews',
      mesob_title: 'How you eat at Warsa',
      mesob_sub: 'No single plates, no forks: Eritrean food is a collective ritual.',
      r1_t: 'The injera is the plate',
      r1_p: 'The spongy teff flatbread covers the mesob: soft, gently sour, it catches everything.',
      r2_t: 'Hands are the cutlery',
      r2_p: 'Tear a piece of injera, scoop up some zighinì — the bread-mopping starts from minute one.',
      r3_t: 'The table belongs to everyone',
      r3_p: 'The dishes arrive together, in the middle: you share, you taste, you talk. The opposite of the single plate.',
      menu_title: 'From the mesob',
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
      room_title: 'The room',
      room_sub: 'Warm colours, rugs and traditional craftwork: thirty years of Asmara in the heart of Porta Venezia.',
      room_note: 'Photographs of the room and dishes arrive with the first photo shoot.',
      press: 'Featured in:',
      hours_title: 'Hours & location',
      hours_caption: 'Opening hours',
      mon: 'Monday',
      tue: 'Tuesday',
      wed: 'Wednesday',
      thu: 'Thursday',
      fri: 'Friday',
      sat: 'Saturday',
      sun: 'Sunday',
      closed: 'closed',
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
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
    try { localStorage.setItem('warsa-lang', lang); } catch (e) { /* ok */ }
  }

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  if (current !== 'it') applyLang(current);

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
        intro.remove();
        window.removeEventListener('pointerdown', finishIntro, true);
        window.removeEventListener('keydown', finishIntro, true);
      };
      document.documentElement.classList.add('has-intro');
      document.body.classList.add('intro-lock');
      var irideTimer = setTimeout(irideIntro, 2350);
      var endTimer = setTimeout(finishIntro, 3350);
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

  /* ---------- reveal on scroll ---------- */

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!prefersReduced && 'IntersectionObserver' in window) {
    var targets = document.querySelectorAll('.sezione-titolo, .sezione-sub, .rito, .piatto, .sala-slots, .stampa, .orari-tabella, .dove');
    targets.forEach(function (t) { t.classList.add('reveal'); });
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(function (t) { io.observe(t); });
  }

  /* ---------- rete di sicurezza: se IntersectionObserver non parte, mostra tutto ---------- */
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
})();
