import { trip } from "../data/trip.js?v=10";
import { createPlanHelpers } from "../data/plan-helpers.js?v=1";
import { applySharedPlan } from "../data/shared-plan.js?v=1";
import { applyD2Plan } from "../data/days/d2.js?v=1";
import { applyD4Plan } from "../data/days/d4.js?v=1";
import { applyD5Plan } from "../data/days/d5.js?v=1";
import { applyD6Plan } from "../data/days/d6.js?v=1";
import { applyD7Plan } from "../data/days/d7.js?v=1";
import { applyPostRenderEnhancements } from "./post-render.js?v=1";

// Bootstrap now only assembles the confirmed plan from focused modules.
trip.contentVersion = "2.4.0";
trip.updatedAt = "2026-09-16";

const helpers = createPlanHelpers(trip);

applySharedPlan(trip);
applyD2Plan(trip, helpers);
applyD4Plan(trip, helpers);
applyD5Plan(trip, helpers);
applyD6Plan(trip, helpers);
applyD7Plan(trip, helpers);

void import("./app.js?v=10").then(() => {
  applyPostRenderEnhancements(trip);
});
