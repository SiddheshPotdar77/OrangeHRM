import {test,expect} from '@playwright/test';
import { PageManager } from '../src/pages/PageManager';
import { ButtonPage } from '../src/pages/ButtonPage';
import { config } from "../src/config/config";   // import config
import logger from '../src/logger/logger';

test.describe("Button Click",()=>
{
    let pageManager:PageManager;
    let buttonPage:ButtonPage;

    test.beforeEach(async ({page})=>
    {
        pageManager=new PageManager(page);
        buttonPage=new ButtonPage(pageManager);
        await buttonPage.navigate(config.baseUrl+ "/Click-Buttons/index.html")
    })

    test("Click on WebElement ClickMe button", async () =>
    { 
        await buttonPage.clickOnWebelememtClickButton(); 
        const alertMessage = await buttonPage.getPopupMessage(); 
        expect(alertMessage).toBe("Well done for successfully using the click() method!"); 
        await buttonPage.closePopup(); 
    });
})
