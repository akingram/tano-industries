import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const nextBin = join(
  root,
  "node_modules",
  ".bin",
  process.platform === "win32" ? "next.cmd" : "next",
);

if (process.env.npm_lifecycle_event === "predev") {
  rmSync(join(root, ".next"), { force: true, recursive: true });
}

if (!existsSync(nextBin)) {
  const npm = process.platform === "win32" ? "npm.cmd" : "npm";
  const result = spawnSync(
    npm,
    ["install", "--no-package-lock", "--ignore-scripts", "--no-audit", "--no-fund"],
    {
      cwd: root,
      shell: process.platform === "win32",
      stdio: "inherit",
    },
  );

  if (result.error) {
    console.error(result.error.message);
  }

  process.exit(result.status ?? 1);
}
