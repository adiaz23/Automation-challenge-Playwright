import Common from "../utils/common.js";

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
        this.accountCreatedTitle = page.locator("h1");
    }
}