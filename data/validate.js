function isDate(value) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value);
}

function collectIds(items, path, errors) {
  const ids = new Set();
  items.forEach((item, index) => {
    if (!item?.id) {
      errors.push(`${path}[${index}].id: required`);
      return;
    }
    if (ids.has(item.id)) errors.push(`${path}[${index}].id: duplicate "${item.id}"`);
    ids.add(item.id);
  });
  return ids;
}

export function validateTrip(trip) {
  const errors = [];
  if (!trip || typeof trip !== "object") return ["trip: expected an object"];
  if (!Number.isInteger(trip.schemaVersion) || trip.schemaVersion < 1) errors.push("trip.schemaVersion: expected a positive integer");
  if (!trip.meta?.id) errors.push("trip.meta.id: required");
  if (!isDate(trip.meta?.startDate || "")) errors.push("trip.meta.startDate: expected YYYY-MM-DD");
  if (!isDate(trip.meta?.endDate || "")) errors.push("trip.meta.endDate: expected YYYY-MM-DD");

  const flightIds = collectIds(trip.flights || [], "trip.flights", errors);
  const accommodationIds = collectIds(trip.accommodations || [], "trip.accommodations", errors);
  const reservationIds = collectIds(trip.reservations || [], "trip.reservations", errors);
  const shoppingIds = collectIds(trip.shopping || [], "trip.shopping", errors);
  const placeIds = new Set(Object.keys(trip.places || {}));
  const journeyIds = new Set(Object.keys(trip.journeys || {}));
  const eventIds = new Set();
  const dayIds = new Set((trip.days || []).map(day => day.id));

  let previousDate = "";
  (trip.days || []).forEach((day, dayIndex) => {
    const path = `trip.days[${dayIndex}]`;
    if (day.dayNumber !== dayIndex + 1) errors.push(`${path}.dayNumber: expected ${dayIndex + 1}`);
    if (!isDate(day.date || "")) errors.push(`${path}.date: expected YYYY-MM-DD`);
    if (previousDate && day.date <= previousDate) errors.push(`${path}.date: days must be strictly increasing`);
    previousDate = day.date;
    if (day.overnight?.type === "accommodation" && !accommodationIds.has(day.overnight.accommodationId)) {
      errors.push(`${path}.overnight.accommodationId: unknown accommodation "${day.overnight.accommodationId}"`);
    }
    if (day.endingTransportId && !journeyIds.has(day.endingTransportId)) {
      errors.push(`${path}.endingTransportId: unknown journey "${day.endingTransportId}"`);
    }

    (day.events || []).forEach((event, eventIndex) => {
      const eventPath = `${path}.events[${eventIndex}]`;
      if (!event.id) errors.push(`${eventPath}.id: required`);
      else if (eventIds.has(event.id)) errors.push(`${eventPath}.id: duplicate "${event.id}"`);
      else eventIds.add(event.id);
      if (!event.title?.trim()) errors.push(`${eventPath}.title: required`);
      if (event.primaryPlaceId && !placeIds.has(event.primaryPlaceId)) errors.push(`${eventPath}.primaryPlaceId: unknown place "${event.primaryPlaceId}"`);
      if (event.flightId && !flightIds.has(event.flightId)) errors.push(`${eventPath}.flightId: unknown flight "${event.flightId}"`);
      if (event.flightId && event.type !== "flight") errors.push(`${eventPath}.type: flightId requires type "flight"`);
      if (event.reservationId && !reservationIds.has(event.reservationId)) errors.push(`${eventPath}.reservationId: unknown reservation "${event.reservationId}"`);
      if (event.transportBeforeId && !journeyIds.has(event.transportBeforeId)) errors.push(`${eventPath}.transportBeforeId: unknown journey "${event.transportBeforeId}"`);
    });
  });

  Object.entries(trip.places || {}).forEach(([key, place]) => {
    if (key !== place.id) errors.push(`trip.places.${key}.id: expected "${key}"`);
    if (!place.name?.trim()) errors.push(`trip.places.${key}.name: required`);
    if (!place.map?.query?.trim()) errors.push(`trip.places.${key}.map.query: required`);
  });

  Object.entries(trip.journeys || {}).forEach(([key, journey]) => {
    if (key !== journey.id) errors.push(`trip.journeys.${key}.id: expected "${key}"`);
    if (!journey.label?.trim()) errors.push(`trip.journeys.${key}.label: required`);
    if (!(journey.steps?.length || journey.noteHtml)) errors.push(`trip.journeys.${key}: requires steps or noteHtml`);
  });

  (trip.reservations || []).forEach((reservation, index) => {
    const path = `trip.reservations[${index}]`;
    if (!reservation.eventId && !reservation.dayId) errors.push(`${path}: requires eventId or dayId`);
    if (reservation.eventId && !eventIds.has(reservation.eventId)) errors.push(`${path}.eventId: unknown event "${reservation.eventId}"`);
    if (reservation.dayId && !dayIds.has(reservation.dayId)) errors.push(`${path}.dayId: unknown day "${reservation.dayId}"`);
  });

  (trip.shopping || []).forEach((item, index) => {
    if (!shoppingIds.has(item.id)) return;
    if (!Number.isInteger(item.defaultQuantity) || item.defaultQuantity < 1) errors.push(`trip.shopping[${index}].defaultQuantity: expected integer >= 1`);
    if (!Number.isInteger(item.maxQuantity) || item.maxQuantity < item.defaultQuantity) errors.push(`trip.shopping[${index}].maxQuantity: must be >= defaultQuantity`);
  });

  if (trip.days?.[0]?.date !== trip.meta?.startDate) errors.push("trip.meta.startDate: must match the first day");
  if (trip.days?.at(-1)?.date !== trip.meta?.endDate) errors.push("trip.meta.endDate: must match the final day");
  return errors;
}

export function assertValidTrip(trip) {
  const errors = validateTrip(trip);
  if (!errors.length) return;
  errors.forEach(error => console.error(`[trip data] ${error}`));
  throw new Error(`Trip data validation failed with ${errors.length} error(s)`);
}
