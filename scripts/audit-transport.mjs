import { trip } from "../data/trip.js";

const errors = [];
const activeJourneyIds = new Set();

for (const day of trip.days) {
  for (const event of day.events || []) {
    if (event.transportBeforeId) activeJourneyIds.add(event.transportBeforeId);
  }
  if (day.endingTransportId) activeJourneyIds.add(day.endingTransportId);
}

for (const id of activeJourneyIds) {
  const journey = trip.journeys[id];
  if (!journey) {
    errors.push(`${id}: referenced journey is missing`);
    continue;
  }
  if (!Array.isArray(journey.steps) || journey.steps.length === 0) {
    errors.push(`${id}: active journey has no detailed steps`);
    continue;
  }

  journey.steps.forEach((step, index) => {
    const prefix = `${id} step ${index + 1}`;
    if (!step.label) errors.push(`${prefix}: missing label`);
    if (!step.displayMeta) errors.push(`${prefix}: missing displayMeta`);
    if (["train", "bus", "taxi"].includes(step.mode) && !step.fare) {
      errors.push(`${prefix}: ${step.mode} step is missing fare`);
    }
  });
}

console.log(`Active journeys checked: ${activeJourneyIds.size}`);
if (errors.length) {
  console.error("Transport audit failed:\n" + errors.map(item => `- ${item}`).join("\n"));
  process.exit(1);
}
console.log("Transport audit passed: every active journey has detailed steps.");
