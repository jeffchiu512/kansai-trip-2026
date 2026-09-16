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

  const fare = amount => ({
    kind: "estimate",
    amount,
    currency: "JPY",
    unit: "perPerson",
    note: null,
    displayLabel: `約 ¥${amount.toLocaleString("en-US")}／人`
  });

  const freeFare = () => ({ kind: "free", displayLabel: "免費" });

  const walkStep = (label, from, to, displayMeta, noteHtml = null) => ({
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
    fare: freeFare(),
    noteHtml,
    warning: null
  });

  const trainStep = ({
    label,
    from,
    to,
    displayMeta,
    amount,
    badges,
    noteHtml = null,
    operator = null
  }) => ({
    mode: "train",
    icon: "🚃",
    operator,
    badges,
    label,
    from,
    to,
    direction: null,
    duration: null,
    displayMeta,
    fare: fare(amount),
    noteHtml,
    warning: null
  });

  const schedule = (start, end, displayLabel, qualifier = "exact") => ({
    start,
    end,
    qualifier,
    displayLabel
  });

  return { setDay, addJourney, walkStep, trainStep, schedule };
}
