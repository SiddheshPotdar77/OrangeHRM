import { BasePage } from "./BasePage";
import { PageManager } from "./PageManager";
import logger from "../logger/logger";
import { Locator } from "@playwright/test";

let alertMessage: string;
export class LoginPage extends BasePage {
  constructor(protected pageManager: PageManager) {
    super(pageManager);
  }

  public async clickOnLoginPortalLink(): Promise<void> 
  { 
    await this.page.locator('#login-portal').click(); 
    logger.info("Clicked on the login portal link");
  }

  public async enterUsername(username: string): Promise<void> 
  {
    await this.page.locator('#text').fill(username);  
    logger.info(`Entered Username as: ${username}`); }

  public async enterPassword(password: string): Promise<void>
  { 
    await this.page.locator('#password').fill(password); 
    logger.info(`Entered Password as: ${password}`);
 }

  public async clickOnLoginButton(): Promise<void> {
    const loginButton = this.page.locator("#login-button");
    await loginButton.hover();
    await loginButton.click({ force: true });
    logger.info("Clicked on the login button");
  }

  public async clickLoginButtonAcceptDialogMessage(): Promise<void> {
    this.page.on("dialog", async (dialog) => {
      alertMessage = dialog.message();
      logger.info(`Alert message: ${alertMessage}`);
      await dialog.accept();
    });
    await this.clickOnLoginButton();
  }

  public async getAlertMessage(): Promise<string> {
    return alertMessage;
  }
}