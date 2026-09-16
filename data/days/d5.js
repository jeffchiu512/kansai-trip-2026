export function applyD5Plan(trip, { addJourney, schedule, requireDay, requireEvent, requireReservation }) {
  const harukasReservation = requireReservation("rsv-harukas-300");
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

  const d5 = requireDay("d5");

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

  const naraEvent = requireEvent(d5, "d5-nara-todaiji");
  const ujiEvent = requireEvent(d5, "d5-uji");
  ujiEvent.schedule = schedule("13:30", "17:00", "13:30 - 17:00 左右", "around");
  ujiEvent.descriptionHtml = "抵達宇治先到<strong>中村藤吉本店抽候位</strong>，再依叫號時間穿插平等院庭園與鳳翔館。鳳凰堂內部參觀因 2026 夏季減班，週末等待可能很長，只有遇到不影響 17:00 左右離開宇治的場次才參加。";
  ujiEvent.highlights = [{ id: "d5-uji-highlight-1", text: "🍵 中村藤吉：16:00 前完成受付" }];

  d5.events = [
    naraEvent,
    ujiEvent,
    {
      id: "d5-abeno-dinner",
      type: "meal",
      schedule: schedule("18:30", "19:40", "18:30 - 19:40 左右", "around"),
      title: "回大阪阿倍野｜彈性晚餐",
      descriptionHtml: "宇治結束後直接往天王寺／阿倍野。晚餐以不用久排、能在 19:40 左右結束為原則，替 HARUKAS 夜景留充裕時間。",
      primaryPlaceId: null,
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: "tr-d5-harukas",
      reservationId: null,
      highlights: [],
      actions: []
    },
    {
      id: "d5-harukas-300",
      type: "visit",
      schedule: schedule("20:00", "21:15", "20:00 - 21:15"),
      title: "HARUKAS 300 阿倍野夜景",
      descriptionHtml: "使用關西樂享周遊券登上大阪高空夜景。一般營業 09:00–22:00、最晚 21:30 入場；本次排 20:00 左右上樓，不追夕陽，純看夜景更從容。2026/10/11 仍在名偵探柯南合作活動期間。",
      primaryPlaceId: "harukas-300",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: null,
      reservationId: "rsv-harukas-300",
      highlights: [],
      actions: [
        {
          type: "statusLink",
          label: "🎫 HARUKAS 300 官方資訊",
          url: "https://www.abenoharukas-300.jp/observatory/information.html",
          statusClass: "rsv-ticket"
        }
      ]
    }
  ];
  d5.endingTransportId = "tr-d5-return";
}
