# 關西食光散策資料 Schema

狀態：提案版 v1
適用專案：`kansai-trip-2026`
最後更新：2026-08-20

## 1. 文件目的

本文件定義行程 App 的內容資料模型，作為後續將 `index.html` 中的行程、交通、訂位、美食與購物內容移至資料層時的唯一規格。

這次重構的目標是：

- 畫面與功能先維持不變。
- 同一事實只維護一次，再由不同頁面共同使用。
- 需要搜尋、排序、計算、導航或重用的內容才結構化。
- 提醒與長篇說明保留文字彈性，不追求 100% 正規化。
- 資料物件不得包含 DOM 查詢、事件監聽或 HTML 元件組裝邏輯。

本文件不是後端資料庫設計，也不要求建立 Station、Railway Company、City 等主檔。這是一個固定八天的私人旅行 App，Schema 的目的在於降低維護成本，而不是追求理論上的完全正規化。

## 2. 現況與目標

目前同一類資料分散在多個來源：

| 現有來源 | 目前用途 | 目標位置 |
| --- | --- | --- |
| Header、Day Tabs | 旅程日期與天數 | `trip.meta`、`trip.days` |
| `.day-header-card` | 每日標題、區域、住宿 | `Day` |
| `tripDates` | 日期與今日模式 | `Day.date` |
| `daySummaries` | 每日摘要 | `Day.summary` |
| `transportOverviews` | 每日交通與費用摘要 | `Day.transportSummary` |
| `.transport-box` | 詳細交通步驟 | `Journey.steps` |
| `inlineTransportPlan` | 交通插入位置 | `Event.transportBeforeId`、`Day.endingTransportId` |
| `estimatedFares` | 依畫面文字查票價 | `TransportStep.fare` |
| `dayRouteOrigins` | 每日第一段導航起點 | `Day.routeOrigin` |
| `.timeline-item` | 每日事件 | `Day.events` |
| `.tip-box` | 每日提醒 | `Day.notices` |
| Google Maps URL | 地點與導航 | `Place.map`、`Journey` |
| 訂位總表與 Event 標籤 | 訂位／購票資訊 | `Reservation` |
| 航班資訊與 Day 1／8 | 航班 | `Flight` |
| 住宿卡片與每日住宿 | 住宿 | `Accommodation` |
| 美食打卡頁 | 可勾選美食 | `foodChecklist`，並由 `eventIds` 連回 Event |
| 購物清單 | 商品內容 | `ShoppingItem` |
| `localStorage` | 使用者勾選與數量 | `UserState`，不放進內容資料 |
| 旅途資訊文章 | 長篇說明 | `InfoSection` 或暫留 HTML |

重構後的資料流：

```text
trip data
   │
   ├── Day Timeline
   ├── Day Tabs / Header / Summary
   ├── Inline Transport
   ├── Food Checklist
   ├── Reservation Summary
   ├── Flight / Accommodation Cards
   └── Shopping List

localStorage
   └── last day / checked state / quantity
```

## 3. 設計原則

### 3.1 單一事實來源

航班、住宿、訂位、地點與交通票價不得在多個頁面各自抄寫。不同 UI 應從同一物件產生。

例如 `KATSU華`：

```text
Event: d2-katsuhana
  ├── primaryPlaceId → places.katsuhana
  ├── reservationId → Reservation: rsv-katsuhana
  └── foodChecklistIds → foodChecklist
```

### 3.2 結構化的判斷標準

符合下列任一需求時才拆成欄位：

- 需要排序或依日期／時間查詢。
- 需要計算費用、數量或完成進度。
- 需要在兩個以上畫面重用。
- 需要產生地圖或導航連結。
- 需要依狀態切換樣式或行為。
- 需要由程式驗證是否完整。

單純敘述、旅遊建議與應變方案原則上保留為完整文字。

### 3.3 Content Data 與 User State 分離

下列內容屬於版本控制中的 Content Data：

- 行程日期、地點、事件與描述。
- 交通、票價、訂位、航班與住宿。
- 購物商品名稱、圖片、辨識提示與預設數量。

下列內容屬於裝置上的 User State：

- 上次開啟的 Day。
- 美食是否吃過。
- 商品是否買到。
- 商品實際數量。

User State 只能儲存在 `localStorage` 或未來的其他狀態儲存層，不得回寫到 Content Data。

### 3.4 陣列順序就是顯示順序

`days`、`events`、`steps`、`notices`、`shopping` 與 `infoSections` 均以陣列順序決定 UI 順序。第一版不增加 `sortOrder`，避免同時維護陣列順序和數字排序。

### 3.5 ID 必須穩定

ID 是資料關聯與 `localStorage` key 的基礎。修改顯示名稱時不可順便修改 ID。

命名規則：

- 使用小寫 kebab-case，例如 `d2-katsuhana`。
- Day 固定使用 `d1` 至 `d8`。
- Event 建議使用 `d{day}-{slug}`。
- Journey 建議使用 `tr-{day}-{destination}`。
- Reservation 建議使用 `rsv-{slug}`。
- 不使用陣列索引作為永久 ID。

## 4. 建議檔案配置

第一階段可以先保持少量檔案：

```text
data/
├── trip.js
├── places.js
├── reservations.js
├── shopping.js
└── itinerary.js
```

建議責任：

- `trip.js`：匯入各資料檔並輸出唯一的 `trip` 根物件。
- `places.js`：地點、Google Maps 查詢與地址。
- `reservations.js`：訂位、候位及購票資訊。
- `shopping.js`：購物商品內容，不含使用者狀態。
- `itinerary.js`：Days、Events、Journeys、Notices。

航班與住宿目前筆數少，可先放在 `trip.js`。資料量明顯增加後再拆檔，不提前建立過多小檔案。

## 5. 根物件 Trip

