import{test,expect} from "@playwright/test"
import { PageManager } from "../src/pages/PageManager"
import { ContactUsPage } from "../src/pages/Contact-usPage"
import { config } from "../src/config/config"

test.describe("Contact-US Functionality",()=>
{
    let pageManager:PageManager;
    let contactUsPage:ContactUsPage;
   
    test.beforeEach(async ({page})=>
    {
        pageManager=new PageManager(page);
        contactUsPage=new ContactUsPage(pageManager);
        await contactUsPage.navigate(config.baseUrl+"/Contact-Us/contactus.html");

    });

    test("Fill Conatct Us Deatils ",async()=>
    {
        await contactUsPage.enterFirstName(config.firstName);
        await contactUsPage.enterlastName(config.lastName)
        await contactUsPage.enterEmailAddress(config.email);
        await contactUsPage.enterComment(config.comment);
        await contactUsPage.clickOnSubmitButton();
    })
})
