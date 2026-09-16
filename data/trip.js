import { core } from "./core.js";
import { places } from "./places.js";
import { reservations } from "./reservations.js";
import { journeys } from "./journeys.js";
import { shopping } from "./shopping.js";
import { infoSections, externalLinks } from "./info.js";
import { createPlanHelpers } from "./plan-helpers.js";
import { d1 } from "./days/d1.js";
import { applyD2Plan } from "./days/d2.js";
import { d3 } from "./days/d3.js";
import { applyD4Plan } from "./days/d4.js";
import { applyD5Plan } from "./days/d5.js";
import { applyD6Plan } from "./days/d6.js";
import { applyD7Plan } from "./days/d7.js";
import { d8 } from "./days/d8.js";

export const trip = {
  ...core,
  places,
  reservations,
  days: [d1, d3, d8],
  journeys,
  shopping,
  infoSections,
  externalLinks
};

const helpers = createPlanHelpers(trip);
applyD2Plan(trip, helpers);
applyD4Plan(trip, helpers);
applyD5Plan(trip, helpers);
applyD6Plan(trip, helpers);
applyD7Plan(trip, helpers);
