const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductPage = require('../pages/ProductPage');
const CartPage = require('../pages/CartPage');

test('User cant log in', async () => {
    let browser;
    let page;
    let loginPage;
    let productPage;
    let cartPage;

    browser = await chromium.launch();
        page = await browser.newPage();
        loginPage = new LoginPage(page);
        productPage = new ProductPage(page);
        cartPage = new CartPage(page);
        
        await loginPage.goTo();
        await loginPage.login('invalid_user', 'wrong_password');
    
        const errorMessage = await loginPage.getErrorMessage();
        expect(errorMessage).toBe('Epic sadface: Username and password do not match any user in this service');
});
