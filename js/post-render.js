export function applyPostRenderEnhancements(trip) {
  const shoppingPage = document.getElementById("shopping-page");
  if (shoppingPage) {
    const badge = shoppingPage.querySelector(".day-badge");
    if (badge) badge.textContent = "D7 優先";

    const tip = shoppingPage.querySelector(".tip-box.info:last-of-type");
    if (tip) {
      tip.innerHTML = `
        <div class="tip-title">🧾 採買順序</div>
        D7 心齋橋採買時優先處理清單；前幾天若順路看到也可先買。心齋橋未買齊的品項，再視臨空城實際店家補買。
      `;
    }
  }

  const infoPage = document.getElementById("info-page");
  if (!infoPage) return;

  const updatedLabel = String(trip.updatedAt || "").replaceAll("-", "/");
  infoPage.insertAdjacentHTML("beforeend", `
    <div aria-label="版本資訊" style="text-align:center; margin:24px 0 8px; color:#888; font-size:0.78rem; line-height:1.6;">
      ${trip.meta.title} · v${trip.contentVersion}<br>
      最後更新：${updatedLabel}
    </div>
  `);
}
