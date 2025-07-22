// example.page.ts
import { expect, Page } from '@playwright/test';
import { ExampleModel } from './example.model';

export class ExamplePage {
  private model: ExampleModel;

  constructor(private page: Page) {
    this.model = new ExampleModel(page);
  }

  async navigate_to(): Promise<void> {
    await this.page.goto(this.model.url);
  }

  async click_menu(menuText: string): Promise<void> {
    await this.model.getLinkByText(menuText).click();
  }

  async click_button(buttonText: string): Promise<void> {
    await this.model.getButtonByText(buttonText).click();
  }

  async fill_textbox(label: string, value: string): Promise<void> {
    await this.model.getInputByLabel(label).fill(value);
  }

  async fill_textboxname(value: string): Promise<void> {
    await this.model.nameInput.fill(value);
  }

  async fill_textboxdescription(value: string): Promise<void> {
    await this.model.messageInput.nth(0).fill(value);
  }

  async verify_title(expected: string): Promise<void> {
    await expect(this.page).toHaveTitle(new RegExp(expected, 'i'));
  }

  async verify_text_visible(text: string): Promise<void> {
    await expect(this.model.getText(text)).toBeVisible();
}
}