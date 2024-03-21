import Common from "../utils/common.js";

export default class TshirtGallery extends Common{
    
    /**
   	* @param {import('@playwright/test').Page} page
   	*/
    constructor(page){
        super(page);
        this.title = page.locator("h1");
    }
}