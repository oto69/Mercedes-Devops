// Build step: copies the static site into dist/ (the folder that gets deployed).
const fs = require("node:fs");
fs.rmSync("dist", { recursive: true, force: true });
fs.mkdirSync("dist", { recursive: true });
for (const f of ["index.html", "style.css"]) fs.copyFileSync(f, `dist/${f}`);
fs.cpSync("src", "dist/src", { recursive: true });
console.log("Build complete: dist/");
