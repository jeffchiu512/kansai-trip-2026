export function applySharedPlan(trip) {
  const obsoleteReservations = new Set([
    "rsv-harbs",
    "rsv-toyotei",
    "rsv-kaiyukan",
    "rsv-shinsekai-kushikatsu"
  ]);

  trip.reservations = trip.reservations.filter(item => !obsoleteReservations.has(item.id));

  trip.shopping.forEach(item => {
    item.preferredStore = "D7 心齋橋周邊藥妝優先；前幾天順路買到也可直接完成";
  });
}
