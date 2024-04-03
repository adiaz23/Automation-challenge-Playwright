import Common from "../utils/common.js";

export default class TshirtGallery extends Common{
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.title = page.locator("h1");
		this.firstProductName = page.locator("div:nth-child(1) > div.fixed_wrapper div a");
		this.firstProduct = page.locator(".thumbnails.grid.row.list-inline div:nth-child(1) .thumbnail a img");
		this.addToCartBtn = page.locator("[title='Add to Cart']").nth(0);
	}

	async goToTshirtGallery(){
		await super.goTo("index.php?rt=product/category&path=68_70");
	}

	async goToTheFirstProduct(){
		await super.clickElement(this.firstProduct);
	}

	async getFirstProductName(){
		return await super.getElementAttribute(this.firstProductName, "title");
	}

	async goToFirstProductWithStock(){
		await super.clickElement(this.addToCartBtn);
	}
}