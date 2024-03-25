import Common from "../utils/common.js";

export default class Cart extends Common {
    /**
   	* @param {import('@playwright/test').Page} page
   	*/
    constructor(page){
        super(page);
        this.subtotal = page.locator("#totals_table tr:nth-child(1) td:nth-child(2)");
    }
}