import { trip } from "../data/trip.js?v=10";
import { assertValidTrip } from "../data/validate.js?v=8";

assertValidTrip(trip);

const USER_STATE_KEY = `${trip.meta.id}:user-state:v1`;
const accommodationById = new Map(trip.accommodations.map(item => [item.id, item]));
const reservationById = new Map(trip.reservations.map(item => [item.id, item]));
const dayById = new Map(trip.days.map(item => [item.id, item]));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

const legacyShoppingKeys = {
  "shopping-rohto-gold40-max": "shopping-1",
  "shopping-shiseido-moilip": "shopping-2",
  "shopping-mentholatum-medical-lip-b": "shopping-3"
};

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttr(value = "") {
  return escapeHtml(value);
}

function scrollMode() {
  return prefersReducedMotion.matches ? "auto" : "smooth";
}

function formatDayLabel(dateString) {
  const date = new Date(`${dateString}T12:00:00+09:00`);
  const weekday = new Intl.DateTimeFormat("zh-TW", { weekday: "short", timeZone: trip.meta.timezone })
    .format(date)
    .replace("週", "");
  return `${date.getMonth() + 1}/${date.getDate()} (${weekday})`;
}

function formatDateRange() {
  return `${formatDayLabel(trip.meta.startDate)} － ${formatDayLabel(trip.meta.endDate)}`;
}

function loadUserState() {
  const fallback = { version: 1, lastDayId: null, shopping: {} };
  try {
    const saved = JSON.parse(localStorage.getItem(USER_STATE_KEY));
    if (saved?.version === 1) {
      return {
        version: 1,
        lastDayId: saved.lastDayId || null,
        shopping: saved.shopping || {}
      };
    }

    const migrated = { version: 1, lastDayId: null, shopping: {} };
    migrated.lastDayId = localStorage.getItem("lastTripDay");
    Object.entries(legacyShoppingKeys).forEach(([id, oldKey]) => {
      const checked = localStorage.getItem(`${oldKey}-checked`) === "true";
      const quantity = Number(localStorage.getItem(`${oldKey}-quantity`)) || 1;
      if (checked || quantity !== 1) migrated.shopping[id] = { checked, quantity };
    });
    return migrated;
  } catch {
    return fallback;
  }
}

let userState = loadUserState();

function saveUserState() {
  try {
    localStorage.setItem(USER_STATE_KEY, JSON.stringify(userState));
  } catch {
    // Safari private mode and storage-disabled browsers continue without persistence.
  }
}

function getOvernightLabel(overnight) {
  if (overnight.type === "home") return overnight.label;
  const accommodation = accommodationById.get(overnight.accommodationId);
  if (!accommodation) return "";
  return accommodation.nameEn ? `${accommodation.name} (${accommodation.nameEn})` : accommodation.name;
}

function renderHeader() {
  document.title = `${trip.meta.title} · ${trip.meta.subtitle}`;
  document.getElementById("headerTitle").textContent = `${trip.meta.title} · 隨身導覽`;
  document.getElementById("headerDays").textContent = `${trip.days.length} Days`;
  document.getElementById("headerSubtitle").textContent = `${formatDateRange()} ${trip.meta.destinations.join(" · ")}`;
}

function renderDayTabs() {
  document.getElementById("dayTabs").innerHTML = trip.days.map(day => `
    <button class="tab-btn" type="button" data-day="${escapeAttr(day.id)}" aria-controls="${escapeAttr(day.id)}" aria-label="第 ${day.dayNumber} 天，${escapeAttr(formatDayLabel(day.date))}">
      <span>D${day.dayNumber}</span>
      <span class="tab-date">${escapeHtml(formatDayLabel(day.date))}</span>
    </button>
  `).join("");
}

function renderSummary(day) {
  const items = [
    [`⏰ ${day.summary.departureLabel}`, day.summary.departure],
    ["📍 主要區域", day.summary.area],
    ["🥾 體力", day.summary.stamina],
    ["⭐ 今日關鍵", day.summary.keyPoint]
  ];
  return `
    <div class="day-summary" aria-label="今日摘要">
      ${items.map(([label, value]) => `
        <div class="summary-item">
          <span class="summary-label">${escapeHtml(label)}</span>
          <span class="summary-value">${escapeHtml(value)}</span>
        </div>
      `).join("")}
    </div>
  `;
}

