export const d3 = {
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
    "keyPoint": "十二段家 13:30・土井活鰻 17:00 到店"
  },
  "transportSummary": {
    "displayText": "JR＋京阪電車；今日交通約 ¥1,880／人。"
  },
  "notices": [
    {
      "id": "notice-d3-1",
      "position": "afterTimeline",
      "contentHtml": "今天依序走：伏見稻荷 → 清水寺 → 二三年坂 → 八坂神社 → 十二段家花見小路店 → 祇園散步 → 土井活鰻 → 鴨川。十二段家午餐建議選牛すき鍋、ステーキ重或大蝦天丼，避免吃得過飽影響 17:00 鰻魚晚餐；請先電話確認 13:30 座位與當日營業。",
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
      "actions": []
    },
    {
      "id": "d3-kiyomizu-higashiyama",
      "type": "visit",
      "schedule": {
        "start": "11:15",
        "end": "12:20",
        "qualifier": "exact",
        "displayLabel": "11:15 - 12:20"
      },
      "title": "清水寺",
      "descriptionHtml": "參觀清水舞台、音羽瀑布與本堂，俯瞰京都市景。12:20 左右離開，沿三年坂、二年坂往八坂方向前進，確保 13:30 抵達花見小路午餐。",
      "primaryPlaceId": "kiyomizu-dera",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": "tr-d3-kiyomizu-higashiyama",
      "reservationId": null,
      "highlights": [
        {
          "id": "d3-kiyomizu-higashiyama-highlight-1",
          "text": "🏯 重點：清水舞台、音羽瀑布與京都市景"
        }
      ],
      "actions": []
    },
    {
      "id": "d3-higashiyama-stroll",
      "type": "visit",
      "schedule": {
        "start": "12:20",
        "end": "13:00",
        "qualifier": "exact",
        "displayLabel": "12:20 - 13:00"
      },
      "title": "三年坂 ➔ 二年坂 ➔ 東山散策",
      "descriptionHtml": "離開清水寺後沿三年坂、二年坂與石塀小路往八坂方向散步。今天需 13:30 抵達十二段家，因此沿途以重點拍照為主，購物留到後段有餘裕再補。",
      "primaryPlaceId": "kiyomizu-dera",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": null,
      "reservationId": null,
      "highlights": [],
      "actions": []
    },
    {
      "id": "d3-yasaka-gion-kamogawa",
      "type": "visit",
      "schedule": {
        "start": "13:00",
        "end": "13:25",
        "qualifier": "exact",
        "displayLabel": "13:00 - 13:25"
      },
      "title": "八坂神社",
      "descriptionHtml": "由東山一路步行抵達八坂神社，參拜本殿後於 13:25 左右往花見小路移動，預留約 5～10 分鐘前往十二段家。",
      "primaryPlaceId": "yasaka-shrine",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": "tr-d3-yasaka-gion-kamogawa",
      "reservationId": null,
      "highlights": [],
      "actions": []
    },
    {
      "id": "d3-junidanya-lunch",
      "type": "meal",
      "schedule": {
        "start": "13:30",
        "end": "14:40",
        "qualifier": "exact",
        "displayLabel": "13:30 - 14:40"
      },
      "title": "十二段家 花見小路店午餐",
      "descriptionHtml": "花見小路上的老店，餐點比湯豆腐更有味道。建議選<strong>牛すき鍋定食 ¥4,200</strong>、<strong>ステーキ重 ¥3,800</strong>或<strong>大えび天丼 ¥3,500</strong>；考量 17:00 還有鰻魚晚餐，不建議點 ¥8,000 的完整壽喜燒／涮涮鍋套餐。價格與營業時間以當日官方公告為準。",
      "primaryPlaceId": "junidanya-hanamikoji",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": "tr-d3-junidanya-lunch",
      "reservationId": "rsv-junidanya-hanamikoji",
      "highlights": [
        {
          "id": "d3-junidanya-lunch-highlight-1",
          "text": "🥩 首選：牛すき鍋定食／ステーキ重"
        }
      ],
      "actions": []
    },
    {
      "id": "d3-gion-stroll",
      "type": "visit",
      "schedule": {
        "start": "14:40",
        "end": "16:50",
        "qualifier": "exact",
        "displayLabel": "14:40 - 16:50"
      },
      "title": "花見小路／祇園散步",
      "descriptionHtml": "午餐後就在花見小路與祇園散步，可安排咖啡休息、補逛東山小店，並讓午餐稍微消化。16:40 左右往八坂神社南側的土井活鰻移動，17:00 開門即到。",
      "primaryPlaceId": "yasaka-shrine",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": null,
      "reservationId": null,
      "highlights": [],
      "actions": []
    },
    {
      "id": "d3-doi-unagi-dinner",
      "type": "meal",
      "schedule": {
        "start": "17:00",
        "end": "18:15",
        "qualifier": "exact",
        "displayLabel": "17:00 - 18:15"
      },
      "title": "土井活鰻 祇園八坂店晚餐",
      "descriptionHtml": "店就在八坂神社南側，晚餐 17:00 開始且不接受訂位，因此安排開門即到，降低候位風險。用餐後再往鴨川、四条大橋散步。",
      "primaryPlaceId": "doi-unagi-gion-yasaka",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": "tr-d3-doi-unagi",
      "reservationId": "rsv-doi-unagi-gion",
      "highlights": [
        {
          "id": "d3-doi-unagi-dinner-highlight-1",
          "text": "🍱 土井活鰻・17:00 開門即到"
        }
      ],
      "actions": []
    },
    {
      "id": "d3-kamogawa-evening",
      "type": "visit",
      "schedule": {
        "start": "18:15",
        "end": "19:00",
        "qualifier": "exact",
        "displayLabel": "18:15 - 19:00"
      },
      "title": "鴨川・四条大橋傍晚散步",
      "descriptionHtml": "晚餐後走到鴨川與四条大橋欣賞京都傍晚；19:00 左右從祇園四条出發，經京橋返回新今宮。",
      "primaryPlaceId": "yasaka-shrine",
      "relatedPlaceIds": [],
      "flightId": null,
      "transportBeforeId": null,
      "reservationId": null,
      "highlights": [],
      "actions": []
    }
  ],
  "endingTransportId": "tr-d3-return-osaka"
};
