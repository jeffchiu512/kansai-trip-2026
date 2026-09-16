import { trip } from "../data/trip.js?v=10";
import { applyD2Plan } from "../data/days/d2.js?v=1";
import { applyD4Plan } from "../data/days/d4.js?v=1";

// Runtime itinerary adjustments are applied before app.js validates and renders the trip.
// Day-specific overrides are being migrated into data/days modules.
trip.contentVersion = "2.3.1";
trip.updatedAt = "2026-09-16";

const day = id => trip.days.find(item => item.id === id);
const reservation = id => trip.reservations.find(item => item.id === id);
const addPlace = (id, name, query, address = null, nameLocal = null) => {
  trip.places[id] = {
    id,
    name,
    nameLocal,
    address,
    map: { query, coordinates: null },
    links: []
  };
};
const addJourney = (id, label, from, to, routeUrl, noteHtml, estimatedDurationMin = null) => {
  trip.journeys[id] = {
    id,
    label,
    from: { type: "text", value: from },
    to: { type: "text", value: to },
    routeUrl,
    estimatedDurationMin,
    noteHtml,
    steps: []
  };
};
const schedule = (start, end, displayLabel, qualifier = "exact") => ({ start, end, qualifier, displayLabel });

// --- New / newly formalized places still owned by legacy bootstrap sections ---
addPlace(
  "usj",
  "日本環球影城 Universal Studios Japan",
  "Universal Studios Japan",
  "大阪府大阪市此花区桜島2-1-33",
  "ユニバーサル・スタジオ・ジャパン"
);

// --- Reservations / purchased tickets ---
const obsoleteReservations = new Set([
  "rsv-harbs",
  "rsv-toyotei",
  "rsv-kaiyukan",
  "rsv-shinsekai-kushikatsu"
]);
trip.reservations = trip.reservations.filter(item => !obsoleteReservations.has(item.id));

const harukasReservation = reservation("rsv-harukas-300");
if (harukasReservation) {
  harukasReservation.eventId = "d5-harukas-300";
  harukasReservation.periodLabel = "夜景";
  harukasReservation.status = "recommended";
  harukasReservation.method = "haveFunPass";
  harukasReservation.displayName = "HARUKAS 300 展望台";
  harukasReservation.summaryStatusLabel = "● 樂享券";
  harukasReservation.note = "D5 晚上使用關西樂享周遊券；通常 09:00–22:00，最晚 21:30 入場，出發前再確認當日營業時間";
  harukasReservation.action = {
    label: "官方營業資訊",
    url: "https://www.abenoharukas-300.jp/observatory/information.html"
  };
  harukasReservation.eventLabel = "🎫 樂享券 #2：HARUKAS 300";
}

if (!reservation("rsv-usj")) {
  trip.reservations.push({
    id: "rsv-usj",
    eventId: "d6-usj-main",
    periodLabel: "全天",
    status: "confirmed",
    method: "klook",
    displayName: "日本環球影城 1 日票＋能量手環",
    summaryStatusLabel: "● 已購買",
    note: "D6 10/12 使用；另含關西樂享周遊券 3 項設施。10 月正式開閉園時間公布後再確認到場時間。",
    action: {
      label: "USJ 官方營業時間",
      url: "https://www.usj.co.jp/web/zh/tw/park-guide/schedule/park-hour2"
    },
    eventLabel: "✅ 已購買：USJ 1 日票＋能量手環"
  });
}

trip.shopping.forEach(item => {
  item.preferredStore = "D7 心齋橋周邊藥妝優先；前幾天順路買到也可直接完成";
});

// --- Day modules ---
applyD2Plan(trip, { addPlace, addJourney, schedule, reservation });
applyD4Plan(trip, { addPlace, addJourney, schedule, day });

