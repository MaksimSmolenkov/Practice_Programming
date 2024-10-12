const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test('test1', async () => {
    browser = await chromium.launch();
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    
    await LoginPage.fill('#user-name', 'wrong_user');
    await page.fill('#password', 'wrong_password');
    
    await page.click('#login-button');
    
    // Проверяем наличие сообщения об ошибке
    const errorMessage = await page.locator('.Epic sadface: Username and password do not match any user in this service.').innerText();

    await browser.close();
})();
