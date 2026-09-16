import { core } from "./core.js";
import { places } from "./places.js";
import { reservations } from "./reservations.js";
import { journeys } from "./journeys.js";
import { shopping } from "./shopping.js";
import { infoSections, externalLinks } from "./info.js";
import { d1 } from "./days/d1.js";
import { d3 } from "./days/d3.js";
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
