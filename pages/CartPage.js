class CartPage {
    constructor(page) {
        this.page = page;
        this.removeButton = '.cart_item .btn_secondary';
        this.cartFooter = '.cart_footer';
        this.cartItemsSelector = '.cart_item'; // Селектор для элементов в корзине
        this.addToCartButtonSelector = '.btn_inventory'; // Селектор для кнопки "Добавить в корзину"
    
    }

    async removeProduct() {
        await this.page.click(this.removeButton);
    }

    async addProductToCart(productIndex) {
        
            await addToCartButtons[productIndex].click();
        
    }

    async getCartCount() {
        
            const cartItems = await this.page.$$(this.cartItemsSelector);
            return cartItems.length; 
        
         
    }

    async isCartEmpty() {
        return await this.page.isVisible(this.cartFooter);
    }
}

module.exports = CartPage;
