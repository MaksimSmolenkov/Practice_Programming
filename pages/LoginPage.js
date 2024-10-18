class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = '#user-name';
        this.passwordInput = '#password';
        this.loginButton = '#login-button';
        this.errorMessageSelector = '.error-message-container'; 
    }
    
    
    async goTo() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username, password) {
        await this.page.fill(this.usernameInput, username);
        await this.page.fill(this.passwordInput, password);
        await this.page.click(this.loginButton);
    }

    async getErrorMessage() {
        await this.page.waitForSelector(this.errorMessageSelector);
        return await this.page.textContent(this.errorMessageSelector);
    }
}

module.exports = LoginPage;
