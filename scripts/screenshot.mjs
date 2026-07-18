import { chromium } from "playwright";
import { mkdirSync } from "fs";

const BASE = process.env.SITE_URL || "https://houssem-darragi-portfolio.vercel.app";
const OUT = process.env.SCREENSHOT_DIR || "screenshots";
const routes = [
  { path: "/", name: "en" },
  { path: "/fr", name: "fr" },
];

async function smoothScrollToBottom(page) {
  const SCROLL_PX = 150;
  const STEP_DELAY = 250;

  for (let attempt = 0; attempt < 300; attempt++) {
    const { scrollY, innerHeight, docHeight } = await page.evaluate(() => ({
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      docHeight: document.body.scrollHeight,
    }));

    if (scrollY + innerHeight >= docHeight - 10) break;

    await page.evaluate((px) => window.scrollBy(0, px), SCROLL_PX);
    await page.waitForTimeout(STEP_DELAY);
  }

  // Final scroll to absolute bottom
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  // Wait for all framer-motion animations triggered by scroll to complete
  await page.waitForTimeout(3000);
}

async function run() {
  mkdirSync(OUT, { recursive: true });
  const browser = await chromium.launch();

  for (const { path, name } of routes) {
    const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
    const page = await context.newPage();
    const url = `${BASE}${path}`;

    console.log(`Opening ${url}`);
    await page.goto(url, { waitUntil: "networkidle" });
    await page.waitForTimeout(1000);

    console.log(`Scrolling down slowly to trigger all animations...`);
    await smoothScrollToBottom(page);

    const file = `${OUT}/screenshot-${name}.png`;
    await page.screenshot({ path: file, fullPage: true, type: "png" });
    console.log(`Saved ${file}`);

    await page.close();
    await context.close();
  }

  await browser.close();
  console.log("Done.");
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
