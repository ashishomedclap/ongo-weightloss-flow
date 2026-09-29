import { execFileSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ROOT_DIR = 'E:\\antigravity\\ongo-weightloss-flow';
const SCREENSHOTS_DIR = path.join(ROOT_DIR, 'screenshots');

if (!fs.existsSync(SCREENSHOTS_DIR)) {
  fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });
}

// Targets to capture
const tasks = [
  // Root files update
  { out: path.join(ROOT_DIR, 'screen2_clean.png'), url: 'http://localhost:5173/?screen=2', w: 1920, h: 1080 },
  { out: path.join(ROOT_DIR, 'screen2_updated.png'), url: 'http://localhost:5173/?screen=2&autofill=1', w: 1920, h: 1080 },
  { out: path.join(ROOT_DIR, 'screen3_bmi.png'), url: 'http://localhost:5173/?screen=3&autofill=1', w: 1920, h: 1080 },
  { out: path.join(ROOT_DIR, 'screen4_checkboxes.png'), url: 'http://localhost:5173/?screen=4', w: 1920, h: 1200 },
  { out: path.join(ROOT_DIR, 'screen7_physician.png'), url: 'http://localhost:5173/?screen=7', w: 1920, h: 1080 },
  { out: path.join(ROOT_DIR, 'screen8_options.png'), url: 'http://localhost:5173/?screen=8&autofill=1', w: 1920, h: 1100 },
  { out: path.join(ROOT_DIR, 'screen9_plan.png'), url: 'http://localhost:5173/?screen=9&autofill=1', w: 1920, h: 1100 },
  { out: path.join(ROOT_DIR, 'screen10_payment.png'), url: 'http://localhost:5173/?screen=10&autofill=1', w: 1920, h: 1350 },

  // Comprehensive gallery in screenshots/
  { out: path.join(SCREENSHOTS_DIR, '01_screen1_account.png'), url: 'http://localhost:5173/?screen=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '02_screen2_about_you.png'), url: 'http://localhost:5173/?screen=2&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '03_screen3_starting_point.png'), url: 'http://localhost:5173/?screen=3&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '04_screen4_health_questions.png'), url: 'http://localhost:5173/?screen=4', w: 1920, h: 1200 },
  { out: path.join(SCREENSHOTS_DIR, '05_screen5_glp1_history.png'), url: 'http://localhost:5173/?screen=5&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '05_branch1_medications.png'), url: 'http://localhost:5173/?screen=5.1&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '05_branch2_dosage.png'), url: 'http://localhost:5173/?screen=5.2&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '05_branch3_experience.png'), url: 'http://localhost:5173/?screen=5.3&autofill=1', w: 1920, h: 1350 },
  { out: path.join(SCREENSHOTS_DIR, '05_branch4_prescription.png'), url: 'http://localhost:5173/?screen=5.4&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '06_screen6_initial_result.png'), url: 'http://localhost:5173/?screen=6', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '07_screen7_meet_physician.png'), url: 'http://localhost:5173/?screen=7', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '08_screen8_treatment_options.png'), url: 'http://localhost:5173/?screen=8&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '09_screen9_treatment_plan.png'), url: 'http://localhost:5173/?screen=9&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '10_screen10_payment.png'), url: 'http://localhost:5173/?screen=10&autofill=1', w: 1920, h: 1350 },
  { out: path.join(SCREENSHOTS_DIR, '11_screen11_payment_confirmed.png'), url: 'http://localhost:5173/?screen=11&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '12_screen12_health_conditions.png'), url: 'http://localhost:5173/?screen=12&autofill=1', w: 1920, h: 1200 },
  { out: path.join(SCREENSHOTS_DIR, '13_screen13_medications.png'), url: 'http://localhost:5173/?screen=13&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '14_screen14_allergies.png'), url: 'http://localhost:5173/?screen=14&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '15_screen15_weight_journey.png'), url: 'http://localhost:5173/?screen=15&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '16_screen16_weight_loss_attempts.png'), url: 'http://localhost:5173/?screen=16&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '17_screen17_weight_loss_surgery.png'), url: 'http://localhost:5173/?screen=17&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '18_screen18_motivation.png'), url: 'http://localhost:5173/?screen=18&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '19_screen19_daily_routine.png'), url: 'http://localhost:5173/?screen=19&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '20_screen20_lifestyle.png'), url: 'http://localhost:5173/?screen=20&autofill=1', w: 1920, h: 1100 },
  { out: path.join(SCREENSHOTS_DIR, '21_screen21_ethnicity.png'), url: 'http://localhost:5173/?screen=21&autofill=1', w: 1920, h: 1150 },
  { out: path.join(SCREENSHOTS_DIR, '22_screen22_photo_id.png'), url: 'http://localhost:5173/?screen=22&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '23_screen23_shipping.png'), url: 'http://localhost:5173/?screen=23&autofill=1', w: 1920, h: 1080 },
  { out: path.join(SCREENSHOTS_DIR, '24_screen24_appointment.png'), url: 'http://localhost:5173/?screen=24&autofill=1', w: 1920, h: 1300 },
  { out: path.join(SCREENSHOTS_DIR, '25_screen25_intake_confirmed.png'), url: 'http://localhost:5173/?screen=25&autofill=1', w: 1920, h: 1100 }
];

console.log(`Starting capture of ${tasks.length} screens...`);

for (let i = 0; i < tasks.length; i++) {
  const { out, url, w, h } = tasks[i];
  const filename = path.basename(out);
  console.log(`[${i + 1}/${tasks.length}] Capturing ${filename}...`);
  try {
    execFileSync(CHROME_PATH, [
      '--headless=new',
      `--window-size=${w},${h}`,
      `--screenshot=${out}`,
      url
    ], { stdio: 'ignore' });
  } catch (err) {
    console.error(`Failed to capture ${filename}:`, err.message);
  }
}

console.log('Finished capturing all screens!');
