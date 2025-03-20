export class HomePage {
    constructor(page) {
        this.page = page;
        this.productList = '.inventory_item';
        this.cartButton = '.shopping_cart_link';
    }

    async addProductToCart(productName) {
        const productList = await this.page.$$(this.productList);
        
        for (const product of productList) {
            const text = await product.textContent();
            if (text.includes(productName)) {
                const addToCartButton = await product.$('button');
                if (addToCartButton) {
                    await addToCartButton.click();
                    break;
                }
            }
        }
    }

    async goToCart() {
        await this.page.click(this.cartButton);
    }

    async getProductNames() {
        return await this.page.locator(this.productList).allInnerTexts();
    }
}