function renderNotice(notice) {
  return `
    <div class="tip-box ${notice.style === "warning" ? "warn" : "info"}" data-notice-id="${escapeAttr(notice.id)}">
      <div class="tip-title">${escapeHtml(notice.title)}</div>
      ${notice.contentHtml}
    </div>
  `;
}

function renderJourney(journeyId) {
  const journey = trip.journeys[journeyId];
  if (!journey) return "";
  const routeButton = journey.routeUrl ? `
    <a class="map-btn route-btn" href="${escapeAttr(journey.routeUrl)}" target="_blank" rel="noopener noreferrer" aria-label="${escapeAttr(journey.label)}">↗ 路線</a>
  ` : "";
  const steps = journey.steps.length ? `
    <div class="route-steps">
      ${journey.steps.map(step => `
        <div class="route-step">
          <span class="rs-mode">${escapeHtml(step.icon)}</span>
          <div class="rs-body">
            ${step.badges.map(badge => `<span class="lb lb-${escapeAttr(badge.colorKey || "walk")}">${escapeHtml(badge.label)}</span>`).join("")}
            <strong>${escapeHtml(step.label)}</strong>
            ${step.displayMeta || step.fare ? `
              <span class="rs-meta">
                ${step.fare ? `<span class="rs-fare">${escapeHtml(step.fare.displayLabel)}</span>` : ""}
                ${escapeHtml(step.displayMeta || "")}
              </span>
            ` : ""}
            ${step.noteHtml ? `<div class="rs-note">${step.noteHtml}</div>` : ""}
          </div>
        </div>
      `).join("")}
    </div>
  ` : "";
  return `
    <div class="inline-transport" role="group" aria-label="${escapeAttr(journey.label)}">
      <div class="inline-transport-card">
        <div class="inline-transport-head">
          <span class="inline-transport-title">🚶‍➡️ ${escapeHtml(journey.label)}</span>
          ${routeButton}
        </div>
        ${steps}
        ${journey.noteHtml ? `<div class="rs-note">${journey.noteHtml}</div>` : ""}
      </div>
    </div>
  `;
}

function reservationClass(status) {
  return {
    confirmed: "rsv-done",
    required: "rsv-ticket",
    recommended: "rsv-must",
    walkIn: "rsv-free",
    ticketQueue: "rsv-ticket"
  }[status] || "rsv-free";
}

function renderReservationTag(reservation) {
  if (!reservation?.eventLabel) return "";
  const className = reservationClass(reservation.status);
  const eventUsesActionLink = reservation.method === "tablecheck" || reservation.eventId === "d6-harukas-300";
  if (reservation.action?.url && eventUsesActionLink) {
    return `<a href="${escapeAttr(reservation.action.url)}" target="_blank" rel="noopener noreferrer" class="rsv-tag ${className}">${escapeHtml(reservation.eventLabel)}</a>`;
  }
  return `<span class="rsv-tag ${className}">${escapeHtml(reservation.eventLabel)}</span>`;
}

function renderEvent(event) {
  const place = event.primaryPlaceId ? trip.places[event.primaryPlaceId] : null;
  const mapButton = place ? `
    <a href="https://www.google.com/maps/search/?api=1&amp;query=${encodeURIComponent(place.map.query)}" target="_blank" rel="noopener noreferrer" class="map-btn" aria-label="在 Google 地圖查看 ${escapeAttr(place.name)}">📍 地圖</a>
  ` : "";
  const reservation = event.reservationId ? reservationById.get(event.reservationId) : null;
  const details = [
    ...event.highlights.map(item => `<span class="food-tag-inline">${escapeHtml(item.text)}</span>`),
    renderReservationTag(reservation),
    ...event.actions.map(action => `<a href="${escapeAttr(action.url)}" target="_blank" rel="noopener noreferrer" class="${action.type === "statusLink" ? `rsv-tag ${escapeAttr(action.statusClass)}` : "rsv-tag rsv-must"}">${escapeHtml(action.label)}</a>`)
  ].filter(Boolean);
  return `
    <div class="timeline-item" data-event-id="${escapeAttr(event.id)}">
      <div class="timeline-time">${escapeHtml(event.schedule.displayLabel)}</div>
      <div class="spot-card">
        <div class="spot-header">
          <span class="spot-name">${escapeHtml(event.title)}</span>
          ${mapButton}
        </div>
        <div class="spot-desc">${event.descriptionHtml}</div>
        ${details.map(detail => `${detail}<br>`).join("")}
      </div>
    </div>
  `;
}

