// tests/Frames.spec.js
import { test, expect } from '@playwright/test';

test('frames', async ({ page }) => {
  // Navigate to a page with frames
  await page.goto('https://testpages.eviltester.com/styled/frames/frames-test.html');

  // Get the frame element
  const frame = page.frameLocator('/html/frameset/frameset/frame[1]');


  // Get the text content of an element inside the frame
 const fist= frame.locator("#left0").textContent();
  //const textContent = await frame.textContent('#left0');
  expect(fist).toBe('Left List Item 0');
});