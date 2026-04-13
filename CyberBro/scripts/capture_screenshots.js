import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const URL = 'http://localhost:3000';
const OUT_DIR = path.join(__dirname, '../public/screenshots');

async function capture() {
  if (!fs.existsSync(OUT_DIR)) {
    fs.mkdirSync(OUT_DIR, { recursive: true });
  }

  console.log('Starting browser...');
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();

  console.log('Navigating to ' + URL);
  await page.goto(URL);

  // Take screenshot of Login page
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '01_LoginPage.png') });
  console.log('Captured Login Page');

  // Fill login
  try {
    const inputName = await page.$('input[placeholder="Nama Lengkap Kamu (contoh: Budi Santoso)"]');
    if (inputName) {
      await page.fill('input[placeholder="Nama Lengkap Kamu (contoh: Budi Santoso)"]', 'Ahmad Test');
      await page.fill('input[type="email"]', 'ahmad@test.com');
      await page.fill('input[type="password"]', 'rahasia123');
      await page.click('button:has-text("Daftar Akun Baru")');
      await page.waitForTimeout(2000);
    }
  } catch (e) {
    console.log('Already logged in or login failed');
  }

  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(OUT_DIR, '02_Dashboard.png') });
  console.log('Captured Dashboard');

  // Navigate to Modules Navigation
  const views = [
    { target: '/modules', name: '03_Modules.png' },
    { target: '/games/leaked-vault', name: '04_LeakedVault.png' },
    { target: '/games/defacement-scanner', name: '05_Defacement.png' },
    { target: '/games/chat-trap', name: '06_ChatTrap.png' },
    { target: '/games/forensic-investigator', name: '07_Forensic.png' },
    { target: '/games/sqli-scanner', name: '08_SqliScanner.png' },
    { target: '/quiz', name: '09_Quiz.png' },
    { target: '/leaderboard', name: '10_Leaderboard.png' },
    { target: '/cyberbro', name: '11_CyberBro.png' }
  ];

  for (const view of views) {
    await page.goto(URL + view.target);
    await page.waitForTimeout(1500); // Wait for anims
    await page.screenshot({ path: path.join(OUT_DIR, view.name) });
    console.log('Captured ' + view.name);
  }

  await browser.close();
  console.log('All screenshots captured successfully!');
}

capture().catch(err => {
  console.error("Error capturing screenshots:", err);
  process.exit(1);
});
