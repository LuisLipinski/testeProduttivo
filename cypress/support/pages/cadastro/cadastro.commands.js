

const eleCadastro = require('./cadastro.elements').elementsCadastro



Cypress.Commands.add('clicarBtnIniciarTeste', () => {
    cy.xpath(eleCadastro.btn_iniciar_teste).click()

})

Cypress.Commands.add('validarMensagemCampoObrigatorio', () => {
    cy.xpath(eleCadastro.txt_campo_obrigatorio).each(($el) => {
        cy.wrap($el).contains('Campo Obrigatório')
    })
})

Cypress.Commands.add('preencherCadastro', () => {
    cy.xpath(eleCadastro.inpt_email_empresa).type('empresaluis@gmail.com')
    cy.xpath(eleCadastro.inpt_nome).type('Luis Henrique')
    cy.xpath(eleCadastro.inpt_sobrenome).type('Lipinski')
    cy.xpath(eleCadastro.inpt_nome_empresa).type('new empresa')
    cy.xpath(eleCadastro.inpt_ddd).type('41')
    cy.xpath(eleCadastro.inpt_telefone).type('999999999')
    cy.xpath(eleCadastro.inpt_password).type('teste123')
})

Cypress.Commands.add('validarProximaPagina', () => {
    cy.url().should('be.equal', 'https://app.produttivo.com.br/accounts/initial_setup')
})