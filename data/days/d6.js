export function applyD6Plan(trip, { addPlace, addJourney, schedule, reservation, day }) {
  addPlace(
    "usj",
    "日本環球影城 Universal Studios Japan",
    "Universal Studios Japan",
    "大阪府大阪市此花区桜島2-1-33",
    "ユニバーサル・スタジオ・ジャパン"
  );

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

  const d6 = day("d6");
  if (!d6) return;

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
      primaryPlaceId: "usj",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: "tr-d6-usj",
      reservationId: null,
      highlights: [],
      actions: []
    },
    {
      id: "d6-usj-main",
      type: "visit",
      schedule: schedule(null, "17:30", "開園後 - 17:30・白天主力", "flexible"),
      title: "USJ 白天｜SUPER NINTENDO WORLD＋主要設施",
      descriptionHtml: "入園後先處理 SUPER NINTENDO WORLD 入場資格與需要的 e整理券，再依排隊時間玩任天堂世界、Power-Up Band 互動、哈利波特、小小兵、侏羅紀等想玩的設施。『BIOHAZARD REQUIEM: The Dive』10:00 起至閉園、需 e整理券，可同步處理。",
      primaryPlaceId: "usj",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: null,
      reservationId: "rsv-usj",
      highlights: [
        { id: "d6-usj-powerup-highlight", text: "🍄 能量手環：SUPER NINTENDO WORLD 優先" },
        { id: "d6-usj-bio-highlight", text: "🧟 BIOHAZARD：需 e整理券" }
      ],
      actions: [
        {
          type: "statusLink",
          label: "📅 USJ 官方營業時間",
          url: "https://www.usj.co.jp/web/zh/tw/park-guide/schedule/park-hour2",
          statusClass: "rsv-must"
        },
        {
          type: "statusLink",
          label: "🧟 2026 Halloween Horror Nights",
          url: "https://www.usj.co.jp/web/ja/jp/events/halloween-extreme-autumn-2026/halloween-horror-nights",
          statusClass: "rsv-must"
        }
      ]
    },
    {
      id: "d6-usj-dinner",
      type: "meal",
      schedule: schedule("17:00", "18:00", "17:00 左右・提早吃晚餐／休息", "around"),
      title: "園內提早晚餐＋休息",
      descriptionHtml: "萬聖節夜間活動 18:00 起進入重點時段，建議 17:00 左右先吃晚餐、補水與休息，避免 18:00 後還在餐廳排隊。",
      primaryPlaceId: "usj",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: null,
      reservationId: null,
      highlights: [],
      actions: []
    },
    {
      id: "d6-usj-halloween",
      type: "visit",
      schedule: schedule("18:00", null, "18:00 - 閉園・Halloween Horror Nights", "flexible"),
      title: "Halloween Horror Nights｜Street Zombies＋Zombie de Dance",
      descriptionHtml: "2026 年 Street Zombies 與 Zombie de Dance 都是 18:00 起至閉園。晚上不提早離園，把一天最後的體力留給萬聖節氣氛；實際演出／設施狀態以當日官方 App 為準。",
      primaryPlaceId: "usj",
      relatedPlaceIds: [],
      flightId: null,
      transportBeforeId: null,
      reservationId: null,
      highlights: [{ id: "d6-halloween-highlight", text: "🎃 18:00 後才是這天第二個主場" }],
      actions: []
    }
  ];
  d6.endingTransportId = "tr-d6-return-usj";
}
