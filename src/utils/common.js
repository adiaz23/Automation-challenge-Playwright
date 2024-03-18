export default class Common {

	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		this.page = page;
	}

	/**
     * @param {string} url the url of the page to go 
     */
	async goTo(url){
		await this.page.goto(url);
	}

	/**
	 * @param {page.locator} locator the element selector
	 * @param {string} value the value to be set on the element
	 */
	async setInputValue(locator, value){
		await locator.fill(value);
	}

	/**
	 * @param {page.locator} locator the element selector
	 */
	async clickElement(locator){
		await locator.click();
	}
}