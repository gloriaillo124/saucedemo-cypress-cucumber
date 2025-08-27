class LoginPage {
    elements = {
        username: () => cy.get("#user-name"),
        password: () => cy.get("#password"),
        loginButton: () => cy.get("#login-button"),
        errorMsg: () => cy.get('[data-test="error"]')
    }

    setUsername(username) {
        this.elements.username().type(username)
    }

    setPassword(password) {
        this.elements.password().clear().type(password)
    }

    clickButtonLogin() {
        this.elements.loginButton().click()
    }

    isDisplayedError(message) {
        this.elements.errorMsg().should('have.text', message)
    }
}
export default new LoginPage();
