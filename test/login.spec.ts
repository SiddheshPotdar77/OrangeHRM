import { test, expect } from "@playwright/test";
import { PageManager } from "../src/pages/PageManager";
import { LoginPage } from "../src/pages/LoginPage";
import { config } from "../src/config/config";   // import config
import { ExcelUtils } from "../src/utils/ExcelUtils";

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
    const data=await ExcelUtils.readData('C:\\Users\\DELL\\OneDrive\\Desktop\\DataDriven.xlsx','Sheet2');
    for (const row of data.slice(1))
    {
      const[,Username,Password]=row;
      await loginPage.enterUsername(String(Username));   
      await loginPage.enterPassword(String(Password));   
      await loginPage.clickLoginButtonAcceptDialogMessage();
      const alertMessage = await loginPage.getAlertMessage();
      expect(alertMessage).toBe("Login successful");
    }
  });
});
