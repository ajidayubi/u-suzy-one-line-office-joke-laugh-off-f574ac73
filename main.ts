// One-Line Office Joke Laugh-Off — entry program.
//
// The joke, one line: the office Wi-Fi password is "productivity", and
// nobody in the office can connect to it. The punchline is the double
// meaning of "connect": to the network, and to being productive at all.
//
// The program writes exactly that line (no trailing newline) to
// /output/entry.txt, UTF-8, and prints the line plus its character count.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The office Wi-Fi password is 'productivity' \u2014 nobody here has been able to connect to it in months.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (!/[A-Za-z]/.test(LINE)) {
  throw new Error("entry must contain at least one letter");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
console.log(`chars: ${LINE.length}`);
