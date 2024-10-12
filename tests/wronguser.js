const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test('Login with wrong credentials', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login('wrong_user', 'wrong_password');
    
    const errorMessage = await loginPage.getErrorMessage();
    expect(errorMessage).toContain('.Epic sadface: Username and password do not match any user in this service.');


    await browser.close();
})();
