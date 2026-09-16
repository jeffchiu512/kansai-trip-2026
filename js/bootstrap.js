import { trip } from "../data/trip.js?v=10";
import { assertValidTrip } from "../data/validate.js?v=9";
import { createPlanHelpers } from "../data/plan-helpers.js?v=2";
import { applySharedPlan } from "../data/shared-plan.js?v=1";
import { applyD2Plan } from "../data/days/d2.js?v=1";
import { applyD4Plan } from "../data/days/d4.js?v=3";
import { applyD5Plan } from "../data/days/d5.js?v=3";
import { applyD6Plan } from "../data/days/d6.js?v=1";
import { applyD7Plan } from "../data/days/d7.js?v=2";

// Bootstrap assembles the confirmed plan, validates it, then starts the renderer.
trip.contentVersion = "2.5.0";
trip.updatedAt = "2026-09-16";

const helpers = createPlanHelpers(trip);

applySharedPlan(trip);
applyD2Plan(trip, helpers);
applyD4Plan(trip, helpers);
applyD5Plan(trip, helpers);
applyD6Plan(trip, helpers);
applyD7Plan(trip, helpers);

assertValidTrip(trip);
void import("./app.js?v=11");
