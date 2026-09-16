export function applyD7Plan(trip, { addJourney, walkStep, trainStep, schedule, setDay }) {
  addJourney(
    "tr-d7-collect-luggage",
    "心齋橋 → 新今宮領行李",
    "Shinsaibashi Station",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=Shinsaibashi%20Station&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "心斎橋から御堂筋線で動物園前まで直達，再步行回住宿／置物櫃領行李；約 ¥240／人。",
    25,
    [
      trainStep({
        label: "心斎橋 → 動物園前",
        from: "心斎橋",
        to: "動物園前",
        displayMeta: "約7分・往「なかもず」方面・直達",
        amount: 240,
        badges: [{ colorKey: "mido", label: "Ⓜ 御堂筋線" }]
      }),
      walkStep("動物園前駅 → 住宿／寄物處", "動物園前駅", "Apartment Hotel 11 Shinimamiya 1", "約5分", "14:30 左右離開心齋橋，領到行李後直接往南海新今宮站。")
    ]
  );
  addJourney(
    "tr-d7-rinku-outlet",
    "新今宮 → 臨空 Premium Outlets",
    "Shin-Imamiya Station",
    "Rinku Premium Outlets",
    "https://www.google.com/maps/dir/?api=1&origin=Shin-Imamiya%20Station&destination=Rinku%20Premium%20Outlets&dir_action=navigate",
    "南海新今宮から空港急行でりんくうタウンまで直達、約 ¥780／人。ラピートは特急料金が別途必要なので使わない。",
    50,
    [
      trainStep({
        label: "新今宮 → りんくうタウン",
        from: "新今宮",
        to: "りんくうタウン",
        displayMeta: "約35～37分・往「関西空港」方面・直達",
        amount: 780,
        badges: [{ colorKey: "nankai", label: "南海空港急行" }],
        noteHtml: "空港急行／普通でOK。<span class=\"rs-warn\">ラピートは乗車券に加えて特急料金が必要</span>。"
      }),
      walkStep("りんくうタウン駅 → Rinku Premium Outlets", "りんくうタウン駅", "Rinku Premium Outlets", "約6～10分", "大件行李先放官方置物櫃；放不下可到 Main Side 1F Information Center／Sea Side 1F Welcome Center 詢問大型行李臨時寄放。")
    ]
  );
  addJourney(
    "tr-d7-nikko-checkin",
    "臨空城 → 關西機場日航酒店",
    "Rinku Premium Outlets",
    "Hotel Nikko Kansai Airport",
    "https://www.google.com/maps/dir/?api=1&origin=Rinku%20Premium%20Outlets&destination=Hotel%20Nikko%20Kansai%20Airport&dir_action=navigate",
    "Outlet 結束後回りんくうタウン站，JR 關空快速或南海空港急行都可一站到関西空港，普通運賃約 ¥370／人。",
    30,
    [
      walkStep("Rinku Premium Outlets → りんくうタウン駅", "Rinku Premium Outlets", "りんくうタウン駅", "約6～10分", "先領回寄放行李再進站。"),
      trainStep({
        label: "りんくうタウン → 関西空港",
        from: "りんくうタウン",
        to: "関西空港",
        displayMeta: "約5～6分・1站",
        amount: 370,
        badges: [{ colorKey: "nankai", label: "JR 関空快速／南海空港急行" }],
        noteHtml: "兩家公司普通車資都約 ¥370；看到先到的普通列車即可。不要搭需要額外料金的特急。"
      }),
      walkStep("関西空港駅 → Hotel Nikko Kansai Airport", "関西空港駅", "Hotel Nikko Kansai Airport", "約3～5分・Aeroplaza 直結", "飯店位於 Aeroplaza，跟著 Hotel Nikko／Aeroplaza 指標走。")
    ]
  );

  setDay({
    id: "d7",
    dayNumber: 7,
    date: "2026-10-13",
    title: "地道早市、心齋橋採買與臨空收尾",
    badge: "木津 · 心齋橋 · 臨空城",
    overnight: { type: "accommodation", accommodationId: "hotel-nikko-kix" },
    routeOrigin: { type: "accommodation", accommodationId: "shinimamiya-1" },
    summary: {
      departureLabel: "輕裝出門",
      departure: "07:35 左右",
      area: "木津・難波・心齋橋・臨空城",
      stamina: "中等・最後帶行李移動",
      keyPoint: "10:00退房／14:30收尾／Outlet只逛1.5～2小時"
    },
    transportSummary: {
      displayText: "步行＋Osaka Metro＋南海／JR；今日一般交通估計約 ¥1,630／人，另視需要支付置物櫃／大型行李寄放費。"
    },
    notices: [
      {
        id: "notice-d7-luggage", position: "beforeTimeline", style: "info", title: "🧳 D7 行李動線",
        contentHtml: "早上市區行程維持輕裝，10:00 退房後寄物；14:30 心齋橋收尾後回新今宮領行李。臨空 Outlet 有多種置物櫃，超大型行李放不下可使用官方大型行李臨時寄放，<strong>¥1,000／件／日、僅收現金</strong>。"
      }
    ],
    events: [
      {
        id: "d7-kizu-market", type: "visit", schedule: schedule("07:50", "08:50", "07:50 - 08:50"), title: "木津卸売市場 (木津市場早市)",
        descriptionHtml: "感受在地人的熱情市場！必吃：<strong>木津魚市食堂</strong>海鮮丼（賣完收攤）、<strong>まるよし</strong>平價握壽司、<strong>天はな</strong>天丼、老舖食堂<strong>当志郎</strong>的名物「肉吸い」。行李留在房內，輕裝逛早市；08:50 準時離開，直接步行前往難波八阪神社。",
        primaryPlaceId: "kizu-market", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-kizu-market", reservationId: null,
        highlights: [{ id: "d7-kizu-market-highlight-1", text: "🍣 必吃：海鮮丼 / 握壽司 / 天丼 / 肉吸い" }], actions: []
      },
      {
        id: "d7-namba-yasaka", type: "visit", schedule: schedule("09:00", "09:20", "09:00 - 09:20"), title: "難波八阪神社",
        descriptionHtml: "從木津市場向北步行約 10 分鐘，參觀張開巨口、約 12 公尺高的獅子殿，祈求招福納勝。停留約 20 分鐘後直接步行回住宿取行李；09:20 必須離開，才能從容趕上 10:00 退房期限。",
        primaryPlaceId: "namba-yasaka-shrine", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-namba-yasaka", reservationId: null,
        highlights: [{ id: "d7-namba-yasaka-highlight-1", text: "⛩️ 免費參拜・重點拍獅子殿" }], actions: []
      },
      {
        id: "d7-checkout", type: "logistics", schedule: schedule("09:40", "10:00", "09:40 - 10:00"), title: "回住宿取行李 & 退房",
        descriptionHtml: "前一晚完成打包，回房後確認護照、錢包、充電器與冰箱，10:00 前完成退房。先詢問住宿能否退房後續寄行李；若不能，改用南海／JR 新今宮站置物櫃，再輕裝前往心齋橋。",
        primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-checkout", reservationId: null,
        highlights: [{ id: "d7-checkout-highlight-1", text: "⏰ 10:00 前完成退房・行李寄放後再去心齋橋" }], actions: []
      },
      {
        id: "d7-pokemon-center", type: "shopping", schedule: schedule("10:30", "11:15", "10:30 - 11:15"), title: "寶可夢中心 OSAKA DX",
        descriptionHtml: "從動物園前搭御堂筋線到心齋橋，利用地下道直達大丸心齋橋店本館 9F。逛限定商品與拍照，<strong>11:15 前結帳離開</strong>，再搭電梯上 10F 吃午餐。這裡不排需要另外預約的寶可夢咖啡廳。",
        primaryPlaceId: "pokemon-center-osaka-dx", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-pokemon-center", reservationId: null,
        highlights: [{ id: "d7-pokemon-center-highlight-1", text: "⚡ 同棟順遊：9F 寶可夢中心 → 10F 午餐" }], actions: []
      },
      {
        id: "d7-jojoen", type: "meal", schedule: schedule("11:30", "13:00", "11:30 - 13:00"), title: "敘敘苑 大丸心齋橋店 (商業午餐)",
        descriptionHtml: "寶可夢中心上一層就是大丸本館 10F 敘敘苑。午間不接受訂位，一律現場候位；11:15 開始登記，首選 ¥4,700 綜合午餐，若想控制預算可選 ¥3,700 燒肉午餐（價格與內容以現場菜單為準）。候位過長時，備案為同樓的<strong>青空blue 大丸心齋橋店</strong>。",
        primaryPlaceId: "jojoen-shinsaibashi", relatedPlaceIds: ["aozora-blue-daimaru-shinsaibashi"], flightId: null, transportBeforeId: "tr-d7-jojoen", reservationId: "rsv-jojoen",
        highlights: [{ id: "d7-jojoen-highlight-1", text: "🍱 首選：¥4,700 綜合午餐" }, { id: "d7-jojoen-highlight-2", text: "🔄 備案：同樓青空blue・烏龍麵午餐" }], actions: []
      },
      {
        id: "d7-shinsaibashi-shopping", type: "shopping", schedule: schedule("13:00", "14:30", "13:00 - 14:30"), title: "心齋橋最後採買／咖啡休息",
        descriptionHtml: "午餐後留約 90 分鐘在大丸與心齋橋周邊補買伴手禮，或找咖啡店休息。14:30 準時離開，回新今宮領行李。",
        primaryPlaceId: "shinsaibashi-shopping", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null, highlights: [], actions: []
      },
      {
        id: "d7-collect-luggage", type: "logistics", schedule: schedule("14:30", "15:15", "14:30 - 15:15 左右", "around"), title: "回新今宮領行李",
        descriptionHtml: "心齋橋最後採買於 14:30 左右收尾，回新今宮領取寄放行李後直接搭南海電車前往臨空城。",
        primaryPlaceId: "shinimamiya-hotel-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-collect-luggage", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d7-rinku-outlet", type: "shopping", schedule: schedule("16:00", "18:00", "16:00 - 18:00 左右・最多2小時", "around"), title: "臨空 Premium Outlets｜最後順路看看",
        descriptionHtml: "鎖定想看的品牌，停留約 1.5～2 小時。官方一般營業至 20:00，16:00 左右抵達仍有充裕時間；逛完直接前往關西機場日航酒店。",
        primaryPlaceId: "rinku-premium-outlets", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-rinku-outlet", reservationId: null,
        highlights: [{ id: "d7-rinku-highlight", text: "🛍️ 臨空城順路採買・停留約1.5～2小時" }], actions: []
      },
      {
        id: "d7-nikko-checkin", type: "accommodation", schedule: schedule("18:00", "19:00", "18:00 - 19:00 左右", "around"), title: "臨空城 → 關西機場日航酒店 Check-in",
        descriptionHtml: "Outlet 收尾後回りんくうタウン站，搭一站前往関西空港；日航酒店位在 Aeroplaza，入住後整理行李、確認重量並早點休息，準備 D8 07:50 班機。",
        primaryPlaceId: "hotel-nikko-kix-place", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d7-nikko-checkin", reservationId: null, highlights: [], actions: []
      }
    ],
    endingTransportId: null
  });
}
