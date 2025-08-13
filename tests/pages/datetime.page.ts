import { expect, Page } from '@playwright/test';
import DatetimeModel from './datetime.model';

/**
 * DatetimePage
 * ------------
 * Page-level date validation and assertion methods using DatetimeModel utilities.
 */
export default class DatetimePage {
  constructor(private page: Page) {}

  /**
   * Validate that a date on the UI matches the expected date after format conversion.
   * @param locatorSelector CSS/XPath selector for the date element
   * @param fromFormat The format the UI date is displayed in
   * @param toFormat The format you expect it to be converted to
   * @param expectedDate The expected date string in the target format
   */
  async validateDateFormat(locatorSelector: string, fromFormat: string, toFormat: string, expectedDate: string) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const convertedDate = DatetimeModel.convertFormat(uiDateText, fromFormat, toFormat);
    expect(convertedDate).toBe(expectedDate);
  }

  /**
   * Validate that a date on the UI is within the allowed range from today.
   * @param locatorSelector CSS/XPath selector for the date element
   * @param format The format the UI date is displayed in
   * @param daysBefore Allowed days before today
   * @param daysAfter Allowed days after today
   */
  async validateDateWithinRange(locatorSelector: string, format: string, daysBefore: number, daysAfter: number) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const isWithinRange = DatetimeModel.isDateWithinRangeFromToday(uiDateText, format, daysBefore, daysAfter);
    expect(isWithinRange).toBeTruthy();
  }

  /**
   * Validate "Created" or "Last Updated" date in `MMM DD` format (e.g., "May 14").
   * Year is assumed to be the current year.
   * @param locatorSelector CSS/XPath selector for the date element
   */
  async validateMonthDayFormat(locatorSelector: string) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const currentYear = DatetimeModel.getCurrentDate('YYYY');
    const fullDate = `${uiDateText} ${currentYear}`;
    const isValid = DatetimeModel.isValidDate(fullDate, 'MMM DD YYYY');
    expect(isValid).toBeTruthy();
  }

  /**
   * Validate that a date matches today's date in the given format.
   * @param locatorSelector CSS/XPath selector for the date element
   * @param format Expected date format
   */
  async validateDateIsToday(locatorSelector: string, format: string) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const today = DatetimeModel.getCurrentDate(format);
    expect(uiDateText).toBe(today);
  }

  /**
   * Validate that a date is before today's date.
   * @param locatorSelector CSS/XPath selector for the date element
   * @param format Date format in the UI
   */
  async validateDateIsBeforeToday(locatorSelector: string, format: string) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const isBefore = DatetimeModel.isDateWithinRangeFromToday(uiDateText, format, 3650, -1);
    expect(isBefore).toBeTruthy();
  }

  /**
   * Validate that a date is after today's date.
   * @param locatorSelector CSS/XPath selector for the date element
   * @param format Date format in the UI
   */
  async validateDateIsAfterToday(locatorSelector: string, format: string) {
    const uiDateText = (await this.page.locator(locatorSelector).textContent())?.trim() || '';
    const isAfter = DatetimeModel.isDateWithinRangeFromToday(uiDateText, format, -1, 3650);
    expect(isAfter).toBeTruthy();
  }

  /**
   * Compare two dates on the UI and ensure they are equal after format conversion.
   * @param locator1 First date element selector
   * @param locator2 Second date element selector
   * @param format Date format in UI
   */
  async validateTwoDatesMatch(locator1: string, locator2: string, format: string) {
    const date1 = (await this.page.locator(locator1).textContent())?.trim() || '';
    const date2 = (await this.page.locator(locator2).textContent())?.trim() || '';
    expect(DatetimeModel.isSameDate(date1, date2, format)).toBeTruthy();
  }
}
