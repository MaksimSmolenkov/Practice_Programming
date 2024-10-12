class CartPage {
    constructor(page) {
        this.page = page;
        this.removeButton = '.cart_item .btn_secondary';
        this.cartFooter = '.cart_footer';
    }

    async removeProduct() {
        await this.page.click(this.removeButton);
    }

    async isCartEmpty() {
        return await this.page.isVisible(this.cartFooter);
    }
}

module.exports = CartPage;
