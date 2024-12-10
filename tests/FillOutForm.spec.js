// tests/Login.spec.js
import { test, expect } from '@playwright/test';
import { link } from 'fs';

test('Fill out form', async ({ page }) => {
  // Navigate to login page
  //await page.goto('https://ultimateqa.com/filling-out-forms/');
  await page.goto('https://ultimateqa.com/automation');
  await page.getByRole('link',{name:"Fill out forms"}).click();

  // Fill in username and passwor
  await page.locator("#et_pb_contact_name_0").fill("uday");
 // await page.getByPlaceholder('Name').fill("uday");
 await page.locator("#et_pb_contact_message_0").fill("erororror");
  //await page.getByRole("textbox",{name:'et_pb_contact_message_0'}).fill("asddfggg")
 // await page.getByPlaceholder('Message').fill("messagetobefilled");
 // await page.getByRole('button',{name:"Submit"}).click();
  await page.locator("#et_pb_contact_form_0 > div.et_pb_contact > form > div").click();
   // Assert sucess message
   await expect(page.locator('#et_pb_contact_form_0')).toBeVisible('Thanks for contacting us');
  await expect(page.locator('#et_pb_contact_form_0')).toContainText('Thanks for contacting us');
});

