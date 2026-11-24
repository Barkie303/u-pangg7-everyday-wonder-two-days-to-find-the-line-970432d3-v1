// Everyday Wonder, Two Days to Find the Line — entry for make.fun
// u-pangg7-everyday-wonder-two-days-to-find-the-line-970432d3
// Writes one sentence (1-200 chars) on a small moment of wonder in
// everyday life, to /output/entry.txt. One ordinary sound, heard new.

import { mkdirSync, writeFileSync } from "node:fs";

// The wonder: at 2 a.m. the fridge hums the same note the old computer
// made when it was thinking — and the listener waits for the fridge to
// finish a thought. Grounded in a real kitchen at night, the surprise
// lands in the last clause: an appliance given a mind, mid-thought.
// The kitchen at night is the whole stage; the hum does the acting.
const LINE =
  "At two in the morning the fridge hums the same note my old computer made when it was thinking, and I wait for it to finish a thought.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE, "utf8");
