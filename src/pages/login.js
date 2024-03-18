import Common from "../utils/common.js";

export default class Login extends Common {
    /**
   	* @param {import('@playwright/test').Page} page
   	*/
    constructor(page){
        super(page)
        //Selectors
        this.loginNameField = page.locator("#loginFrm_loginname");
        this.passwordField = page.locator("#loginFrm_password");
        this.loginBtn = page.locator("button[title='Login']");
        this.forgotPasswordBtn = page.locator("a[href*='forgotten/password']");
        this.continueNewUserBtn = page.locator("button[title='Continue']");
    }

    /**
	 * @param {string} username the username to login
	 * @param {string} password the password to login
	 */
	async login(username, password){
		await super.setInputValue(this.loginNameField, username);
		await super.setInputValue(this.passwordField, password);
		await super.clickElement(this.loginBtn);
	}

	async goToResetPasswordPage(){
		await super.clickElement(this.forgotPasswordBtn);
	}

    async goToAccountPage(){
        await super.clickElement(this.continueNewUserBtn);
    }
}