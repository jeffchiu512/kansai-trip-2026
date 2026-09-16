import { readFile, writeFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const here = dirname(fileURLToPath(import.meta.url));
const root = resolve(here, "..");
const dataDir = resolve(root, "data");
const daysDir = resolve(dataDir, "days");

const sourcePath = resolve(dataDir, "trip.js");
const source = await readFile(sourcePath, "utf8");
const prefix = "export const trip = ";
if (!source.startsWith(prefix)) throw new Error("Unexpected data/trip.js format");
const jsonText = source.slice(prefix.length).trim().replace(/;\s*$/, "");
const legacy = JSON.parse(jsonText);

const pickObject = (object, ids) => Object.fromEntries(ids.map(id => {
  if (!object[id]) throw new Error(`Missing required object: ${id}`);
  return [id, object[id]];
}));

const pickArray = (items, ids) => ids.map(id => {
  const value = items.find(item => item.id === id);
  if (!value) throw new Error(`Missing required array item: ${id}`);
  return value;
});

const day = id => {
  const value = legacy.days.find(item => item.id === id);
  if (!value) throw new Error(`Missing required day: ${id}`);
  return value;
};

const placeIds = [
  "omo-kix-place",
  "shinimamiya-hotel-place",
  "pokemon-center-osaka-dx",
  "jojoen-shinsaibashi",
  "aozora-blue-daimaru-shinsaibashi",
  "osaka-castle",
  "osaka-tenmangu",
  "katsuhana",
  "fushimi-inari",
  "kiyomizu-dera",
  "junidanya-hanamikoji",
  "doi-unagi-gion-yasaka",
  "yasaka-shrine",
  "katsuoji",
  "minoh-waterfall",
  "gyutan-lemon-osaka",
  "nara-park",
  "byodoin",
  "harukas-300",
  "kizu-market",
  "namba-yasaka-shrine",
  "rinku-premium-outlets",
  "shinsaibashi-shopping",
  "hotel-nikko-kix-place"
];

const reservationIds = [
  "rsv-jojoen",
  "rsv-aozora-blue-daimaru",
  "rsv-junidanya-hanamikoji",
  "rsv-doi-unagi-gion",
  "rsv-katsuhana",
  "rsv-gyutan-lemon",
  "rsv-nakamura-tokichi",
  "rsv-harukas-300"
];

const journeyIds = [
  "tr-d1-omo-checkin",
  "tr-d2-osaka-tenmangu",
  "tr-d3-fushimi-inari",
  "tr-d3-kiyomizu-higashiyama",
  "tr-d3-yasaka-gion-kamogawa",
  "tr-d3-junidanya-lunch",
  "tr-d3-doi-unagi",
  "tr-d3-return-osaka",
  "tr-d4-katsuoji",
  "tr-d4-minoh-waterfall",
  "tr-d5-nara-todaiji",
  "tr-d5-uji",
  "tr-d7-kizu-market",
  "tr-d7-namba-yasaka",
  "tr-d7-checkout",
  "tr-d7-pokemon-center",
  "tr-d7-jojoen",
  "tr-d8-kix-checkin",
  "tr-d8-flight-return"
];

const pretty = value => JSON.stringify(value, null, 2);
await mkdir(daysDir, { recursive: true });

const core = {
  schemaVersion: legacy.schemaVersion,
  contentVersion: legacy.contentVersion,
  updatedAt: legacy.updatedAt,
  meta: legacy.meta,
  flights: legacy.flights,
  accommodations: legacy.accommodations
};

await writeFile(resolve(dataDir, "core.js"), `export const core = ${pretty(core)};\n`);
await writeFile(resolve(dataDir, "places.js"), `export const places = ${pretty(pickObject(legacy.places, placeIds))};\n`);
await writeFile(resolve(dataDir, "reservations.js"), `export const reservations = ${pretty(pickArray(legacy.reservations, reservationIds))};\n`);
await writeFile(resolve(dataDir, "journeys.js"), `export const journeys = ${pretty(pickObject(legacy.journeys, journeyIds))};\n`);
await writeFile(resolve(dataDir, "shopping.js"), `export const shopping = ${pretty(legacy.shopping)};\n`);
await writeFile(resolve(dataDir, "info.js"), `export const infoSections = ${pretty(legacy.infoSections)};\n\nexport const externalLinks = ${pretty(legacy.externalLinks)};\n`);
await writeFile(resolve(daysDir, "d1.js"), `export const d1 = ${pretty(day("d1"))};\n`);
await writeFile(resolve(daysDir, "d3.js"), `export const d3 = ${pretty(day("d3"))};\n`);
await writeFile(resolve(daysDir, "d8.js"), `export const d8 = ${pretty(day("d8"))};\n`);

const tripModule = `import { core } from "./core.js";\nimport { places } from "./places.js";\nimport { reservations } from "./reservations.js";\nimport { journeys } from "./journeys.js";\nimport { shopping } from "./shopping.js";\nimport { infoSections, externalLinks } from "./info.js";\nimport { d1 } from "./days/d1.js";\nimport { d3 } from "./days/d3.js";\nimport { d8 } from "./days/d8.js";\n\nexport const trip = {\n  ...core,\n  places,\n  reservations,\n  days: [d1, d3, d8],\n  journeys,\n  shopping,\n  infoSections,\n  externalLinks\n};\n`;
await writeFile(sourcePath, tripModule);

console.log("Split data/trip.js into focused modules and retained only active base data.");
