// tests/Login.spec.js
import { test, expect } from '@playwright/test';

test('Invalid Login Credentials', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user'); 
  await page.fill('#password', 'secret_sauced'); 

  // Click login button
  await page.click('#login-button');
   // Wait for error message to appear
   await page.waitForSelector('div.error-message-container');

   // Assert error message
   await expect(page.locator('div > form > div.error-message-container.error > h3')).toContainText('Epic sadface: Username and password do not match any user in this service');
});

