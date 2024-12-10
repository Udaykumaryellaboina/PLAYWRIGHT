// tests/Login.spec.js
import { test, expect } from '@playwright/test';

test('Dropdown', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/dropdown');

 // Get the dropdown element
 const dropdown = page.locator("#dropdown");
//const dropdown = page.getByRole('combobox', { name: 'Dropdown name' });

// Get all options in the dropdown
const options = await dropdown.locator('option').allTextContents();

// Print all options
console.log(options);

// Select the required option
await dropdown.click();
await dropdown.selectOption({ value: '2' });

// Alternatively, you can select by value
// await dropdown.selectOption({ value: 'required-option-value' });
});

