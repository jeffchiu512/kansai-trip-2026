export function applyD2Plan(trip, { addJourney, walkStep, trainStep, schedule, setDay }) {
  addJourney(
    "tr-d2-direct-city",
    "OMO 退房 → 新今宮住宿寄放行李",
    "OMO Kansai Airport by Hoshino Resorts",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=OMO%20Kansai%20Airport%20by%20Hoshino%20Resorts&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "從りんくうタウン搭南海空港急行往なんば方向，在新今宮下車；普通車資約 ¥780／人，不必加購ラピート特急券。",
    45,
    [
      walkStep("OMO → りんくうタウン駅", "OMO 關西機場", "りんくうタウン駅", "約1～5分", "依飯店與車站連通動線前往南海月台，帶行李優先走電梯。"),
      trainStep({
        label: "りんくうタウン → 新今宮",
        from: "りんくうタウン",
        to: "新今宮",
        displayMeta: "約35～37分・往「なんば」方面・直達",
        amount: 780,
        badges: [{ colorKey: "nankai", label: "南海空港急行" }],
        noteHtml: "搭空港急行／普通即可；<span class=\"rs-warn\">ラピート需另付特急料金，不需要搭</span>。"
      }),
      walkStep("新今宮駅 → 住宿", "新今宮駅", "Apartment Hotel 11 Shinimamiya 1", "約2～5分", "抵達後先詢問寄放大件行李；若無法寄放，改用南海／JR 新今宮站置物櫃。")
    ]
  );
  addJourney(
    "tr-d2-osaka-castle",
    "新今宮 → 大阪城",
    "Apartment Hotel 11 Shinimamiya 1",
    "Osaka Castle",
    "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=Osaka%20Castle&dir_action=navigate",
    "改採 JR 大阪環狀線直達森ノ宮，比繞 Osaka Metro 更簡單；新今宮到森ノ宮約 12～13 分、¥180／人。",
    40,
    [
      walkStep("住宿 → JR 新今宮駅", "Apartment Hotel 11 Shinimamiya 1", "JR 新今宮駅", "約2～5分"),
      trainStep({
        label: "新今宮 → 森ノ宮",
        from: "新今宮",
        to: "森ノ宮",
        displayMeta: "約12～13分・內回り「天王寺・鶴橋」方面・直達",
        amount: 180,
        badges: [{ colorKey: "jr", label: "JR" }, { colorKey: "jro", label: "Ⓞ 大阪環状線" }],
        noteHtml: "不用在天王寺或鶴橋轉車；看到大阪環状線內回り、往天王寺／鶴橋方向即可。"
      }),
      walkStep("森ノ宮駅 → 大阪城天守閣／御座船區域", "森ノ宮駅", "大阪城天守閣", "約18～25分", "由大阪城公園東南側進入；抵達核心區後先確認御座船換票與當日可搭班次。")
    ]
  );
  addJourney(
    "tr-d2-gozabune",
    "天守閣 → 大阪城御座船乘船處",
    "Osaka Castle Main Tower",
    "Osaka Castle Gozabune",
    "https://www.google.com/maps/dir/?api=1&origin=Osaka%20Castle%20Main%20Tower&destination=Osaka%20Castle%20Gozabune&travelmode=walking",
    "天守閣與御座船都在大阪城公園內，依現場指標步行；船班以換票時取得的時間為準。",
    10,
    [
      walkStep("天守閣 → 御座船乘船處", "大阪城天守閣", "大阪城御座船乘船處", "約8～12分", "使用關西樂享周遊券 QR Code 依現場規則換取當日船班；航程約 20 分鐘。")
    ]
  );
  addJourney(
    "tr-d2-lond-luce",
    "大阪天滿宮 → Lond luce 心斎橋",
    "Osaka Tenmangu Shrine",
    "Lond luce 心斎橋",
    "https://www.google.com/maps/dir/?api=1&origin=Osaka%20Tenmangu%20Shrine&destination=Lond%20luce%20%E5%BF%83%E6%96%8E%E6%A9%8B&dir_action=navigate",
    "大阪天滿宮步行回南森町，搭堺筋線直達長堀橋，再步行到南船場 3 丁目；地鐵約 ¥190／人。16:30 已預約，建議 16:20 前抵達。",
    25,
    [
      walkStep("大阪天滿宮 → 南森町駅", "大阪天滿宮", "南森町駅", "約3～5分"),
      trainStep({
        label: "南森町 → 長堀橋",
        from: "南森町",
        to: "長堀橋",
        displayMeta: "約5～6分・往「天下茶屋」方面・直達",
        amount: 190,
        badges: [{ colorKey: "sakai", label: "Ⓚ 堺筋線" }],
        noteHtml: "中途經北浜、堺筋本町，不用轉車。"
      }),
      walkStep("長堀橋駅 → Lond luce 心斎橋", "長堀橋駅", "Lond luce 心斎橋", "約8～10分", "地址：南船場3-8-14 ACN心斎橋Garden 7F；16:20 前抵達較安心。")
    ]
  );
  addJourney(
    "tr-d2-katsuhana",
    "Lond luce／南船場 → KATSU華",
    "Lond luce 心斎橋",
    "とんかつ KATSU華",
    "https://www.google.com/maps/dir/?api=1&origin=Lond%20luce%20%E5%BF%83%E6%96%8E%E6%A9%8B&destination=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&travelmode=walking",
    "兩地都在船場一帶，直接步行比進出地鐵更穩；KATSU華在北久宝寺町2-2-11，堺筋本町站 10 號出口南方約3分。19:00 已訂位，建議 18:45 前到店。",
    20,
    [
      walkStep("Lond luce → KATSU華", "Lond luce 心斎橋", "とんかつ KATSU華", "約15～20分", "染髮結束後直接往東南方向步行到北久宝寺町；若現場結束時間偏晚，直接依 Google Maps 即時步行導航。")
    ]
  );
  addJourney(
    "tr-d2-hotel-checkin",
    "KATSU華 → 新今宮住宿",
    "とんかつ KATSU華",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "餐廳距堺筋本町站 10 號出口約3分；搭堺筋線直達動物園前，再步行回住宿。地鐵約 ¥240／人。",
    20,
    [
      walkStep("KATSU華 → 堺筋本町駅", "とんかつ KATSU華", "堺筋本町駅", "約3分", "餐廳官方資訊標示由 10 號出口步行約3分。"),
      trainStep({
        label: "堺筋本町 → 動物園前",
        from: "堺筋本町",
        to: "動物園前",
        displayMeta: "約6～7分・往「天下茶屋」方面・直達",
        amount: 240,
        badges: [{ colorKey: "sakai", label: "Ⓚ 堺筋線" }]
      }),
      walkStep("動物園前駅 → 住宿", "動物園前駅", "Apartment Hotel 11 Shinimamiya 1", "約5分", "領取白天寄放的行李並完成自助入住。")
    ]
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
      displayText: "南海＋JR＋Osaka Metro；今日一般交通估計約 ¥1,580／人（御座船使用樂享券，不含票券本身）。"
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
        id: "d2-omo-checkout", type: "logistics", schedule: schedule("08:30", "09:00", "08:30 - 09:00"),
        title: "OMO 早餐收尾、退房後直接進大阪",
        descriptionHtml: "早餐後完成退房，帶行李搭南海電車前往新今宮，寄放行李後開始大阪市區行程。",
        primaryPlaceId: "omo-kix-place", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
        highlights: [{ id: "d2-direct-city-highlight", text: "🧳 退房後直接前往新今宮寄放行李" }], actions: []
      },
      {
        id: "d2-luggage-transfer", type: "logistics", schedule: schedule("09:00", "10:15", "09:00 - 10:15 左右", "around"),
        title: "OMO → 新今宮寄放行李",
        descriptionHtml: "從臨空城搭南海空港急行往大阪，抵達新今宮後優先寄放大件行李；若住宿當日不能寄放，改用南海／JR 新今宮站置物櫃。",
        primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-direct-city", reservationId: null,
        highlights: [], actions: []
      },
      {
        id: "d2-osaka-castle", type: "visit", schedule: schedule("10:45", "13:30", "10:45 - 13:30・含御座船彈性"),
        title: "大阪城公園、天守閣＋御座船",
        descriptionHtml: "先到御座船售票／換票處確認當日可搭班次，再依船班穿插天守閣。10/8 天守閣 3 樓因換展暫停，其餘樓層照常開放；不用為了看完整展館拖太久。",
        primaryPlaceId: "osaka-castle", relatedPlaceIds: ["osaka-castle-gozabune"], flightId: null, transportBeforeId: "tr-d2-osaka-castle", reservationId: null,
        highlights: [{ id: "d2-castle-highlight", text: "🏯 天守閣：10/8 僅 3F 暫停" }, { id: "d2-gozabune-highlight", text: "🎫 樂享券 #1：大阪城御座船・約20分鐘" }],
        actions: [{ type: "statusLink", label: "🎫 樂享券：大阪城御座船", url: "https://travelcontentsapp.com/en/attraction/osaka/osaka-castle-gozabune/", statusClass: "rsv-ticket" }]
      },
      {
        id: "d2-lunch", type: "meal", schedule: schedule("13:30", "14:20", "13:30 - 14:20・就近簡單吃", "around"),
        title: "大阪城周邊午餐／休息",
        descriptionHtml: "依御座船實際班次彈性調整，不設定必吃店。目標是補充體力，不讓午餐排隊壓縮下午與晚上固定行程。",
        primaryPlaceId: null, relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null, highlights: [], actions: []
      },
      {
        id: "d2-osaka-tenmangu", type: "visit", schedule: schedule("14:50", "15:50", "14:50 - 15:50"),
        title: "大阪天滿宮",
        descriptionHtml: "參拜供奉學問之神菅原道真的大阪天滿宮。約 45～60 分鐘足夠看本殿、御守與境內；15:50 左右離開，前往心齋橋的 Lond luce。",
        primaryPlaceId: "osaka-tenmangu", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-osaka-tenmangu", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d2-lond-luce", type: "reservation", schedule: schedule("16:30", null, "16:30 開始・結束依染髮時間", "around"),
        title: "Lond luce 心斎橋｜染髮",
        descriptionHtml: "<strong>16:30 已預約</strong>。建議 16:20 前抵達；染髮所需時間依當天項目與髮況為準。",
        primaryPlaceId: "lond-luce-shinsaibashi", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-lond-luce", reservationId: "rsv-lond-luce", highlights: [], actions: []
      },
      {
        id: "d2-katsuhana", type: "meal", schedule: schedule("19:00", "20:00", "19:00 - 20:00"),
        title: "とんかつ KATSU 華",
        descriptionHtml: "<strong>已透過 TableCheck 完成 19:00 訂位</strong>。店家晚餐週三、週四、週五營業 18:00–23:00，預約 60 分鐘制、每人需點一份定食，並記得準備現金。",
        primaryPlaceId: "katsuhana", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-katsuhana", reservationId: "rsv-katsuhana",
        highlights: [{ id: "d2-katsuhana-highlight", text: "🥩 已訂位・18:45 前抵達" }], actions: []
      },
      {
        id: "d2-hotel-checkin", type: "accommodation", schedule: schedule(null, null, "晚餐後・約20:15起", "flexible"),
        title: "回新今宮住宿領行李 & 自助入住",
        descriptionHtml: "晚餐結束後回新今宮，領取白天寄放的行李並完成自助入住。前一晚先確認房號、密碼與入住方式。",
        primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d2-hotel-checkin", reservationId: null, highlights: [], actions: []
      }
    ],
    endingTransportId: null
  });
}
