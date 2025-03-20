import { test, expect } from '@playwright/test';
import {LoginPage} from '../pages/loginPage.js'; 

test('User logs in to the system', async ({ page }) => {
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');
    await page.waitForTimeout(3000);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});
