export function createPlanHelpers(trip) {
  const day = id => trip.days.find(item => item.id === id);
  const reservation = id => trip.reservations.find(item => item.id === id);

  const addPlace = (id, name, query, address = null, nameLocal = null) => {
    trip.places[id] = {
      id,
      name,
      nameLocal,
      address,
      map: { query, coordinates: null },
      links: []
    };
  };

  const addJourney = (id, label, from, to, routeUrl, noteHtml, estimatedDurationMin = null) => {
    trip.journeys[id] = {
      id,
      label,
      from: { type: "text", value: from },
      to: { type: "text", value: to },
      routeUrl,
      estimatedDurationMin,
      noteHtml,
      steps: []
    };
  };

  const schedule = (start, end, displayLabel, qualifier = "exact") => ({
    start,
    end,
    qualifier,
    displayLabel
  });

  return { day, reservation, addPlace, addJourney, schedule };
}
