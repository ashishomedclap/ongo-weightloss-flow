import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import os from 'os';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = 'E:\\ongo-weightloss-flow';
const SCREENSHOTS_DIR = path.join(ROOT_DIR, 'screenshots');
const TEMP_PROFILE = path.join(os.tmpdir(), 'chrome-mochi-profile');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const frames = [
  { name: 'frame26_account_setup.png', url: 'http://localhost:5173/?project=competitor&frame=26', w: 1440, h: 900 },
  { name: 'frame27_what_happens_next.png', url: 'http://localhost:5173/?project=competitor&frame=27', w: 1440, h: 950 },
  { name: 'frame28_plan_selection.png', url: 'http://localhost:5173/?project=competitor&frame=28', w: 1440, h: 1200 },
  { name: 'frame29_checkout.png', url: 'http://localhost:5173/?project=competitor&frame=29', w: 1440, h: 1120 }
];

console.log('Capturing Mochi benchmark frames 26 to 29...');

for (const frame of frames) {
  const outPath = path.join(SCREENSHOTS_DIR, frame.name);
  console.log(`Capturing ${frame.name}...`);
  try {
    execFileSync(CHROME_PATH, [
      '--headless=new',
      `--user-data-dir=${TEMP_PROFILE}`,
      `--window-size=${frame.w},${frame.h}`,
      `--screenshot=${outPath}`,
      '--hide-scrollbars',
      frame.url
    ], { stdio: 'inherit' });
    console.log(`Saved: ${outPath}`);
  } catch (err) {
    console.error(`Failed to capture ${frame.name}:`, err.message);
  }
}

console.log('Done capturing frames 21 to 25!');
