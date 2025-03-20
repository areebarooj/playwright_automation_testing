import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { HomePage } from '../pages/homePage.js';
import { CartPage } from '../pages/cartPage.js';
import { CheckoutPage } from '../pages/checkoutPage.js';

test('User places an order and checks out successfully', async ({ page }) => {
    // Step 1: Login
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login('standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    
    await page.waitForTimeout(1000); 

    // Step 2: Add a specific product to cart
    const homePage = new HomePage(page);
    const productName = 'Sauce Labs Backpack';
    await homePage.addProductToCart(productName);
    
    await page.waitForTimeout(1000); 
    
    await homePage.goToCart();

    // Step 3: Verify product is in cart
    const cartPage = new CartPage(page);
    await page.waitForTimeout(1000); 
    const isProductInCart = await cartPage.checkProductInCart(productName);
    expect(isProductInCart).toBeTruthy();

    // Step 4: Proceed to checkout
    await cartPage.checkout();
    await page.waitForTimeout(1000);
    // Step 5: Fill checkout details and complete order
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.fillCheckoutDetails('Areeba', 'Arooj', '12345');
    
    await page.waitForTimeout(1000);
    
    await checkoutPage.completeOrder();

    // Step 6: Verify order confirmation message
    await page.waitForTimeout(1000); 
    await expect(page.locator(checkoutPage.successMessage)).toHaveText('Thank you for your order!');
});
