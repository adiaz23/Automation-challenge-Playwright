import Common from "../utils/common.js";

export default class Cart extends Common {
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.subtotal = page.locator("#totals_table tr:nth-child(1) td:nth-child(2)");
		this.removeBtn = page.locator("a[href*='remove']");
		this.emptyCartMessage = page.locator("[class*='contentpanel']");
	}

	async removeProduct(){
		await super.clickElement(this.removeBtn);
	}

	async getEmptyCartMessage(){
		return await super.getElementText(this.emptyCartMessage);
	}
}