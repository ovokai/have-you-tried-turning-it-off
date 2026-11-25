import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Have you tried turning it off and on again? Not the laptop — you. You've been buffering since Tuesday, and at this point it's less a glitch than a lifestyle.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", entry, "utf8");
  } catch {
    writeFileSync("entry.txt", entry, "utf8");
  }
}

main();
