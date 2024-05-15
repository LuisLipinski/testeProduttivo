

beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.produttivo.com.br/cadastro/')
    
})

describe('Validar tela de cadastro', () => {
    it('validar campos obrigatórios', () => {
        cy.clicarBtnIniciarTeste()
        cy.validarMensagemCampoObrigatorio()
    })

    it('fazer cadastro de teste gratis no produtivo', () => {
        cy.preencherCadastro()
        cy.clicarBtnIniciarTeste()
        cy.validarProximaPagina()

    })
})