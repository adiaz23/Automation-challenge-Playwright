import Common from "../utils/common.js";

export default class TshirtPDP extends Common {
    
    constructor(page){
        super(page);
        this.productName = page.locator("h1");
        this.addToCartBtn = page.locator("[class='cart']");
        this.productPrice = page.locator("[class*='productfilneprice']");
    }

    async addProductToCart(){
        await super.clickElement(this.addToCartBtn);
    }

    async getProductPrice(){
        return await super.getElementText(this.productPrice);
    }
}