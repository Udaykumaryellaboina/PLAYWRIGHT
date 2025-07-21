import { Page } from '@playwright/test';

export class ExamplePage {
  constructor(private page: Page) {}

  async gotoPlayground() {
    await this.page.goto('https://www.lambdatest.com/selenium-playground/');
  }

  async navigateToInputFormSubmit() {
    await this.page.click('a:has-text("Input Form Submit")');
    await this.page.waitForURL('**/input-form-demo');
  }

  async fillFormWithValidDetails() {
    await this.page.fill('input[name="name"]', 'John Doe');
    await this.page.fill('input[name="email"]', 'john.doe@example.com');
    await this.page.fill('input[name="password"]', 'Password123!');
    await this.page.fill('input[name="company"]', 'Example Inc');
    await this.page.fill('input[name="website"]', 'https://example.com');
    await this.page.selectOption('select[name="country"]', { label: 'United States' });
    await this.page.fill('input[name="city"]', 'New York');
    await this.page.fill('input[name="address_line1"]', '123 Main St');
    await this.page.fill('input[name="address_line2"]', 'Apt 4B');
    await this.page.fill('input[name="state"]', 'NY');
    await this.page.fill('input[name="zip"]', '10001');
  }

  async submitForm() {
    await this.page.click('button[type="submit"]');
  }

  async getSuccessMessage() {
    return this.page.textContent('.success-msg, .alert-success, #success_message');
  }
}