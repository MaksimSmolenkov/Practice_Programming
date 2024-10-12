const { chromium } = require('playwright');
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test('Login and add product to cart', async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    productsPage = new ProductsPage(page);
    cartPage = new CartPage(page);
    
    await page.goto('https://www.saucedemo.com/');
    
    await loginPage.login('standard_user', 'secret_sauce');
    
    // Добавляем первый товар в корзину
    await productsPage.addProductToCart(1); // Кнопка "Добавить в корзину" для первого товара
    
    // Проверяем, что товар добавлен в корзину
    const cartCount = await cartPage.getCartCount();
    expect(cartCount).toBe('1');

    await browser.close();
})();
