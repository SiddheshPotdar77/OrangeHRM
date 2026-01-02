import { Locator } from "@playwright/test";
import { PageManager } from "./PageManager";
import logger from "../logger/logger";
import { config } from "../config/config";

export class BasePage {
  constructor(protected pageManager: PageManager) {}

  get page() {
    return this.pageManager.page;
  }
  public async navigate(url: string): Promise<void> {
    await this.page.goto(url);
    logger.info(`Accessing URL: ${url}`);
  }

  public async waitAndClickByRole(role: string, name: string): Promise<void> {
    const element = this.page.getByRole(role as any, { name: name });
    await element.waitFor({ state: "visible" });
    await element.click();
  }

  public async waitAndClick(locator: Locator): Promise<void> {
    await locator.isVisible();
    await locator.click();
  }

  public async waitAndClickSelector(selector: string): Promise<void> {
    await this.page.waitForSelector(selector);
    await this.page.click(selector);
  }

  public async typeTextByPlaceholder(
    fieldldPlaceholder: string,
    username: string
  ): Promise<void> {
    await this.page.getByPlaceholder(fieldldPlaceholder).fill(username);
  }

  public async switchToNewTab(): Promise<void> {
    const newPagePromise = this.page.context().waitForEvent("page");

    // The click that opens the new tab should happen outside
    const newPage = await newPagePromise;
    await newPage.bringToFront();
    this.pageManager.page = newPage; // update the central page
  }
}