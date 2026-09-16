import { writeFile } from "node:fs/promises";
import { journeys } from "../data/journeys.js";
import { d3 } from "../data/days/d3.js";

const freeFare = { kind: "free", displayLabel: "免費" };
const walk = (label, from, to, displayMeta, noteHtml = null) => ({
  mode: "walk",
  icon: "🚶",
  operator: null,
  badges: [{ colorKey: "walk", label: "步行" }],
  label,
  from,
  to,
  direction: null,
  duration: null,
  displayMeta,
  fare: freeFare,
  noteHtml,
  warning: null
});

const setFare = (journeyId, stepIndex, amount, displayLabel = `約 ¥${amount.toLocaleString("en-US")}／人`) => {
  const step = journeys[journeyId]?.steps?.[stepIndex];
  if (!step?.fare) throw new Error(`Missing fare target: ${journeyId} step ${stepIndex + 1}`);
  step.fare.amount = amount;
  step.fare.displayLabel = displayLabel;
};

// D3: refresh 2026 fares.
setFare("tr-d3-fushimi-inari", 0, 960, "JR 通算約 ¥960／人");
setFare("tr-d3-return-osaka", 0, 480);
setFare("tr-d3-return-osaka", 1, 200);
d3.transportSummary.displayText = "JR＋京阪電車；今日交通約 ¥1,870／人。";

// Walking-only transfers still need visible detailed steps in the UI.
journeys["tr-d3-junidanya-lunch"].steps = [
  walk("八坂神社 → 十二段家 花見小路店", "八坂神社", "十二段家 花見小路店", "約5～10分", "沿四条通往花見小路方向步行，13:30 前抵達。")
];
journeys["tr-d3-doi-unagi"].steps = [
  walk("花見小路 → 土井活鰻 祇園八坂店", "花見小路", "土井活鰻 祇園八坂店", "約10分", "16:40 左右出發，17:00 開門即到。")
];
journeys["tr-d7-jojoen"].steps = [
  walk("大丸心齋橋 本館9F → 10F", "Pokémon Center OSAKA DX", "敘敘苑 大丸心齋橋店", "館內電梯約3～5分", "同一棟本館移動，不需要出大樓；9F 寶可夢中心結帳後直接上 10F。")
];

// D8: clarify the airport procedure as transport steps rather than leaving empty cards.
const d8Checkin = journeys["tr-d8-kix-checkin"];
if (!d8Checkin?.steps?.[0]) throw new Error("Missing tr-d8-kix-checkin step 1");
d8Checkin.steps[0].displayMeta = "05:30 起床・06:00 前離開飯店";

journeys["tr-d8-flight-return"].steps = [
  {
    mode: "procedure",
    icon: "✈️",
    operator: null,
    badges: [],
    label: "T2 安檢後 → MM023 登機門",
    from: "KIX Terminal 2",
    to: "MM023 Gate",
    direction: null,
    duration: null,
    displayMeta: "07:50 起飛・依航班螢幕確認 Gate",
    fare: null,
    noteHtml: "完成報到與安檢後留意航班螢幕與樂桃廣播，預留前往登機門的步行時間。",
    warning: null
  }
];

await writeFile(new URL("../data/journeys.js", import.meta.url), `export const journeys = ${JSON.stringify(journeys, null, 2)};\n`);
await writeFile(new URL("../data/days/d3.js", import.meta.url), `export const d3 = ${JSON.stringify(d3, null, 2)};\n`);
console.log("Static transport journeys and D3 fare summary updated.");
