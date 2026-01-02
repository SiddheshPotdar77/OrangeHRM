import { BasePage } from "./BasePage";
import { PageManager } from "./PageManager";
import logger from "../logger/logger";
import { Locator } from "@playwright/test";

export class ButtonPage extends BasePage
{
    private alertMessage: string = "";
    constructor(protected pageManager:PageManager)
    {
        super(pageManager)
    }

    public async clickOnWebelememtClickButton():Promise <void>
    {
        const clickMe=await this.page.locator('//span[@id="button1"]')
        await clickMe.hover();
        await clickMe.click({ force: true });
        logger.info('Click on Click Me Button')
    }

    public async getPopupMessage(): Promise<string>
    {  
        const popup = this.page.locator('#myModalClick .modal-body p'); 
        await popup.waitFor({ state: 'visible' }); 
        const message = await popup.textContent(); 
        logger.info(`Popup Message: ${message}`); 
        return message?.trim() || ""; 
    }
    public async closePopup(): Promise<void>
    { 
        const closeBtn = this.page.locator('#myModalClick .modal-footer button'); 
        await closeBtn.click();
    }
}