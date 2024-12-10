// tests/Login.spec.js
import { test, expect } from '@playwright/test';

test('FileUpload', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://the-internet.herokuapp.com/upload');

 // Get the file input element
const fileInput = page.locator('#file-upload');
await fileInput.click();

// Upload a file
await fileInput.setInputFiles('C:/Users/LENOVO/Desktop/tell me about yourself.txt');

// Alternatively, you can upload multiple files
// await fileInput.setInputFiles(['path/to/file1.pdf', 'path/to/file2.pdf']);
});

