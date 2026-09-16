export const d1 = {
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
      "actions": []
    }
  ],
  "endingTransportId": null
};
