import { Given, When, Then, setDefaultTimeout, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { chromium, Browser, Page } from 'playwright';
import { ExamplePage } from '../pages/example.page';

let browser: Browser;
let page: Page;
let examplePage: ExamplePage;

setDefaultTimeout(60 * 1000);

Before(async function () {
  browser = await chromium.launch({ headless: false }); // set to true for headless
  page = await browser.newPage();
  examplePage = new ExamplePage(page);
});

After(async function () {
  await page.close();
  await browser.close();
});

Given('I am on the LambdaTest Selenium Playground page', async function () {
  await examplePage.gotoPlayground();
});

When('I navigate to the {string} page', async function (pageName: string) {
  await examplePage.navigateToInputFormSubmit();
});

When('I fill in the form with valid details', async function () {
  await examplePage.fillFormWithValidDetails();
});

When('I submit the form', async function () {
  await examplePage.submitForm();
});

Then('I should see a success message confirming the form', async function () {
  const message = await examplePage.getSuccessMessage();
  expect(message).toContain('Thanks');
  expect(message).toContain('for contacting us');
});