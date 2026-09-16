export const reservations = [
  {
    id: "rsv-jojoen",
    eventId: "d7-jojoen",
    dayId: null,
    periodLabel: "午餐",
    status: "walkIn",
    method: "walkIn",
    displayName: "敘敘苑 大丸心齋橋店",
    summaryStatusLabel: "● 現場候位",
    note: "午間不接受訂位；11:15 到 10F 登記，候位過長時改備案",
    action: {
      label: "店家資訊",
      url: "https://www.daimaru.co.jp/shinsaibashi/restaurant/jojoen.html"
    },
    eventLabel: "🟢 午間不可訂位・現場候位（線上預約僅限晚餐）"
  },
  {
    id: "rsv-aozora-blue-daimaru",
    eventId: null,
    dayId: "d7",
    periodLabel: "午餐備案",
    status: "recommended",
    method: "officialSite",
    displayName: "青空blue 大丸心齋橋店",
    summaryStatusLabel: "● 平日午餐可預約",
    note: "敘敘苑候位過長時使用；同在本館 10F，午餐約 ¥1,650～¥2,500",
    action: {
      label: "官方預約",
      url: "https://www.aozora.blue/reserve/"
    },
    eventLabel: null
  },
  {
    id: "rsv-junidanya-hanamikoji",
    eventId: "d3-junidanya-lunch",
    periodLabel: "午餐",
    status: "recommended",
    method: "phone",
    displayName: "十二段家 花見小路店",
    summaryStatusLabel: "● 建議電話確認",
    note: "13:30；電話確認能否預約與 2026 年 10 月營業時間",
    action: {
      label: "官方菜單",
      url: "https://junidanya-kyoto.com/menu/"
    },
    eventLabel: "🔴 建議電話確認 13:30 座位（075-561-1655）"
  },
  {
    id: "rsv-doi-unagi-gion",
    eventId: "d3-doi-unagi-dinner",
    periodLabel: "晚餐",
    status: "walkIn",
    method: "walkIn",
    displayName: "土井活鰻 祇園八坂店",
    summaryStatusLabel: "● 現場候位",
    note: "17:00 開門即到；不接受訂位，降低候位風險",
    action: {
      label: "官方資訊",
      url: "https://doikatsuman.net/"
    },
    eventLabel: "🟢 不接受訂位・17:00 開門即到"
  },
  {
    id: "rsv-katsuhana",
    eventId: "d2-katsuhana",
    periodLabel: "晚餐",
    status: "confirmed",
    method: "tablecheck",
    displayName: "とんかつ KATSU華",
    summaryStatusLabel: "● 已訂位",
    note: "10/8（四）19:00 已確認；60分鐘制、每人一份定食、僅收現金",
    action: {
      label: "TableCheck",
      url: "https://www.tablecheck.com/ja/katsuhana/reserve/landing"
    },
    eventLabel: "✅ 已訂位：10/8（四）19:00"
  },
  {
    id: "rsv-lond-luce",
    eventId: "d2-lond-luce",
    periodLabel: "下午",
    status: "confirmed",
    method: "officialSite",
    displayName: "Lond luce 心斎橋",
    summaryStatusLabel: "● 已預約",
    note: "10/8（四）16:30 染髮預約；平日營業至 23:00",
    action: {
      label: "店家資訊",
      url: "https://www.lond.jp/salon/41/"
    },
    eventLabel: "✅ 已預約：10/8（四）16:30"
  },
  {
    id: "rsv-gyutan-lemon",
    eventId: "d4-gyutan-lemon",
    periodLabel: "晚餐",
    status: "confirmed",
    method: "officialSite",
    displayName: "牛舌的檸檬 大阪本店",
    summaryStatusLabel: "● 已訂位",
    note: "10/10（六）18:30 已確認，替山區交通保留緩衝",
    action: {
      label: "店家資訊",
      url: "https://tabelog.com/osaka/A2701/A270202/27143533/"
    },
    eventLabel: "✅ 已訂位：10/10（六）18:30"
  },
  {
    id: "rsv-nakamura-tokichi",
    eventId: "d5-uji",
    periodLabel: "下午茶",
    status: "ticketQueue",
    method: "queueTicket",
    displayName: "中村藤吉本店 宇治",
    summaryStatusLabel: "● 現場候位",
    note: "不可預約；抵達先抽整理券，16:00 前完成受付，候位過久就改附近其他抹茶店",
    action: {
      label: "店家資訊",
      url: "https://tokichi.jp/pages/stores"
    },
    eventLabel: "🟡 中村藤吉：不可訂位，到店先抽整理券"
  },
  {
    id: "rsv-harukas-300",
    eventId: "d5-harukas-300",
    periodLabel: "夜景",
    status: "recommended",
    method: "haveFunPass",
    displayName: "HARUKAS 300 展望台",
    summaryStatusLabel: "● 樂享券",
    note: "D5 晚上使用關西樂享周遊券；通常 09:00–22:00，最晚 21:30 入場，出發前再確認當日營業時間",
    action: {
      label: "官方營業資訊",
      url: "https://www.abenoharukas-300.jp/observatory/information.html"
    },
    eventLabel: "🎫 樂享券 #2：HARUKAS 300"
  },
  {
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
  }
];
