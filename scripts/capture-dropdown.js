#!/usr/bin/env node
const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');
const playwrightPackage = require('playwright/package.json');
console.log(`Playwright version: ${playwrightPackage.version}`);

(async () => {
  const screenshotDir = path.resolve(__dirname, '..', 'screenshots');
  await fs.promises.mkdir(screenshotDir, { recursive: true });

  const screenshotPath = path.resolve(screenshotDir, 'single-dropdown.png');
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:8000/single-drop-down.html');
  await page.waitForSelector('select#mainDropdown');
  await page.click('select#mainDropdown');
  await page.waitForTimeout(500);
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`Playwright version: ${playwrightPackage.version}`);
  console.log(`Screenshot saved to: ${screenshotPath}`);
})().catch((error) => {
  console.error('Failed to capture dropdown screenshot:', error);
  process.exitCode = 1;
});
