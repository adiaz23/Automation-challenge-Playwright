import Common from "../utils/common.js";

export default class TshirtPDP extends Common {
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.productName = page.locator("h1");
		this.addToCartBtn = page.locator("[class='cart']");
		this.productPrice = page.locator("[class*='productfilneprice']");
	}

	async addProductToCart(){
		await super.clickElement(this.addToCartBtn);
	}

	async getProductPrice(){
		return await super.getElementText(this.productPrice);
	}
}