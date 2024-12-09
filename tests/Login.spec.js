// tests/Login.spec.js
import { test, expect } from '@playwright/test';

test('should login successfully', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://www.saucedemo.com/');

  // Fill in username and password
  await page.fill('#user-name', 'standard_user'); 
  await page.fill('#password', 'secret_sauce'); 

  // Click login button
  await page.click('#login-button');
});

