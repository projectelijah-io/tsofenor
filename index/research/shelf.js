/* =====================================================================
   TsofenOr — /index
   Reads ../data/entries.json at runtime. To publish a new entry,
   add an object to that file. Nothing here changes.
   ===================================================================== */
(function () {
  'use strict';

  var DATA_URL = '../data/entries.json';
  var entries = [];
  var view = 'shelf';
  var query = '';
  var activeTags = new Set();
  var sortBy = 'new';
  var lastFocus = null;

  var $ = function (id) { return document.getElementById(id); };

  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"]/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c];
    });
  }

  /* Glyph size class — short letters get the full display size,
     longer strings step down so the cover stays balanced. */
  function glyphClass(g) {
    var n = Array.from(String(g)).length;
    if (n <= 3) return '';
    if (n <= 6) return 'long';
    return 'xlong';
  }

  function formatDate(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString('he-IL', { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function tagCounts() {
    var m = new Map();
    entries.forEach(function (e) {
      (e.tags || []).forEach(function (t) { m.set(t, (m.get(t) || 0) + 1); });
    });
    return Array.from(m.entries()).sort(function (a, b) { return b[1] - a[1]; });
  }

  function passes(e) {
    if (activeTags.size) {
      var tags = e.tags || [];
      var all = true;
      activeTags.forEach(function (t) { if (tags.indexOf(t) === -1) all = false; });
      if (!all) return false;
    }
    if (!query) return true;
    var hay = [e.title, e.text, e.cluster, e.kind, (e.tags || []).join(' ')].join(' ').toLowerCase();
    return hay.indexOf(query.toLowerCase()) !== -1;
  }

  function visible() {
    var a = entries.filter(passes);
    if (sortBy === 'new') a.sort(function (x, y) { return String(y.date).localeCompare(String(x.date)); });
    if (sortBy === 'old') a.sort(function (x, y) { return String(x.date).localeCompare(String(y.date)); });
    if (sortBy === 'az') a.sort(function (x, y) { return String(x.title).localeCompare(String(y.title), 'he'); });
    if (sortBy === 'sig') a.sort(function (x, y) { return String(x.sig).localeCompare(String(y.sig), 'he'); });
    return a;
  }

  function renderTags() {
    $('tags').innerHTML = tagCounts().map(function (p) {
      return '<button type="button" data-t="' + esc(p[0]) + '" aria-pressed="' +
        (activeTags.has(p[0]) ? 'true' : 'false') + '">' + esc(p[0]) + ' ' + p[1] + '</button>';
    }).join('');
    Array.prototype.forEach.call($('tags').querySelectorAll('button'), function (b) {
      b.addEventListener('click', function () {
        var t = b.getAttribute('data-t');
        activeTags.has(t) ? activeTags.delete(t) : activeTags.add(t);
        render();
      });
    });
  }

  function render() {
    renderTags();
    var items = visible();
    var clusters = new Set(entries.map(function (e) { return e.cluster; }));
    $('count').textContent = entries.length + ' רשומות · ' + clusters.size + ' אשכולות';

    var out = $('out');
    if (!items.length) {
      out.innerHTML = '<div class="idx-empty">אין רשומות תואמות. נקה את הסינון או נסח מחדש.</div>';
      return;
    }

    if (view === 'shelf') {
      out.innerHTML = '<div class="shelf">' + items.map(function (e) {
        return '<button type="button" class="sleeve" data-id="' + esc(e.id) + '">' +
          '<span class="cover">' +
            '<span class="sig">' + esc(e.sig) + '</span>' +
            '<span class="glyph ' + glyphClass(e.glyph) + '">' + esc(e.glyph) + '</span>' +
            '<span class="kind">' + esc(e.kind) + '</span>' +
          '</span>' +
          '<span class="info">' +
            '<h2>' + esc(e.title) + '</h2>' +
            '<span class="sub">' + esc(e.cluster) + ' · ' + formatDate(e.date) + '</span>' +
          '</span>' +
        '</button>';
      }).join('') + '</div>';
    } else {
      out.innerHTML = '<div class="catalog">' + items.map(function (e) {
        return '<button type="button" class="rowitem" data-id="' + esc(e.id) + '">' +
          '<span class="sig">' + esc(e.sig) + '</span>' +
          '<span class="ttl">' + esc(e.title) + '</span>' +
          '<span class="snip">' + esc(String(e.text).split('\n')[0]) + '</span>' +
          '<span class="kd">' + esc(e.kind) + ' · ' + formatDate(e.date) + '</span>' +
        '</button>';
      }).join('') + '</div>';
    }

    Array.prototype.forEach.call(out.querySelectorAll('[data-id]'), function (b) {
      b.addEventListener('click', function () { openEntry(b.getAttribute('data-id'), b); });
    });
  }

  function openEntry(id, source) {
    var e = entries.filter(function (x) { return x.id === id; })[0];
    if (!e) return;
    lastFocus = source || null;
    $('sheet').innerHTML =
      '<div class="head">' +
        '<div class="mini ' + glyphClass(e.glyph) + '">' + esc(e.glyph) + '</div>' +
        '<div><h2>' + esc(e.title) + '</h2>' +
          '<div class="stamp">' + esc(e.sig) + ' · ' + esc(e.cluster) + ' · ' +
            esc(e.kind) + ' · ' + formatDate(e.date) + '</div></div>' +
      '</div>' +
      '<p class="text">' + esc(e.text) + '</p>' +
      '<div class="tg">' + (e.tags || []).map(function (t) {
        return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
      '<div class="acts"><button type="button" class="idx-btn" id="close-sheet">סגירה</button></div>';
    var bd = $('bd');
    bd.classList.add('open');
    bd.setAttribute('aria-hidden', 'false');
    location.hash = e.id;
    $('close-sheet').addEventListener('click', closeSheet);
    $('close-sheet').focus();
  }

  function closeSheet() {
    var bd = $('bd');
    bd.classList.remove('open');
    bd.setAttribute('aria-hidden', 'true');
    $('sheet').innerHTML = '';
    if (history.replaceState) history.replaceState(null, '', location.pathname + location.search);
    if (lastFocus) { lastFocus.focus(); lastFocus = null; }
  }

  /* ---------- wiring ---------- */
  $('bd').addEventListener('click', function (ev) { if (ev.target === $('bd')) closeSheet(); });
  document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') closeSheet(); });
  $('q').addEventListener('input', function (ev) { query = ev.target.value; render(); });
  $('sort').addEventListener('change', function (ev) { sortBy = ev.target.value; render(); });
  $('v-shelf').addEventListener('click', function () {
    view = 'shelf';
    $('v-shelf').setAttribute('aria-pressed', 'true');
    $('v-cat').setAttribute('aria-pressed', 'false');
    render();
  });
  $('v-cat').addEventListener('click', function () {
    view = 'catalog';
    $('v-cat').setAttribute('aria-pressed', 'true');
    $('v-shelf').setAttribute('aria-pressed', 'false');
    render();
  });

  /* ---------- load ---------- */
  fetch(DATA_URL)
    .then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    })
    .then(function (doc) {
      entries = doc.entries || [];
      if ($('stamp')) $('stamp').textContent = 'עודכן ' + formatDate(doc.updated);
      render();
      var h = location.hash.replace('#', '');
      if (h) openEntry(h, null);
    })
    .catch(function (err) {
      $('out').innerHTML = '<div class="idx-empty">לא ניתן לטעון את האינדקס.<br>' +
        '<span style="font-family:var(--mono);font-size:12px">' + esc(err.message) + '</span></div>';
    });
})();
