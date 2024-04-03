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

	/**
	 * @param {page.locator} locator the element selector
	 */
	async hoverElement(locator){
		await locator.hover();
	}

	/**
	 * @param {page.locator} locator the element selector
	 * @param {string} option name of the list option for the <select> element
	 */
	async selectOption(locator, option){
		await locator.selectOption(option);
	}

	/**
	 * @param {page.locator} locator the element selector
	 */
	async checkElement(locator){
		await locator.check();
	}

	/**
	 * @param {page.locator} locator the element selector
	 */
	async getElementText(locator){
		return await locator.innerText();
	}

	/**
	 * @param {page.locator} locator the element selector
	 * @param {string} attribute the attribute's name to get the value from
	 */
	async getElementAttribute(locator, attribute){
		return await locator.getAttribute(attribute);
	}
}