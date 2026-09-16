export function applySharedPlan(trip) {
  const managedDayIds = new Set(["d2", "d4", "d5", "d6", "d7"]);
  const obsoleteReservations = new Set([
    "rsv-harbs",
    "rsv-toyotei",
    "rsv-kaiyukan",
    "rsv-shinsekai-kushikatsu"
  ]);

  // These days are rebuilt from their canonical data/days modules.
  // Removing the legacy snapshots first prevents stale trip.js data from ever becoming a fallback.
  trip.days = trip.days.filter(item => !managedDayIds.has(item.id));
  trip.reservations = trip.reservations.filter(item => !obsoleteReservations.has(item.id));

  trip.shopping.forEach(item => {
    item.preferredStore = "D7 心齋橋周邊藥妝優先；前幾天順路買到也可直接完成";
  });
}
