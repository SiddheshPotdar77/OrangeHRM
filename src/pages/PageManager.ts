import { Page } from "@playwright/test";
import { BasePage } from "./BasePage";
import { HomePage } from "./HomePage";
import { ContactUsPage } from "./Contact-usPage"
import { LoginPage } from "./LoginPage";
import {ButtonPage} from "./ButtonPage";

export class PageManager {
  private currentPage: Page;

  constructor(page: Page) {
    this.currentPage = page;
  }

  get page(): Page {
    return this.currentPage;
  }

  set page(newPage: Page) {
    this.currentPage = newPage;
  }

  createBasePage(): BasePage {
    return new BasePage(this);
  }

  createHomePage(): HomePage {
    return new HomePage(this);
  }

  createContactUsPage(): ContactUsPage {
    return new ContactUsPage(this);
  }

  createButtonPage(): ButtonPage {
    return new ButtonPage(this);
  }

  createLoginePage(): LoginPage {
    return new LoginPage(this);
  }
}