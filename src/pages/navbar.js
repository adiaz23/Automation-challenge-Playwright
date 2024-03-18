import Common from "../utils/common.js";

export default class Navbar extends Common {
    /**
   	* @param {import('@playwright/test').Page} page
   	*/
    constructor(page){
        super(page)
        //Selectors
        this.loginOrRegisterBtn = page.locator("#customer_menu_top a[href*='login']");
        this.welcomeMessage = page.locator("div[class*='menu_text']");
    }

    async goToHomePage(){
        await super.goTo("/");
    }

    async goToLoginPage(){
        await this.goToHomePage();
        await super.clickElement(this.loginOrRegisterBtn);
    }
}