```javascript
export const trip = {
  schemaVersion: 1,
  contentVersion: "1.0.0",
  updatedAt: "2026-08-20",

  meta: {},
  flights: [],
  accommodations: [],
  places: {},
  reservations: [],
  days: [],
  journeys: {},
  foodChecklist: [],
  shopping: [],
  infoSections: [],
  externalLinks: []
};
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `schemaVersion` | integer | 是 | Schema 破壞性變更時遞增。 |
| `contentVersion` | string | 是 | 行程內容版本，使用 SemVer 字串。 |
| `updatedAt` | date string | 是 | 內容最後更新日，格式 `YYYY-MM-DD`。 |
| `meta` | `TripMeta` | 是 | 旅程基本資訊。 |
| `flights` | `Flight[]` | 是 | 航班主資料，可為空陣列。 |
| `accommodations` | `Accommodation[]` | 是 | 住宿主資料，可為空陣列。 |
| `places` | `Record<string, Place>` | 是 | 以 Place ID 為 key 的地點字典。 |
| `reservations` | `Reservation[]` | 是 | 訂位、候位與購票主資料。 |
| `days` | `Day[]` | 是 | 每日行程，依日期排列。 |
| `journeys` | `Record<string, Journey>` | 是 | 以 Journey ID 為 key 的交通字典。 |
| `foodChecklist` | `FoodChecklistItem[]` | 是 | 依美食打卡頁順序排列，透過 Event ID 建立關聯。 |
| `shopping` | `ShoppingItem[]` | 是 | 購物內容資料。 |
| `infoSections` | `InfoSection[]` | 是 | 編輯型旅途資訊。 |
| `externalLinks` | `ExternalLink[]` | 是 | Visit Japan Web 等救援連結。 |

## 6. TripMeta

```javascript
meta: {
  id: "kansai-2026",
  title: "關西食光散策",
  subtitle: "8日行程隨身導覽",
  startDate: "2026-10-07",
  endDate: "2026-10-14",
  timezone: "Asia/Tokyo",
  locale: "zh-TW",
  destinations: ["大阪", "京都", "奈良", "箕面"]
}
```

| 欄位 | 型別 | 必填 | 規則 |
| --- | --- | --- | --- |
| `id` | string | 是 | 全旅程穩定 ID。 |
| `title` | string | 是 | App 主標題。 |
| `subtitle` | string | 是 | App 副標題。 |
| `startDate` | date string | 是 | 必須等於第一個 Day 日期。 |
| `endDate` | date string | 是 | 必須等於最後一個 Day 日期。 |
| `timezone` | string | 是 | IANA 時區；本旅程使用 `Asia/Tokyo`。 |
| `locale` | string | 是 | 本 App 使用 `zh-TW`。 |
| `destinations` | string[] | 是 | Header 顯示用，至少一項。 |

`manifest.webmanifest`、Service Worker cache 版本與 icon 路徑屬於部署設定，不納入 Trip Schema。若未來加入建置流程，可再由 `meta` 部分產生 Manifest 顯示文字。

## 7. Day

Day 是 App 最核心的聚合單位。

```javascript
{
  id: "d3",
  dayNumber: 3,
  date: "2026-10-09",
  title: "京都經典千本鳥居與東山古都",
  badge: "京都東山",

  overnight: {
    type: "accommodation",
    accommodationId: "apt-shinimamiya-1"
  },

  routeOrigin: {
    type: "accommodation",
    accommodationId: "apt-shinimamiya-1"
  },

  summary: {
    departureLabel: "建議出門",
    departure: "06:40",
    area: "伏見稻荷・東山",
    stamina: "較高・長距離步行",
    keyPoint: "奈良線普通車才停稲荷"
  },

  transportSummary: {
    modes: ["JR", "京阪電車"],
    estimatedCosts: [
      { amount: 1880, currency: "JPY", unit: "perPerson", qualifier: "estimate" }
    ],
    exclusions: []
  },

  notices: [],
  events: [],
  endingTransportId: null
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | `d1` 至 `d8`。 |
| `dayNumber` | integer | 是 | 從 1 開始且不可重複。 |
| `date` | date string | 是 | `YYYY-MM-DD`，用於今日模式。 |
| `title` | string | 是 | 不包含 `Day N :` 前綴；Renderer 自動補。 |
| `badge` | string | 是 | Day 卡片右側短標籤。 |
| `overnight` | `Overnight` | 是 | 當晚住宿或返家狀態。 |
| `routeOrigin` | `RouteEndpoint` | 是 | 當日第一段導航起點。 |
| `summary` | `DaySummary` | 是 | 固定四格摘要。 |
| `transportSummary` | `TransportSummary` | 是 | 今日交通方式、估價與排除項目。 |
| `notices` | `Notice[]` | 是 | 顯示在當日的提醒卡。 |
| `events` | `Event[]` | 是 | 當日時間軸，陣列順序即顯示順序。 |
| `endingTransportId` | string \| null | 是 | 最後一個 Event 後仍需顯示的 Journey。 |

### 7.1 Overnight

```javascript
// 一般住宿
{ type: "accommodation", accommodationId: "omo-kix" }

// Day 8 返家
{ type: "home", label: "溫暖的家" }
```

`type` 只允許 `accommodation` 或 `home`。`accommodation` 必須帶有效的 `accommodationId`；`home` 必須帶 `label`。

### 7.2 RouteEndpoint

```javascript
{ type: "place", placeId: "kix-t2" }
{ type: "accommodation", accommodationId: "omo-kix" }
{ type: "text", value: "京都駅" }
```

優先使用 Place 或 Accommodation。只有車站等未建立 Place 主檔的端點才用 `text`。

### 7.3 DaySummary

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `departureLabel` | string | 是 | `行程開始`、`建議出門`、`輕裝出門` 或 `最晚出門`。 |
| `departure` | string | 是 | 顯示值，可為 `06:40` 或 `依電子票反推`。 |
| `area` | string | 是 | 主要區域。 |
| `stamina` | string | 是 | 體力描述。 |
| `keyPoint` | string | 是 | 當日最重要提醒。 |

這四個欄位是本專案固定 UI，因此不使用任意 label/value 陣列。Renderer 負責加上圖示與標籤，內容資料只保存文字值。

### 7.4 TransportSummary

```javascript
{
  modes: ["Metro", "巴士", "阪急"],
  estimatedCosts: [
    { amount: 1860, currency: "JPY", unit: "perPerson", qualifier: "estimate" },
    { minAmount: 2500, maxAmount: 3500, currency: "JPY", unit: "perVehicle", qualifier: "estimate" }
  ],
  exclusions: ["臨時改搭其他計程車"]
}
```

遷移期間允許先使用：

```javascript
{ displayText: "Metro＋巴士＋阪急約 ¥1,860／人，另加計程車約 ¥2,500～3,500／車。" }
```

`displayText` 用來確保第一階段重構不改變既有文字；完成所有 Step 的費用正規化後，再換成上方的 `modes`、`estimatedCosts` 與 `exclusions`。

每日交通摘要應由 Renderer 格式化，不再保存一整句人工拼好的 `transportOverviews`。複雜情況可使用不同計價單位的多筆 `estimatedCosts`。

`estimatedCosts` 每筆使用下列欄位：

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `amount` | integer | 條件式 | 單一金額；與 range 欄位擇一。 |
| `minAmount` | integer | 條件式 | 金額範圍下限。 |
| `maxAmount` | integer | 條件式 | 金額範圍上限。 |
| `currency` | string | 是 | 目前固定 `JPY`。 |
| `unit` | enum | 是 | `perPerson` 或 `perVehicle`。 |
| `qualifier` | enum | 是 | `exact` 或 `estimate`。 |

這裡保存的是「當日預算摘要」，允許與各 Step 票價並存，因為它可能包含備案、通算票價與按車計價，不一定適合由每段票價直接相加。驗證器應在可計算的單純日期比較兩者，避免人工摘要明顯失真。

## 8. Event

所有 Timeline 卡片共用一套 Event Schema，不為景點、餐廳、Check-in、購物與飛行分別建立完全不同的物件。

```javascript
{
  id: "d2-katsuhana",
  type: "meal",

  schedule: {
    start: "18:00",
    end: "19:30"
  },

  title: "とんかつ KATSU 華（日式豬排）",
  descriptionHtml: "米其林推薦名店！外皮香酥……",

  primaryPlaceId: "katsuhana",
  relatedPlaceIds: [],
  flightId: null,

  transportBeforeId: "tr-d2-katsuhana",
  reservationId: "rsv-katsuhana",

  highlights: [
    { icon: "🥩", text: "必吃：KATSU華 炸豬排" }
  ],

  foodChecklistIds: ["food-katsuhana-tonkatsu"],

  actions: []
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 全 Trip 唯一且穩定。 |
| `type` | enum | 是 | 事件分類，用於語意、篩選及少量樣式差異。 |
| `schedule` | `Schedule` | 是 | 顯示與排序時間。 |
| `title` | string | 是 | Timeline 卡片標題。 |
| `descriptionHtml` | string | 是 | 可信任的本地編輯 HTML。純文字也直接放此欄。 |
| `primaryPlaceId` | string \| null | 是 | 主要地點；無實體地點時為 `null`。 |
| `relatedPlaceIds` | string[] | 是 | 跨多地點事件的其他地點。 |
| `flightId` | string \| null | 是 | 航班事件使用，其他事件為 `null`。 |
| `transportBeforeId` | string \| null | 是 | 顯示於此 Event 前的 Journey。 |
| `reservationId` | string \| null | 是 | 訂位／購票資料。 |
| `highlights` | `Highlight[]` | 是 | 現有 `.food-tag-inline` 的通用化資料。 |
| `foodChecklistIds` | string[] | 是 | 指向頂層 `foodChecklist`；沒有項目時為空陣列。 |
| `actions` | `Action[]` | 是 | 無法由 Place、Journey 或 Reservation 推導的額外按鈕。 |

### 8.1 Event.type

允許值：

```text
visit
meal
accommodation
flight
shopping
activity
logistics
freeTime
```

對應範例：

- `visit`：伏見稻荷、大阪城、住吉大社。
- `meal`：敘敘苑、KATSU華、HARBS。
- `accommodation`：飯店 Check-in。
- `flight`：桃園至關西、關西至桃園。
- `shopping`：Outlet、住宿附近採買。
- `logistics`：寄放行李、退房、機場報到。
- `freeTime`：回大阪後彈性拉麵。

Event type 不決定完全不同的卡片結構；第一版仍由同一個 EventCard renderer 顯示。

### 8.2 Schedule

固定時間：

```javascript
{ start: "18:00", end: "19:30" }
```

只有單一時間：

```javascript
{ start: "19:30", end: null, qualifier: "around" }
```

無法精確結構化的顯示時間：

```javascript
{
  start: null,
  end: "13:30",
  displayLabel: "依電子票指定時段 - 13:30"
}
```

| 欄位 | 型別 | 必填 | 規則 |
| --- | --- | --- | --- |
| `start` | time string \| null | 是 | `HH:mm`，未知時為 `null`。 |
| `end` | time string \| null | 是 | `HH:mm`，未知時為 `null`。 |
| `qualifier` | enum \| undefined | 否 | `exact`、`around`、`flexible`。省略等同 `exact`。 |
| `displayLabel` | string \| undefined | 否 | 特殊情況的完整顯示值，優先於自動格式化。 |

`displayLabel` 是刻意保留的逃生口，只在「依電子票指定時段」等無法由普通起訖時間表達時使用。

### 8.3 Highlight

```javascript
{ icon: "⛩️", text: "重點：本殿參拜、御守／御朱印依現場時間" }
```

不再使用名稱帶有食物語意的 `.food-tag-inline` 作為資料概念。它只是通用的事件亮點。

### 8.4 Food Checklist 關聯

```javascript
foodChecklistIds: ["food-harbs-mille-crepes"]
```

Event 只保存 ID，不重複保存打卡頁標題與副標題。實際項目由頂層 `foodChecklist` 提供，勾選狀態仍只存在 User State。

### 8.5 Action

```javascript
{
  type: "externalLink",
  label: "官方資訊",
  url: "https://example.com/"
}
```

允許 `externalLink`。一般地圖按鈕由 `primaryPlaceId` 產生，路線按鈕由 Journey 產生，訂位按鈕由 Reservation 產生，不要重複放進 `actions`。

## 9. Place

Place 集中保存導航與在不同事件間會重用的地點資訊。

```javascript
places: {
  "fushimi-inari": {
    id: "fushimi-inari",
    name: "伏見稻荷大社",
    nameLocal: "伏見稲荷大社",
    address: "京都府京都市伏見区深草薮之内町68",
    map: {
      query: "伏見稲荷大社",
      coordinates: { lat: 34.9671, lng: 135.7727 }
    },
    links: []
  }
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 必須與 `places` 的 key 相同。 |
| `name` | string | 是 | 中文主要顯示名稱。 |
| `nameLocal` | string \| null | 是 | 日文或當地名稱；無需顯示時為 `null`。 |
| `address` | string \| null | 是 | 完整地址；未知時為 `null`。 |
| `map.query` | string | 是 | Google Maps search／directions 使用的穩定查詢字串。 |
| `map.coordinates` | object \| null | 是 | 可選精確座標，第一階段可全部為 `null`。 |
| `links` | `ExternalLink[]` | 是 | 官網等地點級連結。 |

只為需要地圖導航、地址重用或跨事件引用的實體地點建立 Place。以下資訊不建立主檔：

- 單純作為交通端點的所有車站。
- 鐵路公司與路線。
- 城市、行政區與貨幣。

多地點事件以 `primaryPlaceId` 加 `relatedPlaceIds` 表達。例如「清水寺 → 二年坂 → 三年坂」可把清水寺設為主要地點，其餘在確實需要獨立導航時才建立 Place。

## 10. Journey 與 TransportStep

Journey 表示插在兩個事件之間的一段完整移動。它取代現有 `.transport-box`、`inlineTransportPlan` 與 `estimatedFares` 的相互依賴。

```javascript
journeys: {
  "tr-d3-fushimi-inari": {
    id: "tr-d3-fushimi-inari",
    label: "前往伏見稻荷大社",
    from: { type: "accommodation", accommodationId: "apt-shinimamiya-1" },
    to: { type: "place", placeId: "fushimi-inari" },
    estimatedDurationMin: 80,
    steps: [
      {
        mode: "train",
        operator: "JR West",
        badges: [
          { label: "JR", colorKey: "jr" },
          { label: "Ⓞ 大阪環状線", colorKey: "jro" }
        ],
        from: "新今宮",
        to: "大阪",
        direction: "西九条・大阪方面",
        duration: { min: 16, max: 16 },
        detail: null,
        fare: {
          kind: "estimate",
          amount: 990,
          currency: "JPY",
          unit: "perPerson",
          note: "JR 通算"
        },
        noteHtml: "想 08:00 到稻荷，約 <strong>06:40</strong> 從住宿出門",
        warning: null
      }
    ]
  }
}
```

### 10.1 Journey

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 必須與 `journeys` 的 key 相同。 |
| `label` | string | 是 | 例如「前往伏見稻荷大社」或「返回新今宮住宿」。 |
| `from` | `RouteEndpoint` | 是 | 起點。 |
| `to` | `RouteEndpoint` | 是 | 終點。 |
| `routeUrl` | URL string \| null | 是 | 明確的 Google Maps 路線；沒有時為 `null`。 |
| `estimatedDurationMin` | integer \| null | 是 | 全段估計分鐘數；未知為 `null`。 |
| `noteHtml` | string \| null | 是 | 同棟移動等 Journey 級說明。 |
| `steps` | `TransportStep[]` | 是 | 一般至少一個步驟；同棟移動等純文字 Journey 可為空。 |

Timeline 的插入位置不放在 Journey 本身，而由 Event 的 `transportBeforeId` 指定。如此 Journey 不需知道 UI 陣列索引，也不會再出現 `target: 3` 這種一插入 Event 就失效的關係。

### 10.2 TransportStep

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `mode` | enum | 是 | `walk`、`train`、`metro`、`bus`、`tram`、`taxi`、`flight`、`procedure`、`luggage`。 |
| `operator` | string \| null | 是 | JR West、南海等；不適用為 `null`。 |
| `badges` | `LineBadge[]` | 是 | 現場辨識徽章，可為空陣列。 |
| `label` | string | 是 | 遷移期保留的完整步驟標題；通常等於 `from → to`。 |
| `from` | string \| null | 是 | 交通端點文字。 |
| `to` | string \| null | 是 | 交通端點文字。 |
| `direction` | string \| null | 是 | 搭乘方向。 |
| `duration` | `DurationRange` \| null | 是 | 分鐘範圍；無法量化為 `null`。 |
| `displayMeta` | string \| null | 是 | 遷移期保留的完整時間／方向顯示文字。新資料能拆欄位時應優先使用結構化欄位。 |
| `detail` | string \| null | 是 | 例如「1站」或「09:40～10:00」。 |
| `fare` | `Fare` \| null | 是 | 步行或無需顯示價格時可為 `null`。 |
| `noteHtml` | string \| null | 是 | 一般補充說明。 |
| `warning` | string \| null | 是 | 需要警示樣式的短文字。 |

Route step 顯示標題由 `from` 與 `to` 自動組成。對「住宿寄放行李」這類沒有起訖點的程序：

```javascript
{
  mode: "luggage",
  from: null,
  to: null,
  detail: "住宿寄放行李",
  duration: { min: 15, max: 20 },
  ...
}
```

### 10.3 LineBadge

```javascript
{ label: "Ⓓ 奈良線（普通）", colorKey: "jrd" }
```

`colorKey` 只負責連到既有 CSS theme，例如 `jro`、`jra`、`jrd`、`jrq`、`mido`、`sakai`、`chuo`、`nankai`、`keihan`、`hankai`、`walk`、`bus`。不建立 Railway Line Master。

### 10.4 DurationRange

```javascript
{ min: 7, max: 9 }
{ min: 5, max: 5 }
```

`min`、`max` 都是非負整數，且 `min <= max`。兩者相等時 Renderer 顯示「約 5 分」。

### 10.5 Fare

一般估價：

```javascript
{
  kind: "estimate",
  amount: 370,
  currency: "JPY",
  unit: "perPerson",
  note: null
}
```

範圍估價：

```javascript
{
  kind: "range",
  minAmount: 2500,
  maxAmount: 3500,
  currency: "JPY",
  unit: "perVehicle",
  note: null
}
```

免費：

```javascript
{ kind: "free" }
```

已包含於前一段通算票價：

```javascript
{ kind: "included", note: "JR 通算票價內" }
```

`kind` 只允許 `exact`、`estimate`、`range`、`free`、`included`。`unit` 只允許 `perPerson` 或 `perVehicle`。如此票價不再以 `<strong>` 文字作為查表 key。

## 11. Reservation

本專案沿用 `Reservation` 名稱，但語意包含餐廳訂位、現場候位、整理券與景點電子票，因為它們目前都會顯示在同一張「訂位總表」。

```javascript
{
  id: "rsv-katsuhana",
  eventId: "d2-katsuhana",
  periodLabel: "晚餐",
  status: "recommended",
  method: "tablecheck",
  displayName: "とんかつ KATSU華",
  summaryStatusLabel: "● 建議訂位",
  eventLabel: "🔴 建議訂位：TableCheck 預約 18:00",
  note: "60分鐘制、每人一份定食、僅收現金",
  action: {
    label: "TableCheck",
    url: "https://www.tablecheck.com/ja/katsuhana/reserve/landing"
  }
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 全 Trip 唯一。 |
| `eventId` | string | 是 | 必須指向一個 Event。 |
| `periodLabel` | string \| null | 是 | 午餐、晚餐、上午、傍晚等顯示分類。 |
| `status` | enum | 是 | 決定標籤文字與樣式。 |
| `method` | enum | 是 | 訂位或取得入場資格的方法。 |
| `displayName` | string | 是 | 總表使用的短名稱。 |
| `summaryStatusLabel` | string | 是 | 資訊頁狀態標籤文字。 |
| `eventLabel` | string \| null | 是 | Event 卡片使用的完整標籤；不顯示時為 `null`。 |
| `note` | string | 是 | 限制、候位策略或確認資訊。 |
| `action` | object \| null | 是 | 訂位、購票或店家資訊按鈕。 |

`status` 允許值：

| 值 | 意義 |
| --- | --- |
| `confirmed` | 已確認訂位或已持有票券。 |
| `required` | 必須預約／購票。 |
| `recommended` | 建議預約／購票。 |
| `walkIn` | 現場候位或免訂位。 |
| `ticketQueue` | 到場抽整理券。 |

`method` 允許值：

```text
tablecheck
officialSite
externalSite
walkIn
queueTicket
none
```

Event 卡片與資訊頁訂位總表都讀取同一筆 Reservation。Renderer 可依 `status` 產生現有紅、黃、綠與完成樣式。

## 12. Flight

```javascript
{
  id: "flight-outbound",
  airline: "Peach Aviation",
  airlineDisplayName: "樂桃航空",
  flightNumber: "MM028",
  departure: {
    airportCode: "TPE",
    airportName: "台北桃園",
    terminal: null,
    dateTime: "2026-10-07T18:15:00+08:00"
  },
  arrival: {
    airportCode: "KIX",
    airportName: "大阪關西",
    terminal: "T2",
    dateTime: "2026-10-07T22:00:00+09:00"
  },
  note: null
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 航班穩定 ID。 |
| `airline` | string | 是 | 航空公司正式或英文名稱。 |
| `airlineDisplayName` | string | 是 | UI 顯示名稱。 |
| `flightNumber` | string | 是 | 例如 `MM028`。 |
| `departure` | `FlightEndpoint` | 是 | 出發資訊。 |
| `arrival` | `FlightEndpoint` | 是 | 抵達資訊。 |
| `note` | string \| null | 是 | 補充資訊。 |

時間使用含 UTC offset 的 ISO 8601 字串，因去回程涉及台灣與日本兩個時區。Day 1／Day 8 Event 只保存 `flightId`，資訊頁航班卡片亦由 Flight 生成。

## 13. Accommodation

```javascript
{
  id: "omo-kix",
  name: "OMO 關西機場 by 星野集團",
  nameEn: "OMO Kansai Airport by Hoshino Resorts",
  placeId: "omo-kix-place",
  checkInDate: "2026-10-07",
  checkOutDate: "2026-10-08",
  address: "〒598-0048 大阪府泉佐野市りんくう往来北1-833",
  phone: "+81-50-3134-8096",
  emergencyPhone: "+81-72-488-7301",
  note: null
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 住宿穩定 ID。 |
| `name` | string | 是 | 中文顯示名稱。 |
| `nameEn` | string | 是 | 入境卡／導航使用名稱。 |
| `placeId` | string | 是 | 指向住宿地點 Place。 |
| `checkInDate` | date string | 是 | 入住日。 |
| `checkOutDate` | date string | 是 | 退房日，必須晚於入住日。 |
| `address` | string | 是 | 入境卡使用的完整地址。 |
| `phone` | string | 是 | 使用國際格式。 |
| `emergencyPhone` | string \| null | 是 | 無夜間電話時為 `null`。 |
| `note` | string \| null | 是 | 入住方式等住宿級說明。 |

Accommodation 和 Place 的分工：Accommodation 保存住宿期間與聯絡資料；Place 保存地圖查詢。資訊頁的住宿卡片由 Accommodation 生成。

## 14. Food Checklist

美食打卡項目保存在頂層陣列，陣列順序就是頁面順序；每個項目再用 `eventIds` 連回一個或多個 Event。這使「鰻魚飯」可同時連到京都午餐備選與木津市場，也不必在 Event 內重抄清單文字。

```javascript
{
  id: "food-unagi",
  title: "🍱 鰻魚飯",
  subtitle: "京都老店（10/9 午餐備選）／木津市場川上商店（10/13）",
  eventIds: ["d3-kiyomizu-higashiyama", "d7-kizu-market"]
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 同時作為使用者狀態 key 的一部分。 |
| `title` | string | 是 | 打卡頁主要文字。 |
| `subtitle` | string | 是 | 候選地點與日期說明。 |
| `eventIds` | string[] | 是 | 至少一個有效 Event ID。 |

Food 頁資料來源：

```javascript
const foodItems = trip.foodChecklist;
```

## 15. ShoppingItem

```javascript
{
  id: "shopping-rohto-gold40-max",
  name: "V樂敦 Gold 40 爽快MAX",
  nameLocal: "Vロートゴールド40爽快MAX・20mL",
  image: {
    src: "https://www.matsukiyococokara-online.com/...jpg",
    alt: "V樂敦 Gold 40 爽快MAX 20mL 商品圖",
    productUrl: "https://www.matsukiyococokara-online.com/..."
  },
  tags: ["眼藥水", "第3類醫藥品"],
  note: "認包裝關鍵字「爽快MAX」與 20mL；購買及使用前確認標示。",
  preferredStore: "SUGI 優先",
  plannedDayId: "d6",
  defaultQuantity: 1,
  maxQuantity: 20
}
```

| 欄位 | 型別 | 必填 | 規則 |
| --- | --- | --- | --- |
| `id` | string | 是 | 穩定 ID，不再使用 `shopping-1` 等位置型名稱。 |
| `name` | string | 是 | 中文主要名稱。 |
| `nameLocal` | string | 是 | 給店員辨識的日文名稱與規格。 |
| `image.src` | URL string | 是 | 商品圖片；離線需求確認後可改成本地路徑。 |
| `image.alt` | string | 是 | 無障礙替代文字。 |
| `image.productUrl` | URL string | 是 | 點擊圖片的商品頁。 |
| `tags` | string[] | 是 | 至少一項。 |
| `note` | string | 是 | 包裝辨識與使用提醒。 |
| `preferredStore` | string \| null | 是 | 首選門市。 |
| `plannedDayId` | string \| null | 是 | 預計購買 Day。 |
| `defaultQuantity` | integer | 是 | 至少 1。 |
| `maxQuantity` | integer | 是 | 不小於 `defaultQuantity`。 |

以下欄位禁止加入 ShoppingItem：

```text
checked
purchased
quantity
```

它們都是 User State。

## 16. Notice

```javascript
{
  id: "notice-d2-time-limit",
  position: "beforeEvent",
  beforeEventId: "d2-katsuhana",
  style: "warning",
  title: "⏱️ 今天的時間底線",
  contentHtml: "大阪城與天滿宮都要去，因此……"
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 穩定 ID。 |
| `position` | enum | 是 | `beforeTimeline`、`beforeEvent`、`afterTimeline`。 |
| `beforeEventId` | string \| undefined | 條件式 | `beforeEvent` 時必填。 |
| `style` | enum | 是 | `info`、`warning`、`success`。 |
| `title` | string | 是 | 完整顯示標題，可包含 Emoji。 |
| `contentHtml` | string | 是 | 完整提醒內容。 |

提醒內的底線時間、備案與條件不再細拆成大量欄位，除非未來真的出現依時間自動警告的功能需求。

## 17. InfoSection 與 ExternalLink

資訊頁分成兩類：

1. 由 Master Data 自動生成：訂位總表、航班、住宿。
2. 編輯型自由內容：三連休提醒、交通費閱讀方式、站名辨識。

只有第二類放進 `infoSections`：

```javascript
{
  id: "info-station-guide",
  style: "guide",
  icon: "🚉",
  title: "站名與路線辨識",
  contentHtml: "日本車站指標以……"
}
```

| 欄位 | 型別 | 必填 | 說明 |
| --- | --- | --- | --- |
| `id` | string | 是 | 穩定 ID。 |
| `style` | enum | 是 | `default`、`notice`、`guide`。 |
| `icon` | string \| null | 是 | Emoji 或 `null`。 |
| `title` | string | 是 | 卡片標題。 |
| `contentHtml` | string | 是 | 可信任的本地編輯 HTML。 |

救援連結使用：

```javascript
{
  id: "visit-japan-web",
  label: "Visit Japan Web",
  icon: "🌐",
  url: "https://www.vjw.digital.go.jp/"
}
```

`ExternalLink` 欄位為 `id`、`label`、`icon`、`url`，全部必填。

### 17.1 HTML 內容安全界線

`descriptionHtml`、`contentHtml` 與 `noteHtml` 只允許保存版本控制中、由專案作者編輯的可信任內容。若未來資料來自表單、API 或第三方服務，必須改用純文字或在 render 前消毒，不能直接插入 `innerHTML`。

## 18. UserState 與 localStorage

建議把現有零散 key 收斂成單一版本化物件：

```javascript
const userState = {
  version: 1,
  lastDayId: "d3",
  foodChecked: {
    "food-katsuhana-tonkatsu": true
  },
  shopping: {
    "shopping-rohto-gold40-max": {
      checked: true,
      quantity: 2
    }
  }
};
```

建議 localStorage key：

```text
kansai-trip-2026:user-state:v1
```

規則：

- 讀取失敗、JSON 損壞或 private mode 禁用時，App 使用預設空狀態繼續運作。
- 不認得的舊 ID 可以忽略，不應阻止 App 啟動。
- `quantity` 必須限制於 `1..ShoppingItem.maxQuantity`。
- 內容版本更新不應自動清除使用者已勾選狀態。
- User State 的 `version` 與內容的 `schemaVersion` 是兩套不同版本。

第一階段若不想同步遷移 localStorage，可暫時保留現有 key，但 renderer 必須開始使用新穩定 ID；之後再增加一次性 migration。

## 19. 完整縮略範例

以下範例展示物件關聯，不代表完整八天資料：

```javascript
export const trip = {
  schemaVersion: 1,
  contentVersion: "1.0.0",
  updatedAt: "2026-08-20",

  meta: {
    id: "kansai-2026",
    title: "關西食光散策",
    subtitle: "8日行程隨身導覽",
    startDate: "2026-10-07",
    endDate: "2026-10-14",
    timezone: "Asia/Tokyo",
    locale: "zh-TW",
    destinations: ["大阪", "京都", "奈良", "箕面"]
  },

  flights: [
    {
      id: "flight-outbound",
      airline: "Peach Aviation",
      airlineDisplayName: "樂桃航空",
      flightNumber: "MM028",
      departure: {
        airportCode: "TPE",
        airportName: "台北桃園",
        terminal: null,
        dateTime: "2026-10-07T18:15:00+08:00"
      },
      arrival: {
        airportCode: "KIX",
        airportName: "大阪關西",
        terminal: "T2",
        dateTime: "2026-10-07T22:00:00+09:00"
      },
      note: null
    }
  ],

  accommodations: [
    {
      id: "omo-kix",
      name: "OMO 關西機場 by 星野集團",
      nameEn: "OMO Kansai Airport by Hoshino Resorts",
      placeId: "omo-kix-place",
      checkInDate: "2026-10-07",
      checkOutDate: "2026-10-08",
      address: "〒598-0048 大阪府泉佐野市りんくう往来北1-833",
      phone: "+81-50-3134-8096",
      emergencyPhone: "+81-72-488-7301",
      note: null
    }
  ],

  places: {
    "omo-kix-place": {
      id: "omo-kix-place",
      name: "OMO 關西機場 by 星野集團",
      nameLocal: "OMO Kansai Airport by Hoshino Resorts",
      address: "〒598-0048 大阪府泉佐野市りんくう往来北1-833",
      map: {
        query: "OMO Kansai Airport by Hoshino Resorts",
        coordinates: null
      },
      links: []
    },
    "fushimi-inari": {
      id: "fushimi-inari",
      name: "伏見稻荷大社",
      nameLocal: "伏見稲荷大社",
      address: null,
      map: {
        query: "伏見稲荷大社",
        coordinates: null
      },
      links: []
    }
  },

  reservations: [],

  days: [
    {
      id: "d3",
      dayNumber: 3,
      date: "2026-10-09",
      title: "京都經典千本鳥居與東山古都",
      badge: "京都東山",
      overnight: {
        type: "accommodation",
        accommodationId: "apt-shinimamiya-1"
      },
      routeOrigin: {
        type: "accommodation",
        accommodationId: "apt-shinimamiya-1"
      },
      summary: {
        departureLabel: "建議出門",
        departure: "06:40",
        area: "伏見稻荷・東山",
        stamina: "較高・長距離步行",
        keyPoint: "奈良線普通車才停稲荷"
      },
      transportSummary: {
        modes: ["JR", "京阪電車"],
        estimatedCosts: [
          { amount: 1880, currency: "JPY", unit: "perPerson", qualifier: "estimate" }
        ],
        exclusions: []
      },
      notices: [],
      events: [
        {
          id: "d3-fushimi-inari",
          type: "visit",
          schedule: { start: "08:00", end: "09:30" },
          title: "伏見稻荷大社",
          descriptionHtml: "清晨抵達千本鳥居……",
          primaryPlaceId: "fushimi-inari",
          relatedPlaceIds: [],
          flightId: null,
          transportBeforeId: "tr-d3-fushimi-inari",
          reservationId: null,
          highlights: [],
          foodChecklistIds: [],
          actions: []
        }
      ],
      endingTransportId: null
    }
  ],

  journeys: {
    "tr-d3-fushimi-inari": {
      id: "tr-d3-fushimi-inari",
      label: "前往伏見稻荷大社",
      from: { type: "accommodation", accommodationId: "apt-shinimamiya-1" },
      to: { type: "place", placeId: "fushimi-inari" },
      estimatedDurationMin: 80,
      steps: []
    }
  },

  foodChecklist: [],
  shopping: [],
  infoSections: [],
  externalLinks: []
};
```

完整實作時 `Journey.steps` 必須至少一筆；上面為縮略範例才省略內容。

## 20. 驗證規則

資料載入後應先執行開發期驗證。至少檢查：

### 20.1 唯一性與關聯

- 所有 `id` 在各自集合內唯一。
- Event ID 在整趟 Trip 中唯一。
- `places` 與 `journeys` 的 key 必須等於物件內的 `id`。
- 所有 `placeId`、`accommodationId`、`flightId`、`reservationId`、`eventId`、`transportBeforeId`、`endingTransportId` 都能解析。
- 一個 Reservation 只能指向一個 Event。
- 一個 Event 最多引用一筆 Reservation。
- `foodChecklist.eventIds` 不可為空且都必須存在。

### 20.2 日期與時間

- `meta.startDate <= meta.endDate`。
- Days 必須依日期嚴格遞增，且日期不可重複。
- `dayNumber` 必須從 1 連續遞增。
- Accommodation 的 `checkOutDate` 晚於 `checkInDate`。
- 普通 Event 若同時有 start/end，則 start 應早於或等於 end。
- 跨午夜事件若未來出現，改用完整 date-time schema，不以 `end < start` 暗示跨日。

### 20.3 數值與格式

- 日期符合 `YYYY-MM-DD`。
- 時間符合 24 小時制 `HH:mm`。
- Flight date-time 必須包含時區 offset。
- 所有費用為非負整數日圓。
- `DurationRange.min <= DurationRange.max`。
- Shopping quantity 上下限有效。
- URL 必須使用 `https:`，除非是明確允許的本地相對路徑。

### 20.4 內容

- 必填顯示文字去除前後空白後不可為空。
- Event 至少應有 `primaryPlaceId`、`flightId` 或能說明無地點事件的 `type` 之一。
- Event 有 `flightId` 時，`type` 必須是 `flight`。
- Reservation 的 `eventId` 所指 Event 必須回指相同的 `reservationId`。
- Journey 必須至少有一個 TransportStep，或提供非空的 `noteHtml`。

開發模式遇到驗證錯誤應在 console 明確指出完整資料路徑，例如：

```text
trip.days[2].events[0].primaryPlaceId: unknown place "fushimi-inrai"
```

正式環境不應因單一非關鍵欄位錯誤讓整個 App 白屏；可以隱藏無效按鈕並留下 console error。

## 21. Renderer 責任邊界

資料層只描述內容；Renderer 負責：

- 由 Day 日期產生 Day Tabs、星期與「今天」標籤。
- 由 `meta` 產生 Header 日期、目的地與天數。
- 由 `overnight` 產生住宿標籤。
- 由 Event 陣列產生 Timeline。
- 在每個 Event 前渲染 `transportBeforeId` 所指 Journey。
- 由 Place 產生「地圖」按鈕。
- 由 Journey 的起訖點產生「路線」按鈕。
- 由 Reservation 產生 Event 標籤與訂位總表。
- 由 `foodChecklist` 產生美食頁，並以 Event 的 `foodChecklistIds` 驗證雙向關聯。
- 由 ShoppingItem 與 UserState 產生購物頁及進度。
- 將費用、時間、日期與星期格式化為目前 UI 文字。

Renderer 不得：

- 從 `<strong>` 文字反查票價。
- 從 Google Maps URL 解析出資料主鍵。
- 依 Timeline 的數字索引決定交通插入位置。
- 把 `.transport-box` 的既有 DOM 搬到另一個位置。
- 在兩個 renderer 各自硬寫同一筆航班、住宿或訂位資料。

## 22. 明確不做的 Schema

第一版不建立：

```text
Station Master
Railway Company Master
Railway Line Master
Restaurant Master
City / Area Master
Currency Table
OpeningHours Schema
Address Entity
Phone Entity
Tag Master
Generic UI Component Schema
```

理由：

- 車站與路線目前只在單趟交通步驟內使用，字串即可維護。
- 餐廳本質上已可用 Place 加 Event 表達。
- 所有價格都是日圓，不需要貨幣主檔。
- 營業時間主要出現在敘述與臨時提醒中，且可能變動；拆欄位暫無計算價值。
- 通用 Component Schema 會把資料層變成另一種 HTML，降低可讀性。

未來只有在出現明確的新功能需求時才擴充，例如需要依營業時間自動判斷是否來得及，才新增結構化 opening hours。

## 23. 分階段遷移策略

### Phase 0：建立保護網

- 保存目前 UI 截圖或基本人工驗收清單。
- 確認 Day 切換、底部導覽、美食勾選、購物數量、地圖連結與離線啟動正常。
- 加入最基本的 JavaScript syntax、Manifest 與本地檔案存在性檢查。

### Phase 1：建立資料檔，不切換 UI

- 建立 `data/` 檔案。
- 先搬 Trip meta、Flights、Accommodations、Places 與 Reservations。
- 加入資料驗證器。
- 原畫面仍由既有 HTML 顯示，用人工或小工具比對資料是否完整。

### Phase 2：每日 Header 與摘要

- 由 `trip.meta` 生成 Header 與 Day Tabs。
- 由 Day 生成標題、Badge、住宿、日期與四格摘要。
- 刪除 `tripDates`、`daySummaries` 與 `dayRouteOrigins`。

### Phase 3：Timeline Events

- 逐 Day 將 `.timeline-item` 搬成 Event。
- 先用共用 EventCard renderer 重現既有畫面。
- 每完成一天就比對文字、順序、地圖連結與訂位標籤。

### Phase 4：Transport

- 將 `.transport-box .route-step` 搬成 Journey 與 TransportStep。
- Event 使用 `transportBeforeId`。
- 刪除 `inlineTransportPlan`、`estimatedFares`、`transportOverviews` 及 DOM 搬移程式。

### Phase 5：衍生頁面

- 由 Reservation 產生訂位總表。
- 由 Flight 與 Accommodation 產生資訊卡。
- 由 Event checklist 與 extras 產生 Food 頁。
- 由 ShoppingItem 產生購物頁。
- 將 localStorage key 遷移至版本化 UserState。

### Phase 6：自由內容與模組拆分

- 評估是否把 Info 長文搬至 `infoSections`；不搬也屬於有效選擇。
- 將 CSS、renderer、navigation、shopping state 與 Service Worker registration 拆成獨立檔案。
- 更新 `sw.js` 的 App Shell 清單與快取策略。

每個 Phase 都應保持可部署，不採一次性 Big Bang 重寫。

## 24. Schema 變更規則

- 新增可選欄位：通常不增加 `schemaVersion`。
- 新增必填欄位：增加 `schemaVersion`，並提供舊資料 migration 或一次性修改。
- 改名、刪除欄位或改變欄位語意：必須增加 `schemaVersion`。
- 單純修改行程文字、日期、價格或連結：只增加 `contentVersion`。
- User State 結構變更只增加 User State 自己的 `version`。

若實作過程發現 Schema 與現有內容不合，應先更新本文件並說明取捨，再修改資料與 renderer，避免程式碼悄悄成為另一套未記錄的規格。