function renderDay(day) {
  const beforeTimeline = day.notices.filter(item => item.position === "beforeTimeline");
  const afterTimeline = day.notices.filter(item => item.position === "afterTimeline" || !item.position);
  const timeline = day.events.map(event => {
    const notices = day.notices.filter(item => item.position === "beforeEvent" && item.beforeEventId === event.id);
    return `${notices.map(renderNotice).join("")}${event.transportBeforeId ? renderJourney(event.transportBeforeId) : ""}${renderEvent(event)}`;
  }).join("");
  return `
    <section id="${escapeAttr(day.id)}" class="section-panel" aria-hidden="true">
      <div class="day-header-card">
        <div class="day-title">
          <span>Day ${day.dayNumber} : ${escapeHtml(day.title)}</span>
          <span class="day-badge">${escapeHtml(day.badge)}</span>
        </div>
        <div class="hotel-tag">🏨 住宿：${escapeHtml(getOvernightLabel(day.overnight))}</div>
      </div>
      ${renderSummary(day)}
      <div class="transport-box">
        <div class="transport-title">${day.id === "d1" || day.id === "d8" ? "✈️" : "🚦"} 今日交通摘要</div>
        <div class="transport-overview">${escapeHtml(day.transportSummary.displayText)}</div>
      </div>
      ${beforeTimeline.map(renderNotice).join("")}
      <div class="timeline">
        ${timeline}
        ${day.endingTransportId ? renderJourney(day.endingTransportId) : ""}
      </div>
      ${afterTimeline.map(renderNotice).join("")}
    </section>
  `;
}

function shoppingState(item) {
  const state = userState.shopping[item.id] || {};
  return {
    checked: Boolean(state.checked),
    quantity: Math.min(item.maxQuantity, Math.max(1, Number(state.quantity) || item.defaultQuantity))
  };
}

function renderShoppingPage() {
  return `
    <section id="shopping-page" class="section-panel" aria-hidden="true">
      <div class="day-header-card">
        <div class="day-title"><span>🛍️ 日本採買清單</span><span class="day-badge">D6 購買</span></div>
        <div class="spot-desc" style="margin-top:6px;">點照片可放大給店員看；勾選與數量會自動保存在這台裝置。</div>
        <div class="shopping-summary" aria-label="購物進度">
          <span class="shopping-progress-track"><span class="shopping-progress-bar" id="shoppingProgressBar"></span></span>
          <span class="shopping-progress-text" id="shoppingProgressText"></span>
        </div>
      </div>
      <div class="shopping-grid" id="shoppingGrid">
        ${trip.shopping.map(item => {
          const state = shoppingState(item);
          return `
            <article class="shopping-item ${state.checked ? "checked" : ""}" id="${escapeAttr(item.id)}">
              <a class="shopping-photo-link" href="${escapeAttr(item.image.productUrl)}" target="_blank" rel="noopener noreferrer" aria-label="前往商品頁查看 ${escapeAttr(item.name)} 商品圖">
                <img class="shopping-photo" src="${escapeAttr(item.image.src)}" alt="${escapeAttr(item.image.alt)}">
              </a>
              <div class="shopping-item-body">
                <div class="shopping-item-head">
                  <input class="shopping-check" type="checkbox" data-shopping-id="${escapeAttr(item.id)}" aria-label="標記 ${escapeAttr(item.name)} 已購買" ${state.checked ? "checked" : ""}>
                  <div><div class="shopping-name">${escapeHtml(item.name)}</div><div class="shopping-jp">${escapeHtml(item.nameLocal)}</div></div>
                </div>
                <div class="shopping-tags">${item.tags.map(tag => `<span class="shopping-tag">${escapeHtml(tag)}</span>`).join("")}</div>
                <div class="shopping-note">${escapeHtml(item.note)}</div>
                <div class="shopping-footer">
                  <div class="quantity-control" aria-label="${escapeAttr(item.name)} 購買數量">
                    <button type="button" data-quantity-id="${escapeAttr(item.id)}" data-delta="-1" aria-label="減少數量">−</button>
                    <span class="quantity-value" data-quantity>${state.quantity}</span>
                    <button type="button" data-quantity-id="${escapeAttr(item.id)}" data-delta="1" aria-label="增加數量">＋</button>
                  </div>
                  <span class="shopping-store">${escapeHtml(item.preferredStore || "")}</span>
                </div>
              </div>
            </article>
          `;
        }).join("")}
      </div>
      <div class="tip-box info" style="margin-top:16px;">
        <div class="tip-title">🧾 採買順序</div>
        D6 串炸後先到 <strong>SUGI 藥局通天閣店</strong>找齊三項；缺貨再到 MEGA 唐吉訶德新世界店。三項皆屬醫藥品，請依包裝說明使用；有慢性病、過敏、正在用藥或症狀持續時，先詢問藥師或醫師。
      </div>
    </section>
  `;
}

