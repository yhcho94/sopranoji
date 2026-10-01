// promo.html을 프레임 단위로 캡처한다.
// 사용법: node render-frames.mjs <출력폴더> [fps] [특정초...]
import { createRequire } from "node:module";
import { mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
let chromium;
try { ({ chromium } = require("playwright")); }
catch { ({ chromium } = require(path.join(process.execPath, "../../lib/node_modules/playwright"))); }

const here = path.dirname(fileURLToPath(import.meta.url));
const out = process.argv[2] ?? path.join(here, "frames");
const fps = Number(process.argv[3] ?? 30);
const only = process.argv.slice(4).map(Number);
mkdirSync(out, { recursive: true });

const browser = await chromium.launch({ args: ["--allow-file-access-from-files"] });
const page = await browser.newPage({ viewport: { width: 1080, height: 1920 } });
await page.goto(pathToFileURL(path.join(here, "promo.html")).href + "?t=0", { waitUntil: "networkidle" });
// 웹폰트는 글자 범위별로 나뉘어 있어, 영상에 쓰이는 모든 글자를 미리 불러 둔다.
await page.evaluate(async () => {
  const text = document.getElementById("stage").textContent;
  const faces = ["300", "400", "500", "600", "700"].flatMap((w) => [`${w} 40px "Noto Sans KR"`, `${w} 40px "Noto Serif KR"`]);
  await Promise.all(faces.map((f) => document.fonts.load(f, text)));
  await document.fonts.ready;
});
const duration = await page.evaluate(() => window.DURATION);

const times = only.length ? only : Array.from({ length: Math.round(duration * fps) }, (_, i) => i / fps);
for (let i = 0; i < times.length; i++) {
  await page.evaluate((t) => window.render(t), times[i]);
  const name = only.length ? `t${times[i]}.jpg` : `f${String(i).padStart(5, "0")}.jpg`;
  await page.screenshot({ path: path.join(out, name), type: "jpeg", quality: 95 });
  if (i % 60 === 0) console.log(`${i}/${times.length}`);
}
await browser.close();
