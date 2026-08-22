const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const STORE_KEY = "ohf-state-v1";

const state = Object.assign(
  { sort: "priceAsc", day: "all", type: "all", q: "", view: "list" },
  loadSaved()
);

function loadSaved() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function save() {
  try { localStorage.setItem(STORE_KEY, JSON.stringify(state)); } catch {}
}

const $list = document.getElementById("listView");
const $mapView = document.getElementById("mapView");
const $mapDiv = document.getElementById("map");
const $stats = document.getElementById("stats");
const $empty = document.getElementById("emptyState");

let map = null;
let markerLayer = null;

function fmtTime(hhmm) {
  const [h, m] = hhmm.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hr = h % 12 === 0 ? 12 : h % 12;
  return `${hr}:${String(m).padStart(2, "0")} ${ampm}`;
}

function todayLabel() {
  const d = new Date().getDay();
  return DAYS[(d + 6) % 7];
}

function sessionsOn(rink, day) {
  return rink.schedule.filter(s => s.days.includes(day));
}

function nextOccurrence(rink, fromDayFilterOnly = false) {
  const now = new Date();
  let best = null;
  for (let i = 0; i < 8; i++) {
    const d = new Date(now);
    d.setDate(now.getDate() + i);
    const label = DAYS[(d.getDay() + 6) % 7];
    if (fromDayFilterOnly && state.day !== "all" && state.day !== "today" && label !== state.day) continue;
    if (state.day === "today" && i !== 0) break;
    const todays = sessionsOn(rink, label);
    for (const s of todays) {
      const [h, m] = s.start.split(":").map(Number);
      const start = new Date(d);
      start.setHours(h, m, 0, 0);
      if (i === 0 && start <= now) continue;
      if (!best || start < best.date) best = { date: start, session: s };
    }
    if (fromDayFilterOnly && best) break;
  }
  return best;
}

function minutesUntil(next) {
  if (!next) return Number.MAX_SAFE_INTEGER;
  return Math.max(0, Math.round((next.date - new Date()) / 60000));
}

function stars(q) {
  const full = Math.round(q);
  return "★".repeat(full) + "☆".repeat(5 - full);
}

function priceTier(p) {
  if (p < 6) return "#22c55e";
  if (p <= 8) return "#38bdf8";
  return "#f59e0b";
}

function matchesFilters(rink) {
  if (state.type !== "all" && !rink.types.includes(state.type)) return false;
  if (state.q) {
    const hay = `${rink.name} ${rink.city} ${rink.address}`.toLowerCase();
    if (!hay.includes(state.q.toLowerCase())) return false;
  }
  if (state.day !== "all" && state.day !== "today") {
    if (!sessionsOn(rink, state.day).length) return false;
  }
  return true;
}

function sortRinks(list) {
  const arr = [...list];
  switch (state.sort) {
    case "priceAsc": arr.sort((a, b) => a.price - b.price || b.quality - a.quality); break;
    case "priceDesc": arr.sort((a, b) => b.price - a.price || b.quality - a.quality); break;
    case "qualDesc": arr.sort((a, b) => b.quality - a.quality || a.price - b.price); break;
    case "qualAsc": arr.sort((a, b) => a.quality - b.quality || a.price - b.price); break;
    case "nextSoon": arr.sort((a, b) => minutesUntil(nextOccurrence(a)) - minutesUntil(nextOccurrence(b))); break;
    case "az": arr.sort((a, b) => a.name.localeCompare(b.name)); break;
  }
  return arr;
}

function rankMetric() {
  if (state.sort === "priceAsc") return { word: "cheapest", dir: "asc" };
  if (state.sort === "priceDesc") return { word: "priciest", dir: "desc" };
  if (state.sort === "qualDesc") return { word: "best rated", dir: "desc" };
  if (state.sort === "qualAsc") return { word: "lowest rated", dir: "asc" };
  return null;
}

function directionsUrl(rink) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${rink.name} ${rink.city} MN`)}`;
}

function cardHtml(rink, idx, metric) {
  const next = nextOccurrence(rink, true);
  let nextText;
  if (state.day === "today") {
    nextText = next ? `Today ${fmtTime(next.session.start)}–${fmtTime(next.session.end)} · ${next.session.label}` : "Nothing left today";
  } else {
    nextText = next
      ? `Next: ${next.date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" })} · ${fmtTime(next.session.start)}–${fmtTime(next.session.end)} · ${next.session.label}`
      : `Recurring weekly — see schedule below`;
  }

  const rows = rink.schedule.map(s => `
    <tr>
      <td class="sched-days">${s.days.join(", ")}</td>
      <td>${fmtTime(s.start)} – ${fmtTime(s.end)}</td>
      <td class="sched-label">${s.label}</td>
    </tr>`).join("");

  const rankBadge = metric ? `<span class="rank-badge">#${idx + 1} ${metric.word}</span>` : "";
  const websiteLink = rink.website ? `<a href="${rink.website}" target="_blank" rel="noopener">Website</a>` : "";

  return `
  <article class="card" id="card-${rink.id}">
    <div class="card-top">
      ${rankBadge}
      <h2>${rink.name} <span class="city-tag">· ${rink.city}</span></h2>
      <span class="price-pill">$${rink.price}<span class="price-note">${rink.priceNote}</span></span>
    </div>
    <div class="meta-row">
      <span><span class="stars">${stars(rink.quality)}</span> <strong>${rink.quality.toFixed(1)}</strong> <span class="quality-note">— ${rink.qualityNotes}</span></span>
    </div>
    <div class="meta-row">
      ${rink.types.map(t => `<span class="type-badge">${t}</span>`).join("")}
      <span>${rink.sheets} sheet${rink.sheets > 1 ? "s" : ""}</span>
    </div>
    <p class="next-line"><strong>${nextText}</strong></p>
    <details class="schedule">
      <summary>Weekly schedule</summary>
      <table class="sched-table">${rows}</table>
    </details>
    <div class="card-links">
      <a href="${directionsUrl(rink)}" target="_blank" rel="noopener">📍 Directions</a>
      ${websiteLink}
    </div>
    <div class="card-links"><span class="addr">${rink.address}, ${rink.city}, MN</span></div>
  </article>`;
}

