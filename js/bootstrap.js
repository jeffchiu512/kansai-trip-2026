import { trip } from "../data/trip.js?v=10";

// Runtime itinerary adjustments are applied before app.js validates and renders the trip.
// The large base trip file remains stable; this bootstrap contains the latest confirmed plan.
trip.contentVersion = "2.2.0";
trip.updatedAt = "2026-09-14";

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

// --- New / newly formalized places ---
addPlace(
  "osaka-castle-gozabune",
  "大阪城御座船",
  "Osaka Castle Gozabune",
  "大阪府大阪市中央区大阪城2"
);
addPlace(
  "lond-luce-shinsaibashi",
  "Lond luce 心斎橋",
  "Lond luce 心斎橋",
  "大阪府大阪市中央区南船場3-8-14 ACN心斎橋Garden 7F",
  "Lond luce 心斎橋"
);
addPlace(
  "dotonbori-river-cruise",
  "一本松海運 道頓堀水上觀光船",
  "Tazaemonbashi Pier Tombori River Cruise",
  "大阪府大阪市中央区宗右衛門町 太左衛門橋船着場",
  "とんぼりリバークルーズ"
);
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

const katsuhanaReservation = reservation("rsv-katsuhana");
if (katsuhanaReservation) {
  katsuhanaReservation.status = "confirmed";
  katsuhanaReservation.summaryStatusLabel = "● 已訂位";
  katsuhanaReservation.note = "10/8（四）19:00 已確認；60分鐘制、每人一份定食、僅收現金";
  katsuhanaReservation.eventLabel = "✅ 已訂位：10/8（四）19:00";
}

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

