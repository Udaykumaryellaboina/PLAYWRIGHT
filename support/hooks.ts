import { BeforeAll, Before, AfterAll, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { Browser, chromium } from '@playwright/test';
import { CustomWorld } from './custom-world';
import fs from 'fs-extra';
import path from 'path';

setDefaultTimeout(60 * 1000); // 60 seconds

let browser: Browser;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: true });
});

Before(async function (this: CustomWorld) {
  this.context = await browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (this: CustomWorld, { pickle, result }) {
  if (result?.status === Status.FAILED) {
    const screenshotDir = path.join('reports', 'screenshots');
    await fs.ensureDir(screenshotDir);

    const sanitizedTitle = pickle.name.replace(/[^a-zA-Z0-9]/g, '_');
    const screenshotPath = path.join(screenshotDir, `${sanitizedTitle}.png`);

    await this.page.screenshot({ path: screenshotPath, type: 'png' });

    const imageBuffer = await fs.readFile(screenshotPath);
    await this.attach(imageBuffer, 'image/png');
  }

  await this.page.close();
  await this.context.close();
});

AfterAll(async () => {
  await browser.close();
});
