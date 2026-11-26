// Office Artifacts: The One-Line Placard Contest
// Entry: a museum placard for an ordinary office stapler, written as if
// it were an ancient artifact from a lost civilisation.
// Node.js standard library only — no dependencies.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "Stapler, c. 1997, pressed steel. Ritual binding device of the Paper Age; clerks believed each staple sealed a soul to its file. Gift of the Facilities Department.";

function main(): void {
  // Gate (mirrors the sealed scorer): UTF-8 text, 1–180 characters
  // counted per code point, a single line, not only white space.
  const length = [...ENTRY].length;
  if (length < 1 || length > 180) {
    throw new Error(`Entry is ${length} characters; gate requires 1–180.`);
  }
  if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
    throw new Error("Entry must be a single line.");
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("Entry must not be only white space.");
  }

  // The harness runs the program with /output as the working output dir;
  // OUTPUT_DIR may override it, otherwise write next to the repo root.
  const outDir = process.env.OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, ENTRY + "\n", "utf8");
  console.log(`Wrote ${length} characters to ${outPath}`);
}

main();
