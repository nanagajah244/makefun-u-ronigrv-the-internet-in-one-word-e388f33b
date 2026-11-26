// The Internet in One Word — entry: "doomscroll".
// One real word, no hyphen, no explanation needed: doom + scrolling,
// the thing everyone does online and nobody admits to. It is true of the
// whole internet rather than one app or site, it is not the obvious reach
// (memes, cats, endless), and it lands in a single beat.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "doomscroll";
const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// The gate allows 1-30 UTF-8 characters, not whitespace-only. Keep the
// program honest about its own output before writing anything.
function assertEntryWord(word: string): void {
  if (!/^\S{1,30}$/.test(word)) {
    throw new Error(`entry word must be one word of 1-30 characters, got: ${word}`);
  }
}

assertEntryWord(WORD);
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, `${WORD}\n`, "utf8");