// --- Shared / replaced journeys still owned by legacy bootstrap sections ---
addJourney(
  "tr-d5-harukas",
  "宇治 → 阿倍野／天王寺",
  "Uji Station Kyoto",
  "Abeno Harukas",
  "https://www.google.com/maps/dir/?api=1&origin=Uji%20Station%20Kyoto&destination=Abeno%20Harukas&dir_action=navigate",
  "宇治結束後直接前往大阪阿倍野／天王寺。預留約 1 小時 15～30 分鐘交通與轉乘，抵達後先晚餐，再上 HARUKAS 300。"
);
addJourney(
  "tr-d5-return",
  "HARUKAS 300 → 新今宮住宿",
  "Abeno Harukas",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=Abeno%20Harukas&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "夜景結束後直接回住宿休息，為隔天 USJ 全天行程保留體力。"
);

addJourney(
  "tr-d6-usj",
  "新今宮住宿 → USJ",
  "Apartment Hotel 11 Shinimamiya 1",
  "Universal Studios Japan",
  "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=Universal%20Studios%20Japan&dir_action=navigate",
  "以 JR 為主：新今宮 → 西九条 → JRゆめ咲線 → ユニバーサルシティ。10/12 正式開園時間公布後，反推抵達時間；建議比官方開園時間提早 60～90 分鐘到門口。"
);
addJourney(
  "tr-d6-return-usj",
  "USJ → 新今宮住宿",
  "Universal Studios Japan",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=Universal%20Studios%20Japan&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "Halloween Horror Nights 結束後依當日閉園時間離園；回程仍以 JR ユニバーサルシティ → 西九条 → 新今宮為主。"
);

addJourney(
  "tr-d7-collect-luggage",
  "心齋橋 → 新今宮領行李",
  "Shinsaibashi Station",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi%20Station&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "14:30 左右離開心齋橋，回住宿／車站領取上午寄放的行李，接著搭南海電車往臨空城。"
);
addJourney(
  "tr-d7-rinku-outlet",
  "新今宮 → 臨空 Premium Outlets",
  "Shin-Imamiya Station",
  "Rinku Premium Outlets",
  "https://www.google.com/maps/dir/?api=1&origin=Shin-Imamiya%20Station&destination=Rinku%20Premium%20Outlets&dir_action=navigate",
  "搭南海空港急行至りんくうタウン。大件行李先放官方置物櫃；放不下可至 Main Side 1F Information Center／Sea Side 1F Welcome Center 使用大型行李臨時寄放（¥1,000／件／日，現金）。"
);
addJourney(
  "tr-d7-nikko-checkin",
  "臨空城 → 關西機場日航酒店",
  "Rinku Premium Outlets",
  "Hotel Nikko Kansai Airport",
  "https://www.google.com/maps/dir/?api=1&origin=Rinku%20Premium%20Outlets&destination=Hotel%20Nikko%20Kansai%20Airport&dir_action=navigate",
  "Outlet 只留約 1.5～2 小時，18:00 左右收尾；從りんくうタウン搭一站至関西空港，再步行前往 Aeroplaza 內的日航酒店。"
);

