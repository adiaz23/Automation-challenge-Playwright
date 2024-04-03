import {test,expect} from "@playwright/test";
import Cart from "../../pages/cart.js";
import TshirtGallery from "../../pages/tshirtGallery.js";
import TshirtPDP from "../../pages/tshirtPdp.js";

test.describe("Cart Tests", async()=>{
	let cartPage;
	let tshirtGalleryPage;
	let tshirtPdp;

	test.beforeEach(async({page})=>{
		cartPage = new Cart(page);
		tshirtGalleryPage = new TshirtGallery(page);
		tshirtPdp = new TshirtPDP(page);
		await tshirtGalleryPage.goToTshirtGallery();
	});

	test("Remove product from cart", async()=>{
		await tshirtGalleryPage.goToFirstProductWithStock();    
		await tshirtPdp.addProductToCart();
		await cartPage.removeProduct();
		expect(await cartPage.getEmptyCartMessage()).toContain("Your shopping cart is empty!");
	});
});