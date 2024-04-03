import Common from "../utils/common.js";
import user from "../data/userData.js";
// eslint-disable-next-line no-undef
let loginName = process.env.USERNAME;

export default class CreateAccount extends Common {
	/**
   	* @param {import('@playwright/test').Page} page
   	*/
	constructor(page){
		super(page);
		//Selectors
		this.firstNameField = page.locator("#AccountFrm_firstname");
		this.lastNameField = page.locator("#AccountFrm_lastname");
		this.emailField = page.locator("#AccountFrm_email");
		this.addressField = page.locator("#AccountFrm_address_1");
		this.cityField = page.locator("#AccountFrm_city");
		this.regionStateDropdown = page.locator("#AccountFrm_zone_id");
		this.zipcodeField = page.locator("#AccountFrm_postcode");
		this.countryDropdown = page.locator("#AccountFrm_country_id");
		this.loginNameField = page.locator("#AccountFrm_loginname");
		this.passwordField = page.locator("#AccountFrm_password");
		this.confirmPasswordField = page.locator("#AccountFrm_confirm");
		this.noSuscribeOption =  page.locator("#AccountFrm_newsletter0");
		this.agreePrivacyPolicyChekbox = page.locator("#AccountFrm_agree");
		this.continueBtn = page.locator("button[title='Continue']");
		this.accountCreatedTitle = page.locator("h1 span").nth(0);
		this.errorMessageLoginNameField = page.locator("div[class*='form-group has-error'] span[class*='help-block']");
	}

	/**
     * @param {boolean} isCreated create a user with an used username
     */
	async createAccount(isCreated){
		let loginNameInfo = user["login-name"];
		if(isCreated === true)
			loginNameInfo = loginName;
		await super.setInputValue(this.firstNameField, user.firstname);
		await super.setInputValue(this.lastNameField, user.lastname);
		await super.setInputValue(this.emailField, user.email);
		await super.setInputValue(this.addressField, user.address);
		await super.setInputValue(this.cityField, user.city);
		await super.selectOption(this.countryDropdown, "United States");
		await super.setInputValue(this.zipcodeField, user.zipcode);
		await super.selectOption(this.regionStateDropdown, "Arkansas");
		await super.setInputValue(this.loginNameField, loginNameInfo);
		await super.setInputValue(this.passwordField, user.password);
		await super.setInputValue(this.confirmPasswordField, user.password);
		await super.checkElement(this.noSuscribeOption);
		await super.checkElement(this.agreePrivacyPolicyChekbox);
		await super.clickElement(this.continueBtn);
	}
}