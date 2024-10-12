const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');
const ProductsPage = require('../pages/ProductsPage');
const CartPage = require('../pages/CartPage');

test('Удаление товара из корзины', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productsPage = new ProductsPage(page);
    const cartPage = new CartPage(page);

    await page.goto('https://www.saucedemo.com/');

    await loginPage.login('standard_user', 'secret_sauce');

    await productsPage.addProductToCart(1);

    await productsPage.goToCart();

    // Проверка, что товар добавлен в корзину
    const cartItemCount = await page.locator('.cart_quantity').innerText();
    expect(cartItemCount).toBe('1'); 

    // Удаление товара из корзины
    await cartPage.removeProduct();

    // Проверка, что корзина пуста
    const emptyCartMessage = await cartPage.isCartEmpty();
    expect(emptyCartMessage).toBeTruthy();
});
