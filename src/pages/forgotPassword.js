import Common from "../utils/common.js";

export default class ForgotPassword extends Common{
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.forgotPasswordTitle = page.locator("[class='heading1']");
	}
}