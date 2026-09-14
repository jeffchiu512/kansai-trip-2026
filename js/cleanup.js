function setHtml(selector, html) {
  const el = document.querySelector(selector);
  if (el && el.innerHTML !== html) el.innerHTML = html;
}

function setText(selector, text) {
  const el = document.querySelector(selector);
  if (el && el.textContent !== text) el.textContent = text;
}

function replaceTextEverywhere(from, to) {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.nodeValue?.includes(from)) node.nodeValue = node.nodeValue.replaceAll(from, to);
  });
}

function cleanDiscussionArtifacts() {
  if (!document.getElementById("appContent")) return;

  setText("#d2 .transport-overview", "南海電車＋Osaka Metro；先寄放行李，再前往大阪城，傍晚往心齋橋／南船場移動。");
  setHtml('[data-event-id="d2-omo-checkout"] .spot-desc', "早餐後完成退房，帶行李搭南海電車前往新今宮，寄放行李後開始大阪市區行程。");
  setText('[data-event-id="d2-omo-checkout"] .food-tag-inline', "🧳 退房後直接前往新今宮寄放行李");

  setHtml('[data-event-id="d4-return-namba"] .spot-desc', "從山區返回大阪南區。若比預期早到，可先休息、喝咖啡或逛街，再依時間前往道頓堀換取晚間遊船班次。");
  setText('[data-event-id="d4-dotonbori-cruise"] .food-tag-inline', "🚤 道頓堀夜間水上巡遊");
  setHtml('[data-event-id="d4-dotonbori-walk"] .spot-desc', "遊船結束後視體力散步戎橋、格力高跑跑人與道頓堀商圈，再返回新今宮住宿。");

  setText("#d5 .transport-overview", "JR 大和路線＋奈良線＋大阪方向電車；宇治結束後直接前往阿倍野／天王寺。");
  setHtml('[data-event-id="d5-abeno-dinner"] .spot-desc', "宇治結束後直接前往天王寺／阿倍野。晚餐以不用久排、能在 19:40 左右結束為原則，替 HARUKAS 300 夜景保留充裕時間。");

  setHtml('[data-event-id="d6-usj-arrival"] .spot-desc', "全天行程集中在 USJ。依官方開園時間提早 60～90 分鐘抵達園區，入園後立即確認任天堂世界與各項整理券狀態。");

  setHtml('[data-event-id="d7-collect-luggage"] .spot-desc', "心齋橋最後採買於 14:30 左右收尾，回新今宮領取寄放行李後直接搭南海電車前往臨空城。");
  setHtml('[data-event-id="d7-rinku-outlet"] .spot-desc', "鎖定想看的品牌，停留約 1.5～2 小時。官方一般營業至 20:00，16:00 左右抵達仍有充裕時間；逛完直接前往關西機場日航酒店。");
  setText('[data-event-id="d7-rinku-outlet"] .food-tag-inline', "🛍️ 臨空城順路採買・停留約1.5～2小時");

  const shoppingTip = document.querySelector("#shopping-page .tip-box.info:last-of-type");
  if (shoppingTip) {
    const finalTip = `<div class="tip-title">🧾 採買順序</div>\n      D7 心齋橋採買時優先處理清單；前幾天若順路看到也可先買。心齋橋未買齊的品項，再視臨空城實際店家補買。`;
    if (shoppingTip.innerHTML.trim() !== finalTip.trim()) shoppingTip.innerHTML = finalTip;
  }

  const replacements = [
    ["不再像原 D2 一樣把 Outlet 當半日主行程。", ""],
    ["原 D2 Outlet 移到這裡・", ""],
    ["不再塞 HARBS 固定行程。", ""],
    ["不再繞京都站吃東洋亭。", ""],
    ["不再繞京都站。", ""],
    ["不要再塞其他上午景點。", ""],
    ["今天不安排通天閣登塔，", ""],
    ["比登通天閣更符合本次路線", "道頓堀夜間水上巡遊"],
    ["Outlet 改到 D7；", ""],
    ["取消早上 Outlet，", ""]
  ];
  replacements.forEach(([from, to]) => replaceTextEverywhere(from, to));
}

function scheduleCleanupPasses() {
  [0, 100, 300, 800, 1500].forEach(delay => {
    setTimeout(cleanDiscussionArtifacts, delay);
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", scheduleCleanupPasses, { once: true });
} else {
  scheduleCleanupPasses();
}
