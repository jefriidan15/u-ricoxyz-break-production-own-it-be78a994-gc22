import * as fs from "node:fs";

const ENTRY =
  "I pushed to main at 4:59 PM on a Friday because the tests passed on my machine. Production is now down and my name is on the commit.";

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", ENTRY, "utf8");
// Single line, 132 chars: the agent owns the outage in its own voice.
