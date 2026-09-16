export const journeys = {
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
          "amount": 960,
          "currency": "JPY",
          "unit": "perPerson",
          "note": "JR 通算",
          "displayLabel": "JR 通算約 ¥960／人"
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
      "value": "二年坂"
    },
    "to": {
      "type": "text",
      "value": "八坂神社"
    },
    "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E4%BA%8C%E5%B9%B4%E5%9D%82&destination=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE&travelmode=walking",
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
        "label": "二年坂／石塀小路 → 八坂神社",
        "from": "二年坂／石塀小路",
        "to": "八坂神社",
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
  "tr-d3-junidanya-lunch": {
    "id": "tr-d3-junidanya-lunch",
    "label": "前往 十二段家 花見小路店",
    "from": {
      "type": "text",
      "value": "八坂神社"
    },
    "to": {
      "type": "text",
      "value": "十二段家 花見小路店"
    },
    "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E5%85%AB%E5%9D%82%E7%A5%9E%E7%A4%BE&destination=%E5%8D%81%E4%BA%8C%E6%AE%B5%E5%AE%B6%20%E8%8A%B1%E8%A6%8B%E5%B0%8F%E8%B7%AF%E5%BA%97&travelmode=walking",
    "estimatedDurationMin": 10,
    "noteHtml": "八坂神社參拜後沿四条通往花見小路，13:30 前抵達；請先電話確認座位。",
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
        "label": "八坂神社 → 十二段家 花見小路店",
        "from": "八坂神社",
        "to": "十二段家 花見小路店",
        "direction": null,
        "duration": null,
        "displayMeta": "約5～10分",
        "fare": {
          "kind": "free",
          "displayLabel": "免費"
        },
        "noteHtml": "沿四条通往花見小路方向步行，13:30 前抵達。",
        "warning": null
      }
    ]
  },
  "tr-d3-doi-unagi": {
    "id": "tr-d3-doi-unagi",
    "label": "前往 土井活鰻 祇園八坂店",
    "from": {
      "type": "text",
      "value": "花見小路"
    },
    "to": {
      "type": "text",
      "value": "土井活鰻 祇園八坂店"
    },
    "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E8%8A%B1%E8%A6%8B%E5%B0%8F%E8%B7%AF&destination=%E5%9C%9F%E4%BA%95%E6%B4%BB%E9%B0%BB%20%E7%A5%87%E5%9C%92%E5%85%AB%E5%9D%82%E5%BA%97&travelmode=walking",
    "estimatedDurationMin": 10,
    "noteHtml": "16:40 左右從花見小路出發，17:00 開門即到。",
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
        "label": "花見小路 → 土井活鰻 祇園八坂店",
        "from": "花見小路",
        "to": "土井活鰻 祇園八坂店",
        "direction": null,
        "duration": null,
        "displayMeta": "約10分",
        "fare": {
          "kind": "free",
          "displayLabel": "免費"
        },
        "noteHtml": "16:40 左右出發，17:00 開門即到。",
        "warning": null
      }
    ]
  },
  "tr-d3-return-osaka": {
    "id": "tr-d3-return-osaka",
    "label": "祇園四条返回新今宮住宿",
    "from": {
      "type": "text",
      "value": "鴨川・四条大橋"
    },
    "to": {
      "type": "text",
      "value": "Apartment Hotel 11 Shinimamiya 1"
    },
    "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=%E7%A5%87%E5%9C%92%E5%9B%9B%E6%9D%A1%E9%A7%85&destination=Apartment%20Hotel%2011%20Shinimamiya%201&dir_action=navigate",
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
          "amount": 480,
          "currency": "JPY",
          "unit": "perPerson",
          "note": null,
          "displayLabel": "約 ¥480／人"
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
          "amount": 200,
          "currency": "JPY",
          "unit": "perPerson",
          "note": null,
          "displayLabel": "約 ¥200／人"
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
  "tr-d7-pokemon-center": {
    "id": "tr-d7-pokemon-center",
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
        "noteHtml": "心齋橋站地下道直結大丸；先上本館 9F 寶可夢中心，再到 10F 吃午餐",
        "warning": null
      }
    ]
  },
  "tr-d7-jojoen": {
    "id": "tr-d7-jojoen",
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
    "noteHtml": "同棟移動：從本館 9F 寶可夢中心搭電梯至 10F；首選敘敘苑，備案青空blue。",
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
        "label": "大丸心齋橋 本館9F → 10F",
        "from": "Pokémon Center OSAKA DX",
        "to": "敘敘苑 大丸心齋橋店",
        "direction": null,
        "duration": null,
        "displayMeta": "館內電梯約3～5分",
        "fare": {
          "kind": "free",
          "displayLabel": "免費"
        },
        "noteHtml": "同一棟本館移動，不需要出大樓；9F 寶可夢中心結帳後直接上 10F。",
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
        "displayMeta": "05:30 起床・06:00 前離開飯店",
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
    "steps": [
      {
        "mode": "procedure",
        "icon": "✈️",
        "operator": null,
        "badges": [],
        "label": "T2 安檢後 → MM023 登機門",
        "from": "KIX Terminal 2",
        "to": "MM023 Gate",
        "direction": null,
        "duration": null,
        "displayMeta": "07:50 起飛・依航班螢幕確認 Gate",
        "fare": null,
        "noteHtml": "完成報到與安檢後留意航班螢幕與樂桃廣播，預留前往登機門的步行時間。",
        "warning": null
      }
    ]
  }
};
