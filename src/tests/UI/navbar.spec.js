import {test, expect} from "@playwright/test";
import Navbar from "../../pages/navbar.js";
import TshirtGallery from "../../pages/tshirtGallery.js";

test.describe("Navbar tests", async()=>{
	let navbar;
	let tshirtGallery;
    
	test.beforeEach(async({page})=>{
		navbar = new Navbar(page);
		tshirtGallery = new TshirtGallery(page);
		await navbar.goToHomePage();
	});

	test("Go to the T-Shirts Gallery", async()=>{
		await navbar.goToTShirtGallery();
		await expect(tshirtGallery.title).toHaveText("T-shirts");
	});
});