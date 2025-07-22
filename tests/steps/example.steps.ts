import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { init, getContext } from '../../support/context';
import type { CustomWorld } from '../../support/custom-world';
import { ExamplePage } from '@pages/example.page';
let pageObject: ExamplePage;

Given('{string}:user navigates to url', async function (this: CustomWorld, _step: string) {
  init(this);
  pageObject = new ExamplePage(this.page);
  await pageObject.navigate_to();
});

When('{string}:user clicks on {string}', async function (this: CustomWorld, _step: string, linkText: string) {
  init(this);
  await pageObject.click_menu(linkText);
});


When('{string}:user fills title textbox with {string}', async function (this: CustomWorld, _step: string, value: string) {
  init(this);
  await pageObject.fill_textboxname(value);
});

When('{string}:user fills description textbox with {string}', async function (this: CustomWorld, _step: string, value: string) {
  init(this);
  await pageObject.fill_textboxdescription(value);
});

Then('{string}:the page should contain {string}', async function (this: CustomWorld, _step: string, expectedText: string) {
  init(this);
  await pageObject.verify_text_visible(expectedText);
});
When('{string}:user clicks on {string} button', async function (this: CustomWorld, _step: string, buttonText: string) {
  init(this);
  await pageObject.click_button(buttonText);
});

Then('{string}:the page should not contain {string}', async function (this: CustomWorld, _step: string, unexpectedText: string) {
  init(this);
  const context = getContext(this);
  const page = context.pages()[0];
  const content = await page.content();
  expect(content).not.toContain(unexpectedText);
});