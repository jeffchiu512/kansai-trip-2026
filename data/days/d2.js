export function applyD2Plan(trip, { addJourney, schedule, setDay }) {
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
    "tr-d2-lond-luce",
    "大阪天滿宮 → Lond luce 心斎橋",
    "Osaka Tenmangu Shrine",
    "Lond luce 心斎橋",
    "https://www.google.com/maps/dir/?api=1&origin=Osaka%20Tenmangu%20Shrine&destination=Lond%20luce%20%E5%BF%83%E6%96%8E%E6%A9%8B&dir_action=navigate",
    "16:30 已預約染髮；建議 16:20 前抵達。"
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
    "tr-d2-hotel-checkin",
    "KATSU華 → 新今宮住宿",
    "とんかつ KATSU華",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "晚餐後回新今宮，領取白天寄放的行李並完成自助入住。"
  );

  setDay({
    id: "d2",
    dayNumber: 2,
    date: "2026-10-08",
    title: "大阪城水上巡遊、天滿宮與心齋橋夜晚",
    badge: "大阪城 · 天滿 · 心齋橋",
    overnight: { type: "accommodation", accommodationId: "shinimamiya-1" },
    routeOrigin: { type: "accommodation", accommodationId: "omo-kix" },
    summary: {
      departureLabel: "建議離開 OMO",
      departure: "09:00 左右",
      area: "大阪城・天滿・心齋橋",
      stamina: "中等・市區移動",
      keyPoint: "御座船先確認班次／16:30 染髮／19:00 KATSU華"
    },
    transportSummary: {
      displayText: "南海電車＋Osaka Metro；先寄放行李，再前往大阪城，下午往心齋橋／南船場移動。"
    },
    notices: [
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
        beforeEventId: "d2-lond-luce",
        style: "warning",
        title: "⏰ 下午與晚餐兩個硬時間點",
        contentHtml: "<strong>16:30 Lond luce 心斎橋染髮已預約</strong>；<strong>19:00 KATSU華已訂位</strong>，店家 60 分鐘制，建議 18:45 前抵達。"
      }
    ],
    events: [
      {
        id: "d2-omo-checkout",
        type: "logistics",
        schedule: schedule("08:30", "09:00", "08:30 - 09:00"),
        title: "OMO 早餐收尾、退房後直接進大阪",
        descriptionHtml: "早餐後完成退房，帶行李搭南海電車前往新今宮，寄放行李後開始大阪市區行程。",
        primaryPlaceId: "omo-kix-place",
        relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
        highlights: [{ id: "d2-direct-city-highlight", text: "🧳 退房後直接前往新今宮寄放行李" }],
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
        descriptionHtml: "參拜供奉學問之神菅原道真的大阪天滿宮。約 45～60 分鐘足夠看本殿、御守與境內；15:50 左右離開，前往心齋橋的 Lond luce。",
        primaryPlaceId: "osaka-tenmangu", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-osaka-tenmangu", reservationId: null,
        highlights: [], actions: []
      },
      {
        id: "d2-lond-luce",
        type: "reservation",
        schedule: schedule("16:30", null, "16:30 開始・結束依染髮時間", "around"),
        title: "Lond luce 心斎橋｜染髮",
        descriptionHtml: "<strong>16:30 已預約</strong>。建議 16:20 前抵達；染髮所需時間依當天項目與髮況為準。",
        primaryPlaceId: "lond-luce-shinsaibashi", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-lond-luce", reservationId: "rsv-lond-luce",
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
        id: "d2-hotel-checkin",
        type: "accommodation",
        schedule: schedule(null, null, "晚餐後・約20:15起", "flexible"),
        title: "回新今宮住宿領行李 & 自助入住",
        descriptionHtml: "晚餐結束後回新今宮，領取白天寄放的行李並完成自助入住。前一晚先確認房號、密碼與入住方式。",
        primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-hotel-checkin", reservationId: null,
        highlights: [], actions: []
      }
    ],
    endingTransportId: null
  });
}
