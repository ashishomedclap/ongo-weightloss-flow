import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = 'E:\\ongo-weightloss-flow';
const SCREENSHOTS_DIR = path.join(ROOT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

const frames = [
  { name: 'frame1_offer_modal.png', url: 'http://localhost:5173/?project=competitor&frame=1', w: 1440, h: 900 },
  { name: 'frame2_weight_loss_goal.png', url: 'http://localhost:5173/?project=competitor&frame=2', w: 1440, h: 900 },
  { name: 'frame3_why_important.png', url: 'http://localhost:5173/?project=competitor&frame=3', w: 1440, h: 900 },
  { name: 'frame4_medication_values.png', url: 'http://localhost:5173/?project=competitor&frame=4', w: 1440, h: 900 },
  { name: 'frame5_doctor_preference.png', url: 'http://localhost:5173/?project=competitor&frame=5', w: 1440, h: 900 },
  { name: 'frame6_treatment_in_mind.png', url: 'http://localhost:5173/?project=competitor&frame=6', w: 1440, h: 900 },
  { name: 'frame7_real_results.png', url: 'http://localhost:5173/?project=competitor&frame=7', w: 1440, h: 900 },
  { name: 'frame8_state.png', url: 'http://localhost:5173/?project=competitor&frame=8', w: 1440, h: 900 },
  { name: 'frame9_date_of_birth.png', url: 'http://localhost:5173/?project=competitor&frame=9', w: 1440, h: 900 },
  { name: 'frame10_name.png', url: 'http://localhost:5173/?project=competitor&frame=10', w: 1440, h: 900 }
];

console.log('Capturing Mochi benchmark frames 1 to 10...');

for (const frame of frames) {
  const outPath = path.join(SCREENSHOTS_DIR, frame.name);
  console.log(`Capturing ${frame.name}...`);
  try {
    execFileSync(CHROME_PATH, [
      '--headless=new',
      `--window-size=${frame.w},${frame.h}`,
      `--screenshot=${outPath}`,
      '--hide-scrollbars',
      frame.url
    ], { stdio: 'ignore' });
    console.log(`Saved: ${outPath}`);
  } catch (err) {
    console.error(`Failed to capture ${frame.name}:`, err.message);
  }
}

console.log('Done capturing all 10 frames!');
