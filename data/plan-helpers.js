export function createPlanHelpers(trip) {
  const setDay = value => {
    if (!value?.id || !Number.isInteger(value.dayNumber)) {
      throw new Error("[trip plan] setDay requires id and dayNumber");
    }
    const index = trip.days.findIndex(item => item.id === value.id);
    if (index >= 0) trip.days[index] = value;
    else trip.days.push(value);
    trip.days.sort((a, b) => a.dayNumber - b.dayNumber);
    return value;
  };

  const addJourney = (
    id,
    label,
    from,
    to,
    routeUrl,
    noteHtml,
    estimatedDurationMin = null,
    steps = []
  ) => {
    trip.journeys[id] = {
      id,
      label,
      from: { type: "text", value: from },
      to: { type: "text", value: to },
      routeUrl,
      estimatedDurationMin,
      noteHtml,
      steps
    };
  };

  const schedule = (start, end, displayLabel, qualifier = "exact") => ({
    start,
    end,
    qualifier,
    displayLabel
  });

  return { setDay, addJourney, schedule };
}
