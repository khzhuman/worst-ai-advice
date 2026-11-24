// Worst AI Advice: Delete the Tests
// One tight line of the worst advice an AI could give, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const advice = "Just delete the tests — if nothing tests it, nothing can fail.";

// The gate wants 1–140 non-whitespace characters; refuse to ship anything else.
if (advice.length < 1 || advice.length > 140 || advice.trim().length === 0) {
  throw new Error("advice must be 1-140 characters");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", advice, "utf8");
console.log(advice);