// --- D5: Nara / Uji + Harukas night view ---
const d5 = day("d5");
if (d5) {
  d5.title = "奈良萌鹿、宇治抹茶與阿倍野夜景";
  d5.badge = "奈良 · 宇治 · HARUKAS";
  d5.summary = {
    departureLabel: "建議出門",
    departure: "08:00",
    area: "奈良・宇治・阿倍野",
    stamina: "中高・跨城移動",
    keyPoint: "中村藤吉16:00前受付／鳳凰堂內部選配／晚上HARUKAS"
  };
  d5.transportSummary.displayText = "JR 大和路線＋奈良線＋大阪方向電車；宇治結束後直接前往阿倍野／天王寺。";
  d5.notices = [
    {
      id: "notice-d5-nara",
      position: "beforeTimeline",
      style: "warning",
      title: "⚠️ 三連休週日：奈良仍要早去",
      contentHtml: "10/11 是三連休中間的週日，奈良公園預期人多。維持早上先奈良、下午宇治的方向，12:30 左右離開奈良，不讓上午拖到後面的抹茶與夜景。"
    },
    {
      id: "notice-d5-uji",
      position: "beforeEvent",
      beforeEventId: "d5-uji",
      style: "info",
      title: "🍵 宇治：先抽中村藤吉，再決定鳳凰堂內部",
      contentHtml: "中村藤吉本店咖啡<strong>16:00 截止受付、不可預約</strong>；到宇治先抽整理券。平等院鳳凰堂內部在 6/16～10/15 減少場次與每場人數，週末可能久候，因此<strong>內部參觀列為選配</strong>，庭園＋鳳翔館＋抹茶優先。"
    }
  ];
  const naraEvent = d5.events.find(event => event.id === "d5-nara-todaiji");
  const ujiEvent = d5.events.find(event => event.id === "d5-uji");
  if (ujiEvent) {
    ujiEvent.schedule = schedule("13:30", "17:00", "13:30 - 17:00 左右", "around");
    ujiEvent.descriptionHtml = "抵達宇治先到<strong>中村藤吉本店抽候位</strong>，再依叫號時間穿插平等院庭園與鳳翔館。鳳凰堂內部參觀因 2026 夏季減班，週末等待可能很長，只有遇到不影響 17:00 左右離開宇治的場次才參加。";
    ujiEvent.highlights = [{ id: "d5-uji-highlight-1", text: "🍵 中村藤吉：16:00 前完成受付" }];
  }
  d5.events = [
    ...(naraEvent ? [naraEvent] : []),
    ...(ujiEvent ? [ujiEvent] : []),
    {
      id: "d5-abeno-dinner",
      type: "meal",
      schedule: schedule("18:30", "19:40", "18:30 - 19:40 左右", "around"),
      title: "回大阪阿倍野｜彈性晚餐",
      descriptionHtml: "宇治結束後直接往天王寺／阿倍野。晚餐以不用久排、能在 19:40 左右結束為原則，替 HARUKAS 夜景留充裕時間。",
      primaryPlaceId: null, relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d5-harukas", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d5-harukas-300",
      type: "visit",
      schedule: schedule("20:00", "21:15", "20:00 - 21:15"),
      title: "HARUKAS 300 阿倍野夜景",
      descriptionHtml: "使用關西樂享周遊券登上大阪高空夜景。一般營業 09:00–22:00、最晚 21:30 入場；本次排 20:00 左右上樓，不追夕陽，純看夜景更從容。2026/10/11 仍在名偵探柯南合作活動期間。",
      primaryPlaceId: "harukas-300", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: "rsv-harukas-300",
      highlights: [{ id: "d5-harukas-pass-highlight", text: "🎫 樂享券 #2：HARUKAS 300" }],
      actions: [
        { type: "statusLink", label: "🎫 HARUKAS 300 官方資訊", url: "https://www.abenoharukas-300.jp/observatory/information.html", statusClass: "rsv-ticket" }
      ]
    }
  ];
  d5.endingTransportId = "tr-d5-return";
}

