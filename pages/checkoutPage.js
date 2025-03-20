export class CheckoutPage {
    constructor(page) {
        this.page = page;
        this.firstName = '#first-name';
        this.lastName = '#last-name';
        this.postalCode = '#postal-code';
        this.continueButton = '#continue';
        this.finishButton = '#finish';
        this.successMessage = '.complete-header';
    }

    async fillCheckoutDetails(first, last, zip) {
        await this.page.fill(this.firstName, first);
        await this.page.fill(this.lastName, last);
        await this.page.fill(this.postalCode, zip);
        await this.page.click(this.continueButton);
    }

    async completeOrder() {
        await this.page.click(this.finishButton);
    }

    async isOrderSuccessful() {
        return this.page.locator(this.successMessage).isVisible();
    }
}
