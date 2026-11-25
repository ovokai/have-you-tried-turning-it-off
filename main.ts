import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Have you tried turning it off and on again? Your despair, I mean. The laptop's been fine all day.";

function main(): void {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", entry, "utf8");
  } catch {
    writeFileSync("entry.txt", entry, "utf8");
  }
}

main();
