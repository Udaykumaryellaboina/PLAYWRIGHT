// tests/Login.spec.js
import { test, expect } from '@playwright/test';

test('CheckBoxes', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  // Get the checkbox element
const checkbox = page.locator("//*[@id='checkboxes']/input[1]");

// Check if the checkbox is checked
const isChecked = await checkbox.isChecked();

// If the checkbox is not checked, check it
if (!isChecked) {
  await checkbox.check();
}

// Assert that the checkbox is checked
await expect(checkbox).toBeChecked();
});

