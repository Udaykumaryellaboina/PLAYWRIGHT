import { Page, Locator } from '@playwright/test';

export class ExampleModel {
  public url: string;
  private inputFormSubmitLink: Locator;
  public nameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private companyInput: Locator;
  private websiteInput: Locator;
  private countrySelect: Locator;
  private cityInput: Locator;
  private address1Input: Locator;
  private address2Input: Locator;
  private stateInput: Locator;
  private zipInput: Locator;
  private submitButton: Locator;
  public messageInput: Locator;

  constructor(private page: Page) {
    this.url = 'https://www.lambdatest.com/selenium-playground/'; // Replace with the actual URL
    this.inputFormSubmitLink = page.locator('a:has-text("Input Form Submit")');
    this.nameInput = page.locator('[name="title"]');
    this.messageInput = page.locator('//*[@id="description"]');
    this.emailInput = page.locator('[name="email"]');
    this.passwordInput = page.locator('[name="password"]');
    this.companyInput = page.locator('[name="company"]');
    this.websiteInput = page.locator('[name="website"]');
    this.countrySelect = page.locator('[name="country"]');
    this.cityInput = page.locator('[name="city"]');
    this.address1Input = page.locator('[name="address_line1"]');
    this.address2Input = page.locator('[name="address_line2"]');
    this.stateInput = page.locator('[name="state"]');
    this.zipInput = page.locator('[name="zip"]');
    this.submitButton = page.locator('button[type="submit"]');
  }


  getLinkByText(linkText: string): Locator {
    return this.page.getByRole('link', { name: linkText });
  }

  getButtonByText(buttonText: string): Locator {
    return this.page.getByRole('button', { name: buttonText });
  }

  getInputByLabel(label: string): Locator {
    //return this.page.getByLabel(label);
    return this.page.getByRole('textbox', { name: label });
  }

  getText(text: string): Locator {
    return this.page.getByText(text);
  }
}
