import {test, expect} from "@playwright/test";
import Login from "../pages/login.js";
import Navbar from "../pages/navbar.js";

test.describe("Login Tests", async() => {
    let loginPage;
    let navbar;
	let username = process.env.USERNAME;
	let password = process.env.PASSWORD;

	test.beforeEach(async ({ page }) => {
		loginPage = new Login(page);
		navbar = new Navbar(page);
		await navbar.goToLoginPage();
	});

    test("Login with valid credentials", async() => {
        await loginPage.login(username, password);
        expect(navbar.welcomeMessage).toContainText("Welcome back Arianna")
    });
});