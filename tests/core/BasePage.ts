import { Page, expect } from "@playwright/test";

export class BasePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string) {
    await this.page.goto(url);
  }

  async expectText(selector: string, text: string) {
    await expect(this.page.locator(selector)).toContainText(text);
  }
}

