export const core = {
  "schemaVersion": 3,
  "contentVersion": "2.8.1",
  "updatedAt": "2026-09-16",
  "meta": {
    "id": "kansai-2026",
    "title": "關西食光散策",
    "subtitle": "8日行程隨身導覽",
    "startDate": "2026-10-07",
    "endDate": "2026-10-14",
    "timezone": "Asia/Tokyo",
    "locale": "zh-TW",
    "destinations": ["大阪", "京都", "奈良", "箕面"]
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
  ]
};