// --- D6: Full-day USJ + Halloween Horror Nights ---
const d6 = day("d6");
if (d6) {
  d6.title = "USJ 全天攻略＋Halloween Horror Nights";
  d6.badge = "USJ · 任天堂 · 萬聖驚魂夜";
  d6.summary = {
    departureLabel: "建議抵達園區",
    departure: "官方開園前 60～90 分鐘",
    area: "Universal Studios Japan",
    stamina: "高・全天步行與排隊",
    keyPoint: "入園先處理任天堂世界／Biohazard e整理券，18:00後萬聖節"
  };
  d6.transportSummary.displayText = "JR 新今宮 → 西九条 → ユニバーサルシティ；10/12 正式開閉園時間尚待官方公布，出發前再確認。";
  d6.notices = [
    {
      id: "notice-d6-hours",
      position: "beforeTimeline",
      style: "warning",
      title: "🎢 10/12 開閉園時間待官方公布",
      contentHtml: "USJ 官方目前尚未公布 10/12 的正式營業時間，而且園區也提醒可能<strong>比公告開園時間提早開放入場</strong>。出發前一週再確認當日時間，原則上提前 60～90 分鐘抵達門口。"
    },
    {
      id: "notice-d6-tickets",
      position: "beforeEvent",
      beforeEventId: "d6-usj-main",
      style: "info",
      title: "📱 入園第一件事：看官方 App",
      contentHtml: "確認 Klook 憑證是否含 SUPER NINTENDO WORLD 指定入場時段；若沒有，入園後立即在 USJ App 確認 Area Timed Entry Ticket。另『BIOHAZARD REQUIEM: The Dive』需要 <strong>e整理券</strong>，10:00 起開放體驗。"
    }
  ];
  d6.events = [
    {
      id: "d6-usj-arrival",
      type: "logistics",
      schedule: schedule(null, null, "依官方開園時間反推・提早60～90分抵達", "flexible"),
      title: "新今宮出發 → USJ 提前排隊",
      descriptionHtml: "全天行程集中在 USJ。依官方開園時間提早 60～90 分鐘抵達園區，入園後立即確認任天堂世界與各項整理券狀態。",
      primaryPlaceId: "usj", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d6-usj", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d6-usj-main",
      type: "visit",
      schedule: schedule(null, "17:30", "開園後 - 17:30・白天主力", "flexible"),
      title: "USJ 白天｜SUPER NINTENDO WORLD＋主要設施",
      descriptionHtml: "入園後先處理 SUPER NINTENDO WORLD 入場資格與需要的 e整理券，再依排隊時間玩任天堂世界、Power-Up Band 互動、哈利波特、小小兵、侏羅紀等想玩的設施。『BIOHAZARD REQUIEM: The Dive』10:00 起至閉園、需 e整理券，可同步處理。",
      primaryPlaceId: "usj", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: "rsv-usj",
      highlights: [
        { id: "d6-usj-powerup-highlight", text: "🍄 能量手環：SUPER NINTENDO WORLD 優先" },
        { id: "d6-usj-bio-highlight", text: "🧟 BIOHAZARD：需 e整理券" }
      ],
      actions: [
        { type: "statusLink", label: "📅 USJ 官方營業時間", url: "https://www.usj.co.jp/web/zh/tw/park-guide/schedule/park-hour2", statusClass: "rsv-must" },
        { type: "statusLink", label: "🧟 2026 Halloween Horror Nights", url: "https://www.usj.co.jp/web/ja/jp/events/halloween-extreme-autumn-2026/halloween-horror-nights", statusClass: "rsv-must" }
      ]
    },
    {
      id: "d6-usj-dinner",
      type: "meal",
      schedule: schedule("17:00", "18:00", "17:00 左右・提早吃晚餐／休息", "around"),
      title: "園內提早晚餐＋休息",
      descriptionHtml: "萬聖節夜間活動 18:00 起進入重點時段，建議 17:00 左右先吃晚餐、補水與休息，避免 18:00 後還在餐廳排隊。",
      primaryPlaceId: "usj", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d6-usj-halloween",
      type: "visit",
      schedule: schedule("18:00", null, "18:00 - 閉園・Halloween Horror Nights", "flexible"),
      title: "Halloween Horror Nights｜Street Zombies＋Zombie de Dance",
      descriptionHtml: "2026 年 Street Zombies 與 Zombie de Dance 都是 18:00 起至閉園。晚上不提早離園，把一天最後的體力留給萬聖節氣氛；實際演出／設施狀態以當日官方 App 為準。",
      primaryPlaceId: "usj", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [{ id: "d6-halloween-highlight", text: "🎃 18:00 後才是這天第二個主場" }], actions: []
    }
  ];
  d6.endingTransportId = "tr-d6-return-usj";
}

