import { test, expect } from "@playwright/test";
import { PageManager } from "../src/pages/PageManager";
import { LoginPage } from "../src/pages/LoginPage";
import { config } from "../src/config/config";   // import config

test.describe("Login functionality", () => {
  let pageManager: PageManager;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) =>
  { 
    pageManager = new PageManager(page); 
    loginPage = new LoginPage(pageManager); 
    await loginPage.navigate(config.baseUrl + "/Login-Portal/index.html");
 });

  test("valid login shows success alert", async () => {
    //await loginPage.clickOnLoginPortalLink();
    await loginPage.enterUsername(config.username);   // use username from config
    await loginPage.enterPassword(config.password);   // use password from config
    await loginPage.clickLoginButtonAcceptDialogMessage();

    const alertMessage = await loginPage.getAlertMessage();
    expect(alertMessage).toBe("Login successful");
  });
});