function renderList() {
  const filtered = RINKS.filter(matchesFilters);
  const sorted = sortRinks(filtered);
  const metric = rankMetric();

  $list.innerHTML = sorted.map((r, i) => cardHtml(r, i, metric)).join("");

  $empty.hidden = sorted.length > 0;

  const cheapest = Math.min(...RINKS.map(r => r.price));
  const bestQ = Math.max(...RINKS.map(r => r.quality));
  $stats.textContent =
    `${sorted.length} of ${RINKS.length} rinks shown · metro-wide cheapest drop-in: $${cheapest} · top rating: ${bestQ.toFixed(1)}★`;

  if (markerLayer) rebuildMarkers(sorted);
}

function initDayChips() {
  const wrap = document.getElementById("dayChips");
  const today = todayLabel();
  const chips = [{ val: "all", label: "All days" }, { val: "today", label: `Today (${today})` },
    ...DAYS.map(d => ({ val: d, label: d === today ? `${d} •` : d }))];
  wrap.innerHTML = chips.map(c =>
    `<button type="button" class="chip${c.val === state.day ? " active" : ""}" data-day="${c.val}">${c.label}</button>`).join("");
  wrap.addEventListener("click", e => {
    const btn = e.target.closest("[data-day]");
    if (!btn) return;
    state.day = btn.dataset.day;
    save();
    wrap.querySelectorAll(".chip").forEach(el => el.classList.toggle("active", el.dataset.day === state.day));
    renderList();
  });
}

function ensureMap() {
  if (map || typeof L === "undefined") return map;
  map = L.map($mapDiv, { scrollWheelZoom: true }).setView([45.02, -93.32], 10);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
  markerLayer = L.layerGroup().addTo(map);
  return map;
}

function popupHtml(rink) {
  const next = nextOccurrence(rink);
  const nextTxt = next ? `${next.session.label} · ${fmtTime(next.session.start)}–${fmtTime(next.session.end)} on ${next.session.days.join("/")}` : "See schedule";
  return `
    <div class="pop-title">🏒 ${rink.name}</div>
    <div class="pop-sub">${rink.city}, MN</div>
    <div>$${rink.price} per session · <strong>${rink.quality.toFixed(1)}★</strong></div>
    <div>${nextTxt}</div>
    <a href="#card-${rink.id}" onclick="document.getElementById('card-${rink.id}').scrollIntoView({behavior:'smooth'});return false;">View details ↓</a>`;
}

function rebuildMarkers(sorted) {
  if (!ensureMap()) return;
  markerLayer.clearLayers();
  const bounds = [];
  for (const rink of sorted) {
    const m = L.circleMarker([rink.lat, rink.lng], {
      radius: 9,
      color: "#0b1220",
      weight: 2,
      fillColor: priceTier(rink.price),
      fillOpacity: 0.9
    });
    m.bindPopup(popupHtml(rink));
    markerLayer.addLayer(m);
    bounds.push([rink.lat, rink.lng]);
  }
  if (bounds.length) map.fitBounds(bounds, { padding: [40, 40], maxZoom: 12 });
}

function setView(view) {
  state.view = view;
  save();
  document.getElementById("btnList").classList.toggle("active", view === "list");
  document.getElementById("btnMap").classList.toggle("active", view === "map");
  $listView.hidden = view !== "list";
  $mapView.hidden = view !== "map";
  if (view === "map") {
    requestAnimationFrame(() => {
      if (ensureMap()) { map.invalidateSize(); rebuildMarkers(sortRinks(RINKS.filter(matchesFilters))); }
    });
  }
}

document.getElementById("search").addEventListener("input", e => {
  state.q = e.target.value.trim(); save(); renderList();
});

document.getElementById("sort").addEventListener("change", e => {
  state.sort = e.target.value; save(); renderList();
});

document.getElementById("typeFilter").addEventListener("change", e => {
  state.type = e.target.value; save(); renderList();
});

document.getElementById("btnList").addEventListener("click", () => setView("list"));
document.getElementById("btnMap").addEventListener("click", () => setView("map"));

initDayChips();
document.getElementById("search").value = state.q;
document.getElementById("sort").value = state.sort;
document.getElementById("typeFilter").value = state.type;
renderList();
setView(state.view === "map" ? "map" : "list");
