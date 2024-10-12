class ProductsPage {
    constructor(page) {
        this.page = page;
        this.addToCartButton = '.btn_inventory';
        this.cartLink = '.shopping_cart_link';
    }

    async addProductToCart(index) {
        await this.page.click(any.inventory_item,nth-child($,{index}), $,{this:addToCartButton});
    }

    async goToCart() {
        await this.page.click(this.cartLink);
    }
}

module.exports = ProductsPage;