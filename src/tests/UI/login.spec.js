import {test, expect} from "@playwright/test";
import Login from "../../pages/login.js";
import Navbar from "../../pages/navbar.js";
import ForgotPassword from "../../pages/forgotPassword.js";

test.describe("Login Tests", async() => {
	let forgotPasswordPage;
	let loginPage;
	let navbar;
	// eslint-disable-next-line no-undef
	let username = process.env.USERNAME;
	// eslint-disable-next-line no-undef
	let password = process.env.PASSWORD;

	test.beforeEach(async ({ page }) => {
		forgotPasswordPage = new ForgotPassword(page);
		loginPage = new Login(page);
		navbar = new Navbar(page);
		await navbar.goToLoginPage();
	});

	test("Login with valid credentials", async() => {
		await loginPage.login(username, password);
		await expect(navbar.welcomeMessage).toContainText("Welcome back Arianna");
	});

	test("Login with invalid credentials", async() =>{
		await loginPage.login("testInvalid2", "testInvalid32");
		await expect(loginPage.errorMessageModal).toContainText("Error: Incorrect login or password provided.");
	});

	test("Go to the Forgot Password page", async() =>{
		await loginPage.goToForgotPasswordPage();
		await expect(forgotPasswordPage.forgotPasswordTitle).toContainText("Forgot Your Password?");
	});

	test("Log out", async()=>{
		await loginPage.login(username, password);
		await navbar.logout();
		await expect(navbar.logoutTitle).toContainText("Account Logout");
	});
});