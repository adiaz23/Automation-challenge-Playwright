import {test,expect} from "@playwright/test";
import Cart from "../../pages/cart.js";
import TshirtGallery from "../../pages/tshirtGallery.js";
import TshirtPDP from "../../pages/tshirtPdp.js";

test.describe("T-Shirt Gallery tests", async()=>{
	let cartPage;
	let tshirtGalleryPage;
	let tshirtPdp;
    
	test.beforeEach(async({page})=>{
		cartPage = new Cart(page);
		tshirtGalleryPage = new TshirtGallery(page);
		tshirtPdp = new TshirtPDP(page);
		await tshirtGalleryPage.goToTshirtGallery();
	});

	test("Go to a T-Shirt product detail page", async()=>{
		let firstProductName = await tshirtGalleryPage.getFirstProductName();
		await tshirtGalleryPage.goToTheFirstProduct();
		await expect(tshirtPdp.productName).toHaveText(firstProductName);
	});

	test("Add a TShirt to the cart", async()=>{
		await tshirtGalleryPage.goToFirstProductWithStock();
		let price = (await tshirtPdp.getProductPrice()).trim();
		await tshirtPdp.addProductToCart();
		await expect(cartPage.subtotal).toHaveText(price);
	});
});