// --- D7: final Osaka shopping + brief Rinku stop on the way to KIX ---
const d7 = day("d7");
if (d7) {
  d7.title = "地道早市、心齋橋採買與臨空收尾";
  d7.badge = "木津 · 心齋橋 · 臨空城";
  d7.summary = {
    departureLabel: "輕裝出門",
    departure: "07:35 左右",
    area: "木津・難波・心齋橋・臨空城",
    stamina: "中等・最後帶行李移動",
    keyPoint: "10:00退房／14:30收尾／Outlet只逛1.5～2小時"
  };
  d7.transportSummary.displayText = "步行＋Osaka Metro＋南海電車；下午回新今宮領行李後順路停臨空城，再搭一站到關西機場日航酒店。";
  d7.notices = [
    {
      id: "notice-d7-luggage",
      position: "beforeTimeline",
      style: "info",
      title: "🧳 D7 行李動線",
      contentHtml: "早上市區行程維持輕裝，10:00 退房後寄物；14:30 心齋橋收尾後回新今宮領行李。臨空 Outlet 有多種置物櫃，超大型行李放不下可使用官方大型行李臨時寄放，<strong>¥1,000／件／日、僅收現金</strong>。"
    }
  ];
  const keepIds = ["d7-kizu-market", "d7-namba-yasaka", "d7-checkout", "d7-pokemon-center", "d7-jojoen", "d7-shinsaibashi-shopping"];
  const kept = keepIds.map(id => d7.events.find(event => event.id === id)).filter(Boolean);
  d7.events = [
    ...kept,
    {
      id: "d7-collect-luggage",
      type: "logistics",
      schedule: schedule("14:30", "15:15", "14:30 - 15:15 左右", "around"),
      title: "回新今宮領行李",
      descriptionHtml: "心齋橋最後採買於 14:30 左右收尾，回新今宮領取寄放行李後直接搭南海電車前往臨空城。",
      primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-collect-luggage", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d7-rinku-outlet",
      type: "shopping",
      schedule: schedule("16:00", "18:00", "16:00 - 18:00 左右・最多2小時", "around"),
      title: "臨空 Premium Outlets｜最後順路看看",
      descriptionHtml: "鎖定想看的品牌，停留約 1.5～2 小時。官方一般營業至 20:00，16:00 左右抵達仍有充裕時間；逛完直接前往關西機場日航酒店。",
      primaryPlaceId: "rinku-premium-outlets", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-rinku-outlet", reservationId: null,
      highlights: [{ id: "d7-rinku-highlight", text: "🛍️ 臨空城順路採買・停留約1.5～2小時" }], actions: []
    },
    {
      id: "d7-nikko-checkin",
      type: "accommodation",
      schedule: schedule("18:00", "19:00", "18:00 - 19:00 左右", "around"),
      title: "臨空城 → 關西機場日航酒店 Check-in",
      descriptionHtml: "Outlet 收尾後回りんくうタウン站，搭一站前往関西空港；日航酒店位在 Aeroplaza，入住後整理行李、確認重量並早點休息，準備 D8 07:50 班機。",
      primaryPlaceId: "hotel-nikko-kix-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-nikko-checkin", reservationId: null,
      highlights: [], actions: []
    }
  ];
  d7.endingTransportId = null;
}

void import("./app.js?v=10").then(() => {
  const shoppingPage = document.getElementById("shopping-page");
  if (shoppingPage) {
    const badge = shoppingPage.querySelector(".day-badge");
    if (badge) badge.textContent = "D7 優先";
    const tip = shoppingPage.querySelector(".tip-box.info:last-of-type");
    if (tip) {
      tip.innerHTML = `
        <div class="tip-title">🧾 採買順序</div>
        D7 心齋橋採買時優先處理清單；前幾天若順路看到也可先買。心齋橋未買齊的品項，再視臨空城實際店家補買。
      `;
    }
  }

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
