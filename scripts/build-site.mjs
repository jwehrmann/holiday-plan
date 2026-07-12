import { cp, mkdir, rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = resolve(root, "dist");
const assets = resolve(dist, "assets");

await rm(dist, { recursive: true, force: true });
await mkdir(resolve(dist, "server"), { recursive: true });
await mkdir(resolve(assets, "iceland"), { recursive: true });

await cp(resolve(root, "index.html"), resolve(assets, "index.html"));
for (const file of ["index.html", "hikes.html", "hikes-data.js", "itinerary.md", "IMAGE_CREDITS.md"]) {
  await cp(resolve(root, "iceland", file), resolve(assets, "iceland", file));
}
await cp(resolve(root, "iceland", "assets"), resolve(assets, "iceland", "assets"), { recursive: true });
await cp(resolve(root, "src", "worker.js"), resolve(dist, "server", "index.js"));

console.log("Built static site in dist/");
