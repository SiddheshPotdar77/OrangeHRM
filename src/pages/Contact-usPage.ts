import { BasePage } from "./BasePage";
import { PageManager } from "./PageManager";
import logger from "../logger/logger";
import { Locator } from "@playwright/test";

export class ContactUsPage extends BasePage
{
    constructor(protected pageManger:PageManager)
    {
        super(pageManger);
    }

    public async clickOnContactusLink():Promise<void>
    {
        await this.page.locator("#contact-us").click();
        logger.info("Click on contact us link")
    }

    public async enterFirstName(firstName:string):Promise<void>
    {
        await this.page.locator('//input[@name="first_name"]').fill(firstName)
        logger.info("Enter firstName");
    }
    public async enterlastName(lastName:string):Promise<void>
    {
        await this.page.locator('//input[@name="last_name"]').fill(lastName)
        logger.info("Enter lastName");
    }
    public async enterEmailAddress(emailAdd:string,):Promise<void>
    {
        await this.page.locator('//input[@name="email"]').fill(emailAdd)
        logger.info("Enter emailAdd");
    }
    public async enterComment(comment:string):Promise<void>
    {
        await this.page.locator('//textarea[@name="message"]').fill(comment)
        logger.info("Enter comment");
    }

    public async clickOnSubmitButton():Promise<void>
    {
        const submitButton = this.page.locator('//input[@type="submit"]');
        await submitButton.hover();
        await submitButton.click({ force: true });
        logger.info("Clicked on the Submit button");
    }

}