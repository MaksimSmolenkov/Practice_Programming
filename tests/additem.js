const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test('test', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);;
    
    await page.goto('https://www.saucedemo.com/');
    
    await page.fill('#user-name', 'standard_user');
    await page.fill('#password', 'secret_sauce');
    
    await page.click('#login-button');
    
    // Добавляем первый товар в корзину
    await page.click('.btn_inventory'); // Кнопка "Добавить в корзину" для первого товара
    
    // Проверяем, что товар добавлен в корзину
    const cartCount = await page.locator('.shopping_cart_badge').innerText();

    await browser.close();
})();
