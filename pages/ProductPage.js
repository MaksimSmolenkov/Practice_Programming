class ProductPage {
    constructor(page) {
        this.page = page;
        this.addToCartButtons = '.inventory_item:first-of-type button'; 
        this.cartButton = '#shopping_cart_link'; 
        this.cart_badge  = '#shopping_cart_badge';
    }

    async addProductToCart(productIndex) {
        
        await this.page.click(this.addToCartButtons);
    }

    async getCartCount() {
        return this.page.innerText(this.cart_badge) 
    }

    async goToCart() {
        await this.page.click(this.cartButton);
    }
}

module.exports = ProductPage;