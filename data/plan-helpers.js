export function createPlanHelpers(trip) {
  const day = id => trip.days.find(item => item.id === id);
  const reservation = id => trip.reservations.find(item => item.id === id);

  const requireDay = id => {
    const value = day(id);
    if (!value) throw new Error(`[trip plan] Missing required day "${id}"`);
    return value;
  };

  const requireEvent = (dayOrId, eventId) => {
    const targetDay = typeof dayOrId === "string" ? requireDay(dayOrId) : dayOrId;
    const value = targetDay?.events?.find(item => item.id === eventId);
    if (!value) {
      const dayId = targetDay?.id || String(dayOrId);
      throw new Error(`[trip plan] Missing required event "${eventId}" in day "${dayId}"`);
    }
    return value;
  };

  const requireReservation = id => {
    const value = reservation(id);
    if (!value) throw new Error(`[trip plan] Missing required reservation "${id}"`);
    return value;
  };

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

  return {
    day,
    reservation,
    requireDay,
    requireEvent,
    requireReservation,
    addPlace,
    addJourney,
    schedule
  };
}
