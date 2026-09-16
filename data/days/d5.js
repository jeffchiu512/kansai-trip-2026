export function applyD5Plan(trip, { addJourney, walkStep, trainStep, schedule, setDay }) {
  addJourney(
    "tr-d5-harukas",
    "宇治 → 阿倍野／天王寺",
    "Byodoin Temple",
    "Abeno Harukas",
    "https://www.google.com/maps/dir/?api=1&origin=Byodoin%20Temple&destination=Abeno%20Harukas&dir_action=navigate",
    "宇治から大阪へは、平等院から近い京阪宇治駅を使い、中書島で京阪本線特急へ乗換、京橋でJR大阪環状線へ乗換えるルートを基本にする。約 ¥680／人。",
    90,
    [
      walkStep("平等院／宇治川 → 京阪 宇治駅", "平等院", "京阪 宇治駅", "約10～15分", "JR宇治駅へ戻るより、平等院側からは京阪宇治駅が使いやすい。"),
      trainStep({
        label: "京阪 宇治 → 中書島 → 京橋",
        from: "宇治（京阪）",
        to: "京橋",
        displayMeta: "約47～54分・中書島で1回乗換",
        amount: 480,
        badges: [{ colorKey: "keihan", label: "KH 京阪宇治線＋京阪本線特急" }],
        noteHtml: "宇治線で中書島へ行き、淀屋橋方面の京阪本線特急へ。<span class=\"rs-warn\">プレミアムカーは別料金なので通常車両を利用</span>。"
      }),
      trainStep({
        label: "京橋 → 天王寺",
        from: "京橋",
        to: "天王寺",
        displayMeta: "約14分・大阪環状線 外回り",
        amount: 200,
        badges: [{ colorKey: "jr", label: "JR" }, { colorKey: "jro", label: "Ⓞ 大阪環状線" }]
      }),
      walkStep("JR 天王寺駅 → あべのハルカス", "天王寺駅", "あべのハルカス", "約3～5分", "夕食後そのまま HARUKAS 300 へ上がれるよう、天王寺／阿倍野エリアで食事。")
    ]
  );
  addJourney(
    "tr-d5-return",
    "HARUKAS 300 → 新今宮住宿",
    "Abeno Harukas",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=Abeno%20Harukas&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "HARUKAS 300 結束後走到 JR 天王寺站，搭一站到新今宮；約 ¥150／人。",
    15,
    [
      walkStep("あべのハルカス → JR 天王寺駅", "あべのハルカス", "JR 天王寺駅", "約3～5分"),
      trainStep({
        label: "天王寺 → 新今宮",
        from: "天王寺",
        to: "新今宮",
        displayMeta: "約1～2分・1站",
        amount: 150,
        badges: [{ colorKey: "jr", label: "JR" }, { colorKey: "jro", label: "Ⓞ 大阪環状線／大和路線" }]
      }),
      walkStep("JR 新今宮駅 → 住宿", "JR 新今宮駅", "Apartment Hotel 11 Shinimamiya 1", "約2～5分")
    ]
  );

  setDay({
    id: "d5",
    dayNumber: 5,
    date: "2026-10-11",
    title: "奈良萌鹿、宇治抹茶與阿倍野夜景",
    badge: "奈良 · 宇治 · HARUKAS",
    overnight: { type: "accommodation", accommodationId: "shinimamiya-1" },
    routeOrigin: { type: "accommodation", accommodationId: "shinimamiya-1" },
    summary: {
      departureLabel: "建議出門",
      departure: "08:00",
      area: "奈良・宇治・阿倍野",
      stamina: "中高・跨城移動",
      keyPoint: "中村藤吉16:00前受付／鳳凰堂內部選配／晚上HARUKAS"
    },
    transportSummary: {
      displayText: "JR＋京阪；今日一般交通估計約 ¥1,920／人。宇治→天王寺採京阪宇治→中書島→京橋，再轉 JR。"
    },
    notices: [
      {
        id: "notice-d5-nara", position: "beforeTimeline", style: "warning", title: "⚠️ 三連休週日：奈良仍要早去",
        contentHtml: "10/11 是三連休中間的週日，奈良公園預期人多。維持早上先奈良、下午宇治的方向，12:30 左右離開奈良，不讓上午拖到後面的抹茶與夜景。"
      },
      {
        id: "notice-d5-uji", position: "beforeEvent", beforeEventId: "d5-uji", style: "info", title: "🍵 宇治：先抽中村藤吉，再決定鳳凰堂內部",
        contentHtml: "中村藤吉本店咖啡<strong>16:00 截止受付、不可預約</strong>；到宇治先抽整理券。平等院鳳凰堂內部在 6/16～10/15 減少場次與每場人數，週末可能久候，因此<strong>內部參觀列為選配</strong>，庭園＋鳳翔館＋抹茶優先。"
      }
    ],
    events: [
      {
        id: "d5-nara-todaiji", type: "visit", schedule: schedule("09:00", "12:30", "09:00 - 12:30"), title: "奈良公園 & 東大寺",
        descriptionHtml: "買仙貝體驗與小鹿互動，參訪氣勢恢宏的東大寺大佛殿。加碼：<strong>中谷堂</strong> 看現搗麻糬表演、<strong>奈良町</strong> 古巷散步。",
        primaryPlaceId: "nara-park", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d5-nara-todaiji", reservationId: null,
        highlights: [{ id: "d5-nara-todaiji-highlight-1", text: "🍱 必吃：平宗柿葉壽司 / 中谷堂麻糬" }], actions: []
      },
      {
        id: "d5-uji", type: "visit", schedule: schedule("13:30", "17:00", "13:30 - 17:00 左右", "around"), title: "宇治散策 (平等院 & 宇治川)",
        descriptionHtml: "抵達宇治先到<strong>中村藤吉本店抽候位</strong>，再依叫號時間穿插平等院庭園與鳳翔館。鳳凰堂內部參觀因 2026 夏季減班，週末等待可能很長，只有遇到不影響 17:00 左右離開宇治的場次才參加。",
        primaryPlaceId: "byodoin", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d5-uji", reservationId: "rsv-nakamura-tokichi",
        highlights: [{ id: "d5-uji-highlight-1", text: "🍵 中村藤吉：16:00 前完成受付" }], actions: []
      },
      {
        id: "d5-abeno-dinner", type: "meal", schedule: schedule("18:30", "19:40", "18:30 - 19:40 左右", "around"), title: "回大阪阿倍野｜彈性晚餐",
        descriptionHtml: "宇治結束後直接往天王寺／阿倍野。晚餐以不用久排、能在 19:40 左右結束為原則，替 HARUKAS 夜景留充裕時間。",
        primaryPlaceId: null, relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d5-harukas", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d5-harukas-300", type: "visit", schedule: schedule("20:00", "21:15", "20:00 - 21:15"), title: "HARUKAS 300 阿倍野夜景",
        descriptionHtml: "使用關西樂享周遊券登上大阪高空夜景。一般營業 09:00–22:00、最晚 21:30 入場；本次排 20:00 左右上樓，不追夕陽，純看夜景更從容。2026/10/11 仍在名偵探柯南合作活動期間。",
        primaryPlaceId: "harukas-300", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: "rsv-harukas-300", highlights: [],
        actions: [{ type: "statusLink", label: "🎫 HARUKAS 300 官方資訊", url: "https://www.abenoharukas-300.jp/observatory/information.html", statusClass: "rsv-ticket" }]
      }
    ],
    endingTransportId: "tr-d5-return"
  });
}
