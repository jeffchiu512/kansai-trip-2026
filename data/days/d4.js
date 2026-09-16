export function applyD4Plan(trip, { addJourney, walkStep, trainStep, schedule, setDay }) {
  addJourney(
    "tr-d4-minoh-waterfall",
    "勝尾寺 → 箕面大瀑布",
    "Katsuoji Temple",
    "Minoh Waterfall",
    "https://www.google.com/maps/dir/?api=1&origin=Katsuoji%20Temple&destination=Minoh%20Waterfall&travelmode=walking",
    "勝尾寺到箕面大瀑布以山路步行移動。箕面市觀光協會的官方示範行程標示，勝尾寺到箕面大瀑布步行約40分鐘；考量休息與拍照，本行程抓約45分鐘較充裕。",
    45,
    [
      walkStep(
        "勝尾寺 → 箕面大瀑布",
        "勝尾寺",
        "箕面大瀑布",
        "約40～45分・山道",
        "箕面市觀光協會的示範行程標示步行約40分鐘；三連休可能人多，加上山路路況，建議保留一些緩衝時間。"
      )
    ]
  );
  addJourney(
    "tr-d4-return-namba",
    "箕面 → 難波／道頓堀",
    "Minoh Waterfall",
    "Tazaemonbashi Pier",
    "https://www.google.com/maps/dir/?api=1&origin=Minoh%20Waterfall&destination=Tazaemonbashi%20Pier%20Osaka&dir_action=navigate",
    "從瀑布沿溪谷步道步行下山到阪急箕面站，再於石橋阪大前轉阪急寶塚線到大阪梅田，最後搭御堂筋線到なんば。",
    115,
    [
      walkStep("箕面大瀑布 → 阪急 箕面駅", "箕面大瀑布", "箕面駅", "約40～50分・沿溪谷步道下坡", "連假人多時步行速度會下降，15:15 左右就開始下山較穩。"),
      trainStep({
        label: "箕面 → 石橋阪大前 → 大阪梅田",
        from: "箕面",
        to: "大阪梅田",
        displayMeta: "約24～32分・石橋阪大前轉車",
        amount: 280,
        badges: [{ colorKey: "hankyu", label: "阪急 箕面線→宝塚線" }],
        noteHtml: "箕面線到石橋阪大前後，轉往大阪梅田方向；一般運賃約 ¥280／人。"
      }),
      walkStep("阪急 大阪梅田駅 → Osaka Metro 梅田駅", "阪急 大阪梅田駅", "Osaka Metro 梅田駅", "約5～10分", "跟著地下鐵御堂筋線指標移動。"),
      trainStep({
        label: "梅田 → なんば",
        from: "梅田",
        to: "なんば",
        displayMeta: "約9分・往「なかもず」方面・直達",
        amount: 240,
        badges: [{ colorKey: "mido", label: "Ⓜ 御堂筋線" }]
      }),
      walkStep("なんば駅 → 太左衛門橋船著場", "なんば駅", "太左衛門橋船著場", "約10～15分", "回到道頓堀後先換晚間遊船班次，再前往 18:30 晚餐。")
    ]
  );
  addJourney(
    "tr-d4-cruise-ticket",
    "難波 → 太左衛門橋船著場換票",
    "Namba Station",
    "Tazaemonbashi Pier",
    "https://www.google.com/maps/dir/?api=1&origin=Namba%20Station&destination=Tazaemonbashi%20Pier%20Osaka&travelmode=walking",
    "從難波／道頓堀商圈步行即可；樂享券遊船不接受預約，需現場有空位才能換班次。",
    15,
    [walkStep("難波／道頓堀 → 太左衛門橋船著場", "なんば駅周邊", "太左衛門橋船著場", "約10～15分", "首選換 20:30 班；若額滿就改 21:00 或當日晚間下一個可行班次。")]
  );
  addJourney(
    "tr-d4-gyutan-lemon",
    "太左衛門橋／道頓堀 → 牛舌的檸檬大阪本店",
    "Tazaemonbashi Pier",
    "新宿焼肉 牛たんの檸檬 大阪本店",
    "https://www.google.com/maps/dir/?api=1&origin=Tazaemonbashi%20Pier%20Osaka&destination=%E7%89%9B%E3%81%9F%E3%82%93%E3%81%AE%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&travelmode=walking",
    "兩地都在難波／千日前商圈，直接步行最穩。18:30 已訂位，建議至少提前 10～15 分鐘到店。",
    15,
    [walkStep("太左衛門橋船著場 → 牛舌的檸檬", "太左衛門橋船著場", "牛舌的檸檬 大阪本店", "約10～15分", "山區若延誤，優先守住餐廳訂位；遊船班次再改晚一班。")]
  );
  addJourney(
    "tr-d4-dotonbori-cruise",
    "牛舌的檸檬 → 道頓堀水上觀光船",
    "新宿焼肉 牛たんの檸檬 大阪本店",
    "Tazaemonbashi Pier",
    "https://www.google.com/maps/dir/?api=1&origin=%E7%89%9B%E3%81%9F%E3%82%93%E3%81%AE%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&destination=Tazaemonbashi%20Pier%20Osaka&travelmode=walking",
    "依晚餐前已換好的班次步行回乘船處，至少提前 15 分鐘報到。",
    15,
    [walkStep("牛舌的檸檬 → 太左衛門橋船著場", "牛舌的檸檬 大阪本店", "太左衛門橋船著場", "約10～15分", "以手上已換好的登船券時間為準，別只看原規劃的 20:30／21:00。")]
  );
  addJourney(
    "tr-d4-return-hotel",
    "道頓堀 → 新今宮住宿",
    "Tazaemonbashi Pier",
    "Apartment Hotel 11 Shinimamiya 1",
    "https://www.google.com/maps/dir/?api=1&origin=Tazaemonbashi%20Pier%20Osaka&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
    "遊船後由道頓堀步行回なんば，搭御堂筋線直達動物園前，再步行回住宿。",
    25,
    [
      walkStep("太左衛門橋船著場 → なんば駅", "太左衛門橋船著場", "なんば駅", "約10分"),
      trainStep({
        label: "なんば → 動物園前",
        from: "なんば",
        to: "動物園前",
        displayMeta: "約4～5分・往「なかもず」方面・直達",
        amount: 190,
        badges: [{ colorKey: "mido", label: "Ⓜ 御堂筋線" }]
      }),
      walkStep("動物園前駅 → 住宿", "動物園前駅", "Apartment Hotel 11 Shinimamiya 1", "約5分")
    ]
  );

  setDay({
    id: "d4",
    dayNumber: 4,
    date: "2026-10-10",
    title: "勝尾寺、箕面自然與道頓堀夜遊",
    badge: "箕面 · 達摩 · 道頓堀",
    overnight: { type: "accommodation", accommodationId: "shinimamiya-1" },
    routeOrigin: { type: "accommodation", accommodationId: "shinimamiya-1" },
    summary: {
      departureLabel: "建議出門",
      departure: "07:30",
      area: "勝尾寺・箕面・難波",
      stamina: "中高・山區步行＋夜遊",
      keyPoint: "18:30 牛舌已訂位／晚餐前先換遊船班次"
    },
    transportSummary: {
      displayText: "Metro＋阪急＋巴士約 ¥2,040／人；勝尾寺→箕面大瀑布採步行，約40～45分。"
    },
    notices: [
      {
        id: "notice-d4-mountain", position: "beforeTimeline", style: "warning", title: "🥾 山區行程：勝尾寺 → 箕面大瀑布步行",
        contentHtml: "勝尾寺參拜後直接步行前往箕面大瀑布。箕面市觀光協會的示範行程標示<strong>步行約40分鐘</strong>；本行程抓約40～45分鐘並預留少量緩衝。當天請穿適合山路的鞋，若下雨或路況不佳則現場再調整。"
      },
      {
        id: "notice-d4-cruise", position: "beforeEvent", beforeEventId: "d4-cruise-ticket", style: "info", title: "🚤 遊船先換票，不賭吃完飯才排",
        contentHtml: "關西樂享券的一本松海運道頓堀水上觀光船<strong>不接受樂享券預約，須視現場空位</strong>。回難波後先去太左衛門橋船著場掃 QR 換晚間班次，首選 20:30、備案 21:00。"
      }
    ],
    events: [
      {
        id: "d4-katsuoji", type: "visit", schedule: schedule("09:00", "11:45", "09:00 - 11:45"), title: "勝尾寺 (勝運達摩之寺)",
        descriptionHtml: "滿山滿谷可愛的不倒翁達摩！求勝運、拍照打卡的絕佳避世景點。連假請早點出發，開門就到最舒服。",
        primaryPlaceId: "katsuoji", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-katsuoji", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d4-minoh-waterfall", type: "visit", schedule: schedule("12:30", "15:15", "12:30 - 15:15"), title: "箕面大瀑布大自然踏青",
        descriptionHtml: "從勝尾寺步行約40～45分鐘抵達箕面大瀑布，在日本百選名瀑下享受森林負離子；之後沿溪谷步道一路散步下山。小提醒：當地名物 <strong>紅葉天婦羅（炸楓葉）</strong> 很有趣，可以買來吃！",
        primaryPlaceId: "minoh-waterfall", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-minoh-waterfall", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d4-return-namba", type: "logistics", schedule: schedule("15:15", "17:30", "15:15 - 17:30 左右", "around"), title: "箕面下山 → 回難波／道頓堀",
        descriptionHtml: "從山區返回大阪南區。若比預期早到，可先休息、喝咖啡或逛街，再依時間前往道頓堀換取晚間遊船班次。",
        primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-return-namba", reservationId: null, highlights: [], actions: []
      },
      {
        id: "d4-cruise-ticket", type: "logistics", schedule: schedule("17:45", "18:10", "17:45 - 18:10・先換晚間船班", "around"), title: "太左衛門橋船著場｜先換道頓堀遊船班次",
        descriptionHtml: "用關西樂享周遊券 QR Code 換當日登船券。首選 20:30，若額滿就選 21:00 或當日晚間其他可行班次；換好票再走去晚餐。",
        primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-cruise-ticket", reservationId: null,
        highlights: [{ id: "d4-cruise-pass-highlight", text: "🎫 樂享券 #3：道頓堀水上觀光船" }], actions: [{ type: "statusLink", label: "🎫 樂享券設施資訊", url: "https://travelcontentsapp.com/en/attraction/osaka/dotonbori-river-cruise/", statusClass: "rsv-ticket" }]
      },
      {
        id: "d4-gyutan-lemon", type: "meal", schedule: schedule("18:30", "19:45", "18:30 - 19:45 左右", "around"), title: "新宿燒肉 牛舌的檸檬 大阪本店",
        descriptionHtml: "<strong>已訂位 18:30</strong>。白天山區若延誤，所有彈性項目都讓位給這個訂位；若用餐時間拉長，遊船就改 21:00 班。",
        primaryPlaceId: "gyutan-lemon-osaka", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-gyutan-lemon", reservationId: "rsv-gyutan-lemon", highlights: [], actions: []
      },
      {
        id: "d4-dotonbori-cruise", type: "visit", schedule: schedule(null, null, "20:30 首選／21:00 備案・約20分鐘", "flexible"), title: "一本松海運 道頓堀水上觀光船",
        descriptionHtml: "從河面看道頓堀霓虹與大阪南區夜景。官方班次一般到 21:00，每小時 00、30 分出航；樂享券旅客需依現場空位搭乘，至少提前 15 分鐘回乘船處。",
        primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: "tr-d4-dotonbori-cruise", reservationId: null,
        highlights: [{ id: "d4-cruise-highlight", text: "🚤 道頓堀夜間水上巡遊" }], actions: []
      },
      {
        id: "d4-dotonbori-walk", type: "visit", schedule: schedule(null, null, "遊船後・視體力短暫散步", "flexible"), title: "道頓堀夜間散步 → 回新今宮",
        descriptionHtml: "遊船結束後視體力散步戎橋、格力高跑跑人與道頓堀商圈，再返回新今宮住宿。",
        primaryPlaceId: "dotonbori-river-cruise", relatedPlaceIds: [], flightId: null, transportBeforeId: null, reservationId: null, highlights: [], actions: []
      }
    ],
    endingTransportId: "tr-d4-return-hotel"
  });
}
