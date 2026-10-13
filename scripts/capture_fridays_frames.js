import path from 'path';
import fs from 'fs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
// Load global playwright
const { chromium } = require('C:/Users/Ashish O/AppData/Roaming/npm/node_modules/playwright');

const SCREENSHOTS_DIR = path.resolve('screenshots');
if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

async function capture() {
  console.log('Launching Chromium via Playwright...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2 // High retina resolution
  });
  const page = await context.newPage();

  const frames = [
    { frame: '1', name: 'fridays_frame1_support.png', label: 'Frame 1: Support / Demographics' },
    { frame: '2', name: 'fridays_frame2_interests.png', label: 'Frame 2: Interests / Treatments' },
    { frame: '3', name: 'fridays_frame3_measurements.png', label: 'Frame 3: Measurements / BMI' },
    { frame: '4', name: 'fridays_frame4_screening.png', label: 'Frame 4: Health Screening' },
    { frame: '5', name: 'fridays_frame5_goals.png', label: 'Frame 5: Other Goals' }
  ];

  for (const item of frames) {
    const url = `http://localhost:5173/?project=join-fridays&frame=${item.frame}`;
    console.log(`Navigating to ${item.label} (${url})...`);
    await page.goto(url, { waitUntil: 'networkidle' });
    // Wait for render
    await page.waitForTimeout(600);

    const outPath = path.join(SCREENSHOTS_DIR, item.name);
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(`Captured: ${outPath}`);
  }

  await browser.close();
  console.log('All 5 Join Fridays frames captured successfully via Playwright!');
}

capture().catch(err => {
  console.error('Playwright capture error:', err);
  process.exit(1);
});
