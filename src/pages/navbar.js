import Common from "../utils/common.js";

export default class Navbar extends Common {
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.loginOrRegisterBtn = page.locator("#customer_menu_top a[href*='login']");
		this.welcomeMessage = page.locator("div[class*='menu_text']");
		this.logoutBtn = page.locator("#customer_menu_top [href*='logout']");
		this.logoutTitle = page.locator("h1");
		this.apparelAccesoryBtn = page.locator("a[href='https://automationteststore.com/index.php?rt=product/category&path=68']");
		this.tshirtBtn = page.locator("a[href*='70']");
	}

	async goToHomePage(){
		await super.goTo("/");
	}

	async goToLoginPage(){
		await this.goToHomePage();
		await super.clickElement(this.loginOrRegisterBtn);
	}

	async openUserMenu(){
		await super.hoverElement(this.welcomeMessage);
	}

	async logout(){
		await this.openUserMenu();
		await super.clickElement(this.logoutBtn);
	}

	async openApparelAndAccessoryMenu(){
		await super.hoverElement(this.apparelAccesoryBtn);
	}

	async goToTShirtGallery(){
		await this.openApparelAndAccessoryMenu();
		await super.clickElement(this.tshirtBtn);
	}
}