if (!reservation("rsv-lond-luce")) {
  trip.reservations.push({
    id: "rsv-lond-luce",
    eventId: "d2-lond-luce",
    periodLabel: "晚間",
    status: "confirmed",
    method: "officialSite",
    displayName: "Lond luce 心斎橋",
    summaryStatusLabel: "● 已預約",
    note: "10/8（四）20:30 旅伴染髮；平日營業至 23:00",
    action: {
      label: "店家資訊",
      url: "https://www.lond.jp/salon/41/"
    },
    eventLabel: "✅ 已預約：10/8（四）20:30"
  });
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

// Shopping is no longer tied to D6 because D6 is a full USJ day.
trip.shopping.forEach(item => {
  item.preferredStore = "D7 心齋橋周邊藥妝優先；前幾天順路買到也可直接完成";
});

// --- Shared / replaced journeys ---
addJourney(
  "tr-d2-direct-city",
  "OMO 退房 → 新今宮住宿寄放行李",
  "OMO Kansai Airport by Hoshino Resorts",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=OMO%20Kansai%20Airport%20by%20Hoshino%20Resorts&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "從臨空城搭南海空港急行往難波方向，在新今宮下車；抵達後先寄放大件行李，再輕裝進大阪城。"
);
addJourney(
  "tr-d2-osaka-castle",
  "新今宮 → 大阪城",
  "Apartment Hotel 11 Shinimamiya 1",
  "Osaka Castle",
  "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=Osaka%20Castle&dir_action=navigate",
  "建議搭 Osaka Metro 前往谷町四丁目／森之宮一帶，再步行進大阪城公園。抵達後先確認御座船當日可換的班次。"
);
addJourney(
  "tr-d2-gozabune",
  "天守閣 → 大阪城御座船乘船處",
  "Osaka Castle Main Tower",
  "Osaka Castle Gozabune",
  "https://www.google.com/maps/dir/?api=1&origin=Osaka%20Castle%20Main%20Tower&destination=Osaka%20Castle%20Gozabune&travelmode=walking",
  "使用關西樂享周遊券 QR Code 依現場規則換取當日船班；航程約 20 分鐘。班次額滿時以現場下一個可搭時段為準。",
  10
);
addJourney(
  "tr-d2-shinsaibashi-free",
  "大阪天滿宮 → 心齋橋／南船場",
  "Osaka Tenmangu Shrine",
  "Shinsaibashi Station",
  "https://www.google.com/maps/dir/?api=1&origin=Osaka%20Tenmangu%20Shrine&destination=Shinsaibashi%20Station&dir_action=navigate",
  "下午後段開始往南船場收斂，不再跨區跑景點；保留咖啡、購物與休息時間，18:30 左右往 KATSU華移動。"
);
addJourney(
  "tr-d2-katsuhana",
  "心齋橋／南船場 → KATSU華",
  "Shinsaibashi Station",
  "とんかつ KATSU華",
  "https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi%20Station&destination=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&dir_action=navigate",
  "19:00 已訂位；店家採 60 分鐘制，建議 18:45 前抵達。"
);
addJourney(
  "tr-d2-lond-luce",
  "KATSU華 → Lond luce 心斎橋",
  "とんかつ KATSU華",
  "Lond luce 心斎橋",
  "https://www.google.com/maps/dir/?api=1&origin=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&destination=Lond%20luce%20%E5%BF%83%E6%96%8E%E6%A9%8B&dir_action=navigate",
  "晚餐約 20:00 結束後直接前往髮廊；預約 20:30，建議 20:20 前抵達。"
);
addJourney(
  "tr-d2-hotel-checkin",
  "Lond luce 心斎橋 → 新今宮住宿",
  "Lond luce 心斎橋",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=Lond%20luce%20%E5%BF%83%E6%96%8E%E6%A9%8B&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "染髮結束時間依實際服務長度為準；回住宿後再領取寄放行李並完成自助入住。"
);

addJourney(
  "tr-d4-return-namba",
  "箕面 → 難波／道頓堀",
  "Minoh Station",
  "Tazaemonbashi Pier",
  "https://www.google.com/maps/dir/?api=1&origin=Minoh%20Station&destination=Tazaemonbashi%20Pier%20Osaka&dir_action=navigate",
  "山區行程結束後直接回大阪南區。若交通順利，先到道頓堀換取晚間遊船班次，再休息、逛街等待 18:30 晚餐。"
);
addJourney(
  "tr-d4-cruise-ticket",
  "難波 → 太左衛門橋船著場換票",
  "Namba Station",
  "Tazaemonbashi Pier",
  "https://www.google.com/maps/dir/?api=1&origin=Namba%20Station&destination=Tazaemonbashi%20Pier%20Osaka&travelmode=walking",
  "樂享券遊船不接受預約、需有空位才能搭乘；建議晚餐前先用 QR Code 換 20:30 班，若額滿就選 21:00 或當日晚間下一個可行班次。"
);
addJourney(
  "tr-d4-gyutan-lemon",
  "太左衛門橋／道頓堀 → 牛舌的檸檬大阪本店",
  "Tazaemonbashi Pier",
  "新宿焼肉 牛たんの檸檬 大阪本店",
  "https://www.google.com/maps/dir/?api=1&origin=Tazaemonbashi%20Pier%20Osaka&destination=%E7%89%9B%E3%81%9F%E3%82%93%E3%81%AE%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&travelmode=walking",
  "18:30 已訂位。山區若延誤，優先守住餐廳訂位；遊船班次再改晚一班。"
);
addJourney(
  "tr-d4-dotonbori-cruise",
  "牛舌的檸檬 → 道頓堀水上觀光船",
  "新宿焼肉 牛たんの檸檬 大阪本店",
  "Tazaemonbashi Pier",
  "https://www.google.com/maps/dir/?api=1&origin=%E7%89%9B%E3%81%9F%E3%82%93%E3%81%AE%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&destination=Tazaemonbashi%20Pier%20Osaka&travelmode=walking",
  "依晚餐前已換好的船班回到乘船處，至少提前 15 分鐘報到；航程約 20 分鐘。"
);
addJourney(
  "tr-d4-return-hotel",
  "道頓堀 → 新今宮住宿",
  "Tazaemonbashi Pier",
  "Apartment Hotel 11 Shinimamiya 1",
  "https://www.google.com/maps/dir/?api=1&origin=Tazaemonbashi%20Pier%20Osaka&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
  "遊船後可在道頓堀短暫散步；今天白天步行量大，不再安排通天閣登塔。"
);

addJourney(
  "tr-d5-harukas",
  "宇治 → 阿倍野／天王寺",
  "Uji Station Kyoto",
  "Abeno Harukas",
  "https://www.google.com/maps/dir/?api=1&origin=Uji%20Station%20Kyoto&destination=Abeno%20Harukas&dir_action=navigate",
  "宇治玩夠就直接回大阪，不再繞京都站吃東洋亭。預留約 1 小時 15～30 分鐘交通與轉乘，抵達阿倍野後先晚餐，再上 HARUKAS 300。"
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

// --- D2: Osaka city day, fixed 19:00 dinner + 20:30 salon ---
const d2 = day("d2");
if (d2) {
  d2.title = "大阪城水上巡遊、天滿宮與心齋橋夜晚";
  d2.badge = "大阪城 · 天滿 · 心齋橋";
  d2.summary = {
    departureLabel: "建議離開 OMO",
    departure: "09:00 左右",
    area: "大阪城・天滿・心齋橋",
    stamina: "中等・市區移動",
    keyPoint: "御座船先確認班次／19:00 KATSU華／20:30 染髮"
  };
  d2.transportSummary.displayText = "南海電車＋Osaka Metro；取消早上 Outlet，先寄行李再完整逛大阪城，傍晚一路往南船場收斂。";
  d2.notices = [
    {
      id: "notice-d2-castle",
      position: "beforeTimeline",
      style: "info",
      title: "🏯 10/8 大阪城注意事項",
      contentHtml: "大阪城天守閣通常 09:00–18:00（17:30 最終入館）；<strong>10/8 因特展換展準備，3 樓展示室暫停開放</strong>，其他樓層仍可參觀。抵達大阪城後先確認御座船可換的當日班次，再安排天守閣參觀順序。"
    },
    {
      id: "notice-d2-evening",
      position: "beforeEvent",
      beforeEventId: "d2-katsuhana",
      style: "warning",
      title: "⏰ 晚上兩個硬時間點",
      contentHtml: "<strong>19:00 KATSU華已訂位</strong>，店家 60 分鐘制；吃完直接前往 <strong>20:30 Lond luce 心斎橋</strong>。18:30 後不再新增景點。"
    }
  ];
  d2.events = [
    {
      id: "d2-omo-checkout",
      type: "logistics",
      schedule: schedule("08:30", "09:00", "08:30 - 09:00"),
      title: "OMO 早餐收尾、退房後直接進大阪",
      descriptionHtml: "今天不逛臨空 Outlet。早餐後完成退房，帶行李搭南海電車直達新今宮，把早上的時間完整還給大阪市區。",
      primaryPlaceId: "omo-kix-place",
      relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [{ id: "d2-direct-city-highlight", text: "🧳 Outlet 改到 D7；今天不在臨空城停留" }],
      actions: []
    },
    {
      id: "d2-luggage-transfer",
      type: "logistics",
      schedule: schedule("09:00", "10:15", "09:00 - 10:15 左右", "around"),
      title: "OMO → 新今宮寄放行李",
      descriptionHtml: "從臨空城搭南海空港急行往大阪，抵達新今宮後優先寄放大件行李；若住宿當日不能寄放，改用南海／JR 新今宮站置物櫃。",
      primaryPlaceId: "shinimamiya-hotel-place",
      relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-direct-city", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d2-osaka-castle",
      type: "visit",
      schedule: schedule("10:45", "13:30", "10:45 - 13:30・含御座船彈性"),
      title: "大阪城公園、天守閣＋御座船",
      descriptionHtml: "先到御座船售票／換票處確認當日可搭班次，再依船班穿插天守閣。10/8 天守閣 3 樓因換展暫停，其餘樓層照常開放；不用為了看完整展館拖太久。",
      primaryPlaceId: "osaka-castle",
      relatedPlaceIds: ["osaka-castle-gozabune"], flightId: null, transportBeforeId: "tr-d2-osaka-castle", reservationId: null,
      highlights: [
        { id: "d2-castle-highlight", text: "🏯 天守閣：10/8 僅 3F 暫停" },
        { id: "d2-gozabune-highlight", text: "🎫 樂享券 #1：大阪城御座船・約20分鐘" }
      ],
      actions: [
        { type: "statusLink", label: "🎫 樂享券：大阪城御座船", url: "https://travelcontentsapp.com/en/attraction/osaka/osaka-castle-gozabune/", statusClass: "rsv-ticket" }
      ]
    },
    {
      id: "d2-lunch",
      type: "meal",
      schedule: schedule("13:30", "14:20", "13:30 - 14:20・就近簡單吃", "around"),
      title: "大阪城周邊午餐／休息",
      descriptionHtml: "依御座船實際班次彈性調整，不設定必吃店。目標是補充體力，不讓午餐排隊壓縮下午與晚上固定行程。",
      primaryPlaceId: null, relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d2-osaka-tenmangu",
      type: "visit",
      schedule: schedule("14:50", "15:50", "14:50 - 15:50"),
      title: "大阪天滿宮",
      descriptionHtml: "參拜供奉學問之神菅原道真的大阪天滿宮。約 45～60 分鐘足夠看本殿、御守與境內；之後開始往心齋橋／南船場方向移動。",
      primaryPlaceId: "osaka-tenmangu", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-osaka-tenmangu", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d2-shinsaibashi-free",
      type: "shopping",
      schedule: schedule("16:20", "18:20", "16:20 - 18:20・自由活動"),
      title: "心齋橋／南船場自由活動",
      descriptionHtml: "咖啡、購物或休息皆可。今天晚上餐廳與髮廊都在南船場一帶，下午後段不再跨區移動，讓 19:00 與 20:30 兩個預約都從容。",
      primaryPlaceId: "shinsaibashi-shopping", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-shinsaibashi-free", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d2-katsuhana",
      type: "meal",
      schedule: schedule("19:00", "20:00", "19:00 - 20:00"),
      title: "とんかつ KATSU 華",
      descriptionHtml: "<strong>已透過 TableCheck 完成 19:00 訂位</strong>。店家晚餐週三、週四、週五營業 18:00–23:00，預約 60 分鐘制、每人需點一份定食，並記得準備現金。",
      primaryPlaceId: "katsuhana", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-katsuhana", reservationId: "rsv-katsuhana",
      highlights: [{ id: "d2-katsuhana-highlight", text: "🥩 已訂位・18:45 前抵達" }], actions: []
    },
    {
      id: "d2-lond-luce",
      type: "reservation",
      schedule: schedule("20:30", null, "20:30 開始・結束依染髮時間", "around"),
      title: "Lond luce 心斎橋｜旅伴染髮",
      descriptionHtml: "<strong>20:30 已預約</strong>。平日店家營業至 23:00；晚餐結束後直接移動，20:20 前抵達較安心。染髮所需時間依當天項目與髮況為準。",
      primaryPlaceId: "lond-luce-shinsaibashi", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-lond-luce", reservationId: "rsv-lond-luce",
      highlights: [], actions: []
    },
    {
      id: "d2-hotel-checkin",
      type: "accommodation",
      schedule: schedule(null, null, "染髮結束後・約22:30起", "flexible"),
      title: "回新今宮住宿領行李 & 自助入住",
      descriptionHtml: "染髮結束後回新今宮，領取白天寄放的行李並完成自助入住。前一晚先確認房號、密碼與入住方式，避免深夜還要處理訊息。",
      primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-hotel-checkin", reservationId: null,
      highlights: [], actions: []
    }
  ];
  d2.endingTransportId = null;
}

// --- D4: Katsuoji / Minoh + fixed dinner + Dotonbori cruise ---
const d4 = day("d4");
if (d4) {
  d4.title = "勝尾寺、箕面自然與道頓堀夜遊";
  d4.badge = "箕面 · 達摩 · 道頓堀";
  d4.summary = {
    departureLabel: "建議出門",
    departure: "07:30",
    area: "勝尾寺・箕面・難波",
    stamina: "中高・山區步行＋夜遊",
    keyPoint: "18:30 牛舌已訂位／晚餐前先換遊船班次"
  };
  d4.transportSummary.displayText = "Metro＋巴士／計程車＋阪急＋Osaka Metro；山區交通保留備案，晚上固定回難波。";
  d4.notices = [
    {
      id: "notice-d4-mountain",
      position: "beforeTimeline",
      style: "warning",
      title: "🚕 山區行程：接駁仍是成敗關鍵",
      contentHtml: "勝尾寺與箕面瀑布之間的交通要在出發前一週再核對阪急巴士與計程車。若接駁無法確認或塞車嚴重，<strong>勝尾寺優先、瀑布可縮短或取消</strong>；18:30 牛舌訂位不能被犧牲。"
    },
    {
      id: "notice-d4-cruise",
      position: "beforeEvent",
      beforeEventId: "d4-cruise-ticket",
      style: "info",
      title: "🚤 遊船先換票，不賭吃完飯才排",
      contentHtml: "關西樂享券的一本松海運道頓堀水上觀光船<strong>不接受樂享券預約，須視現場空位</strong>。回難波後先去太左衛門橋船著場掃 QR 換晚間班次，首選 20:30、備案 21:00。"
    }
  ];
  const katsuojiEvent = d4.events.find(event => event.id === "d4-katsuoji");
  const waterfallEvent = d4.events.find(event => event.id === "d4-minoh-waterfall");
  d4.events = [
    ...(katsuojiEvent ? [katsuojiEvent] : []),
    ...(waterfallEvent ? [waterfallEvent] : []),
    {
      id: "d4-return-namba",
      type: "logistics",
      schedule: schedule("15:15", "17:30", "15:15 - 17:30 左右", "around"),
      title: "箕面下山 → 回難波／道頓堀",
      descriptionHtml: "從山區返回大阪南區。若比預期早到，就把多出的時間用來休息、咖啡或逛街，不再塞 HARBS 固定行程。",
      primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-return-namba", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d4-cruise-ticket",
      type: "logistics",
      schedule: schedule("17:45", "18:10", "17:45 - 18:10・先換晚間船班", "around"),
      title: "太左衛門橋船著場｜先換道頓堀遊船班次",
      descriptionHtml: "用關西樂享周遊券 QR Code 換當日登船券。首選 20:30，若額滿就選 21:00 或當日晚間其他可行班次；換好票再走去晚餐。",
      primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-cruise-ticket", reservationId: null,
      highlights: [{ id: "d4-cruise-pass-highlight", text: "🎫 樂享券 #3：道頓堀水上觀光船" }],
      actions: [{ type: "statusLink", label: "🎫 樂享券設施資訊", url: "https://travelcontentsapp.com/en/attraction/osaka/dotonbori-river-cruise/", statusClass: "rsv-ticket" }]
    },
    {
      id: "d4-gyutan-lemon",
      type: "meal",
      schedule: schedule("18:30", "19:45", "18:30 - 19:45 左右", "around"),
      title: "新宿燒肉 牛舌的檸檬 大阪本店",
      descriptionHtml: "<strong>已訂位 18:30</strong>。白天山區若延誤，所有彈性項目都讓位給這個訂位；若用餐時間拉長，遊船就改 21:00 班。",
      primaryPlaceId: "gyutan-lemon-osaka", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-gyutan-lemon", reservationId: "rsv-gyutan-lemon",
      highlights: [{ id: "d4-gyutan-highlight", text: "🍋 已訂位：10/10（六）18:30" }], actions: []
    },
    {
      id: "d4-dotonbori-cruise",
      type: "visit",
      schedule: schedule(null, null, "20:30 首選／21:00 備案・約20分鐘", "flexible"),
      title: "一本松海運 道頓堀水上觀光船",
      descriptionHtml: "從河面看道頓堀霓虹與大阪南區夜景。官方班次一般到 21:00，每小時 00、30 分出航；樂享券旅客需依現場空位搭乘，至少提前 15 分鐘回乘船處。",
      primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-dotonbori-cruise", reservationId: null,
      highlights: [{ id: "d4-cruise-highlight", text: "🚤 夜間搭船比登通天閣更符合本次路線" }], actions: []
    },
    {
      id: "d4-dotonbori-walk",
      type: "visit",
      schedule: schedule(null, null, "遊船後・視體力短暫散步", "flexible"),
      title: "道頓堀夜間散步 → 回新今宮",
      descriptionHtml: "遊船結束後看體力走走戎橋、格力高跑跑人與道頓堀商圈；今天不安排通天閣登塔，想看通天閣外觀可在住宿附近任何晚上順路散步。",
      primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [], actions: []
    }
  ];
  d4.endingTransportId = "tr-d4-return-hotel";
}

// --- D5: Nara / Uji + Harukas night view; Toyotei no longer fixed ---
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
  d5.transportSummary.displayText = "JR 大和路線＋奈良線＋大阪方向電車；宇治結束後直接回阿倍野，不再繞京都站吃東洋亭。";
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
      descriptionHtml: "宇治結束後直接往天王寺／阿倍野，不再繞京都站。晚餐不綁名店，以不用久排、能在 19:40 左右結束為原則，替 HARUKAS 夜景留充裕時間。",
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
      title: "🎢 10/12 開閉園時間先不要寫死",
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
      descriptionHtml: "不要再塞其他上午景點。前一天 HARUKAS 結束後早點休息，D6 把體力完整留給 USJ。",
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
      descriptionHtml: "心齋橋最後採買 14:30 準時收尾，回新今宮領取寄放行李後直接搭南海往臨空城，不再回大阪市中心。",
      primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-collect-luggage", reservationId: null,
      highlights: [], actions: []
    },
    {
      id: "d7-rinku-outlet",
      type: "shopping",
      schedule: schedule("16:00", "18:00", "16:00 - 18:00 左右・最多2小時", "around"),
      title: "臨空 Premium Outlets｜最後順路看看",
      descriptionHtml: "不再像原 D2 一樣把 Outlet 當半日主行程。今天只鎖定想看的品牌，約 1.5～2 小時就走；官方一般營業到 20:00，因此 16:00 左右抵達仍有足夠餘裕。",
      primaryPlaceId: "rinku-premium-outlets", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-rinku-outlet", reservationId: null,
      highlights: [{ id: "d7-rinku-highlight", text: "🛍️ 原 D2 Outlet 移到這裡・順路不折返" }], actions: []
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
  // The shopping page previously assumed D6 was a drugstore night; D6 is now full-day USJ.
  const shoppingPage = document.getElementById("shopping-page");
  if (shoppingPage) {
    const badge = shoppingPage.querySelector(".day-badge");
    if (badge) badge.textContent = "D7 優先";
    const tip = shoppingPage.querySelector(".tip-box.info:last-of-type");
    if (tip) {
      tip.innerHTML = `
        <div class="tip-title">🧾 採買順序</div>
        D7 心齋橋最後採買時優先處理清單；前幾天若順路看到也可先買，不必拖到最後。<strong>D6 是 USJ 全天，不安排藥妝採買</strong>。若心齋橋未買齊，再視臨空城實際店家補買。
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
