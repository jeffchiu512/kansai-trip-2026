export const trip = {
  "schemaVersion": 1,
  "contentVersion": "1.0.0",
  "updatedAt": "2026-08-20",
  "meta": {
    "id": "kansai-2026",
    "title": "關西食光散策",
    "subtitle": "8日行程隨身導覽",
    "startDate": "2026-10-07",
    "endDate": "2026-10-14",
    "timezone": "Asia/Tokyo",
    "locale": "zh-TW",
    "destinations": [
      "大阪",
      "京都",
      "奈良",
      "箕面"
    ]
  },
  "flights": [
    {
      "id": "flight-outbound",
      "airline": "Peach Aviation",
      "airlineDisplayName": "樂桃航空",
      "flightNumber": "MM028",
      "departure": {
        "airportCode": "TPE",
        "airportName": "台北桃園",
        "terminal": null,
        "dateTime": "2026-10-07T18:15:00+08:00"
      },
      "arrival": {
        "airportCode": "KIX",
        "airportName": "大阪關西",
        "terminal": "T2",
        "dateTime": "2026-10-07T22:00:00+09:00"
      },
      "note": null
    },
    {
      "id": "flight-return",
      "airline": "Peach Aviation",
      "airlineDisplayName": "樂桃航空",
      "flightNumber": "MM023",
      "departure": {
        "airportCode": "KIX",
        "airportName": "大阪關西",
        "terminal": "T2",
        "dateTime": "2026-10-14T07:50:00+09:00"
      },
      "arrival": {
        "airportCode": "TPE",
        "airportName": "台北桃園",
        "terminal": null,
        "dateTime": "2026-10-14T09:55:00+08:00"
      },
      "note": null
    }
  ],
  "accommodations": [
    {
      "id": "omo-kix",
      "name": "OMO 關西機場 by 星野集團",
      "nameEn": "OMO Kansai Airport by Hoshino Resorts",
      "placeId": "omo-kix-place",
      "checkInDate": "2026-10-07",
      "checkOutDate": "2026-10-08",
      "address": "〒598-0048 大阪府泉佐野市りんくう往来北1-833",
      "phone": "+81-50-3134-8096",
      "emergencyPhone": "+81-72-488-7301",
      "note": null
    },
    {
      "id": "shinimamiya-1",
      "name": "住一新今宮1號店",
      "nameEn": "Apartment Hotel 11 Shinimamiya 1",
      "placeId": "shinimamiya-hotel-place",
      "checkInDate": "2026-10-08",
      "checkOutDate": "2026-10-13",
      "address": "〒556-0003 大阪府大阪市浪速区恵美須西3丁目14番13号",
      "phone": "+81-50-1724-2586",
      "emergencyPhone": null,
      "note": null
    },
    {
      "id": "hotel-nikko-kix",
      "name": "關西機場日航酒店",
      "nameEn": "Hotel Nikko Kansai Airport",
      "placeId": "hotel-nikko-kix-place",
      "checkInDate": "2026-10-13",
      "checkOutDate": "2026-10-14",
      "address": "大阪府泉佐野市泉州空港北1番地",
      "phone": "+81-72-455-1111",
      "emergencyPhone": null,
      "note": null
    }
  ],
  "places": {
    "omo-kix-place": {
      "id": "omo-kix-place",
      "name": "OMO 關西機場 Check-in",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "OMO Kansai Airport by Hoshino Resorts",
        "coordinates": null
      },
      "links": []
    },
    "shinimamiya-hotel-place": {
      "id": "shinimamiya-hotel-place",
      "name": "住宿寄放行李",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "Apartment Hotel 11 Shinimamiya 1",
        "coordinates": null
      },
      "links": []
    },
    "pokemon-center-osaka-dx": {
      "id": "pokemon-center-osaka-dx",
      "name": "寶可夢中心 OSAKA DX",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "Pokémon Center OSAKA DX",
        "coordinates": null
      },
      "links": []
    },
    "jojoen-shinsaibashi": {
      "id": "jojoen-shinsaibashi",
      "name": "敘敘苑 大丸心齋橋店 (商業午餐)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "敘敘苑 大丸心齋橋店",
        "coordinates": null
      },
      "links": []
    },
    "osaka-castle": {
      "id": "osaka-castle",
      "name": "大阪城公園 & 大阪城天守閣",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "大阪城天守閣",
        "coordinates": null
      },
      "links": []
    },
    "osaka-tenmangu": {
      "id": "osaka-tenmangu",
      "name": "大阪天滿宮",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "大阪天滿宮",
        "coordinates": null
      },
      "links": []
    },
    "katsuhana": {
      "id": "katsuhana",
      "name": "とんかつ KATSU 華 (日式豬排)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "とんかつ KATSU華",
        "coordinates": null
      },
      "links": []
    },
    "fushimi-inari": {
      "id": "fushimi-inari",
      "name": "伏見稻荷大社",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "伏見稻荷大社",
        "coordinates": null
      },
      "links": []
    },
    "kiyomizu-dera": {
      "id": "kiyomizu-dera",
      "name": "清水寺 ➔ 二年坂 ➔ 三年坂",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "清水寺",
        "coordinates": null
      },
      "links": []
    },
    "yasaka-shrine": {
      "id": "yasaka-shrine",
      "name": "八坂神社 ➔ 花見小路 ➔ 鴨川",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "八坂神社",
        "coordinates": null
      },
      "links": []
    },
    "shinimamiya-ramen": {
      "id": "shinimamiya-ramen",
      "name": "回新今宮後的拉麵晚餐",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "ラーメン 新今宮駅",
        "coordinates": null
      },
      "links": []
    },
    "katsuoji": {
      "id": "katsuoji",
      "name": "勝尾寺 (勝運達摩之寺)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "勝尾寺",
        "coordinates": null
      },
      "links": []
    },
    "minoh-waterfall": {
      "id": "minoh-waterfall",
      "name": "箕面大瀑布大自然踏青",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "箕面大瀑布",
        "coordinates": null
      },
      "links": []
    },
    "harbs-namba-parks": {
      "id": "harbs-namba-parks",
      "name": "HARBS Namba Parks 店",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "HARBS なんばパークス店",
        "coordinates": null
      },
      "links": []
    },
    "gyutan-lemon-osaka": {
      "id": "gyutan-lemon-osaka",
      "name": "新宿燒肉 牛舌的檸檬 (大阪本店)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "新宿燒肉 牛舌的檸檬 大阪本店",
        "coordinates": null
      },
      "links": []
    },
    "namba-okonomiyaki": {
      "id": "namba-okonomiyaki",
      "name": "難波地道美食品嚐 (章魚燒/大阪燒)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "千房 大阪燒 難波",
        "coordinates": null
      },
      "links": []
    },
    "nara-park": {
      "id": "nara-park",
      "name": "奈良公園 & 東大寺",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "奈良公園",
        "coordinates": null
      },
      "links": []
    },
    "byodoin": {
      "id": "byodoin",
      "name": "宇治散策 (平等院 & 宇治川)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "平等院",
        "coordinates": null
      },
      "links": []
    },
    "toyotei-kyoto-porta": {
      "id": "toyotei-kyoto-porta",
      "name": "東洋亭 京都Porta店 (百年洋食晚餐)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "東洋亭 京都ポルタ店",
        "coordinates": null
      },
      "links": []
    },
    "osaka-aquarium-kaiyukan": {
      "id": "osaka-aquarium-kaiyukan",
      "name": "大阪海遊館 & 天保山",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "海遊館",
        "coordinates": null
      },
      "links": []
    },
    "sumiyoshi-taisha": {
      "id": "sumiyoshi-taisha",
      "name": "住吉大社",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "住吉大社",
        "coordinates": null
      },
      "links": []
    },
    "harukas-300": {
      "id": "harukas-300",
      "name": "HARUKAS 300 阿倍野夜景",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "HARUKAS 300",
        "coordinates": null
      },
      "links": []
    },
    "shinsekai-tsutenkaku": {
      "id": "shinsekai-tsutenkaku",
      "name": "新世界串炸 & 通天閣夜景",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "新世界 通天閣",
        "coordinates": null
      },
      "links": []
    },
    "kizu-market": {
      "id": "kizu-market",
      "name": "木津卸売市場 (木津市場早市)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "木津卸売市場",
        "coordinates": null
      },
      "links": []
    },
    "namba-yasaka-shrine": {
      "id": "namba-yasaka-shrine",
      "name": "難波八阪神社",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "難波八阪神社",
        "coordinates": null
      },
      "links": []
    },
    "rinku-premium-outlets": {
      "id": "rinku-premium-outlets",
      "name": "臨空城 Outlet (Rinku Premium Outlets)",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "Rinku Premium Outlets",
        "coordinates": null
      },
      "links": []
    },
    "hotel-nikko-kix-place": {
      "id": "hotel-nikko-kix-place",
      "name": "關西機場日航酒店 Check-in",
      "nameLocal": null,
      "address": null,
      "map": {
        "query": "關西機場日航酒店",
        "coordinates": null
      },
      "links": []
    }
  },
  "reservations": [
    {
      "id": "rsv-jojoen",
      "eventId": "d2-jojoen",
      "periodLabel": "午餐",
      "status": "walkIn",
      "method": "walkIn",
      "displayName": "敘敘苑 大丸心齋橋店",
      "summaryStatusLabel": "● 現場候位",
      "note": "午間不接受訂位（線上預約僅限晚餐）；11:30 前到 10F 登記",
      "action": {
        "label": "店家資訊",
        "url": "https://www.daimaru.co.jp/shinsaibashi/restaurant/jojoen.html"
      },
      "eventLabel": "🟢 午間不可訂位・現場候位（線上預約僅限晚餐）"
    },
    {
      "id": "rsv-katsuhana",
      "eventId": "d2-katsuhana",
      "periodLabel": "晚餐",
      "status": "recommended",
      "method": "tablecheck",
      "displayName": "とんかつ KATSU華",
      "summaryStatusLabel": "● 建議訂位",
      "note": "18:00；60分鐘制、每人一份定食、僅收現金",
      "action": {
        "label": "TableCheck",
        "url": "https://www.tablecheck.com/ja/katsuhana/reserve/landing"
      },
      "eventLabel": "🔴 建議訂位：TableCheck 預約 18:00"
    },
    {
      "id": "rsv-harbs",
      "eventId": "d4-harbs",
      "periodLabel": "下午茶",
      "status": "walkIn",
      "method": "walkIn",
      "displayName": "HARBS Namba Parks 店",
      "summaryStatusLabel": "● 現場候位",
      "note": "16:45 左右；不可訂位，候位超過約30分鐘改外帶",
      "action": {
        "label": "店家資訊",
        "url": "https://www.harbs.co.jp/shop_kansai/"
      },
      "eventLabel": "🟢 不接受訂位・現場候位"
    },
    {
      "id": "rsv-gyutan-lemon",
      "eventId": "d4-gyutan-lemon",
      "periodLabel": "晚餐",
      "status": "confirmed",
      "method": "officialSite",
      "displayName": "牛舌的檸檬 大阪本店",
      "summaryStatusLabel": "● 已訂位",
      "note": "10/10（六）18:30 已確認，替山區交通保留緩衝",
      "action": {
        "label": "店家資訊",
        "url": "https://tabelog.com/osaka/A2701/A270202/27143533/"
      },
      "eventLabel": "✅ 已訂位：10/10（六）18:30"
    },
    {
      "id": "rsv-nakamura-tokichi",
      "eventId": "d5-uji",
      "periodLabel": "下午茶",
      "status": "ticketQueue",
      "method": "queueTicket",
      "displayName": "中村藤吉本店 宇治",
      "summaryStatusLabel": "● 現場候位",
      "note": "不可預約；抵達先抽整理券，候位超過90分鐘就換店",
      "action": {
        "label": "店家資訊",
        "url": "https://tokichi.jp/pages/stores"
      },
      "eventLabel": "🟡 中村藤吉：不可訂位，到店先抽整理券"
    },
    {
      "id": "rsv-toyotei",
      "eventId": "d5-toyotei",
      "periodLabel": "晚餐",
      "status": "walkIn",
      "method": "walkIn",
      "displayName": "東洋亭 京都Porta店",
      "summaryStatusLabel": "● 免訂位",
      "note": "京都駅直結，尖峰時段現場候位",
      "action": {
        "label": "查看地圖",
        "url": "https://www.google.com/maps/search/?api=1&query=%E6%9D%B1%E6%B4%8B%E4%BA%AD+%E4%BA%AC%E9%83%BD%E3%83%9D%E3%83%AB%E3%82%BF%E5%BA%97"
      },
      "eventLabel": "🟢 免訂位，尖峰時段現場稍候"
    },
    {
      "id": "rsv-kaiyukan",
      "eventId": "d6-kaiyukan",
      "periodLabel": "上午",
      "status": "required",
      "method": "officialSite",
      "displayName": "大阪海遊館",
      "summaryStatusLabel": "● 預先購票",
      "note": "購買最早可選的日期指定電子票",
      "action": {
        "label": "官方購票",
        "url": "https://www.kaiyukan.com/about/news/20582.html"
      },
      "eventLabel": null
    },
    {
      "id": "rsv-harukas-300",
      "eventId": "d6-harukas-300",
      "periodLabel": "傍晚",
      "status": "recommended",
      "method": "officialSite",
      "displayName": "HARUKAS 300 展望台",
      "summaryStatusLabel": "● 建議購票",
      "note": "16:30 左右入場，銜接 17:28 日落與夜景",
      "action": {
        "label": "官方購票",
        "url": "https://www.abenoharukas-300.jp/observatory/information.html"
      },
      "eventLabel": "🎫 建議預先購買官方電子票"
    },
    {
      "id": "rsv-shinsekai-kushikatsu",
      "eventId": "d6-shinsekai-kushikatsu",
      "periodLabel": "晚餐",
      "status": "walkIn",
      "method": "walkIn",
      "displayName": "新世界串炸",
      "summaryStatusLabel": "● 免訂位",
      "note": "當晚依排隊狀況現場選店",
      "action": {
        "label": "查看地圖",
        "url": "https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E4%B8%96%E7%95%8C+%E4%B8%B2%E7%82%B8"
      },
      "eventLabel": "🟢 免訂位，走路即到"
    }
  ],
  "days": [
    {
      "id": "d1",
      "dayNumber": 1,
      "date": "2026-10-07",
      "title": "台灣 ✈️ 大阪抵達",
      "badge": "夜間啟航",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "omo-kix"
      },
      "routeOrigin": {
        "type": "text",
        "value": "Kansai International Airport Terminal 2"
      },
      "summary": {
        "departureLabel": "行程開始",
        "departure": "18:15 桃園起飛",
        "area": "KIX T2・臨空城",
        "stamina": "輕鬆・電車一站",
        "keyPoint": "OMO 不提供接機巴士"
      },
      "transportSummary": {
        "displayText": "機場免費航廈巴士＋JR／南海電車＋步行；今日交通約 ¥370／人。"
      },
      "notices": [
        {
          "id": "notice-d1-1",
          "position": "afterTimeline",
          "contentHtml": "OMO 免費接駁<strong>只有飯店 → 關西機場</strong>，每日 05:00～11:00 發車且需事先預約，沒有從 T1／T2 接客。今晚不要在機場等 OMO 巴士，照上方路線搭電車一站最穩。若延誤錯過末班電車，可優先搭 <strong>00:00 從 T2 0 號乘車處</strong>出發的深夜巴士，00:21 抵達臨空城華盛頓飯店後再步行至 OMO；再錯過就直接從 T2 搭計程車，車程約 10 分鐘。班次仍以出發前官方公告為準。",
          "style": "warning",
          "title": "⚠️ OMO 接駁方向別搞反"
        }
      ],
      "events": [
        {
          "id": "d1-flight-outbound",
          "type": "flight",
          "schedule": {
            "start": "18:15",
            "end": "22:00",
            "qualifier": "exact",
            "displayLabel": "18:15 - 22:00"
          },
          "title": "桃園國際機場 ➔ 關西國際機場",
          "descriptionHtml": "飛往大阪，夜間抵達關西空港 T2。",
          "primaryPlaceId": null,
          "relatedPlaceIds": [],
          "flightId": "flight-outbound",
          "transportBeforeId": null,
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d1-omo-checkin",
          "type": "accommodation",
          "schedule": {
            "start": "22:40",
            "end": "23:40",
            "qualifier": "exact",
            "displayLabel": "22:40 - 23:40"
          },
          "title": "OMO 關西機場 Check-in",
          "descriptionHtml": "從機場搭一站到臨空城，5 號出口步行約 1 分鐘抵達。飯店 15:00 後可入住，館內有自助報到機、24 小時便利商店與大浴場；若超過午夜才抵達，先聯絡飯店夜間電話。",
          "primaryPlaceId": "omo-kix-place",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d1-omo-checkin",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d2",
      "dayNumber": 2,
      "date": "2026-10-08",
      "title": "大阪市區漫遊 & 購物",
      "badge": "心齋橋 · 大阪城 · 天滿",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "omo-kix"
      },
      "summary": {
        "departureLabel": "建議出門",
        "departure": "08:30 左右",
        "area": "心齋橋・大阪城・天滿",
        "stamina": "較高・跨區步行",
        "keyPoint": "先確認住宿寄物"
      },
      "transportSummary": {
        "displayText": "南海電車＋Osaka Metro；今日交通約 ¥1,880／人（不含可能的住宿寄物費／備案置物櫃）。"
      },
      "notices": [
        {
          "id": "notice-d2-1",
          "position": "afterTimeline",
          "contentHtml": "住的新今宮走路就到 <strong>新世界 &amp; 通天閣</strong> —— 大阪串炸（串カツ）大本營。Day 6 晚餐已正式排入串炸行程；其他晚上哪天玩累了不想跑遠，隨時都能散步過去配生啤吃一輪，是全程最方便的「機動晚餐」選項。",
          "style": "info",
          "title": "🍢 住宿旁的寶藏：新世界串炸（任何一晚都適用）"
        },
        {
          "id": "notice-d2-time-limit",
          "position": "beforeEvent",
          "beforeEventId": "d2-katsuhana",
          "contentHtml": "大阪城與天滿宮都要去，因此寶可夢中心最晚 11:15 離開、敘敘苑午餐最晚 13:30 結束。敘敘苑午間不能訂位，若 11:30 到現場候位超過 40 分鐘，就先改吃同棟其他餐廳，別讓整天往後推。大阪城若遇排隊，優先縮短館內停留，不要壓縮 <strong>18:00 KATSU華訂位</strong>；行李寄放在住宿（或備案的新今宮站置物櫃），晚餐後再領。",
          "style": "warning",
          "title": "⏱️ 今天的時間底線"
        }
      ],
      "events": [
        {
          "id": "d2-luggage-drop",
          "type": "logistics",
          "schedule": {
            "start": "09:15",
            "end": "10:00",
            "qualifier": "exact",
            "displayLabel": "09:15 - 10:00"
          },
          "title": "住宿寄放行李",
          "descriptionHtml": "抵達新今宮後先步行約 2 分鐘到住宿寄放行李，再走約 5 分鐘到動物園前站前往心齋橋。住宿列有行李寄存服務，但可能收費或有使用時段，請出發前先以訂房訊息確認；若當日無法寄放，就改用南海／JR 新今宮站置物櫃。",
          "primaryPlaceId": "shinimamiya-hotel-place",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-luggage-drop",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d2-pokemon-center",
          "type": "shopping",
          "schedule": {
            "start": "10:00",
            "end": "11:15",
            "qualifier": "exact",
            "displayLabel": "10:00 - 11:15"
          },
          "title": "寶可夢中心 OSAKA DX",
          "descriptionHtml": "寄好行李後從動物園前搭御堂筋線到心齋橋，利用地下道直達大丸心齋橋店。先到本館 9F 的寶可夢官方商店逛限定商品與拍照；<strong>11:15 前結帳離開</strong>，搭電梯上 10F 排隊候位（午餐不能訂位，早到才不用久等）。這裡只逛商店，不排需要另外預約的寶可夢咖啡廳。",
          "primaryPlaceId": "pokemon-center-osaka-dx",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-pokemon-center",
          "reservationId": null,
          "highlights": [
            {
              "id": "d2-pokemon-center-highlight-1",
              "text": "⚡ 同棟順遊：9F 寶可夢中心 → 10F 敘敘苑"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d2-jojoen",
          "type": "meal",
          "schedule": {
            "start": "11:30",
            "end": "13:30",
            "qualifier": "exact",
            "displayLabel": "11:30 - 13:30"
          },
          "title": "敘敘苑 大丸心齋橋店 (商業午餐)",
          "descriptionHtml": "高 CP 值燒肉商業午餐，就在大丸本館 10F。<strong>首選 ¥4,700 綜合午餐</strong>，包含赤身里肌、カルビ、烤蝦，以及醃菜、沙拉、拌菜、白飯、湯、甜點與飲料；若想控制預算，再選 ¥3,700 燒肉午餐。平日午餐時段 11:00–15:00（L.O.），<strong>午間不接受訂位</strong>，一律現場候位——大丸開店後直接上 10F 登記，11:30 前到最保險，越接近 12:00 排越久（價格與內容以現場菜單為準）。",
          "primaryPlaceId": "jojoen-shinsaibashi",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-jojoen",
          "reservationId": "rsv-jojoen",
          "highlights": [
            {
              "id": "d2-jojoen-highlight-1",
              "text": "🍱 首選：¥4,700 綜合午餐"
            }
          ],
          "foodChecklistIds": [
            "food-jojoen-lunch"
          ],
          "actions": []
        },
        {
          "id": "d2-osaka-castle",
          "type": "visit",
          "schedule": {
            "start": "13:30",
            "end": "15:40",
            "qualifier": "exact",
            "displayLabel": "13:30 - 15:40"
          },
          "title": "大阪城公園 & 大阪城天守閣",
          "descriptionHtml": "午餐後從心齋橋站搭長堀鶴見綠地線到森ノ宮，穿過大阪城公園前往天守閣。建議<strong>先線上購票</strong>，約 14:05 入館、15:15 前離開天守閣，再由西側走向谷町四丁目站；官方開館時間為 09:00–18:00、最後入館 17:30，但今天仍要保留天滿宮與晚餐緩衝。",
          "primaryPlaceId": "osaka-castle",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-osaka-castle",
          "reservationId": null,
          "highlights": [
            {
              "id": "d2-osaka-castle-highlight-1",
              "text": "🏯 重點：天守閣展覽、頂樓展望台、城郭外觀"
            }
          ],
          "foodChecklistIds": [],
          "actions": [
            {
              "type": "statusLink",
              "label": "🎫 建議事先購買天守閣電子票",
              "url": "https://www.osakacastle.net/guide/",
              "statusClass": "rsv-must"
            }
          ]
        },
        {
          "id": "d2-osaka-tenmangu",
          "type": "visit",
          "schedule": {
            "start": "16:00",
            "end": "17:10",
            "qualifier": "exact",
            "displayLabel": "16:00 - 17:10"
          },
          "title": "大阪天滿宮",
          "descriptionHtml": "從谷町四丁目搭谷町線到南森町，前往供奉學問之神菅原道真的大阪天滿宮參拜。境內約 30～40 分鐘即可；若前段延誤，最少保留 20 分鐘參拜，<strong>17:10 左右離開</strong>，再從南森町搭堺筋線直達堺筋本町。",
          "primaryPlaceId": "osaka-tenmangu",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-osaka-tenmangu",
          "reservationId": null,
          "highlights": [
            {
              "id": "d2-osaka-tenmangu-highlight-1",
              "text": "⛩️ 重點：本殿參拜、御守／御朱印依現場時間"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d2-katsuhana",
          "type": "meal",
          "schedule": {
            "start": "18:00",
            "end": "19:30",
            "qualifier": "exact",
            "displayLabel": "18:00 - 19:30"
          },
          "title": "とんかつ KATSU 華 (日式豬排)",
          "descriptionHtml": "米其林推薦名店！外皮香酥、肉質極致柔軟的頂級炸豬排。官網目前公告晚餐週三、週四、週五營業（18:00–23:00），可透過 TableCheck 預約；約 12 席、預約用餐時間為60分鐘，每人需點一份定食。臨時休業仍以店家 Instagram 公告為準，並記得準備現金。",
          "primaryPlaceId": "katsuhana",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-katsuhana",
          "reservationId": "rsv-katsuhana",
          "highlights": [
            {
              "id": "d2-katsuhana-highlight-1",
              "text": "🥩 必吃：KATSU華 炸豬排"
            }
          ],
          "foodChecklistIds": [
            "food-katsuhana-tonkatsu"
          ],
          "actions": []
        },
        {
          "id": "d2-hotel-checkin",
          "type": "accommodation",
          "schedule": {
            "start": "19:30",
            "end": "20:30",
            "qualifier": "exact",
            "displayLabel": "19:30 - 20:30"
          },
          "title": "住宿領行李 & 自助入住",
          "descriptionHtml": "吃完豬排後從堺筋本町搭堺筋線到動物園前，步行約 5 分鐘回住宿領取早上寄放的行李，再依密碼／入住指示直接進房。若早上使用車站置物櫃，先繞到新今宮站領行李；今天景點密集，入住後以休息為主。",
          "primaryPlaceId": "shinimamiya-hotel-place",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d2-hotel-checkin",
          "reservationId": null,
          "highlights": [
            {
              "id": "d2-hotel-checkin-highlight-1",
              "text": "🧳 入住時間 16:00 後；確認已收到房號與取鑰匙方式"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d3",
      "dayNumber": 3,
      "date": "2026-10-09",
      "title": "京都經典千本鳥居與東山古都",
      "badge": "京都東山",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "summary": {
        "departureLabel": "建議出門",
        "departure": "06:40",
        "area": "伏見稻荷・東山",
        "stamina": "較高・長距離步行",
        "keyPoint": "奈良線普通車才停稲荷"
      },
      "transportSummary": {
        "displayText": "JR＋京阪電車；今日交通約 ¥1,880／人。"
      },
      "notices": [
        {
          "id": "notice-d3-1",
          "position": "afterTimeline",
          "contentHtml": "這天 08:00–18:30 是全程排最滿的一天。傍晚累了就直接跳過花見小路，從祇園四条搭車回大阪。",
          "style": "info",
          "title": "😌 輕鬆風提醒"
        }
      ],
      "events": [
        {
          "id": "d3-fushimi-inari",
          "type": "visit",
          "schedule": {
            "start": "08:00",
            "end": "10:30",
            "qualifier": "exact",
            "displayLabel": "08:00 - 10:30"
          },
          "title": "伏見稻荷大社",
          "descriptionHtml": "建議早起避開人潮，漫步於壯觀的千本鳥居與狐狸神守護的神社。",
          "primaryPlaceId": "fushimi-inari",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d3-fushimi-inari",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d3-kiyomizu-higashiyama",
          "type": "visit",
          "schedule": {
            "start": "11:00",
            "end": "14:30",
            "qualifier": "exact",
            "displayLabel": "11:00 - 14:30"
          },
          "title": "清水寺 ➔ 二年坂 ➔ 三年坂",
          "descriptionHtml": "參觀清水舞台，俯瞰京都市景，沿石板路逛老街品嚐日式小吃。",
          "primaryPlaceId": "kiyomizu-dera",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d3-kiyomizu-higashiyama",
          "reservationId": null,
          "highlights": [
            {
              "id": "d3-kiyomizu-higashiyama-highlight-1",
              "text": "🍲 午餐：京都壽喜燒 / 鰻魚飯 / 湯豆腐"
            }
          ],
          "foodChecklistIds": [
            "food-unagi",
            "food-sukiyaki"
          ],
          "actions": []
        },
        {
          "id": "d3-yasaka-gion-kamogawa",
          "type": "visit",
          "schedule": {
            "start": "15:00",
            "end": "18:30",
            "qualifier": "exact",
            "displayLabel": "15:00 - 18:30"
          },
          "title": "八坂神社 ➔ 花見小路 ➔ 鴨川",
          "descriptionHtml": "漫步藝妓風情的花見小路，傍晚坐在鴨川河畔感受京都獨有的悠閒氛圍。",
          "primaryPlaceId": "yasaka-shrine",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d3-yasaka-gion-kamogawa",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d3-ramen",
          "type": "meal",
          "schedule": {
            "start": null,
            "end": null,
            "qualifier": "flexible",
            "displayLabel": "19:45 後・彈性"
          },
          "title": "回新今宮後的拉麵晚餐",
          "descriptionHtml": "從祇園四条搭京阪到京橋，再轉大阪環狀線回新今宮；下車後再依當晚營業狀況挑車站或動物園前附近的拉麵店，不需額外搭車。若京都午餐吃得晚、走累了或已先吃晚餐，就直接回住宿休息。",
          "primaryPlaceId": "shinimamiya-ramen",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d3-ramen",
          "reservationId": null,
          "highlights": [
            {
              "id": "d3-ramen-highlight-1",
              "text": "🍜 彈性晚餐：新今宮站周邊拉麵"
            }
          ],
          "foodChecklistIds": [
            "food-ramen"
          ],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d4",
      "dayNumber": 4,
      "date": "2026-10-10",
      "title": "箕面自然瀑布與勝尾寺祈福",
      "badge": "箕面 · 達摩",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "summary": {
        "departureLabel": "建議出門",
        "departure": "07:30",
        "area": "勝尾寺・箕面",
        "stamina": "中高・步道下坡",
        "keyPoint": "預約計程車／瀑布可取消"
      },
      "transportSummary": {
        "displayText": "Metro＋巴士＋阪急約 ¥1,860／人，另加計程車約 ¥2,500～3,500／車。"
      },
      "notices": [
        {
          "id": "notice-d4-1",
          "position": "beforeTimeline",
          "contentHtml": "戶外景點本身耐人潮，但勝尾寺與瀑布之間的交通不耐塞車。出發前一週再次核對阪急巴士時刻，並事先詢問計程車公司能否在勝尾寺接送至「大滝上駐車場」。若無法確認接送，當天以勝尾寺為主、瀑布為可取消項目。",
          "style": "info",
          "title": "🚕 Day 4 成敗關鍵：接駁與備案"
        }
      ],
      "events": [
        {
          "id": "d4-katsuoji",
          "type": "visit",
          "schedule": {
            "start": "09:00",
            "end": "11:45",
            "qualifier": "exact",
            "displayLabel": "09:00 - 11:45"
          },
          "title": "勝尾寺 (勝運達摩之寺)",
          "descriptionHtml": "滿山滿谷可愛的不倒翁達摩！求勝運、拍照打卡的絕佳避世景點。連假請早點出發，開門就到最舒服。",
          "primaryPlaceId": "katsuoji",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d4-katsuoji",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d4-minoh-waterfall",
          "type": "visit",
          "schedule": {
            "start": "12:30",
            "end": "15:15",
            "qualifier": "exact",
            "displayLabel": "12:30 - 15:15"
          },
          "title": "箕面大瀑布大自然踏青",
          "descriptionHtml": "在日本百選名瀑下享受森林負離子，沿著溪谷步道一路散步下山。小提醒：當地名物 <strong>紅葉天婦羅（炸楓葉）</strong> 很有趣，可以買來吃！",
          "primaryPlaceId": "minoh-waterfall",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d4-minoh-waterfall",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [
            "food-momiji-tempura"
          ],
          "actions": []
        },
        {
          "id": "d4-harbs",
          "type": "meal",
          "schedule": {
            "start": "16:45",
            "end": "17:45",
            "qualifier": "exact",
            "displayLabel": "16:45 - 17:45"
          },
          "title": "HARBS Namba Parks 店",
          "descriptionHtml": "從箕面回到大阪梅田後，直接搭御堂筋線到難波，前往 Namba Parks 3F 吃招牌水果千層蛋糕。堂食營業至 20:00、最後點餐 19:30；連假午後可能排隊，<strong>候位超過約 30 分鐘就改外帶</strong>。17:45 前離開，步行約 10～15 分鐘即可抵達牛舌店，不必再搭車。",
          "primaryPlaceId": "harbs-namba-parks",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d4-harbs",
          "reservationId": "rsv-harbs",
          "highlights": [
            {
              "id": "d4-harbs-highlight-1",
              "text": "🍰 首選：ミルクレープ（水果千層蛋糕）"
            }
          ],
          "foodChecklistIds": [
            "food-harbs-mille-crepes"
          ],
          "actions": []
        },
        {
          "id": "d4-gyutan-lemon",
          "type": "meal",
          "schedule": {
            "start": "18:30",
            "end": "20:15",
            "qualifier": "exact",
            "displayLabel": "18:30 - 20:15"
          },
          "title": "新宿燒肉 牛舌的檸檬 (大阪本店)",
          "descriptionHtml": "極厚切炭烤牛舌搭上清爽檸檬，高人氣話題燒肉！<strong>已訂位 18:30</strong>，山區接駁與連假塞車都留了緩衝。連假週六晚上尖峰，請準時報到；若箕面下山延誤，務必提前打電話告知店家。",
          "primaryPlaceId": "gyutan-lemon-osaka",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d4-gyutan-lemon",
          "reservationId": "rsv-gyutan-lemon",
          "highlights": [
            {
              "id": "d4-gyutan-lemon-highlight-1",
              "text": "🍋 必吃：檸檬牛舌"
            }
          ],
          "foodChecklistIds": [
            "food-gyutan-lemon"
          ],
          "actions": []
        },
        {
          "id": "d4-namba-food",
          "type": "meal",
          "schedule": {
            "start": null,
            "end": null,
            "qualifier": "flexible",
            "displayLabel": "20:30 後・視體力"
          },
          "title": "難波地道美食品嚐 (章魚燒/大阪燒)",
          "descriptionHtml": "夜晚尋找道地章魚燒（如會津屋、築地銀章魚）與熱騰騰的大阪燒作為宵夜！",
          "primaryPlaceId": "namba-okonomiyaki",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d4-namba-food",
          "reservationId": null,
          "highlights": [
            {
              "id": "d4-namba-food-highlight-1",
              "text": "🐙 必吃：章魚燒 / 大阪燒"
            }
          ],
          "foodChecklistIds": [
            "food-takoyaki",
            "food-okonomiyaki"
          ],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d5",
      "dayNumber": 5,
      "date": "2026-10-11",
      "title": "奈良萌鹿與抹茶故鄉宇治",
      "badge": "奈良 · 宇治",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "summary": {
        "departureLabel": "建議出門",
        "departure": "08:00",
        "area": "奈良・宇治",
        "stamina": "中高・跨城移動",
        "keyPoint": "先抽整理券／內部參觀選配"
      },
      "transportSummary": {
        "displayText": "JR 大和路線＋奈良線＋京都線；今日交通約 ¥2,320／人。"
      },
      "notices": [
        {
          "id": "notice-d5-1",
          "position": "beforeTimeline",
          "contentHtml": "這天是三連休的週日，奈良公園會非常滿。順序已調成「早上先奈良、下午再到相對清幽的宇治」——既順 JR 路線（新今宮直達奈良，再轉奈良線到宇治），又能在人潮起來前餵完鹿、看完大佛，節奏舒服很多。",
          "style": "warning",
          "title": "⚠️ 連假週日：早上先衝奈良，下午退宇治"
        },
        {
          "id": "notice-d5-2",
          "position": "beforeTimeline",
          "contentHtml": "抵達後依序處理：<strong>中村藤吉抽整理券 → 平等院庭園與鳳翔館 → 抹茶甜點</strong>。鳳凰堂內部採指定場次，連假可能久候，列為有合適場次才參加的選配；若中村藤吉候位超過90分鐘，也直接改吃附近其他抹茶店，17:20 前往宇治站移動。",
          "style": "info",
          "title": "🎯 宇治取捨順序"
        }
      ],
      "events": [
        {
          "id": "d5-nara-todaiji",
          "type": "visit",
          "schedule": {
            "start": "09:00",
            "end": "12:30",
            "qualifier": "exact",
            "displayLabel": "09:00 - 12:30"
          },
          "title": "奈良公園 & 東大寺",
          "descriptionHtml": "買仙貝體驗與小鹿互動，參訪氣勢恢宏的東大寺大佛殿。加碼：<strong>中谷堂</strong> 看現搗麻糬表演、<strong>奈良町</strong> 古巷散步。",
          "primaryPlaceId": "nara-park",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d5-nara-todaiji",
          "reservationId": null,
          "highlights": [
            {
              "id": "d5-nara-todaiji-highlight-1",
              "text": "🍱 必吃：平宗柿葉壽司 / 中谷堂麻糬"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d5-uji",
          "type": "visit",
          "schedule": {
            "start": "13:30",
            "end": "17:30",
            "qualifier": "exact",
            "displayLabel": "13:30 - 17:30"
          },
          "title": "宇治散策 (平等院 & 宇治川)",
          "descriptionHtml": "以平等院庭園、鳳翔館和宇治抹茶為主。抹茶推薦 <strong>中村藤吉本店</strong>（招牌抹茶生茶凍）：一到宇治先抽整理券，再去平等院；鳳凰堂內部參觀採指定場次，若等待時間過長就跳過，不壓縮晚餐與回程。",
          "primaryPlaceId": "byodoin",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d5-uji",
          "reservationId": "rsv-nakamura-tokichi",
          "highlights": [
            {
              "id": "d5-uji-highlight-1",
              "text": "🍵 必吃：中村藤吉抹茶生茶凍 / 抹茶蕎麥麵"
            }
          ],
          "foodChecklistIds": [
            "food-matcha-jelly"
          ],
          "actions": []
        },
        {
          "id": "d5-toyotei",
          "type": "meal",
          "schedule": {
            "start": "18:00",
            "end": "19:15",
            "qualifier": "exact",
            "displayLabel": "18:00 - 19:15"
          },
          "title": "東洋亭 京都Porta店 (百年洋食晚餐)",
          "descriptionHtml": "回程在京都駅轉車順便吃晚餐，零繞路！京都百年洋食老店，招牌鐵板漢堡排（鋁箔包上桌熱騰騰）配整顆冰鎮番茄沙拉。Porta 地下街與車站直結，吃完直接搭新快速回大阪。",
          "primaryPlaceId": "toyotei-kyoto-porta",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d5-toyotei",
          "reservationId": "rsv-toyotei",
          "highlights": [
            {
              "id": "d5-toyotei-highlight-1",
              "text": "🍳 必吃：東洋亭漢堡排"
            }
          ],
          "foodChecklistIds": [
            "food-toyotei-hamburg"
          ],
          "actions": []
        }
      ],
      "endingTransportId": "tr-d5-return"
    },
    {
      "id": "d6",
      "dayNumber": 6,
      "date": "2026-10-12",
      "title": "海洋、古社與大阪夜景",
      "badge": "海遊館 · 住吉 · 阿倍野",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "summary": {
        "departureLabel": "建議出門",
        "departure": "依電子票反推",
        "area": "海遊館・住吉・阿倍野",
        "stamina": "中高・跨區移動",
        "keyPoint": "15:50 前離開住吉大社"
      },
      "transportSummary": {
        "displayText": "Osaka Metro＋JR＋南海＋阪堺電車；今日交通約 ¥1,310／人。"
      },
      "notices": [
        {
          "id": "notice-d6-1",
          "position": "beforeTimeline",
          "contentHtml": "這天是三連休最後一天（運動之日），海遊館仍會有人潮。行前務必在<strong>官網先買「指定日期時間」電子票</strong>，並趕在開館時進場（開館時間以官網公告為準）；連假尾聲下午人潮通常提早散，越晚越輕鬆。",
          "style": "warning",
          "title": "🎫 連假最後一天：先買票、開門就進場"
        }
      ],
      "events": [
        {
          "id": "d6-kaiyukan",
          "type": "visit",
          "schedule": {
            "start": null,
            "end": null,
            "qualifier": "flexible",
            "displayLabel": "依電子票指定時段 - 13:30"
          },
          "title": "大阪海遊館 & 天保山",
          "descriptionHtml": "世界級水族館！觀賞巨大的鯨鯊與可愛水獺。入場時間以購票時官方營業日曆與電子票指定時段為準，優先選當日最早可購買時段；<strong>13:30 準時離開</strong>，前往住吉大社。",
          "primaryPlaceId": "osaka-aquarium-kaiyukan",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d6-kaiyukan",
          "reservationId": "rsv-kaiyukan",
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d6-sumiyoshi-taisha",
          "type": "visit",
          "schedule": {
            "start": "14:30",
            "end": "15:50",
            "qualifier": "exact",
            "displayLabel": "14:30 - 15:50"
          },
          "title": "住吉大社",
          "descriptionHtml": "參拜全國住吉神社總本社，走過朱紅色反橋，依序參拜第一至第四本宮。10 月外周門 16:00 關閉、御垣內 17:00 關閉，因此<strong>15:50 前往正門離場</strong>；御守授與所到 17:00，若要購買請先處理。",
          "primaryPlaceId": "sumiyoshi-taisha",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d6-sumiyoshi-taisha",
          "reservationId": null,
          "highlights": [
            {
              "id": "d6-sumiyoshi-taisha-highlight-1",
              "text": "⛩️ 重點：反橋、住吉造本殿、四座本宮"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d6-harukas-300",
          "type": "visit",
          "schedule": {
            "start": "16:30",
            "end": "18:30",
            "qualifier": "exact",
            "displayLabel": "16:30 - 18:30"
          },
          "title": "HARUKAS 300 阿倍野夜景",
          "descriptionHtml": "搭阪堺路面電車直達天王寺，登上 60F 展望台俯瞰大阪。10/12 日落約 <strong>17:28</strong>，16:30 左右入場可一次看到白天、夕陽與夜景；通常營業 09:00–22:00，連假傍晚建議先買電子票並預留電梯排隊時間。",
          "primaryPlaceId": "harukas-300",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d6-harukas-300",
          "reservationId": "rsv-harukas-300",
          "highlights": [
            {
              "id": "d6-harukas-300-highlight-1",
              "text": "🌇 最佳節奏：16:30 入場 → 17:28 日落 → 18:15 後夜景"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d6-shinsekai-kushikatsu",
          "type": "meal",
          "schedule": {
            "start": "18:45",
            "end": "20:15",
            "qualifier": "exact",
            "displayLabel": "18:45 - 20:15"
          },
          "title": "新世界串炸 & 通天閣夜景",
          "descriptionHtml": "看完 HARUKAS 夜景後搭御堂筋線一站到動物園前，進入大阪串炸（串カツ）大本營。挑一間順眼的老店，串炸配生啤，飯後散步看通天閣點燈——連假最後一晚用最道地的方式收尾。",
          "primaryPlaceId": "shinsekai-tsutenkaku",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d6-shinsekai-kushikatsu",
          "reservationId": "rsv-shinsekai-kushikatsu",
          "highlights": [
            {
              "id": "d6-shinsekai-kushikatsu-highlight-1",
              "text": "🍢 必吃：串カツ配生啤酒"
            }
          ],
          "foodChecklistIds": [
            "food-shinsekai-kushikatsu"
          ],
          "actions": []
        },
        {
          "id": "d6-drugstore-shopping",
          "type": "shopping",
          "schedule": {
            "start": "20:15",
            "end": "21:15",
            "qualifier": "flexible",
            "displayLabel": "20:15 - 21:15・彈性"
          },
          "title": "住宿附近藥妝 & 伴手禮採買",
          "descriptionHtml": "串炸晚餐後沿新世界商圈順路採買：先到 <strong>SUGI 藥局通天閣店</strong>找藥品、保健品與日系保養品，再視需要到<strong>MEGA 唐吉訶德新世界店</strong>補零食、伴手禮和生活用品。兩店皆可辦理免稅，記得攜帶護照；價格、營業時間及免稅規則以當日門市公告為準。買完直接步行回住宿，不必提著戰利品跑其他景點。",
          "primaryPlaceId": null,
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d6-drugstore-shopping",
          "reservationId": null,
          "highlights": [
            {
              "id": "d6-drugstore-shopping-highlight-1",
              "text": "🧳 採買原則：今晚買齊，回房立即整理行李與確認重量"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d7",
      "dayNumber": 7,
      "date": "2026-10-13",
      "title": "地道早市、招福參拜 & 臨空城血拚",
      "badge": "木津 · 難波 · Outlet",
      "overnight": {
        "type": "accommodation",
        "accommodationId": "hotel-nikko-kix"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "shinimamiya-1"
      },
      "summary": {
        "departureLabel": "輕裝出門",
        "departure": "07:35 左右",
        "area": "木津・難波・臨空城",
        "stamina": "中等・帶行李移動",
        "keyPoint": "10:00 前回房退房"
      },
      "transportSummary": {
        "displayText": "步行＋南海電車；今日交通約 ¥1,150／人（不含臨空城置物櫃）。"
      },
      "notices": [
        {
          "id": "notice-d7-1",
          "position": "beforeTimeline",
          "contentHtml": "這天改成「<strong>行李留房內，輕裝逛市場與神社，再回住宿退房</strong>」。前一晚先把行李整理好，07:35 左右出門；難波八阪神社最晚 09:20 離開，09:40 左右回房取行李，確保 10:00 前完成退房。這樣不用在新今宮站寄放，也不必拖行李逛早市。",
          "style": "info",
          "title": "🧳 退房與行李動線"
        }
      ],
      "events": [
        {
          "id": "d7-kizu-market",
          "type": "visit",
          "schedule": {
            "start": "07:50",
            "end": "08:50",
            "qualifier": "exact",
            "displayLabel": "07:50 - 08:50"
          },
          "title": "木津卸売市場 (木津市場早市)",
          "descriptionHtml": "感受在地人的熱情市場！必吃：<strong>木津魚市食堂</strong>海鮮丼（賣完收攤）、<strong>まるよし</strong>平價握壽司、<strong>天はな</strong>天丼、老舖食堂<strong>当志郎</strong>的名物「肉吸い」。行李留在房內，輕裝逛早市；08:50 準時離開，直接步行前往難波八阪神社。",
          "primaryPlaceId": "kizu-market",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d7-kizu-market",
          "reservationId": null,
          "highlights": [
            {
              "id": "d7-kizu-market-highlight-1",
              "text": "🍣 必吃：海鮮丼 / 握壽司 / 天丼 / 肉吸い"
            }
          ],
          "foodChecklistIds": [
            "food-unagi",
            "food-kizu-seafood"
          ],
          "actions": []
        },
        {
          "id": "d7-namba-yasaka",
          "type": "visit",
          "schedule": {
            "start": "09:00",
            "end": "09:20",
            "qualifier": "exact",
            "displayLabel": "09:00 - 09:20"
          },
          "title": "難波八阪神社",
          "descriptionHtml": "從木津市場向北步行約 10 分鐘，參觀張開巨口、約 12 公尺高的獅子殿，祈求招福納勝。停留約 20 分鐘後直接步行回住宿取行李；09:20 必須離開，才能從容趕上 10:00 退房期限。",
          "primaryPlaceId": "namba-yasaka-shrine",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d7-namba-yasaka",
          "reservationId": null,
          "highlights": [
            {
              "id": "d7-namba-yasaka-highlight-1",
              "text": "⛩️ 免費參拜・重點拍獅子殿"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d7-checkout",
          "type": "logistics",
          "schedule": {
            "start": "09:40",
            "end": "10:00",
            "qualifier": "exact",
            "displayLabel": "09:40 - 10:00"
          },
          "title": "回住宿取行李 & 退房",
          "descriptionHtml": "前一晚完成打包，回房後確認護照、錢包、充電器與冰箱，拿行李直接退房。接著步行到南海新今宮站，搭空港急行前往臨空城。",
          "primaryPlaceId": "shinimamiya-hotel-place",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d7-checkout",
          "reservationId": null,
          "highlights": [
            {
              "id": "d7-checkout-highlight-1",
              "text": "⏰ 10:00 前完成退房"
            }
          ],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d7-rinku-outlet",
          "type": "shopping",
          "schedule": {
            "start": "11:15",
            "end": "18:30",
            "qualifier": "exact",
            "displayLabel": "11:15 - 18:30"
          },
          "title": "臨空城 Outlet (Rinku Premium Outlets)",
          "descriptionHtml": "關西最大 Outlet！回住宿退房後直接從新今宮搭車，預計 11:00～11:15 抵達；先寄放行李，再從容吃午餐、逛各大品牌，傍晚欣賞海景夕陽。18:30 左右離場，避免隔天早班機前一晚太晚入住。",
          "primaryPlaceId": "rinku-premium-outlets",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d7-rinku-outlet",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d7-nikko-checkin",
          "type": "accommodation",
          "schedule": {
            "start": "19:30",
            "end": null,
            "qualifier": "around",
            "displayLabel": "19:30 左右"
          },
          "title": "關西機場日航酒店 Check-in",
          "descriptionHtml": "收拾戰利品，準備隔天清晨無縫搭機回家！",
          "primaryPlaceId": "hotel-nikko-kix-place",
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d7-nikko-checkin",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        }
      ],
      "endingTransportId": null
    },
    {
      "id": "d8",
      "dayNumber": 8,
      "date": "2026-10-14",
      "title": "大阪關西 ✈️ 滿載而歸台灣",
      "badge": "順風回家",
      "overnight": {
        "type": "home",
        "label": "溫暖的家"
      },
      "routeOrigin": {
        "type": "accommodation",
        "accommodationId": "hotel-nikko-kix"
      },
      "summary": {
        "departureLabel": "最晚出門",
        "departure": "06:00 前",
        "area": "關西機場 T2",
        "stamina": "輕鬆・返程日",
        "keyPoint": "06:50 前完成報到"
      },
      "transportSummary": {
        "displayText": "步行＋免費接駁巴士；今日交通約 ¥0／人。"
      },
      "notices": [],
      "events": [
        {
          "id": "d8-kix-checkin",
          "type": "accommodation",
          "schedule": {
            "start": "06:20",
            "end": "06:50",
            "qualifier": "exact",
            "displayLabel": "06:20 - 06:50"
          },
          "title": "機場 T2 報到與安檢",
          "descriptionHtml": "辦理自主報到手續與託運行李，06:50 前完成最保險。",
          "primaryPlaceId": null,
          "relatedPlaceIds": [],
          "flightId": null,
          "transportBeforeId": "tr-d8-kix-checkin",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        },
        {
          "id": "d8-flight-return",
          "type": "flight",
          "schedule": {
            "start": "07:50",
            "end": "09:55",
            "qualifier": "exact",
            "displayLabel": "07:50 - 09:55"
          },
          "title": "搭機返回台北桃園 (MM023)",
          "descriptionHtml": "帶著滿滿的美食記憶與戰利品平安抵台！",
          "primaryPlaceId": null,
          "relatedPlaceIds": [],
          "flightId": "flight-return",
          "transportBeforeId": "tr-d8-flight-return",
          "reservationId": null,
          "highlights": [],
          "foodChecklistIds": [],
          "actions": []
        }
      ],
      "endingTransportId": null
    }
  ],
  "journeys": {
    "tr-d1-omo-checkin": {
      "id": "tr-d1-omo-checkin",
      "label": "前往 OMO 關西機場 Check-in",
      "from": {
        "type": "text",
        "value": "Kansai International Airport Terminal 2"
      },
      "to": {
        "type": "text",
        "value": "OMO Kansai Airport by Hoshino Resorts"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Kansai%20International%20Airport%20Terminal%202&destination=OMO%20Kansai%20Airport%20by%20Hoshino%20Resorts&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "procedure",
          "icon": "🛬",
          "operator": null,
          "badges": [],
          "label": "T2 入境",
          "from": null,
          "to": null,
          "direction": null,
          "duration": null,
          "displayMeta": "排隊出關、領行李",
          "fare": null,
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "bus",
          "icon": "🚌",
          "operator": null,
          "badges": [
            {
              "colorKey": "bus",
              "label": "機場免費航廈巴士"
            }
          ],
          "label": "T2 → Aeroplaza／関西空港駅",
          "from": "T2",
          "to": "Aeroplaza／関西空港駅",
          "direction": null,
          "duration": null,
          "displayMeta": "約7～9分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "出 T2 1F 後依「Terminal 1／Railways」指標搭車；下車點在 Aeroplaza 1F",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "Aeroplaza →「関西空港」駅",
          "from": "Aeroplaza",
          "to": "「関西空港」駅",
          "direction": null,
          "duration": null,
          "displayMeta": "約3分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "上樓後跟著「JR／南海電車」指標；JR 或南海都可到臨空城",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "nankai",
              "label": "JR／南海"
            }
          ],
          "label": "関西空港 → りんくうタウン",
          "from": "関西空港",
          "to": "りんくうタウン",
          "direction": null,
          "duration": null,
          "displayMeta": "1站約5～6分・約¥370",
          "fare": {
            "kind": "estimate",
            "amount": 370,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥370／人"
          },
          "noteHtml": "搭 JR 關空快速或南海空港急行／普通；不要搭不停臨空城的特急 HARUKA，南海ラピート也需另購特急券",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "りんくうタウン駅 5號出口 → OMO",
          "from": "りんくうタウン駅 5號出口",
          "to": "OMO",
          "direction": null,
          "duration": null,
          "displayMeta": "約1分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "飯店就在車站旁；拖行李優先依電梯與 5 號出口指標前進",
          "warning": null
        }
      ]
    },
    "tr-d2-luggage-drop": {
      "id": "tr-d2-luggage-drop",
      "label": "前往 住宿寄放行李",
      "from": {
        "type": "text",
        "value": "OMO Kansai Airport by Hoshino Resorts"
      },
      "to": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=OMO%20Kansai%20Airport%20by%20Hoshino%20Resorts&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "OMO → 南海「りんくうタウン」駅",
          "from": "OMO",
          "to": "南海「りんくうタウン」駅",
          "direction": null,
          "duration": null,
          "displayMeta": "5號出口約1分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "不用回關西機場，也不用搭 OMO 的機場接駁；直接從臨空城往大阪市區",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "nankai",
              "label": "南海空港急行"
            }
          ],
          "label": "りんくうタウン → 新今宮",
          "from": "りんくうタウン",
          "to": "新今宮",
          "direction": null,
          "duration": null,
          "displayMeta": "約36～38分・往「なんば」方面",
          "fare": {
            "kind": "estimate",
            "amount": 780,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥780／人"
          },
          "noteHtml": "直達不用轉車；別搭到特急ラピート（需另購特急券）",
          "warning": null
        },
        {
          "mode": "luggage",
          "icon": "🧳",
          "operator": null,
          "badges": [],
          "label": "住宿寄放行李",
          "from": null,
          "to": null,
          "direction": null,
          "duration": null,
          "displayMeta": "新今宮站步行約2分・預留15～20分",
          "fare": null,
          "noteHtml": "新住宿列有行李寄存服務，但可能收費或有使用時段；<span class=\"rs-warn\">出發前先用訂房訊息確認</span>，若當日無法寄放再使用南海／JR 新今宮站置物櫃",
          "warning": null
        }
      ]
    },
    "tr-d2-pokemon-center": {
      "id": "tr-d2-pokemon-center",
      "label": "前往 寶可夢中心 OSAKA DX",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "Pokémon Center OSAKA DX"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=Pok%C3%A9mon%20Center%20OSAKA%20DX&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "mido",
              "label": "Ⓜ 御堂筋線"
            }
          ],
          "label": "動物園前 → 心齋橋",
          "from": "動物園前",
          "to": "心齋橋",
          "direction": null,
          "duration": null,
          "displayMeta": "約8分・往「千里中央・箕面萱野」方面",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": "心齋橋站地下道直結大丸；先上本館 9F 寶可夢中心，再到 10F 吃敘敘苑午餐",
          "warning": null
        }
      ]
    },
    "tr-d2-jojoen": {
      "id": "tr-d2-jojoen",
      "label": "前往 敘敘苑 大丸心齋橋店 (商業午餐)",
      "from": {
        "type": "text",
        "value": "Pokémon Center OSAKA DX"
      },
      "to": {
        "type": "text",
        "value": "敘敘苑 大丸心齋橋店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Pok%C3%A9mon%20Center%20OSAKA%20DX&destination=%E6%95%98%E6%95%98%E8%8B%91%20%E5%A4%A7%E4%B8%B8%E5%BF%83%E9%BD%8B%E6%A9%8B%E5%BA%97&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": "同棟移動：從本館 9F 寶可夢中心搭電梯至 10F 敘敘苑。",
      "steps": []
    },
    "tr-d2-osaka-castle": {
      "id": "tr-d2-osaka-castle",
      "label": "前往 大阪城公園 & 大阪城天守閣",
      "from": {
        "type": "text",
        "value": "敘敘苑 大丸心齋橋店"
      },
      "to": {
        "type": "text",
        "value": "大阪城天守閣"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E6%95%98%E6%95%98%E8%8B%91%20%E5%A4%A7%E4%B8%B8%E5%BF%83%E9%BD%8B%E6%A9%8B%E5%BA%97&destination=%E5%A4%A7%E9%98%AA%E5%9F%8E%E5%A4%A9%E5%AE%88%E9%96%A3&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "nagahori",
              "label": "Ⓝ 長堀鶴見綠地線"
            }
          ],
          "label": "心齋橋 → 森ノ宮",
          "from": "心齋橋",
          "to": "森ノ宮",
          "direction": null,
          "duration": null,
          "displayMeta": "約12分・往「門真南」方面",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": "從森ノ宮站 3-B 出口進大阪城公園，步行至天守閣約20分",
          "warning": null
        }
      ]
    },
    "tr-d2-osaka-tenmangu": {
      "id": "tr-d2-osaka-tenmangu",
      "label": "前往 大阪天滿宮",
      "from": {
        "type": "text",
        "value": "大阪城天守閣"
      },
      "to": {
        "type": "text",
        "value": "大阪天滿宮"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%A4%A7%E9%98%AA%E5%9F%8E%E5%A4%A9%E5%AE%88%E9%96%A3&destination=%E5%A4%A7%E9%98%AA%E5%A4%A9%E6%BB%BF%E5%AE%AE&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "tanimachi",
              "label": "Ⓣ 谷町線"
            }
          ],
          "label": "谷町四丁目 → 南森町",
          "from": "谷町四丁目",
          "to": "南森町",
          "direction": null,
          "duration": null,
          "displayMeta": "約6分・往「大日」方面",
          "fare": {
            "kind": "estimate",
            "amount": 190,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥190／人"
          },
          "noteHtml": "大阪城由西側離場，從谷町四丁目站搭車；南森町 4 號出口步行約3分到大阪天滿宮",
          "warning": null
        }
      ]
    },
    "tr-d2-katsuhana": {
      "id": "tr-d2-katsuhana",
      "label": "前往 とんかつ KATSU 華 (日式豬排)",
      "from": {
        "type": "text",
        "value": "大阪天滿宮"
      },
      "to": {
        "type": "text",
        "value": "とんかつ KATSU華"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%A4%A7%E9%98%AA%E5%A4%A9%E6%BB%BF%E5%AE%AE&destination=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "sakai",
              "label": "Ⓚ 堺筋線"
            }
          ],
          "label": "南森町 → 堺筋本町",
          "from": "南森町",
          "to": "堺筋本町",
          "direction": null,
          "duration": null,
          "displayMeta": "約5分・往「天下茶屋」方面",
          "fare": {
            "kind": "estimate",
            "amount": 190,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥190／人"
          },
          "noteHtml": "17:10 左右離開天滿宮，預留步行與找店時間，準時赴 KATSU華 18:00 訂位",
          "warning": null
        }
      ]
    },
    "tr-d2-hotel-checkin": {
      "id": "tr-d2-hotel-checkin",
      "label": "前往 住宿領行李 & 自助入住",
      "from": {
        "type": "text",
        "value": "とんかつ KATSU華"
      },
      "to": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4%20KATSU%E8%8F%AF&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "sakai",
              "label": "Ⓚ 堺筋線"
            }
          ],
          "label": "堺筋本町 → 動物園前",
          "from": "堺筋本町",
          "to": "動物園前",
          "direction": null,
          "duration": null,
          "displayMeta": "約7分・往「天下茶屋」方面",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": "豬排晚餐後步行約5分回住宿，領取寄放行李並自助入住；若早上改用車站置物櫃，先到新今宮站領行李",
          "warning": null
        }
      ]
    },
    "tr-d3-fushimi-inari": {
      "id": "tr-d3-fushimi-inari",
      "label": "前往 伏見稻荷大社",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "伏見稻荷大社"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=%E4%BC%8F%E8%A6%8B%E7%A8%BB%E8%8D%B7%E5%A4%A7%E7%A4%BE&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jro",
              "label": "Ⓞ 大阪環状線"
            }
          ],
          "label": "新今宮 → 大阪",
          "from": "新今宮",
          "to": "大阪",
          "direction": null,
          "duration": null,
          "displayMeta": "約16分・往「西九条・大阪」方面",
          "fare": {
            "kind": "estimate",
            "amount": 990,
            "currency": "JPY",
            "unit": "perPerson",
            "note": "JR 通算",
            "displayLabel": "JR 通算約 ¥990／人"
          },
          "noteHtml": "⏰ 想 08:00 到稻荷，約 <strong>06:40</strong> 從住宿出門",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jra",
              "label": "Ⓐ 京都線 新快速"
            }
          ],
          "label": "大阪 → 京都",
          "from": "大阪",
          "to": "京都",
          "direction": null,
          "duration": null,
          "displayMeta": "約29分・往「野洲・米原」方面",
          "fare": {
            "kind": "included",
            "note": "通算票價內",
            "displayLabel": "通算票價內"
          },
          "noteHtml": "大阪駅站內轉乘，跟「京都線」指標",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jrd",
              "label": "Ⓓ 奈良線（普通）"
            }
          ],
          "label": "京都 → 稲荷",
          "from": "京都",
          "to": "稲荷",
          "direction": null,
          "duration": null,
          "displayMeta": "2站約5分・往「宇治・奈良」方面",
          "fare": {
            "kind": "included",
            "note": "通算票價內",
            "displayLabel": "通算票價內"
          },
          "noteHtml": "🎯 稲荷駅出站就是伏見稻荷大鳥居！<span class=\"rs-warn\">搭普通車，快速不停稲荷</span>",
          "warning": null
        }
      ]
    },
    "tr-d3-kiyomizu-higashiyama": {
      "id": "tr-d3-kiyomizu-higashiyama",
      "label": "前往 清水寺 ➔ 二年坂 ➔ 三年坂",
      "from": {
        "type": "text",
        "value": "伏見稻荷大社"
      },
      "to": {
        "type": "text",
        "value": "清水寺"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E4%BC%8F%E8%A6%8B%E7%A8%BB%E8%8D%B7%E5%A4%A7%E7%A4%BE&destination=%E6%B8%85%E6%B0%B4%E5%AF%BA&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "伏見稻荷 → 京阪「伏見稲荷」駅",
          "from": "伏見稻荷",
          "to": "京阪「伏見稲荷」駅",
          "direction": null,
          "duration": null,
          "displayMeta": "約5分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "參道走回頭往京阪方向",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "keihan",
              "label": "KH 京阪本線"
            }
          ],
          "label": "伏見稲荷 → 清水五条",
          "from": "伏見稲荷",
          "to": "清水五条",
          "direction": null,
          "duration": null,
          "displayMeta": "約8分・往「出町柳」方面（搭準急或普通）",
          "fare": {
            "kind": "estimate",
            "amount": 230,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥230／人"
          },
          "noteHtml": "<span class=\"rs-warn\">特急不停這兩站</span>，看到準急／普通再上車",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "清水五条駅 → 清水寺",
          "from": "清水五条駅",
          "to": "清水寺",
          "direction": null,
          "duration": null,
          "displayMeta": "上坡約25分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "不想爬坡：站前搭計程車約7分（約¥1,000上下）",
          "warning": null
        }
      ]
    },
    "tr-d3-yasaka-gion-kamogawa": {
      "id": "tr-d3-yasaka-gion-kamogawa",
      "label": "前往 八坂神社 ➔ 花見小路 ➔ 鴨川",
      "from": {
        "type": "text",
        "value": "清水寺"
      },
      "to": {
        "type": "text",
        "value": "八坂神社"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E6%B8%85%E6%B0%B4%E5%AF%BA&destination=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "清水寺 → 二三年坂 → 八坂神社 → 花見小路 → 鴨川",
          "from": "清水寺",
          "to": "二三年坂 → 八坂神社 → 花見小路 → 鴨川",
          "direction": null,
          "duration": null,
          "displayMeta": "全程散步，邊走邊逛",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        }
      ]
    },
    "tr-d3-ramen": {
      "id": "tr-d3-ramen",
      "label": "前往 回新今宮後的拉麵晚餐",
      "from": {
        "type": "text",
        "value": "八坂神社"
      },
      "to": {
        "type": "text",
        "value": "ラーメン 新今宮駅"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE&destination=%E3%83%A9%E3%83%BC%E3%83%A1%E3%83%B3%20%E6%96%B0%E4%BB%8A%E5%AE%AE%E9%A7%85&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "keihan",
              "label": "KH 京阪本線（特急）"
            }
          ],
          "label": "祇園四条 → 京橋",
          "from": "祇園四条",
          "to": "京橋",
          "direction": null,
          "duration": null,
          "displayMeta": "約40分・往「淀屋橋」方面",
          "fare": {
            "kind": "estimate",
            "amount": 430,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥430／人"
          },
          "noteHtml": "回程搭特急 OK（京橋有停），免加價",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jro",
              "label": "Ⓞ 大阪環状線"
            }
          ],
          "label": "京橋 → 新今宮",
          "from": "京橋",
          "to": "新今宮",
          "direction": null,
          "duration": null,
          "displayMeta": "約16分・往「鶴橋・天王寺」方面",
          "fare": {
            "kind": "estimate",
            "amount": 230,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥230／人"
          },
          "noteHtml": null,
          "warning": null
        }
      ]
    },
    "tr-d4-katsuoji": {
      "id": "tr-d4-katsuoji",
      "label": "前往 勝尾寺 (勝運達摩之寺)",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "勝尾寺"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=%E5%8B%9D%E5%B0%BE%E5%AF%BA&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "mido",
              "label": "Ⓜ 御堂筋線直通"
            }
          ],
          "label": "動物園前 → 箕面萱野（終點站）",
          "from": "動物園前",
          "to": "箕面萱野（終點站）",
          "direction": null,
          "duration": null,
          "displayMeta": "約45分・往「箕面萱野」方面",
          "fare": {
            "kind": "estimate",
            "amount": 530,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥530／人"
          },
          "noteHtml": "<span class=\"rs-warn\">要搭「箕面萱野行」</span>，部分班次只到新大阪或千里中央。連假預留排隊緩衝，約 <strong>07:30</strong> 出門並依巴士時刻反推車次",
          "warning": null
        },
        {
          "mode": "bus",
          "icon": "🚌",
          "operator": null,
          "badges": [
            {
              "colorKey": "bus",
              "label": "阪急巴士"
            }
          ],
          "label": "箕面萱野 → 勝尾寺",
          "from": "箕面萱野",
          "to": "勝尾寺",
          "direction": null,
          "duration": null,
          "displayMeta": "車程及等候以當日官方時刻為準",
          "fare": {
            "kind": "estimate",
            "amount": 800,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥800／人"
          },
          "noteHtml": "<span class=\"rs-warn\">班次少，三連休可能排隊</span>；整段轉乘預留30～45分，錯過班次就改搭計程車",
          "warning": null
        }
      ]
    },
    "tr-d4-minoh-waterfall": {
      "id": "tr-d4-minoh-waterfall",
      "label": "前往 箕面大瀑布大自然踏青",
      "from": {
        "type": "text",
        "value": "勝尾寺"
      },
      "to": {
        "type": "text",
        "value": "箕面大瀑布"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%8B%9D%E5%B0%BE%E5%AF%BA&destination=%E7%AE%95%E9%9D%A2%E5%A4%A7%E7%80%91%E5%B8%83&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "taxi",
          "icon": "🚕",
          "operator": null,
          "badges": [
            {
              "colorKey": "taxi",
              "label": "計程車"
            }
          ],
          "label": "勝尾寺 → 大滝上駐車場",
          "from": "勝尾寺",
          "to": "大滝上駐車場",
          "direction": null,
          "duration": null,
          "displayMeta": "平時約15分，連假另留塞車緩衝",
          "fare": {
            "kind": "range",
            "minAmount": 2500,
            "maxAmount": 3500,
            "currency": "JPY",
            "unit": "perVehicle",
            "displayLabel": "約 ¥2,500～3,500／車"
          },
          "noteHtml": "<span class=\"rs-warn\">行前先預約12:00左右接送，勿只依賴現場叫車</span>；若叫不到車就放棄瀑布，搭車返回箕面萱野，切勿沿無人行道的車道步行",
          "warning": null
        }
      ]
    },
    "tr-d4-harbs": {
      "id": "tr-d4-harbs",
      "label": "前往 HARBS Namba Parks 店",
      "from": {
        "type": "text",
        "value": "箕面大瀑布"
      },
      "to": {
        "type": "text",
        "value": "HARBS なんばパークス店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E7%AE%95%E9%9D%A2%E5%A4%A7%E7%80%91%E5%B8%83&destination=HARBS%20%E3%81%AA%E3%82%93%E3%81%B0%E3%83%91%E3%83%BC%E3%82%AF%E3%82%B9%E5%BA%97&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "瀑布 → 滝道下山 → 阪急「箕面」駅",
          "from": "瀑布",
          "to": "滝道下山 → 阪急「箕面」駅",
          "direction": null,
          "duration": null,
          "displayMeta": "約40分，沿溪谷緩下坡",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "hankyu",
              "label": "阪急箕面線→宝塚線"
            }
          ],
          "label": "箕面 → 石橋阪大前（轉車）→ 大阪梅田",
          "from": "箕面",
          "to": "石橋阪大前（轉車） → 大阪梅田",
          "direction": null,
          "duration": null,
          "displayMeta": "合計約30分・往「大阪梅田」方面",
          "fare": {
            "kind": "estimate",
            "amount": 290,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥290／人"
          },
          "noteHtml": "<span class=\"rs-warn\">回程走阪急，和去程不同路線！</span>石橋阪大前同月台對面轉車；抵達大阪梅田後依「Osaka Metro 御堂筋線」指標轉乘",
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "mido",
              "label": "Ⓜ 御堂筋線"
            }
          ],
          "label": "梅田 → なんば",
          "from": "梅田",
          "to": "なんば",
          "direction": null,
          "duration": null,
          "displayMeta": "約9分・往「なかもず」方面",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": "從南側出口往南海難波／なんばパークス方向步行約7～10分，上 3F 前往 HARBS",
          "warning": null
        }
      ]
    },
    "tr-d4-gyutan-lemon": {
      "id": "tr-d4-gyutan-lemon",
      "label": "前往 新宿燒肉 牛舌的檸檬 (大阪本店)",
      "from": {
        "type": "text",
        "value": "HARBS なんばパークス店"
      },
      "to": {
        "type": "text",
        "value": "新宿燒肉 牛舌的檸檬 大阪本店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=HARBS%20%E3%81%AA%E3%82%93%E3%81%B0%E3%83%91%E3%83%BC%E3%82%AF%E3%82%B9%E5%BA%97&destination=%E6%96%B0%E5%AE%BF%E7%87%92%E8%82%89%20%E7%89%9B%E8%88%8C%E7%9A%84%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": "步行約 10～15 分鐘：從 Namba Parks 向北穿過難波商圈，前往千日前的牛舌的檸檬大阪本店。",
      "steps": []
    },
    "tr-d4-namba-food": {
      "id": "tr-d4-namba-food",
      "label": "前往 難波地道美食品嚐 (章魚燒/大阪燒)",
      "from": {
        "type": "text",
        "value": "新宿燒肉 牛舌的檸檬 大阪本店"
      },
      "to": {
        "type": "text",
        "value": "千房 大阪燒 難波"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E6%96%B0%E5%AE%BF%E7%87%92%E8%82%89%20%E7%89%9B%E8%88%8C%E7%9A%84%E6%AA%B8%E6%AA%AC%20%E5%A4%A7%E9%98%AA%E6%9C%AC%E5%BA%97&destination=%E5%8D%83%E6%88%BF%20%E5%A4%A7%E9%98%AA%E7%87%92%20%E9%9B%A3%E6%B3%A2&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": "步行移動：晚餐後留在難波商圈，依食量彈性挑選章魚燒或大阪燒。",
      "steps": []
    },
    "tr-d5-nara-todaiji": {
      "id": "tr-d5-nara-todaiji",
      "label": "前往 奈良公園 & 東大寺",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "奈良公園"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=%E5%A5%88%E8%89%AF%E5%85%AC%E5%9C%92&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jrq",
              "label": "Ⓠ 大和路快速"
            }
          ],
          "label": "新今宮 → 奈良",
          "from": "新今宮",
          "to": "奈良",
          "direction": null,
          "duration": null,
          "displayMeta": "約35分・往「奈良・加茂」方面，直達",
          "fare": {
            "kind": "estimate",
            "amount": 580,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥580／人"
          },
          "noteHtml": "⏰ 想 09:00 抵達奈良公園，約 <strong>08:00</strong> 出門",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "JR奈良駅 → 奈良公園・東大寺",
          "from": "JR奈良駅",
          "to": "奈良公園・東大寺",
          "direction": null,
          "duration": null,
          "displayMeta": "約20分（或站前搭市內巴士約7分）",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "沿三条通直走，途經中谷堂（現搗麻糬）很順路",
          "warning": null
        }
      ]
    },
    "tr-d5-uji": {
      "id": "tr-d5-uji",
      "label": "前往 宇治散策 (平等院 & 宇治川)",
      "from": {
        "type": "text",
        "value": "奈良公園"
      },
      "to": {
        "type": "text",
        "value": "平等院"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%A5%88%E8%89%AF%E5%85%AC%E5%9C%92&destination=%E5%B9%B3%E7%AD%89%E9%99%A2&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jrd",
              "label": "Ⓓ 奈良線 みやこ路快速"
            }
          ],
          "label": "奈良 → 宇治",
          "from": "奈良",
          "to": "宇治",
          "direction": null,
          "duration": null,
          "displayMeta": "約30分・往「京都」方面",
          "fare": {
            "kind": "estimate",
            "amount": 510,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥510／人"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "JR宇治駅 → 中村藤吉本店 → 平等院",
          "from": "JR宇治駅",
          "to": "中村藤吉本店 → 平等院",
          "direction": null,
          "duration": null,
          "displayMeta": "約10分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "先到中村藤吉抽整理券，再去逛平等院",
          "warning": null
        }
      ]
    },
    "tr-d5-toyotei": {
      "id": "tr-d5-toyotei",
      "label": "前往 東洋亭 京都Porta店 (百年洋食晚餐)",
      "from": {
        "type": "text",
        "value": "平等院"
      },
      "to": {
        "type": "text",
        "value": "東洋亭 京都ポルタ店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%B9%B3%E7%AD%89%E9%99%A2&destination=%E6%9D%B1%E6%B4%8B%E4%BA%AD%20%E4%BA%AC%E9%83%BD%E3%83%9D%E3%83%AB%E3%82%BF%E5%BA%97&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jrd",
              "label": "Ⓓ 奈良線 みやこ路快速"
            }
          ],
          "label": "宇治 → 京都",
          "from": "宇治",
          "to": "京都",
          "direction": null,
          "duration": null,
          "displayMeta": "約17分・往「京都」方面",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🍽️",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "京都駅 → Porta 地下街「東洋亭」晚餐",
          "from": "京都駅",
          "to": "Porta 地下街「東洋亭」晚餐",
          "direction": null,
          "duration": null,
          "displayMeta": "車站直結，步行約3分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "吃完原路走回 JR 閘門搭新快速",
          "warning": null
        }
      ]
    },
    "tr-d5-return": {
      "id": "tr-d5-return",
      "label": "返回新今宮住宿",
      "from": {
        "type": "text",
        "value": "京都駅"
      },
      "to": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E4%BA%AC%E9%83%BD%E9%A7%85&destination=Apartment+Hotel+11+Shinimamiya+1&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jra",
              "label": "Ⓐ 京都線 新快速"
            }
          ],
          "label": "京都 → 大阪",
          "from": "京都",
          "to": "大阪",
          "direction": null,
          "duration": null,
          "displayMeta": "約29分・往「大阪・姫路」方面",
          "fare": {
            "kind": "estimate",
            "amount": 990,
            "currency": "JPY",
            "unit": "perPerson",
            "note": "JR 通算",
            "displayLabel": "JR 通算約 ¥990／人"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "jr",
              "label": "JR"
            },
            {
              "colorKey": "jro",
              "label": "Ⓞ 大阪環状線"
            }
          ],
          "label": "大阪 → 新今宮",
          "from": "大阪",
          "to": "新今宮",
          "direction": null,
          "duration": null,
          "displayMeta": "約16分・往「西九条」方面",
          "fare": {
            "kind": "included",
            "note": "通算票價內",
            "displayLabel": "通算票價內"
          },
          "noteHtml": null,
          "warning": null
        }
      ]
    },
    "tr-d6-kaiyukan": {
      "id": "tr-d6-kaiyukan",
      "label": "前往 大阪海遊館 & 天保山",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "海遊館"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=%E6%B5%B7%E9%81%8A%E9%A4%A8&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "sakai",
              "label": "Ⓚ 堺筋線"
            }
          ],
          "label": "動物園前 → 堺筋本町",
          "from": "動物園前",
          "to": "堺筋本町",
          "direction": null,
          "duration": null,
          "displayMeta": "約7分・往「北千里・高槻市」方面",
          "fare": {
            "kind": "estimate",
            "amount": 290,
            "currency": "JPY",
            "unit": "perPerson",
            "note": "Metro 通算",
            "displayLabel": "Metro 通算約 ¥290／人"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "chuo",
              "label": "Ⓒ 中央線"
            }
          ],
          "label": "堺筋本町 → 大阪港",
          "from": "堺筋本町",
          "to": "大阪港",
          "direction": null,
          "duration": null,
          "displayMeta": "約10分・往「コスモスクエア」方面",
          "fare": {
            "kind": "included",
            "note": "通算票價內",
            "displayLabel": "通算票價內"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "大阪港駅 → 海遊館",
          "from": "大阪港駅",
          "to": "海遊館",
          "direction": null,
          "duration": null,
          "displayMeta": "約7分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "1號出口出站，跟著海遊館指標走",
          "warning": null
        }
      ]
    },
    "tr-d6-sumiyoshi-taisha": {
      "id": "tr-d6-sumiyoshi-taisha",
      "label": "前往 住吉大社",
      "from": {
        "type": "text",
        "value": "海遊館"
      },
      "to": {
        "type": "text",
        "value": "住吉大社"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E6%B5%B7%E9%81%8A%E9%A4%A8&destination=%E4%BD%8F%E5%90%89%E5%A4%A7%E7%A4%BE&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "chuo",
              "label": "Ⓒ 中央線"
            },
            {
              "colorKey": "jro",
              "label": "Ⓞ JR環状線"
            },
            {
              "colorKey": "nankai",
              "label": "南海"
            }
          ],
          "label": "大阪港 → 弁天町 → 新今宮 → 住吉大社",
          "from": "大阪港",
          "to": "弁天町 → 新今宮 → 住吉大社",
          "direction": null,
          "duration": null,
          "displayMeta": "含轉乘約35～45分",
          "fare": {
            "kind": "estimate",
            "amount": 590,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥590／人"
          },
          "noteHtml": "中央線到弁天町，轉 JR 環狀線到新今宮，再搭南海本線<strong>普通車</strong>到住吉大社；急行不停靠",
          "warning": null
        }
      ]
    },
    "tr-d6-harukas-300": {
      "id": "tr-d6-harukas-300",
      "label": "前往 HARUKAS 300 阿倍野夜景",
      "from": {
        "type": "text",
        "value": "住吉大社"
      },
      "to": {
        "type": "text",
        "value": "HARUKAS 300"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E4%BD%8F%E5%90%89%E5%A4%A7%E7%A4%BE&destination=HARUKAS%20300&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "tram",
          "icon": "🚋",
          "operator": null,
          "badges": [
            {
              "colorKey": "hankai",
              "label": "阪堺電車"
            }
          ],
          "label": "住吉鳥居前 → 天王寺駅前",
          "from": "住吉鳥居前",
          "to": "天王寺駅前",
          "direction": null,
          "duration": null,
          "displayMeta": "約20～25分",
          "fare": {
            "kind": "estimate",
            "amount": 240,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥240／人"
          },
          "noteHtml": "從住吉大社正門過馬路就是「住吉鳥居前」站，搭往「天王寺駅前」方向",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "天王寺駅前 → HARUKAS 300",
          "from": "天王寺駅前",
          "to": "HARUKAS 300",
          "direction": null,
          "duration": null,
          "displayMeta": "約5～8分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "進阿倍野 HARUKAS 後先到 16F 售票／入場處，出示電子票 QR Code",
          "warning": null
        }
      ]
    },
    "tr-d6-shinsekai-kushikatsu": {
      "id": "tr-d6-shinsekai-kushikatsu",
      "label": "前往 新世界串炸 & 通天閣夜景",
      "from": {
        "type": "text",
        "value": "HARUKAS 300"
      },
      "to": {
        "type": "text",
        "value": "新世界 通天閣"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=HARUKAS%20300&destination=%E6%96%B0%E4%B8%96%E7%95%8C%20%E9%80%9A%E5%A4%A9%E9%96%A3&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "mido",
              "label": "Ⓜ 御堂筋線"
            }
          ],
          "label": "天王寺 → 動物園前",
          "from": "天王寺",
          "to": "動物園前",
          "direction": null,
          "duration": null,
          "displayMeta": "1站約2分",
          "fare": {
            "kind": "estimate",
            "amount": 190,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥190／人"
          },
          "noteHtml": "從 1 號出口步行約8分進入新世界；若體力足，也可從 HARUKAS 直接步行約20分",
          "warning": null
        }
      ]
    },
    "tr-d6-drugstore-shopping": {
      "id": "tr-d6-drugstore-shopping",
      "label": "前往 住宿附近藥妝 & 伴手禮採買",
      "from": {
        "type": "text",
        "value": "通天閣"
      },
      "to": {
        "type": "text",
        "value": "MEGAドン・キホーテ新世界店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E9%80%9A%E5%A4%A9%E9%96%A3&destination=MEGA%E3%83%89%E3%83%B3%E3%83%BB%E3%82%AD%E3%83%9B%E3%83%BC%E3%83%86%E6%96%B0%E4%B8%96%E7%95%8C%E5%BA%97&waypoints=%E3%82%B9%E3%82%AE%E3%83%89%E3%83%A9%E3%83%83%E3%82%B0%E9%80%9A%E5%A4%A9%E9%96%A3%E5%BA%97&travelmode=walking",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "luggage",
          "icon": "🛍️",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "新世界串炸 → SUGI 通天閣店／MEGA 唐吉訶德 → 住宿",
          "from": "新世界串炸",
          "to": "SUGI 通天閣店／MEGA 唐吉訶德 → 住宿",
          "direction": null,
          "duration": null,
          "displayMeta": "採買後步行約5～10分回住宿",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "先買藥品、保健品與保養品，再到唐吉訶德補零食和伴手禮；大量採買留到今晚，買完直接回房整理行李",
          "warning": null
        }
      ]
    },
    "tr-d7-kizu-market": {
      "id": "tr-d7-kizu-market",
      "label": "前往 木津卸売市場 (木津市場早市)",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "木津卸売市場"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=%E6%9C%A8%E6%B4%A5%E5%8D%B8%E5%A3%B2%E5%B8%82%E5%A0%B4&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "住宿 → 木津卸売市場",
          "from": "住宿",
          "to": "木津卸売市場",
          "direction": null,
          "duration": null,
          "displayMeta": "約15～20分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "行李先留在房內，07:35 左右輕裝出門",
          "warning": null
        }
      ]
    },
    "tr-d7-namba-yasaka": {
      "id": "tr-d7-namba-yasaka",
      "label": "前往 難波八阪神社",
      "from": {
        "type": "text",
        "value": "木津卸売市場"
      },
      "to": {
        "type": "text",
        "value": "難波八阪神社"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E6%9C%A8%E6%B4%A5%E5%8D%B8%E5%A3%B2%E5%B8%82%E5%A0%B4&destination=%E9%9B%A3%E6%B3%A2%E5%85%AB%E9%98%AA%E7%A5%9E%E7%A4%BE&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "木津市場 → 難波八阪神社",
          "from": "木津市場",
          "to": "難波八阪神社",
          "direction": null,
          "duration": null,
          "displayMeta": "向北約10分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "08:50 離開市場，順路參觀巨大獅子殿",
          "warning": null
        }
      ]
    },
    "tr-d7-checkout": {
      "id": "tr-d7-checkout",
      "label": "前往 回住宿取行李 & 退房",
      "from": {
        "type": "text",
        "value": "難波八阪神社"
      },
      "to": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E9%9B%A3%E6%B3%A2%E5%85%AB%E9%98%AA%E7%A5%9E%E7%A4%BE&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "難波八阪神社 → 住宿",
          "from": "難波八阪神社",
          "to": "住宿",
          "direction": null,
          "duration": null,
          "displayMeta": "約20分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "最晚 09:20 離開神社，直接步行回住宿",
          "warning": null
        },
        {
          "mode": "luggage",
          "icon": "🧳",
          "operator": null,
          "badges": [],
          "label": "住宿取行李並退房",
          "from": null,
          "to": null,
          "direction": null,
          "duration": null,
          "displayMeta": "09:40～10:00",
          "fare": null,
          "noteHtml": "<span class=\"rs-warn\">住宿10:00前必須退房</span>；前一晚先整理好行李，回房後拿了就走",
          "warning": null
        }
      ]
    },
    "tr-d7-rinku-outlet": {
      "id": "tr-d7-rinku-outlet",
      "label": "前往 臨空城 Outlet (Rinku Premium Outlets)",
      "from": {
        "type": "text",
        "value": "Apartment Hotel 11 Shinimamiya 1"
      },
      "to": {
        "type": "text",
        "value": "Rinku Premium Outlets"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Apartment%20Hotel%2011%20Shinimamiya%201&destination=Rinku%20Premium%20Outlets&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "住宿 → 南海「新今宮」駅",
          "from": "住宿",
          "to": "南海「新今宮」駅",
          "direction": null,
          "duration": null,
          "displayMeta": "約2～5分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "nankai",
              "label": "南海空港急行"
            }
          ],
          "label": "新今宮 → りんくうタウン",
          "from": "新今宮",
          "to": "りんくうタウン",
          "direction": null,
          "duration": null,
          "displayMeta": "約40分・往「関西空港」方面",
          "fare": {
            "kind": "estimate",
            "amount": 780,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥780／人"
          },
          "noteHtml": "<span class=\"rs-warn\">站名是片假名「りんくうタウン」</span>（= 臨空城），英文 Rinku Town，別坐過站",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "りんくうタウン駅 → Outlet",
          "from": "りんくうタウン駅",
          "to": "Outlet",
          "direction": null,
          "duration": null,
          "displayMeta": "約6分，車站直結",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": "行李放臨空城站置物櫃；若滿櫃，改用 Outlet 服務區置物櫃",
          "warning": null
        }
      ]
    },
    "tr-d7-nikko-checkin": {
      "id": "tr-d7-nikko-checkin",
      "label": "前往 關西機場日航酒店 Check-in",
      "from": {
        "type": "text",
        "value": "Rinku Premium Outlets"
      },
      "to": {
        "type": "text",
        "value": "關西機場日航酒店"
      },
      "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=Rinku%20Premium%20Outlets&destination=%E9%97%9C%E8%A5%BF%E6%A9%9F%E5%A0%B4%E6%97%A5%E8%88%AA%E9%85%92%E5%BA%97&dir_action=navigate",
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "train",
          "icon": "🚃",
          "operator": null,
          "badges": [
            {
              "colorKey": "nankai",
              "label": "南海空港線"
            }
          ],
          "label": "りんくうタウン → 関西空港",
          "from": "りんくうタウン",
          "to": "関西空港",
          "direction": null,
          "duration": null,
          "displayMeta": "1站約6分",
          "fare": {
            "kind": "estimate",
            "amount": 370,
            "currency": "JPY",
            "unit": "perPerson",
            "note": null,
            "displayLabel": "約 ¥370／人"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "関西空港駅 → 日航酒店",
          "from": "関西空港駅",
          "to": "日航酒店",
          "direction": null,
          "duration": null,
          "displayMeta": "約5分，空橋直結",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        }
      ]
    },
    "tr-d8-kix-checkin": {
      "id": "tr-d8-kix-checkin",
      "label": "前往 機場 T2 報到與安檢",
      "from": {
        "type": "text",
        "value": ""
      },
      "to": {
        "type": "text",
        "value": ""
      },
      "routeUrl": null,
      "estimatedDurationMin": null,
      "noteHtml": null,
      "steps": [
        {
          "mode": "procedure",
          "icon": "⏰",
          "operator": null,
          "badges": [],
          "label": "05:30 起床、06:00 前出門",
          "from": null,
          "to": null,
          "direction": null,
          "duration": null,
          "displayMeta": null,
          "fare": null,
          "noteHtml": "樂桃國際線官方報到截止為起飛前50分鐘（07:00）；<span class=\"rs-warn\">本行程以06:50前完成為安全線</span>",
          "warning": null
        },
        {
          "mode": "walk",
          "icon": "🚶",
          "operator": null,
          "badges": [
            {
              "colorKey": "walk",
              "label": "步行"
            }
          ],
          "label": "日航酒店 → Aeroplaza 接駁站",
          "from": "日航酒店",
          "to": "Aeroplaza 接駁站",
          "direction": null,
          "duration": null,
          "displayMeta": "約3分",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        },
        {
          "mode": "bus",
          "icon": "🚌",
          "operator": null,
          "badges": [
            {
              "colorKey": "bus",
              "label": "免費接駁巴士"
            }
          ],
          "label": "Aeroplaza → T2",
          "from": "Aeroplaza",
          "to": "T2",
          "direction": null,
          "duration": null,
          "displayMeta": "約10分，清晨也有班次",
          "fare": {
            "kind": "free",
            "displayLabel": "免費"
          },
          "noteHtml": null,
          "warning": null
        }
      ]
    },
    "tr-d8-flight-return": {
      "id": "tr-d8-flight-return",
      "label": "前往 搭機返回台北桃園 (MM023)",
      "from": {
        "type": "text",
        "value": ""
      },
      "to": {
        "type": "text",
        "value": ""
      },
      "routeUrl": null,
      "estimatedDurationMin": null,
      "noteHtml": "完成報到與安檢後，依航班螢幕確認登機門並預留步行時間。",
      "steps": []
    }
  },
  "foodChecklist": [
    {
      "id": "food-jojoen-lunch",
      "eventIds": [
        "d2-jojoen"
      ],
      "title": "🥩 敘敘苑商業午餐",
      "subtitle": "大丸心齋橋店 (10/8 午餐・首選 ¥4,700 綜合午餐)"
    },
    {
      "id": "food-katsuhana-tonkatsu",
      "eventIds": [
        "d2-katsuhana"
      ],
      "title": "🐖 炸豬排",
      "subtitle": "とんかつ KATSU 華 (10/8 四 18:00・建議 TableCheck 預約)"
    },
    {
      "id": "food-unagi",
      "eventIds": [
        "d3-kiyomizu-higashiyama",
        "d7-kizu-market"
      ],
      "title": "🍱 鰻魚飯",
      "subtitle": "京都老店 (10/9 午餐備選) / 木津市場川上商店 (10/13)"
    },
    {
      "id": "food-sukiyaki",
      "eventIds": [
        "d3-kiyomizu-higashiyama"
      ],
      "title": "🍲 壽喜燒",
      "subtitle": "京都東山 (10/9 午餐備選)"
    },
    {
      "id": "food-ramen",
      "eventIds": [
        "d3-ramen"
      ],
      "title": "🍜 拉麵",
      "subtitle": "新今宮站周邊 (10/9 回大阪後・彈性晚餐)"
    },
    {
      "id": "food-momiji-tempura",
      "eventIds": [
        "d4-minoh-waterfall"
      ],
      "title": "🍁 紅葉天婦羅",
      "subtitle": "箕面滝道 (10/10 散步途中・當地名物)"
    },
    {
      "id": "food-harbs-mille-crepes",
      "eventIds": [
        "d4-harbs"
      ],
      "title": "🍰 HARBS 水果千層蛋糕",
      "subtitle": "Namba Parks 店 (10/10 下午・牛舌晚餐前順遊)"
    },
    {
      "id": "food-gyutan-lemon",
      "eventIds": [
        "d4-gyutan-lemon"
      ],
      "title": "🍋 檸檬牛舌",
      "subtitle": "新宿燒肉 牛舌的檸檬 (10/10 晚餐)"
    },
    {
      "id": "food-takoyaki",
      "eventIds": [
        "d4-namba-food"
      ],
      "title": "🐙 章魚燒",
      "subtitle": "難波 / 道頓堀 (10/10 晚間)"
    },
    {
      "id": "food-okonomiyaki",
      "eventIds": [
        "d4-namba-food"
      ],
      "title": "🥞 大阪燒",
      "subtitle": "千房 / 美津の (10/10 晚間)"
    },
    {
      "id": "food-matcha-jelly",
      "eventIds": [
        "d5-uji"
      ],
      "title": "🍵 抹茶生茶凍",
      "subtitle": "中村藤吉本店 宇治 (10/11 下午・先抽整理券)"
    },
    {
      "id": "food-toyotei-hamburg",
      "eventIds": [
        "d5-toyotei"
      ],
      "title": "🍳 漢堡排",
      "subtitle": "東洋亭 京都Porta店 (10/11 晚餐・回程轉車時)"
    },
    {
      "id": "food-shinsekai-kushikatsu",
      "eventIds": [
        "d6-shinsekai-kushikatsu"
      ],
      "title": "🍢 新世界串炸",
      "subtitle": "新世界 & 通天閣 (10/12 晚餐・住宿旁)"
    },
    {
      "id": "food-kizu-seafood",
      "eventIds": [
        "d7-kizu-market"
      ],
      "title": "🍣 海鮮丼 / 市場壽司",
      "subtitle": "木津卸売市場 (10/13 早餐・魚市食堂/まるよし)"
    }
  ],
  "shopping": [
    {
      "id": "shopping-rohto-gold40-max",
      "name": "V樂敦 Gold 40 爽快MAX",
      "nameLocal": "Vロートゴールド40爽快MAX・20mL",
      "image": {
        "alt": "松本清網站的 V樂敦 Gold 40 爽快MAX 20mL 商品圖",
        "productUrl": "https://www.matsukiyococokara-online.com/store/catalog/product/view/id/4987241195695",
        "src": "https://www.matsukiyococokara-online.com/store/media/catalog/product/4/9/4987241195695_01_d68b066f7367bcf3ab64c825fae24509.jpg"
      },
      "tags": [
        "眼藥水",
        "第3類醫藥品"
      ],
      "note": "認包裝關鍵字「爽快MAX」與 20mL；購買及使用前確認標示。",
      "preferredStore": "SUGI 優先",
      "plannedDayId": "d6",
      "defaultQuantity": 1,
      "maxQuantity": 20
    },
    {
      "id": "shopping-shiseido-moilip",
      "name": "資生堂 MOILIP",
      "nameLocal": "資生堂 モアリップ・8g",
      "image": {
        "alt": "松本清網站的資生堂 MOILIP 藥用護唇膏商品圖",
        "productUrl": "https://www.matsukiyococokara-online.com/store/catalog/product/view/id/4909978204440",
        "src": "https://www.matsukiyococokara-online.com/store/media/catalog/product/4/9/4909978204440_01_1d5a4d50d038847753bb36f31493d552.jpg"
      },
      "tags": [
        "藥用護唇",
        "第3類醫藥品"
      ],
      "note": "黃色盒、藍色「モアリップ」字樣；是管狀款，與下方曼秀雷敦罐裝款不同。",
      "preferredStore": "SUGI 優先",
      "plannedDayId": "d6",
      "defaultQuantity": 1,
      "maxQuantity": 20
    },
    {
      "id": "shopping-mentholatum-medical-lip-b",
      "name": "曼秀雷敦 Medical Lip b",
      "nameLocal": "メンソレータム メディカルリップb・8.5g",
      "image": {
        "alt": "松本清網站的曼秀雷敦 Medical Lip b 護唇藥商品圖",
        "productUrl": "https://www.matsukiyococokara-online.com/store/catalog/product/view/id/4987241108145",
        "src": "https://www.matsukiyococokara-online.com/store/media/catalog/product/4/9/4987241108145_01_6f18b0fc9f04682d74c366efe93d9ef8.jpg"
      },
      "tags": [
        "藥用護唇",
        "薄荷罐裝",
        "第3類醫藥品"
      ],
      "note": "綠色盒、白色圓罐，商品名結尾是「b」；想要照片中的涼感款別拿成管狀 nc。",
      "preferredStore": "SUGI 優先",
      "plannedDayId": "d6",
      "defaultQuantity": 1,
      "maxQuantity": 20
    }
  ],
  "infoSections": [
    {
      "contentHtml": "10/12 (一) 是日本「運動之日」，10/10 (六) ～ 10/12 (一) 連成三天連假。Day 4 箕面、Day 5 奈良宇治、Day 6 海遊館都落在連假中，日本人也會全家出遊。這三天熱門景點請盡量「開門就到」，越早越舒服。行程已依人潮做過優化：戶外的箕面排週六、室內的海遊館排連假最後一天。",
      "id": "info-holiday-warning",
      "style": "notice",
      "title": "⚠️ 三連休重要提醒"
    },
    {
      "contentHtml": "每段路線的黃色標籤是<strong>成人每人單程估價</strong>，以一般 IC 卡／普通車規劃；「通算票價內」代表同一次進站轉乘，不要重複加總。每日摘要是當日估計合計，未包含置物櫃、特急指定席及臨時改搭計程車。票價可能調整，出發前請再用官方票價搜尋確認。",
      "id": "info-transport-fares",
      "style": "default",
      "title": "💴 交通費怎麼看？"
    },
    {
      "contentHtml": "日本車站指標以「日文漢字」為主（多數和中文寫法相同，直接認得），並附英文拼音。本導覽的交通步驟一律用<strong>現地實際站名</strong>標示，少數寫法不同要特別記：<strong>稲荷</strong>＝稻荷、<strong>恵美須町</strong>＝惠美須町、<strong>関西空港</strong>＝關西機場；另外大阪地鐵/南海的難波站標示是平假名「<strong>なんば</strong>」、臨空城站是片假名「<strong>りんくうタウン</strong>」，不是漢字！<br><br>\n                    🎨 <strong>找月台看「路線色＋字母」</strong>：交通步驟裡的彩色徽章就是現場指標的顏色。口訣：先找公司 logo 進站（藍色 <strong>JR</strong>、南海、阪急、京阪、Metro），再照顏色字母找月台——JR：紅<span class=\"lb lb-jro\">Ⓞ 環状線</span>藍<span class=\"lb lb-jra\">Ⓐ 京都線</span>茶<span class=\"lb lb-jrd\">Ⓓ 奈良線</span>綠<span class=\"lb lb-jrq\">Ⓠ 大和路線</span>；地鐵：紅<span class=\"lb lb-mido\">Ⓜ 御堂筋線</span>棕<span class=\"lb lb-sakai\">Ⓚ 堺筋線</span>綠<span class=\"lb lb-chuo\">Ⓒ 中央線</span>。Google Maps 上顯示的也是這套路線色。",
      "id": "info-station-guide",
      "style": "guide",
      "title": "🚉 站名與路線辨識"
    }
  ],
  "externalLinks": [
    {
      "id": "visit-japan-web",
      "label": "🌐 Visit Japan Web",
      "url": "https://www.vjw.digital.go.jp/"
    },
    {
      "id": "japan-travel",
      "label": "🗾 日本旅遊局",
      "url": "https://www.japan.travel/tw/tw/"
    }
  ]
};
