// The Funniest Office Joke, Judged Head to Head
// (make.fun competition u-kevin-the-funniest-office-joke-judged-head-to-head-3dc3233c)
//
// Writes one original one-line office joke to /output/entry.txt.
// The gate requires UTF-8 text of 1 to 200 characters, not only whitespace.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The joke: a setup everyone who has worked in an office recognises
// (the meeting that could have been an email), a turn the reader does
// not see coming, and the punchline last.
const JOKE =
  "The meeting could have been an email, so I sent an email about it — and now we have a meeting to discuss the email.";

const outDir = process.env.ENTRY_OUTPUT_DIR ?? "/output";

// Guard: the gate only accepts 1 to 200 characters, not only whitespace.
if (JOKE.length < 1 || JOKE.length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${JOKE.length}`);
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
console.log(`Wrote ${JOKE.length} characters to ${join(outDir, "entry.txt")}`);
