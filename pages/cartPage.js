export class CartPage { 
    constructor(page) {
        this.page = page;
        this.checkoutButton = '[data-test="checkout"]';
        this.noOfProducts = '.cart_item'; 
    }

    async checkout() {
        await this.page.click(this.checkoutButton);
    }

    async checkProductInCart(productName) {
        const products = await this.page.$$(this.noOfProducts);
    
        for (const product of products) {
            const text = (await product.textContent())?.trim().toLowerCase();
            console.log(`Cart contains: "${text}"`); 
            if (text && text.includes(productName.toLowerCase())) {
                return true;
            }
        }
        return false;
    }
    
    
}
