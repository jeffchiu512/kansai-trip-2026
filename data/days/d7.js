export function applyD7Plan(trip, { addJourney, schedule, day }) {
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

  const d7 = day("d7");
  if (!d7) return;

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

  const keepIds = [
    "d7-kizu-market",
    "d7-namba-yasaka",
    "d7-checkout",
    "d7-pokemon-center",
    "d7-jojoen",
    "d7-shinsaibashi-shopping"
  ];
  const kept = keepIds.map(id => d7.events.find(event => event.id === id)).filter(Boolean);

  d7.events = [
    ...kept,
    {
      id: "d7-collect-luggage",
      type: "logistics",
      schedule: schedule("14:30", "15:15", "14:30 - 15:15 左右", "around"),
      title: "回新今宮領行李",
      descriptionHtml: "心齋橋最後採買於 14:30 左右收尾，回新今宮領取寄放行李後直接搭南海電車前往臨空城。",
      primaryPlaceId: "shinimamiya-hotel-place",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: "tr-d7-collect-luggage",
      reservationId: null,
      highlights: [],
      actions: []
    },
    {
      id: "d7-rinku-outlet",
      type: "shopping",
      schedule: schedule("16:00", "18:00", "16:00 - 18:00 左右・最多2小時", "around"),
      title: "臨空 Premium Outlets｜最後順路看看",
      descriptionHtml: "鎖定想看的品牌，停留約 1.5～2 小時。官方一般營業至 20:00，16:00 左右抵達仍有充裕時間；逛完直接前往關西機場日航酒店。",
      primaryPlaceId: "rinku-premium-outlets",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: "tr-d7-rinku-outlet",
      reservationId: null,
      highlights: [{ id: "d7-rinku-highlight", text: "🛍️ 臨空城順路採買・停留約1.5～2小時" }],
      actions: []
    },
    {
      id: "d7-nikko-checkin",
      type: "accommodation",
      schedule: schedule("18:00", "19:00", "18:00 - 19:00 左右", "around"),
      title: "臨空城 → 關西機場日航酒店 Check-in",
      descriptionHtml: "Outlet 收尾後回りんくうタウン站，搭一站前往関西空港；日航酒店位在 Aeroplaza，入住後整理行李、確認重量並早點休息，準備 D8 07:50 班機。",
      primaryPlaceId: "hotel-nikko-kix-place",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: "tr-d7-nikko-checkin",
      reservationId: null,
      highlights: [],
      actions: []
    }
  ];
  d7.endingTransportId = null;
}
