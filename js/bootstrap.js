import { trip } from "../data/trip.js?v=10";
import { assertValidTrip } from "../data/validate.js?v=10";

// The trip module is the single composition root; bootstrap only validates and starts the renderer.
assertValidTrip(trip);
void import("./app.js?v=11");
