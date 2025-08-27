/// <reference types="cypress" />

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../pages/login.page.js"

Given('je visite le lien {string}', (url) => {
    cy.visit(url)
})

When('je saisi username dans le champs username {string}', (username) => {
    LoginPage.setUsername(username)
})

When('je saisi password dans le champs Password {string}', (password) => {
    LoginPage.setPassword(password)
})

Then('je click sur le bouton login', () => {
    LoginPage.clickButtonLogin()
})

Then('je suis redirige vers la page Dashboard {string}', (expectedUrl) => {
    cy.url().should('eq', expectedUrl)
})

Then('le message derreur saffiche {string}', (errorMessage) => {
    LoginPage.isDisplayedError(errorMessage)
})
