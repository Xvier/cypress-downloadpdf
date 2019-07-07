/* eslint-disable no-undef */
export function command() {
    Cypress.Commands.add('downloadPdf', (url, dir, fileName) => {
        return cy.getCookies().then(cookies => {
            return cy.task('downloadPdf', { url: url, directory: dir, cookies: cookies, fileName: fileName });
        });
    })
}

