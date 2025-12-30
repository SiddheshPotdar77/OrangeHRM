import { BasePage } from "./BasePage";
import { PageManager } from "./PageManager";
import logger from "../logger/logger";

export class HomePage extends BasePage {
  constructor(protected pageManager: PageManager) {
    super(pageManager);
  }
  // Methods and properties for HomePage can be added here

  public async clickOnContactUsButton(): Promise<void> {
    await this.waitAndClickByRole("link", "CONTACT US Contact Us Form");
    logger.info("Clicked on the contact us button");
  }

  public async clickOnLoginPortalButton(): Promise<void> {
    await this.waitAndClickByRole("link", "LOGIN PORTAL Login Portal");
    logger.info("Clicked on the login portal button");
  }
}