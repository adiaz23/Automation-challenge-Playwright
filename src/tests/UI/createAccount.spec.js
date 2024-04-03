import {test, expect} from "@playwright/test";
import Navbar from "../../pages/navbar.js";
import Login from "../../pages/login.js";
import CreateAccount from "../../pages/createAccount.js";

test.describe("Create Account Tests", async() =>{
	let createAccountPage;
	let login;
	let navbar;

	test.beforeEach(async({ page })=>{
		navbar = new Navbar(page);
		login = new Login(page);
		createAccountPage = new CreateAccount(page);
		navbar.goToLoginPage();
		login.goToAccountPage();
	});

	test("Create account", async() => {
		await createAccountPage.createAccount();
		await expect(createAccountPage.accountCreatedTitle).toHaveText("Your Account Has Been Created!");
	});

	test("Create  with a used username", async() => {
		await createAccountPage.createAccount(true);
		await expect(createAccountPage.errorMessageLoginNameField).toHaveText("This login name is not available. Try different login name!");
	});
});