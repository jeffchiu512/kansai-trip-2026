const place = (id, name, query, { nameLocal = null, address = null, links = [] } = {}) => ({
  id,
  name,
  nameLocal,
  address,
  map: { query, coordinates: null },
  links
});

export const places = {
  "omo-kix-place": place("omo-kix-place", "OMO 關西機場 Check-in", "OMO Kansai Airport by Hoshino Resorts"),
  "shinimamiya-hotel-place": place("shinimamiya-hotel-place", "住宿寄放行李", "Apartment Hotel 11 Shinimamiya 1"),
  "pokemon-center-osaka-dx": place("pokemon-center-osaka-dx", "寶可夢中心 OSAKA DX", "Pokémon Center OSAKA DX"),
  "jojoen-shinsaibashi": place("jojoen-shinsaibashi", "敘敘苑 大丸心齋橋店 (商業午餐)", "敘敘苑 大丸心齋橋店"),
  "aozora-blue-daimaru-shinsaibashi": place(
    "aozora-blue-daimaru-shinsaibashi",
    "青空blue 大丸心齋橋店",
    "青空blue 大丸心斎橋店",
    {
      nameLocal: "青空blue 大丸心斎橋店",
      address: "〒542-8501 大阪府大阪市中央区心斎橋筋1-7-1 大丸心斎橋店 本館10F",
      links: [
        { id: "aozora-blue-daimaru-info", label: "店家資訊", url: "https://www.daimaru.co.jp/shinsaibashi/restaurant/aozorablue.html" },
        { id: "aozora-blue-daimaru-reserve", label: "官方預約", url: "https://www.aozora.blue/reserve/" }
      ]
    }
  ),
  "osaka-castle": place("osaka-castle", "大阪城公園 & 大阪城天守閣", "大阪城天守閣"),
  "osaka-castle-gozabune": place(
    "osaka-castle-gozabune",
    "大阪城御座船",
    "Osaka Castle Gozabune",
    { address: "大阪府大阪市中央区大阪城2" }
  ),
  "osaka-tenmangu": place("osaka-tenmangu", "大阪天滿宮", "大阪天滿宮"),
  "katsuhana": place("katsuhana", "とんかつ KATSU 華 (日式豬排)", "とんかつ KATSU華"),
  "lond-luce-shinsaibashi": place(
    "lond-luce-shinsaibashi",
    "Lond luce 心斎橋",
    "Lond luce 心斎橋",
    { nameLocal: "Lond luce 心斎橋", address: "大阪府大阪市中央区南船場3-8-14 ACN心斎橋Garden 7F" }
  ),
  "fushimi-inari": place("fushimi-inari", "伏見稻荷大社", "伏見稻荷大社"),
  "kiyomizu-dera": place("kiyomizu-dera", "清水寺 ➔ 二年坂 ➔ 三年坂", "清水寺"),
  "junidanya-hanamikoji": place(
    "junidanya-hanamikoji",
    "十二段家 花見小路店",
    "十二段家 花見小路店",
    { nameLocal: "十二段家 花見小路店", address: "〒605-0074 京都府京都市東山区祇園町南側570-240" }
  ),
  "doi-unagi-gion-yasaka": place(
    "doi-unagi-gion-yasaka",
    "土井活鰻 祇園八坂店",
    "土井活鰻 祇園八坂店",
    {
      nameLocal: "土井活鰻 祇園八坂店",
      address: "〒605-0821 京都府京都市東山区清井町492-3",
      links: [{ id: "doi-unagi-gion-yasaka-info", label: "官方店家資訊", url: "https://doikatsuman.net/" }]
    }
  ),
  "yasaka-shrine": place("yasaka-shrine", "八坂神社 ➔ 花見小路 ➔ 鴨川", "八坂神社"),
  "katsuoji": place("katsuoji", "勝尾寺 (勝運達摩之寺)", "勝尾寺"),
  "minoh-waterfall": place("minoh-waterfall", "箕面大瀑布大自然踏青", "箕面大瀑布"),
  "gyutan-lemon-osaka": place("gyutan-lemon-osaka", "新宿燒肉 牛舌的檸檬 (大阪本店)", "新宿燒肉 牛舌的檸檬 大阪本店"),
  "dotonbori-river-cruise": place(
    "dotonbori-river-cruise",
    "一本松海運 道頓堀水上觀光船",
    "Tazaemonbashi Pier Tombori River Cruise",
    { nameLocal: "とんぼりリバークルーズ", address: "大阪府大阪市中央区宗右衛門町 太左衛門橋船着場" }
  ),
  "nara-park": place("nara-park", "奈良公園 & 東大寺", "奈良公園"),
  "byodoin": place("byodoin", "宇治散策 (平等院 & 宇治川)", "平等院"),
  "harukas-300": place("harukas-300", "HARUKAS 300 阿倍野夜景", "HARUKAS 300"),
  "usj": place(
    "usj",
    "日本環球影城 Universal Studios Japan",
    "Universal Studios Japan",
    { nameLocal: "ユニバーサル・スタジオ・ジャパン", address: "大阪府大阪市此花区桜島2-1-33" }
  ),
  "kizu-market": place("kizu-market", "木津卸売市場 (木津市場早市)", "木津卸売市場"),
  "namba-yasaka-shrine": place("namba-yasaka-shrine", "難波八阪神社", "難波八阪神社"),
  "rinku-premium-outlets": place("rinku-premium-outlets", "臨空城 Outlet (Rinku Premium Outlets)", "Rinku Premium Outlets"),
  "shinsaibashi-shopping": place("shinsaibashi-shopping", "心齋橋商店街", "心斎橋筋商店街", { nameLocal: "心斎橋筋商店街" }),
  "hotel-nikko-kix-place": place("hotel-nikko-kix-place", "關西機場日航酒店 Check-in", "關西機場日航酒店")
};