function reservationSummaryClass(status) {
  return {
    confirmed: "status-done",
    required: "status-ticket",
    recommended: "status-must",
    walkIn: "status-walkin",
    ticketQueue: "status-ticket"
  }[status] || "status-walkin";
}

function renderReservationSummary() {
  return `
    <div class="info-card">
      <div class="info-title">📋 訂位總表（一頁掌握）</div>
      <div class="reservation-list">
        ${trip.reservations.map(item => {
          const day = item.dayId
            ? dayById.get(item.dayId)
            : trip.days.find(candidate => candidate.events.some(eventItem => eventItem.id === item.eventId));
          return `
            <div class="reservation-item">
              <div class="reservation-date">${escapeHtml(formatDayLabel(day.date).split(" ")[0])}<span>${escapeHtml(formatDayLabel(day.date).match(/\((.)\)/)?.[1] || "")}・${escapeHtml(item.periodLabel)}</span></div>
              <div><div class="reservation-name">${escapeHtml(item.displayName)}</div><div class="reservation-note"><span class="reservation-status ${reservationSummaryClass(item.status)}">${escapeHtml(item.summaryStatusLabel)}</span>${escapeHtml(item.note)}</div></div>
              ${item.action ? `<a href="${escapeAttr(item.action.url)}" target="_blank" rel="noopener noreferrer" class="map-btn reservation-action">${escapeHtml(item.action.label)}</a>` : ""}
            </div>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function formatFlight(flight) {
  const departure = new Date(flight.departure.dateTime);
  const arrival = new Date(flight.arrival.dateTime);
  const departureDate = flight.departure.dateTime.slice(0, 10);
  const relatedDay = trip.days.find(day => day.date === departureDate);
  const date = new Date(`${departureDate}T12:00:00+09:00`);
  const weekday = new Intl.DateTimeFormat("zh-TW", { weekday: "short", timeZone: relatedDay ? trip.meta.timezone : "Asia/Tokyo" }).format(date).replace("週", "");
  const dateLabel = `${String(date.getMonth() + 1).padStart(2, "0")}/${String(date.getDate()).padStart(2, "0")} (${weekday})`;
  const departureTime = new Intl.DateTimeFormat("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: flight.departure.airportCode === "TPE" ? "Asia/Taipei" : "Asia/Tokyo" }).format(departure);
  const arrivalTime = new Intl.DateTimeFormat("zh-TW", { hour: "2-digit", minute: "2-digit", hour12: false, timeZone: flight.arrival.airportCode === "TPE" ? "Asia/Taipei" : "Asia/Tokyo" }).format(arrival);
  return `${dateLabel} ${flight.airlineDisplayName.replace("航空", "")} ${flight.flightNumber} (${departureTime} ${flight.departure.airportCode}${flight.departure.terminal ? ` ${flight.departure.terminal}` : ""} ➔ ${arrivalTime} ${flight.arrival.airportCode}${flight.arrival.terminal ? ` ${flight.arrival.terminal}` : ""})`;
}

function renderInfoPage() {
  return `
    <section id="info-page" class="section-panel" aria-hidden="true">
      ${trip.infoSections.map(section => `
        <div class="info-card ${section.style === "notice" ? "notice-card" : section.style === "guide" ? "guide-card" : ""}">
          <div class="info-title">${escapeHtml(section.title)}</div>
          <div class="info-card-body">${section.contentHtml}</div>
        </div>
      `).join("")}
      ${renderReservationSummary()}
      <div class="info-card">
        <div class="info-title">✈️ 航班備忘資訊</div>
        <div class="info-row"><span class="info-label">去程：</span>${escapeHtml(formatFlight(trip.flights[0]))}</div>
        <div class="info-row"><span class="info-label">回程：</span>${escapeHtml(formatFlight(trip.flights[1]))}</div>
      </div>
      <div class="info-card">
        <div class="info-title">🏨 住宿卡片 (入境卡填寫用)</div>
        ${trip.accommodations.map((item, index) => {
          const nights = Math.round((new Date(item.checkOutDate) - new Date(item.checkInDate)) / 86400000);
          const dateLabel = item.checkInDate === item.checkOutDate ? formatDayLabel(item.checkInDate) : `${formatDayLabel(item.checkInDate).split(" ")[0]} - ${formatDayLabel(item.checkOutDate).split(" ")[0]}`;
          return `
            <div class="info-row" ${index ? 'style="margin-top:12px;"' : ""}><span class="info-label">${escapeHtml(dateLabel)} (${nights}晚)：</span>${escapeHtml(item.name)}</div>
            <div class="copy-box">${escapeHtml(item.nameEn)}<br>${escapeHtml(item.address)}<br>TEL: ${escapeHtml(item.phone)}${item.emergencyPhone ? `<br>夜間／緊急: ${escapeHtml(item.emergencyPhone)}` : ""}</div>
          `;
        }).join("")}
      </div>
      <div class="info-card">
        <div class="info-title">🆘 實用救援連結</div>
        <div style="display:flex; gap:8px; flex-wrap:wrap; margin-top:8px;">
          ${trip.externalLinks.map(link => `<a href="${escapeAttr(link.url)}" target="_blank" rel="noopener noreferrer" class="map-btn" style="padding:8px 12px; font-size:0.85rem;">${escapeHtml(link.label)}</a>`).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderApp() {
  renderHeader();
  renderDayTabs();
  document.getElementById("appContent").innerHTML = [
    ...trip.days.map(renderDay),
    renderShoppingPage(),
    renderInfoPage()
  ].join("");
}

function setPanelState(activeId) {
  document.querySelectorAll(".section-panel").forEach(panel => {
    const active = panel.id === activeId;
    panel.classList.toggle("active", active);
    panel.setAttribute("aria-hidden", active ? "false" : "true");
  });
}

function setBottomNavActive(id) {
  document.querySelectorAll(".b-nav-item").forEach(item => {
    item.classList.toggle("active", item.id === id);
    if (item.id === id) item.setAttribute("aria-current", "page");
    else item.removeAttribute("aria-current");
  });
}

function switchDay(dayId, shouldScroll = true) {
  if (!dayById.has(dayId)) return;
  setPanelState(dayId);
  document.querySelectorAll("#dayTabs .tab-btn").forEach(button => {
    const active = button.dataset.day === dayId;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "date");
    else button.removeAttribute("aria-current");
  });
  const button = document.querySelector(`#dayTabs .tab-btn[data-day="${dayId}"]`);
  button?.scrollIntoView({ behavior: scrollMode(), block: "nearest", inline: "center" });
  document.querySelector(".nav-scroller").style.display = "block";
  setBottomNavActive("bnav-trip");
  userState.lastDayId = dayId;
  saveUserState();
  history.replaceState(null, "", `#${dayId}`);
  if (shouldScroll) window.scrollTo({ top: 0, behavior: scrollMode() });
}

function switchMainNav(type) {
  if (type === "trip") {
    switchDay(userState.lastDayId && dayById.has(userState.lastDayId) ? userState.lastDayId : "d1");
    return;
  }
  document.querySelector(".nav-scroller").style.display = "none";
  setPanelState(`${type}-page`);
  setBottomNavActive(`bnav-${type}`);
  history.replaceState(null, "", `#${type}`);
  window.scrollTo({ top: 0, behavior: scrollMode() });
}

function updateShoppingProgress() {
  const completed = trip.shopping.filter(item => shoppingState(item).checked).length;
  const text = document.getElementById("shoppingProgressText");
  const bar = document.getElementById("shoppingProgressBar");
  if (text) text.textContent = `${completed} / ${trip.shopping.length} 已買`;
  if (bar) bar.style.width = `${trip.shopping.length ? completed / trip.shopping.length * 100 : 0}%`;
}

function bindInteractions() {
  document.getElementById("dayTabs").addEventListener("click", event => {
    const button = event.target.closest("[data-day]");
    if (button) switchDay(button.dataset.day);
  });
  document.querySelector(".bottom-nav").addEventListener("click", event => {
    const button = event.target.closest("[data-main-nav]");
    if (button) switchMainNav(button.dataset.mainNav);
  });
  document.getElementById("appContent").addEventListener("change", event => {
    const shoppingId = event.target.dataset.shoppingId;
    if (shoppingId) {
      const current = shoppingState(trip.shopping.find(item => item.id === shoppingId));
      userState.shopping[shoppingId] = { ...current, checked: event.target.checked };
      event.target.closest(".shopping-item")?.classList.toggle("checked", event.target.checked);
      saveUserState();
      updateShoppingProgress();
    }
  });
  document.getElementById("appContent").addEventListener("click", event => {
    const button = event.target.closest("[data-quantity-id]");
    if (!button) return;
    const item = trip.shopping.find(candidate => candidate.id === button.dataset.quantityId);
    const current = shoppingState(item);
    const quantity = Math.min(item.maxQuantity, Math.max(1, current.quantity + Number(button.dataset.delta)));
    userState.shopping[item.id] = { ...current, quantity };
    button.closest(".quantity-control").querySelector("[data-quantity]").textContent = quantity;
    saveUserState();
  });
}

function syncHeaderHeight() {
  const header = document.querySelector(".header");
  if (header) document.documentElement.style.setProperty("--header-height", `${Math.ceil(header.getBoundingClientRect().height)}px`);
}

function initializeNavigation() {
  const today = new Intl.DateTimeFormat("en-CA", {
    year: "numeric", month: "2-digit", day: "2-digit", timeZone: trip.meta.timezone
  }).format(new Date());
  const todayDay = trip.days.find(day => day.date === today)?.id;
  const hash = location.hash.slice(1);
  if (todayDay) {
    document.querySelector(`[data-day="${todayDay}"]`)?.insertAdjacentHTML("beforeend", '<span class="day-badge today-badge">今天</span>');
    document.querySelector(`#${todayDay} .day-title`)?.insertAdjacentHTML("beforeend", '<span class="day-badge today-badge">今天</span>');
  }
  if (["shopping", "info"].includes(hash)) switchMainNav(hash);
  else switchDay(todayDay || (dayById.has(hash) && hash) || (dayById.has(userState.lastDayId) && userState.lastDayId) || "d1", false);
}

renderApp();
bindInteractions();
updateShoppingProgress();
syncHeaderHeight();
if ("ResizeObserver" in window) new ResizeObserver(syncHeaderHeight).observe(document.querySelector(".header"));
window.addEventListener("orientationchange", syncHeaderHeight);
initializeNavigation();

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js")
      .catch(error => console.error("Service Worker registration failed:", error));
  });
}
