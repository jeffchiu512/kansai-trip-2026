export function applyD4Plan(trip, { addPlace, addJourney, schedule, day }) {
  addPlace(
    "dotonbori-river-cruise",
    "一本松海運 道頓堀水上觀光船",
    "Tazaemonbashi Pier Tombori River Cruise",
    "大阪府大阪市中央区宗右衛門町 太左衛門橋船着場",
    "とんぼりリバークルーズ"
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
    "遊船後可在道頓堀短暫散步，再依體力返回新今宮住宿。"
  );

  const d4 = day("d4");
  if (!d4) return;

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
      descriptionHtml: "從山區返回大阪南區。若比預期早到，可先休息、喝咖啡或逛街，再依時間前往道頓堀換取晚間遊船班次。",
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
      highlights: [{ id: "d4-cruise-highlight", text: "🚤 道頓堀夜間水上巡遊" }], actions: []
    },
    {
      id: "d4-dotonbori-walk",
      type: "visit",
      schedule: schedule(null, null, "遊船後・視體力短暫散步", "flexible"),
      title: "道頓堀夜間散步 → 回新今宮",
      descriptionHtml: "遊船結束後視體力散步戎橋、格力高跑跑人與道頓堀商圈，再返回新今宮住宿。",
      primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null,
      highlights: [], actions: []
    }
  ];
  d4.endingTransportId = "tr-d4-return-hotel";
}
