import { trip } from "../data/trip.js?v=10";

// Runtime content adjustments are applied before app.js validates and renders the trip.
// Keeping these changes in a small bootstrap avoids replacing the large trip data file
// for targeted itinerary updates while preserving the existing data schema.
trip.contentVersion = "2.1.1";
trip.updatedAt = "2026-09-11";

const d2 = trip.days.find(day => day.id === "d2");
const katsuhanaReservation = trip.reservations.find(item => item.id === "rsv-katsuhana");
const katsuhanaJourney = trip.journeys["tr-d2-katsuhana"];

if (d2) {
  d2.transportSummary.displayText = "南海電車＋Osaka Metro；臨空城往新今宮約 35～40 分鐘，下午保留大阪城、天滿宮與 19:00 晚餐。";

  const timeLimitNotice = d2.notices.find(item => item.id === "notice-d2-time-limit");
  if (timeLimitNotice) {
    timeLimitNotice.contentHtml = "Outlet 10:00 才開，今天只有約 2 小時 15 分鐘，請先列好品牌與店號，<strong>12:15 準時結帳</strong>。12:45 前回 OMO 領行李，13:05 左右搭南海空港急行往新今宮。大阪城若遇排隊，優先縮短館內停留；晚餐已預約 <strong>19:00 KATSU華</strong>，請於 18:45 前抵達店家。";
  }

  const katsuhanaEvent = d2.events.find(event => event.id === "d2-katsuhana");
  if (katsuhanaEvent) {
    katsuhanaEvent.schedule = {
      start: "19:00",
      end: "20:00",
      qualifier: "exact",
      displayLabel: "19:00 - 20:00"
    };
    katsuhanaEvent.descriptionHtml = "米其林推薦名店！外皮香酥、肉質極致柔軟的頂級炸豬排。<strong>已透過 TableCheck 完成 19:00 訂位</strong>；官網目前公告晚餐週三、週四、週五營業（18:00–23:00），約 12 席、預約用餐時間為 60 分鐘，每人需點一份定食。臨時休業仍以店家 Instagram 公告為準，並記得準備現金。";
  }

  const hotelCheckinEvent = d2.events.find(event => event.id === "d2-hotel-checkin");
  if (hotelCheckinEvent) {
    hotelCheckinEvent.schedule = {
      start: "20:00",
      end: "21:00",
      qualifier: "exact",
      displayLabel: "20:00 - 21:00"
    };
  }
}

if (katsuhanaReservation) {
  katsuhanaReservation.status = "confirmed";
  katsuhanaReservation.summaryStatusLabel = "● 已訂位";
  katsuhanaReservation.note = "10/8（四）19:00 已確認；60分鐘制、每人一份定食、僅收現金";
  katsuhanaReservation.eventLabel = "✅ 已訂位：10/8（四）19:00";
}

if (katsuhanaJourney?.steps?.[0]) {
  katsuhanaJourney.steps[0].noteHtml = "17:10 左右離開天滿宮，距 19:00 訂位仍有充裕緩衝；可在堺筋本町附近休息或散步，<strong>18:45 前抵達 KATSU華</strong>。";
}

void import("./app.js?v=10").then(() => {
  const infoPage = document.getElementById("info-page");
  if (!infoPage) return;

  const updatedLabel = String(trip.updatedAt || "").replaceAll("-", "/");
  infoPage.insertAdjacentHTML("beforeend", `
    <div aria-label="版本資訊" style="text-align:center; margin:24px 0 8px; color:#888; font-size:0.78rem; line-height:1.6;">
      ${trip.meta.title} · v${trip.contentVersion}<br>
      最後更新：${updatedLabel}
    </div>
  `);
});
